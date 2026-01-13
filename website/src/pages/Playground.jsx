import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import Editor from '@monaco-editor/react'
import { codeFiles, categories } from '../data/codeFiles'
import Icons from '../components/Icons'
import './Playground.css'

function Playground() {
  const { t } = useTranslation()
  const [selectedFile, setSelectedFile] = useState('binary_search')
  const [code, setCode] = useState(codeFiles['binary_search'].code)
  const [output, setOutput] = useState(`${t('playground.welcome')}

${t('playground.instructions')}

${t('playground.explore')}`)
  const [openFolders, setOpenFolders] = useState(['workshop'])
  const [copied, setCopied] = useState(false)

  // Group files by category
  const groupedFiles = useMemo(() => {
    const groups = {}
    Object.values(codeFiles).forEach(file => {
      if (!groups[file.category]) {
        groups[file.category] = []
      }
      groups[file.category].push(file)
    })
    return groups
  }, [])

  const currentFile = codeFiles[selectedFile]

  const handleFileSelect = (fileId) => {
    setSelectedFile(fileId)
    setCode(codeFiles[fileId].code)
  }

  const toggleFolder = (categoryId) => {
    setOpenFolders(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleRun = () => {
    const timestamp = new Date().toLocaleTimeString()
    setOutput(`[${timestamp}] Ejecutando código...

[Info] Este playground es para visualización y edición del código.
[Info] Para ejecutar el código, copia el contenido y ejecútalo en:
  • Google Colab
  • Tu entorno local de Python

[✓] Código listo para copiar`)
  }

  const handleClearOutput = () => {
    setOutput('Output cleared.')
  }

  const getCategoryIcon = (catId) => {
    switch (catId) {
      case 'workshop': return Icons.workshop
      case 'teacher': return Icons.teacher
      case 'homework': return Icons.homework
      default: return Icons.folder
    }
  }

  return (
    <>
      <section className="page-header">
        <h1>{Icons.code} {t('playground.title')}</h1>
        <p>{t('playground.subtitle')}</p>
      </section>

      <section className="playground-container">
        <div className="playground-layout">
          <aside className="sidebar">
            <div className="sidebar-card glass-card">
              <h3 className="sidebar-title">{Icons.folder} {t('playground.files')}</h3>
              <ul className="file-tree">
                {Object.entries(categories).map(([catId, category]) => (
                  <li key={catId}>
                    <button 
                      className={`folder-toggle ${openFolders.includes(catId) ? 'open' : ''}`}
                      onClick={() => toggleFolder(catId)}
                    >
                      <span className="chevron">{Icons.chevronDown}</span>
                      <span className="folder-icon">{getCategoryIcon(catId)}</span>
                      {t(`categories.${catId}`)}
                    </button>
                    <ul className={`folder-contents ${openFolders.includes(catId) ? 'open' : ''}`}>
                      {groupedFiles[catId]?.map(file => (
                        <li key={file.id}>
                          <button
                            className={`file-btn ${selectedFile === file.id ? 'active' : ''}`}
                            onClick={() => handleFileSelect(file.id)}
                          >
                            <span className="python-icon">{Icons.python}</span> {file.filename}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="editor-container">
            <div className="code-description">
              <h3>{Icons.about} {currentFile.name}</h3>
              <p>{currentFile.description}</p>
              <p><strong>{t('playground.author')}:</strong> {currentFile.author}</p>
            </div>

            <div className="editor-header">
              <div className="editor-tabs">
                <div className="editor-tab">
                  <span className="python-icon">{Icons.python}</span> <span>{currentFile.filename}</span>
                </div>
              </div>
              <div className="editor-actions">
                <button className="editor-btn" onClick={handleCopy}>
                  {copied ? <>{Icons.check} {t('playground.copied')}</> : <>{Icons.copy} {t('playground.copy')}</>}
                </button>
                <button className="editor-btn run-btn" onClick={handleRun}>
                  {Icons.play} {t('playground.run')}
                </button>
              </div>
            </div>

            <div className="editor-wrapper">
              <Editor
                height="500px"
                language="python"
                theme="vs-dark"
                value={code}
                onChange={(value) => setCode(value || '')}
                options={{
                  fontSize: 14,
                  fontFamily: "'JetBrains Mono', monospace",
                  minimap: { enabled: true },
                  scrollBeyondLastLine: false,
                  padding: { top: 16, bottom: 16 },
                  lineNumbers: 'on',
                  renderLineHighlight: 'all',
                  cursorBlinking: 'smooth',
                  smoothScrolling: true,
                  tabSize: 4,
                  wordWrap: 'on'
                }}
              />
            </div>

            <div className="output-section">
              <div className="output-header">
                <div className="output-title">
                  {Icons.terminal} {t('playground.output')}
                </div>
                <button className="editor-btn" onClick={handleClearOutput}>
                  {Icons.trash} {t('playground.clear')}
                </button>
              </div>
              <pre className="output-content">{output}</pre>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Playground
