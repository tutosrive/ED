import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import LiveCodes from 'livecodes/react'
import { codeFiles, categories } from '../data/codeFiles'
import Icons from '../components/Icons'
import './Playground.css'

function Playground() {
  const { t } = useTranslation()
  const [selectedFile, setSelectedFile] = useState('binary_search')
  const [openFolders, setOpenFolders] = useState(['workshop'])

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
  }

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

  const livecodesConfig = useMemo(() => ({
    activeEditor: 'script',
    script: {
      language: 'python',
      content: currentFile.code
    },
    tools: {
      enabled: ['console'],
      active: 'console',
      status: 'open'
    },
    editor: 'monaco',
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: 14,
    tabSize: 4,
    lineNumbers: true,
    wordWrap: true,
    theme: 'dark',
    mode: 'full'
  }), [currentFile.code])

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
                {Object.entries(categories).map(([catId]) => (
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

            <div className="livecodes-wrapper">
              <LiveCodes 
                key={selectedFile}
                config={livecodesConfig}
                className="livecodes-embed"
                height="600px"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Playground
