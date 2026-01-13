import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Icons from '../components/Icons'
import GitHubUser from '../components/GitHubUser'
import './About.css'

const UCALDAS_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Escudo_Universidad_de_Caldas.svg/200px-Escudo_Universidad_de_Caldas.svg.png'

function About() {
  const { t } = useTranslation()
  
  return (
    <>
      <section className="page-header">
        <h1>{Icons.about} {t('about.title')}</h1>
        <p>{t('about.subtitle')}</p>
      </section>

      <section className="content-section">
        <div className="content-card glass-card">
          <h2>{Icons.university} {t('about.aboutCourse')}</h2>
          <p>
            {t('about.courseDesc1')}
            <strong> {t('about.dataStructures')}</strong>
            {t('about.courseDesc2')}
            <strong> {t('about.university')}</strong>.
          </p>
          <p>
            El curso cubre conceptos esenciales como recursividad, árboles binarios de búsqueda (BST), 
            grafos y algoritmos fundamentales que todo ingeniero de software debe dominar.
          </p>
        </div>

        <div className="content-card glass-card">
          <h2>{Icons.star} {t('about.credits')}</h2>
          <div className="credits-grid">
            <GitHubUser 
              username="tutosrive" 
              role={t('about.student')}
              roleDescription={t('about.studentRole')}
            />
            <GitHubUser 
              username="jotarlo" 
              role={t('about.professor')}
              roleDescription={t('about.professorRole')}
            />
          </div>
        </div>

        <div className="content-card glass-card">
          <h2>{Icons.university} {t('about.university')}</h2>
          <div className="university-content">
            <div className="university-logo">
              <img src={UCALDAS_LOGO} alt="Universidad de Caldas" />
            </div>
            <div className="university-info">
              <p>{t('about.universityDesc1')}</p>
              <p>{t('about.universityDesc2')}</p>
              <div className="info-list">
                <p><span className="info-icon">{Icons.location}</span> <strong>{t('about.location')}:</strong> Manizales, Caldas - Colombia</p>
                <p><span className="info-icon">{Icons.university}</span> <strong>{t('about.program')}:</strong> {t('about.systemsEngineering')}</p>
                <p><span className="info-icon">{Icons.book}</span> <strong>{t('about.subject')}:</strong> {t('about.dataStructures')}</p>
                <p><span className="info-icon">{Icons.calendar}</span> <strong>{t('about.semester')}:</strong> {t('about.semesterValue')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-card glass-card">
          <h2>{Icons.github} {t('about.repository')}</h2>
          <p>
            {t('about.repoDesc')}
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a href="https://github.com/tutosrive/ED" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {Icons.github} {t('about.viewRepo')}
            </a>
          </div>
        </div>

        <div className="content-card glass-card">
          <h2>{Icons.folder} {t('about.projectStructure')}</h2>
          <p className="structure-note">El sitio web se despliega desde la rama <code>web</code> del repositorio.</p>
          <pre className="code-block">
{`ED/
├── src_removed_backup_20260113T211020Z/  (contenido movido — ver backup)
│   ├── workshops/
│   │   └── colab/
│   │       └── workshop_1_ED.ipynb
│   ├── explanations/
│   │   └── teacher/
│   │       └── colab/
│   │           ├── BST_Jue_Vie.ipynb
│   │           ├── Graph.ipynb
│   │           └── Graph_Mar_Jue.ipynb
│   └── HOMEWORKS/
│       └── BTS/
│           └── BTS_search_and_remove.ipynb
├── LICENSE
└── README.md

web branch:
└── website/                (Este sitio web - React)`}{
          </pre>
        </div>

        <div className="content-card glass-card">
          <h2>{Icons.check} {t('about.topicsCovered')}</h2>
          <ul className="topics-list">
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

        <div className="content-card glass-card" style={{ textAlign: 'center' }}>
          <h2>{Icons.rocket} {t('about.practiceNow')}</h2>
          <p>{t('about.practiceDesc')}</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link to="/playground" className="btn btn-primary">
              {Icons.terminal} {t('about.goToPlayground')}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
