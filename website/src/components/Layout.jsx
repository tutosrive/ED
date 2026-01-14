import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Icons from './Icons'
import LanguageSwitcher from './LanguageSwitcher'
import './Layout.css'

function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: t('nav.home'), icon: Icons.home },
    { path: '/about', label: t('nav.about'), icon: Icons.about },
    { path: '/what-is', label: t('nav.whatIs'), icon: Icons.help },
    { path: '/playground', label: t('nav.playground'), icon: Icons.code },
    { path: '/videos', label: t('nav.videos'), icon: Icons.play },
    { path: '/license', label: t('nav.license'), icon: Icons.file },
  ]

  return (
    <>
      <div className="animated-bg">
        <div className="grid-lines"></div>
        <Particles />
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>

      <nav className="glass-nav">
        <div className="nav-container">
          <Link to="/" className="logo">
            <span className="logo-icon">⟨/⟩</span>
            <span className="logo-text">ED</span>
          </Link>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={location.pathname === link.path ? 'active' : ''}
                >
                  <span className="nav-icon">{link.icon}</span> {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <LanguageSwitcher />
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? Icons.close : Icons.menu}
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
              >
                <span className="nav-icon">{link.icon}</span> {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <main className="main-content">
        {children}
      </main>

      <footer className="glass-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>{t('footer.credits')}</h4>
            <p><strong>Santiago Rivera Marin</strong><br />{t('footer.student')}</p>
            <p><strong>Jefferson Arango López</strong><br />{t('footer.professor')}</p>
          </div>
          <div className="footer-section">
            <h4>{t('footer.university')}</h4>
            <p>Universidad de Caldas<br />Ingeniería de Sistemas y Computación<br />Manizales, Caldas - Colombia</p>
          </div>
          <div className="footer-section">
            <h4>{t('footer.repository')}</h4>
            <a href="https://github.com/tutosrive/ED" target="_blank" rel="noopener noreferrer" className="github-link">
              {Icons.github} tutosrive/ED
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 - Estructuras de Datos - Licencia GPL v3</p>
        </div>
      </footer>
    </>
  )
}

function Particles() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const colors = ['#00f0ff', '#7b2ff7', '#f72585', '#00ff88']
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${10 + Math.random() * 20}s`,
      color: colors[Math.floor(Math.random() * colors.length)]
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="floating-particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
            background: p.color
          }}
        />
      ))}
    </div>
  )
}

export default Layout
