import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🎓 Universidad de Caldas</span>
          </div>
          <h1 className="glitch-text" data-text="ESTRUCTURAS DE DATOS">
            ESTRUCTURAS DE DATOS
          </h1>
          <p className="hero-subtitle">
            Ingeniería de Sistemas y Computación<br />
            <span className="highlight">Manizales, Caldas - Colombia</span>
          </p>
          <div className="hero-buttons">
            <Link to="/playground" className="btn btn-primary">
              ▶️ Explorar Playground
            </Link>
            <Link to="/about" className="btn btn-secondary">
              📚 Ver Documentación
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
            <pre className="code-preview">
              <code>
{`def binary_search(lista, value, left, right):
    medio = (left + right) // 2
    
    if medio > (len(lista) - 1) or right < left:
        return -1
    elif lista[medio] == value:
        return medio

    if value > lista[medio]:
        left = medio + 1
    else:
        right = medio - 1

    return binary_search(lista, value, left, right)`}
              </code>
            </pre>
          </div>
          <div className="floating-elements">
            <div className="float-el tree-icon">🌳</div>
            <div className="float-el graph-icon">📊</div>
            <div className="float-el code-icon">💻</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">Contenido del Curso</h2>
        <div className="features-grid">
          <div className="feature-card glass-card">
            <div className="feature-icon">🌳</div>
            <h3>Árboles Binarios</h3>
            <p>Implementación de BST (Binary Search Tree) con operaciones de inserción, búsqueda y eliminación.</p>
            <Link to="/playground#bst" className="feature-link">Ver código →</Link>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon">📊</div>
            <h3>Grafos</h3>
            <p>Grafos dirigidos y no dirigidos con listas de adyacencia y visualización con NetworkX.</p>
            <Link to="/playground#graphs" className="feature-link">Ver código →</Link>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon">🔄</div>
            <h3>Recursividad</h3>
            <p>Algoritmos recursivos: Binary Search, Factorial (LIFO/FIFO), Fibonacci con memorización.</p>
            <Link to="/playground#recursion" className="feature-link">Ver código →</Link>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon">💻</div>
            <h3>Playground Interactivo</h3>
            <p>Explora y ejecuta todos los códigos del curso en un editor interactivo en línea.</p>
            <Link to="/playground" className="feature-link">Ir al Playground →</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container glass-card">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Notebooks</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Algoritmos</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Python</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Aprendizaje</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
