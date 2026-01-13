// Service to fetch files from GitHub repo 'tutosrive/ED' (path: files/src)
// Uses GitHub Git Tree API to get ordered list of files (preserves tree order), and raw.githubusercontent to fetch contents.

const OWNER = 'tutosrive'
const REPO = 'ED'
const BRANCH = 'main'
const PATH_PREFIXES = ['src/']

function matchPrefix(path) {
  return PATH_PREFIXES.find(p => path.startsWith(p)) || null
}

import axios from 'axios'

async function fetchRepoTree(retries = 1) {
  const token = import.meta.env.VITE_GITHUB_TOKEN
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/git/trees/${BRANCH}?recursive=1`
  const headers = token ? { Authorization: `token ${token}` } : {}

  try {
    const res = await axios.get(url, { headers, timeout: 10000 })
    return (res.data && res.data.tree) ? res.data.tree : []
  } catch (err) {
    // Retry on transient network errors
    const transient = !err.response
    if (transient && retries > 0) {
      return fetchRepoTree(retries - 1)
    }

    if (err.code === 'ECONNABORTED') throw new Error('Request timed out while fetching repository tree')
    if (err.response) {
      const status = err.response.status
      const msg = err.response.data && err.response.data.message ? err.response.data.message : ''
      throw new Error(`Failed to fetch repo tree: ${status} ${msg}`)
    }
    throw new Error(`Network error while fetching repo tree: ${err.message}`)
  }
}

function filterFilesFromTree(tree) {
  return tree
    .filter(entry => entry.type === 'blob' && matchPrefix(entry.path))
    // preserve order from git tree as returned
    .map(entry => ({ path: entry.path, size: entry.size || 0, sha: entry.sha }))
}

function rawUrlForPath(path) {
  return `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${path}`
}

async function fetchFileContent(path, retries = 1) {
  const url = rawUrlForPath(path)
  try {
    const res = await axios.get(url, { timeout: 10000, responseType: 'text' })
    return res.data
  } catch (err) {
    const transient = !err.response
    if (transient && retries > 0) {
      return fetchFileContent(path, retries - 1)
    }
    if (err.code === 'ECONNABORTED') throw new Error(`Request timed out while fetching file: ${path}`)
    if (err.response) throw new Error(`Failed to fetch file ${path}: ${err.response.status}`)
    throw new Error(`Network error while fetching file ${path}: ${err.message}`)
  }
}

function inferCategoryFromPath(path) {
  // Determine which prefix matched and infer category from the remainder
  const prefix = matchPrefix(path)
  const rel = prefix ? path.replace(prefix, '') : path
  const segments = rel.split('/')
  if (segments.length > 1) return segments[0]
  return 'workshop'
}

function slugFromPath(path) {
  const prefix = matchPrefix(path)
  const rel = prefix ? path.replace(prefix, '') : path
  return rel.replace(/\//g, '_').replace(/\.[^/.]+$/, '')
}

function parseMetadataFromContent(content) {
  // Attempt to extract description from the first block comment or docstring.
  const lines = content.split('\n')
  // Look for a triple-quoted string at top
  const tripleQuoteMatch = content.match(/^\s*(['"]{3})([\s\S]*?)\1/)
  if (tripleQuoteMatch) {
    const txt = tripleQuoteMatch[2].trim().split('\n').slice(0, 3).join(' ')
    return { description: txt }
  }
  // Else extract leading comment lines starting with '#'
  const commentLines = []
  for (const line of lines) {
    if (line.trim().startsWith('#')) commentLines.push(line.replace(/^\s*#\s?/, ''))
    else if (commentLines.length) break
    else if (!line.trim()) continue
    else break
  }
  if (commentLines.length) {
    return { description: commentLines.slice(0, 3).join(' ') }
  }
  return { description: '' }
}

export async function listFiles() {
  const tree = await fetchRepoTree()
  const files = filterFilesFromTree(tree)
  // Build minimal metadata list preserving order and include sha
  const res = files.map(f => {
    const prefix = matchPrefix(f.path)
    const rel = prefix ? f.path.replace(prefix, '') : f.path
    const segments = rel.split('/')
    const filename = segments.pop()
    const dir = segments.length ? segments.join('/') : ''
    const group = segments.length ? segments[0] : 'root'
    return {
      id: slugFromPath(f.path),
      path: f.path,
      rel,
      filename,
      dir,
      group,
      // keep previous convenience fields
      category: inferCategoryFromPath(f.path),
      size: f.size || 0,
      sha: f.sha
    }
  })
  return res
}

export async function getFile(id, path) {
  const raw = await fetchFileContent(path)

  // If it's a Jupyter notebook, parse JSON and extract code cells
  if (path.toLowerCase().endsWith('.ipynb')) {
    try {
      const nb = JSON.parse(raw)
      const cells = nb.cells || []
      // Extract first markdown cell as description (if present)
      let description = ''
      for (const c of cells) {
        if (c.cell_type === 'markdown') {
          description = (c.source || []).join('').slice(0, 300)
          break
        }
      }
      // Concatenate all code cells into a single python script
      const codeParts = []
      for (const c of cells) {
        if (c.cell_type === 'code') {
          const src = (c.source || []).join('')
          codeParts.push(['# --- Cell ---\n', src].join(''))
        }
      }
      const content = codeParts.join('\n\n') || '# (No code cells in notebook)'
      return {
        id,
        path,
        content,
        description,
        isNotebook: true
      }
    } catch (err) {
      // Fallback: return raw content if parsing fails
      return {
        id,
        path,
        content: raw,
        description: '',
        isNotebook: true
      }
    }
  }

  // For non-notebook files, preserve previous behavior
  const meta = parseMetadataFromContent(raw)
  return {
    id,
    path,
    content: raw,
    ...meta,
    isNotebook: false
  }
}

export default { listFiles, getFile }
