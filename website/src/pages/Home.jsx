import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Icons from '../components/Icons'
import './Home.css'

const codePreview = `def binary_search(lista, value, left, right):
    medio = (left + right) // 2
    
    if medio > (len(lista) - 1) or right < left:
        return -1
    elif lista[medio] == value:
        return medio

    if value > lista[medio]:
        left = medio + 1
    else:
        right = medio - 1

    return binary_search(lista, value, left, right)`

function Home() {
  const { t } = useTranslation()
  
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>{Icons.university} {t('home.badge')}</span>
          </div>
          <h1 className="glitch-text" data-text={t('home.title')}>
            {t('home.title')}
          </h1>
          <p className="hero-subtitle">
            {t('home.subtitle')}<br />
            <span className="highlight">{t('home.location')}</span>
          </p>
          <div className="hero-buttons">
            <Link to="/playground" className="btn btn-primary">
              {Icons.play} {t('home.explorePlayground')}
            </Link>
            <Link to="/about" className="btn btn-secondary">
              {Icons.book} {t('home.viewDocs')}
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-window glass-card">
            <div className="window-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="window-title">binary_search.py</span>
            </div>
            <div className="code-preview">
              <SyntaxHighlighter 
                language="python" 
                style={vscDarkPlus}
                customStyle={{
                  background: 'transparent',
                  margin: 0,
                  padding: '1rem',
                  fontSize: '0.85rem'
                }}
              >
                {codePreview}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="floating-elements">
            <div className="float-el tree-icon">{Icons.tree}</div>
            <div className="float-el graph-icon">{Icons.graph}</div>
            <div className="float-el code-icon">{Icons.terminal}</div>
          </div>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">{t('home.courseContent')}</h2>
        <div className="features-grid">
          <div className="feature-card glass-card">
            <div className="feature-icon">{Icons.tree}</div>
            <h3>{t('home.binaryTrees')}</h3>
            <p>{t('home.binaryTreesDesc')}</p>
            <Link to="/playground#bst" className="feature-link">{t('home.viewCode')} {Icons.arrowRight}</Link>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon">{Icons.graph}</div>
            <h3>{t('home.graphs')}</h3>
            <p>{t('home.graphsDesc')}</p>
            <Link to="/playground#graphs" className="feature-link">{t('home.viewCode')} {Icons.arrowRight}</Link>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon">{Icons.recursion}</div>
            <h3>{t('home.recursion')}</h3>
            <p>{t('home.recursionDesc')}</p>
            <Link to="/playground#recursion" className="feature-link">{t('home.viewCode')} {Icons.arrowRight}</Link>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon">{Icons.terminal}</div>
            <h3>{t('home.interactivePlayground')}</h3>
            <p>{t('home.interactivePlaygroundDesc')}</p>
            <Link to="/playground" className="feature-link">{t('home.goToPlayground')} {Icons.arrowRight}</Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container glass-card">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">{t('home.notebooks')}</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">{t('home.algorithms')}</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">{t('home.python')}</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">{t('home.learning')}</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
