import { useState, useMemo } from 'react'
import Editor from '@monaco-editor/react'
import { codeFiles, categories } from '../data/codeFiles'
import './Playground.css'

function Playground() {
  const [selectedFile, setSelectedFile] = useState('binary_search')
  const [code, setCode] = useState(codeFiles['binary_search'].code)
  const [output, setOutput] = useState(`Bienvenido al Playground de Estructuras de Datos

Para ejecutar el código:
  1. Selecciona un archivo del panel izquierdo
  2. Edita el código si lo deseas
  3. Copia el código y pégalo en:
     • Google Colab
     • Online Python
     • Tu entorno local de Python

¡Explora y aprende!`)
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

[Info] Este playground es solo para visualización y edición del código.
[Info] Para ejecutar el código, copia el contenido y ejecútalo en:
  • Google Colab (https://colab.research.google.com)
  • Online Python (https://www.online-python.com)
  • Tu entorno local de Python

[✓] Código listo para copiar`)
  }

  const handleClearOutput = () => {
    setOutput('Output cleared. Press "Ejecutar" to run code.')
  }

  return (
    <>
      <section className="page-header">
        <h1>💻 Playground</h1>
        <p>Explora y edita todos los códigos del curso de Estructuras de Datos</p>
      </section>

      <section className="playground-container">
        <div className="playground-layout">
          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-card glass-card">
              <h3 className="sidebar-title">📁 Archivos</h3>
              <ul className="file-tree">
                {Object.entries(categories).map(([catId, category]) => (
                  <li key={catId}>
                    <button 
                      className={`folder-toggle ${openFolders.includes(catId) ? 'open' : ''}`}
                      onClick={() => toggleFolder(catId)}
                    >
                      <span className="chevron">▶</span>
                      <span className="folder-icon">{category.icon}</span>
                      {category.name}
                    </button>
                    <ul className={`folder-contents ${openFolders.includes(catId) ? 'open' : ''}`}>
                      {groupedFiles[catId]?.map(file => (
                        <li key={file.id}>
                          <button
                            className={`file-btn ${selectedFile === file.id ? 'active' : ''}`}
                            onClick={() => handleFileSelect(file.id)}
                          >
                            🐍 {file.filename}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="sidebar-card glass-card">
              <h3 className="sidebar-title">🔗 Ejecutar Online</h3>
              <div className="quick-links">
                <a href="https://colab.research.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  🧪 Google Colab
                </a>
                <a href="https://www.online-python.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  🐍 Online Python
                </a>
                <a href="https://replit.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  💻 Replit
                </a>
              </div>
            </div>
          </aside>

          {/* Editor */}
          <div className="editor-container">
            {/* Code Description */}
            <div className="code-description">
              <h3>ℹ️ {currentFile.name}</h3>
              <p>{currentFile.description}</p>
              <p><strong>Autor:</strong> {currentFile.author}</p>
            </div>

            {/* Editor Header */}
            <div className="editor-header">
              <div className="editor-tabs">
                <div className="editor-tab">
                  🐍 <span>{currentFile.filename}</span>
                </div>
              </div>
              <div className="editor-actions">
                <button className="editor-btn" onClick={handleCopy}>
                  {copied ? '✓ Copiado!' : '📋 Copiar'}
                </button>
                <button className="editor-btn run-btn" onClick={handleRun}>
                  ▶️ Ejecutar
                </button>
              </div>
            </div>

            {/* Monaco Editor */}
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

            {/* Output Section */}
            <div className="output-section">
              <div className="output-header">
                <div className="output-title">
                  💻 Output
                </div>
                <button className="editor-btn" onClick={handleClearOutput}>
                  🗑️ Limpiar
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
