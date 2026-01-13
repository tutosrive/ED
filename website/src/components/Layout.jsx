import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: 'ℹ️' },
    { path: '/what-is', label: '¿Qué es?', icon: '❓' },
    { path: '/playground', label: 'Playground', icon: '💻' },
    { path: '/license', label: 'Licencia', icon: '📄' },
  ]

  return (
    <>
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="grid-lines"></div>
        <Particles />
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>

      {/* Navigation */}
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
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
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

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>

      {/* Footer */}
      <footer className="glass-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Créditos</h4>
            <p><strong>Santiago Rivera Marin</strong><br />Estudiante - 4to Semestre</p>
            <p><strong>Profesor Jotarlo</strong><br />Docente del curso</p>
          </div>
          <div className="footer-section">
            <h4>Universidad</h4>
            <p>Universidad de Caldas<br />Ingeniería de Sistemas y Computación<br />Manizales, Caldas - Colombia</p>
          </div>
          <div className="footer-section">
            <h4>Repositorio</h4>
            <a href="https://github.com/tutosrive/ED" target="_blank" rel="noopener noreferrer" className="github-link">
              🐙 tutosrive/ED
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

// Particles Component
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
