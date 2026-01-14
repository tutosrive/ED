import React, { useState, useMemo, useEffect, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
// Categories are now inferred from repo `src/` structure (dynamic)
// import { categories } from '../data/codeFiles'
import Icons from '../components/Icons'
import './Playground.css'
import fileService from '../services/fileService'

function Playground() {
  const { t } = useTranslation()
  const [files, setFiles] = useState([])
  const [fileContents, setFileContents] = useState({}) // id -> { content, description }
  const [selectedFile, setSelectedFile] = useState(null)
  const [openFolders, setOpenFolders] = useState([])
  const [loadingList, setLoadingList] = useState(false)
  const [loadingFile, setLoadingFile] = useState(false)
  const [error, setError] = useState(null)

  // Load list of files from remote repo on mount
  const handleListUpdate = (newList) => {
    const newMap = newList.reduce((acc, f) => { acc[f.id] = f; return acc }, {})
    setFiles(newList)

    // Invalidate cache for files removed or changed (compare sha)
    setFileContents(prev => {
      const next = { ...prev }
      Object.keys(prev).forEach(id => {
        if (!newMap[id]) {
          delete next[id]
        } else {
          const prevSha = prev[id].sha || null
          const newSha = newMap[id].sha || null
          if (prevSha && newSha && prevSha !== newSha) {
            delete next[id]
          }
        }
      })
      return next
    })

    // If selected file is missing, pick the first and open its group
    if (!selectedFile || !newMap[selectedFile]) {
      if (newList.length) {
        setSelectedFile(newList[0].id)
        // open the top-level group for visibility
        const firstGroup = newList[0].group || 'root'
        setOpenFolders([firstGroup])
      }
    }
  }

  useEffect(() => {
    let mounted = true
    setLoadingList(true)
    setError(null)
    fileService.listFiles()
      .then(list => {
        if (!mounted) return
        handleListUpdate(list)
      })
      .catch(err => setError(err.message))
      .finally(() => setLoadingList(false))
    return () => { mounted = false }
  }, [])

  // Load content lazily when selectedFile changes
  useEffect(() => {
    if (!selectedFile) return
    const existing = fileContents[selectedFile]
    if (existing && existing.content) return

    const fileMeta = files.find(f => f.id === selectedFile)
    if (!fileMeta) return

    let mounted = true
    setLoadingFile(true)
    fileService.getFile(selectedFile, fileMeta.path)
      .then(data => {
        if (!mounted) return
        // attach sha so we can detect changes later
        setFileContents(prev => ({ ...prev, [selectedFile]: { ...data, sha: fileMeta.sha } }))
      })
      .catch(err => setError(err.message))
      .finally(() => setLoadingFile(false))

    return () => { mounted = false }
  }, [selectedFile, files])

  // Auto-refresh file list every 2 minutes (keeps UI updated when remote repo changes)
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const list = await fileService.listFiles()
        handleListUpdate(list)
        setError(null)
      } catch (e) {
        // surface a friendly message but don't throw
        setError(e.message)
      }
    }, 120000)
    return () => clearInterval(interval)
  }, [])

  // Build a dynamic folder tree mirroring the exact structure under `src/`
  const tree = useMemo(() => {
    const nodes = {}
    const rootFiles = []

    files.forEach(file => {
      const rel = file.rel || file.filename || file.path
      const segments = rel.split('/')

      if (segments.length === 1) {
        // top-level file
        rootFiles.push({ type: 'file', file })
        return
      }

      // insert into nested folders
      let parent = nodes
      for (let i = 0; i < segments.length - 1; i++) {
        const seg = segments[i]
        if (!parent[seg]) parent[seg] = { type: 'folder', name: seg, path: (parent.__path ? parent.__path + '/' + seg : seg), children: {} }
        // carry a __path to help building child paths
        parent[seg].__path = parent[seg].path
        parent = parent[seg].children
      }

      // add file into last folder
      const lastFolder = segments[segments.length - 2]
      if (!parent.__files) parent.__files = []
      parent.__files.push(file)
    })

    // convert nodes map to ordered list to preserve tree order
    const toList = (map) => Object.keys(map).map(k => map[k])
    return { nodes, rootFiles }
  }, [files])

  // Helpers to open parent folders when selecting a file
  const openParentFolders = (file) => {
    if (!file || !file.rel) return
    const segments = file.rel.split('/')
    const folderPaths = []
    let path = ''
    for (let i = 0; i < segments.length - 1; i++) {
      path = i === 0 ? segments[i] : `${path}/${segments[i]}`
      folderPaths.push(path)
    }
    setOpenFolders(prev => Array.from(new Set([...prev, ...folderPaths])))
  }

  const currentFileMeta = files.find(f => f.id === selectedFile) || {}
  const currentFileContentObj = fileContents[selectedFile] || {}
  const currentContent = currentFileContentObj.content || ''
  const currentDescription = currentFileContentObj.description || currentFileMeta.description || ''
  const isNotebook = currentFileContentObj.isNotebook || (currentFileMeta.filename || '').toLowerCase().endsWith('.ipynb')

  const detectLanguage = (filename) => {
    const fn = (filename || '').toLowerCase()
    if (fn.endsWith('.py') || fn.endsWith('.ipynb')) return 'python'
    if (fn.endsWith('.js') || fn.endsWith('.jsx')) return 'javascript'
    if (fn.endsWith('.css')) return 'css'
    if (fn.endsWith('.html') || fn.endsWith('.htm')) return 'html'
    return 'text'
  }

  const language = detectLanguage(currentFileMeta.filename)


  const handleFileSelect = (fileId) => setSelectedFile(fileId)

  const toggleFolder = (categoryId) => {
    setOpenFolders(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const getCategoryIcon = (catId) => {
    switch (catId) {
      case 'workshop': return Icons.workshop
      case 'teacher': return Icons.teacher
      case 'homework': return Icons.homework
      default: return Icons.folder
    }
  }


  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props)
      this.state = { hasError: false, error: null }
    }
    static getDerivedStateFromError(error) {
      return { hasError: true, error }
    }
    componentDidCatch(error, info) {
      console.error('ErrorBoundary caught:', error, info)
    }
    render() {
      if (this.state.hasError) {
        return (
          <div className="content-section">
            <div className="content-card glass-card">
              <h3>Error</h3>
              <p>Ocurrió un error al renderizar el Playground: {String(this.state.error)}</p>
            </div>
          </div>
        )
      }
      return this.props.children
    }
  }

  return (
    <ErrorBoundary>
      <section className="page-header">
        <h1>{Icons.code} {t('playground.title')}</h1>
        <p>{t('playground.subtitle')}</p>
      </section>

      <section className="playground-container">
        <div className="playground-layout">
          <aside className="sidebar">
            <div className="sidebar-card glass-card">
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem'}}>
                <h3 className="sidebar-title">{Icons.folder} {t('playground.files')}</h3>
                <div>
                  <button className="btn small" onClick={async () => {
                    setLoadingList(true); setError(null)
                    try {
                      const list = await fileService.listFiles()
                      handleListUpdate(list)
                    } catch (e) { setError(e.message) }
                    setLoadingList(false)
                  }}>{t('playground.refresh') || 'Refresh'}</button>
                </div>
              </div>

              {loadingList ? (
                <div className="loading">{t('playground.loadingFiles') || 'Cargando archivos...'}</div>
              ) : (
                <ul className="file-tree">
                  {/* Render top-level files (files directly in src/) */}
                  {tree.rootFiles.map(({ file }) => (
                    <li key={file.id}>
                      <button
                        className={`file-btn ${selectedFile === file.id ? 'active' : ''}`}
                        onClick={() => { handleFileSelect(file.id); openParentFolders(file) }}
                      >
                        <span className="python-icon">{Icons.python}</span> {file.filename}
                      </button>
                    </li>
                  ))}

                  {/* Render folders recursively */}
                  {Object.keys(tree.nodes).map(folderName => {
                    const folderNode = tree.nodes[folderName]
                    const fid = folderNode.path
                    const isOpen = openFolders.includes(fid)

                    const renderFolder = (node) => {
                      const fid = node.path
                      const isOpen = openFolders.includes(fid)
                      return (
                        <li key={fid}>
                          <button
                            className={`folder-toggle ${isOpen ? 'open' : ''}`}
                            onClick={() => toggleFolder(fid)}
                          >
                            <span className="chevron">{Icons.chevronDown}</span>
                            <span className="folder-icon">{Icons.folder}</span>
                            {node.name}
                          </button>
                          <ul className={`folder-contents ${isOpen ? 'open' : ''}`}>
                            {/* child folders */}
                            {Object.keys(node.children).filter(k => k !== '__files').map(k => renderFolder(node.children[k]))}

                            {/* files in this folder */}
                            {(node.children.__files || []).map(f => (
                              <li key={f.id}>
                                <button
                                  className={`file-btn ${selectedFile === f.id ? 'active' : ''}`}
                                  onClick={() => { handleFileSelect(f.id); openParentFolders(f) }}
                                >
                                  <span className="python-icon">{Icons.python}</span> {f.filename}
                                </button>
                              </li>
                            ))}

                          </ul>
                        </li>
                      )
                    }

                    return renderFolder(folderNode)
                  })}
                </ul>
              )}

              {error && <div className="error">{error}</div>}
            </div>
          </aside>

          <div className="editor-container">
            {/* Simplified: no decorative header (user requested removal) */}

            <div className="code-viewer-wrapper">
              {loadingFile && <div className="file-loading">{t('playground.loadingFile') || 'Cargando archivo...'}</div>}
              {!loadingFile && (
                <div className="code-viewer">
                  <div className="viewer-header">
                    <div className="viewer-title">{currentFileMeta.filename || ''}</div>
                    <div className="viewer-actions">
                      <button className="btn small" onClick={() => {
                        navigator.clipboard.writeText(currentContent || '')
                      }}>{t('playground.copy') || 'Copiar'}</button>
                    </div>
                  </div>

                  {/*<SyntaxHighlighter language={language} style={vscDarkPlus} showLineNumbers wrapLongLines>
                    {currentContent || '# (archivo vacío)'}
                  </SyntaxHighlighter>*/}
                  <div id="playground">
                    <pre class="code">
                      {currentContent || '# (archivo vacío)'}
                    </pre>
                  </div>
                  <codapi-snippet sandbox={language} editor="basic" selector="#playground .code"></codapi-snippet>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
}

export default Playground
