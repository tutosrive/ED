import { Link } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <>
      <section className="page-header">
        <h1>👥 About</h1>
        <p>Conoce más sobre este proyecto, los autores y la universidad</p>
      </section>

      <section className="content-section">
        {/* About the Course */}
        <div className="content-card glass-card">
          <h2>🎓 Sobre el Curso</h2>
          <p>
            Este repositorio contiene el material desarrollado durante el curso de 
            <strong> Estructuras de Datos</strong>, una materia fundamental en la carrera de 
            Ingeniería de Sistemas y Computación en la <strong>Universidad de Caldas</strong>.
          </p>
          <p>
            El curso cubre conceptos esenciales como recursividad, árboles binarios de búsqueda (BST), 
            grafos y algoritmos fundamentales que todo ingeniero de software debe dominar.
          </p>
        </div>

        {/* Credits */}
        <div className="content-card glass-card">
          <h2>⭐ Créditos</h2>
          <div className="credits-grid">
            <div className="credit-item">
              <h3>👨‍🎓 Santiago Rivera Marin</h3>
              <p>Estudiante - 4to Semestre</p>
              <p>Desarrollo del código, talleres y tareas del curso.</p>
              <a href="https://github.com/tutosrive" target="_blank" rel="noopener noreferrer">
                🐙 @tutosrive
              </a>
            </div>
            <div className="credit-item">
              <h3>👨‍🏫 Profesor Jotarlo</h3>
              <p>Docente del Curso</p>
              <p>Autor del código de explicaciones en clase (BST, Grafos).</p>
            </div>
          </div>
        </div>

        {/* University */}
        <div className="content-card glass-card">
          <h2>🏛️ Universidad de Caldas</h2>
          <p>
            La <strong>Universidad de Caldas</strong> es una institución de educación superior 
            pública ubicada en <strong>Manizales, Caldas, Colombia</strong>. Fundada en 1943, 
            es una de las universidades más importantes de la región del Eje Cafetero.
          </p>
          <p>
            El programa de <strong>Ingeniería de Sistemas y Computación</strong> forma profesionales 
            capaces de diseñar, desarrollar e implementar soluciones tecnológicas que respondan 
            a las necesidades de la sociedad actual.
          </p>
          <div className="info-list">
            <p><strong>📍 Ubicación:</strong> Manizales, Caldas - Colombia</p>
            <p><strong>🎓 Programa:</strong> Ingeniería de Sistemas y Computación</p>
            <p><strong>📚 Materia:</strong> Estructuras de Datos</p>
            <p><strong>📅 Semestre:</strong> 4to Semestre</p>
          </div>
        </div>

        {/* Repository */}
        <div className="content-card glass-card">
          <h2>🐙 Repositorio</h2>
          <p>
            Todo el código fuente de este proyecto está disponible en GitHub bajo la licencia 
            <strong> GPL v3</strong>. Siéntete libre de explorar, aprender y contribuir.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a href="https://github.com/tutosrive/ED" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              🐙 Ver Repositorio
            </a>
          </div>
        </div>

        {/* Structure */}
        <div className="content-card glass-card">
          <h2>📁 Estructura del Proyecto</h2>
          <pre className="code-block">
{`ED/
├── src/
│   ├── workshops/
│   │   └── colab/
│   │       └── workshop_1_ED.ipynb       # Taller 1: Recursividad
│   ├── explanations/
│   │   └── teacher/
│   │       └── colab/
│   │           ├── BST_Jue_Vie.ipynb     # BST - Profesor Jotarlo
│   │           ├── Graph.ipynb           # Grafos - Completo
│   │           └── Graph_Mar_Jue.ipynb   # Grafos - Básico
│   └── HOMEWORKS/
│       └── BTS/
│           └── BTS_search_and_remove.ipynb  # Tarea BST
├── website/                              # Este sitio web (React)
├── LICENSE                               # GNU GPL v3
└── README.md                             # Documentación`}
          </pre>
        </div>

        {/* Topics Covered */}
        <div className="content-card glass-card">
          <h2>✅ Temas Cubiertos</h2>
          <ul>
            <li><strong>Recursividad:</strong>
              <ul>
                <li>Recursividad de Pila (LIFO)</li>
                <li>Recursividad de Cola (FIFO)</li>
                <li>Binary Search recursivo</li>
                <li>Factorial con ambos tipos de recursividad</li>
                <li>Fibonacci con memorización</li>
                <li>Suma de elementos de una lista</li>
              </ul>
            </li>
            <li><strong>Árboles Binarios de Búsqueda (BST):</strong>
              <ul>
                <li>Inserción de nodos</li>
                <li>Búsqueda de valores</li>
                <li>Eliminación de nodos (3 casos)</li>
                <li>Recorridos: In-order, Pre-order, Post-order</li>
                <li>Visualización del árbol en consola</li>
              </ul>
            </li>
            <li><strong>Grafos:</strong>
              <ul>
                <li>Representación con listas de adyacencia</li>
                <li>Grafos dirigidos y no dirigidos</li>
                <li>BFS (Breadth-First Search)</li>
                <li>DFS (Depth-First Search)</li>
                <li>Visualización con NetworkX</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="content-card glass-card" style={{ textAlign: 'center' }}>
          <h2>🚀 ¡Practica Ahora!</h2>
          <p>Explora todos los códigos y algoritmos implementados en el playground interactivo.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link to="/playground" className="btn btn-primary">
              💻 Ir al Playground
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
