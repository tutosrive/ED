import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Icons from '../components/Icons'
import './WhatIs.css'

function WhatIs() {
  const { t } = useTranslation()
  
  return (
    <>
      <section className="page-header">
        <h1>{Icons.help} {t('whatIs.title')}</h1>
        <p>{t('whatIs.subtitle')}</p>
      </section>

      <section className="content-section">
        <div className="content-card glass-card">
          <h2>{Icons.folder} {t('whatIs.definition')}</h2>
          <p>
            {t('whatIs.definitionDesc1')}
          </p>
          <p>
            {t('whatIs.definitionDesc2')}
          </p>
        </div>

        <div className="content-card glass-card">
          <h2>{Icons.star} {t('whatIs.whyImportant')}</h2>
          <ul className="importance-list">
            <li><strong>{t('whatIs.efficiency')}:</strong> {t('whatIs.efficiencyDesc')}</li>
            <li><strong>{t('whatIs.organization')}:</strong> {t('whatIs.organizationDesc')}</li>
            <li><strong>{t('whatIs.reuse')}:</strong> {t('whatIs.reuseDesc')}</li>
            <li><strong>{t('whatIs.abstraction')}:</strong> {t('whatIs.abstractionDesc')}</li>
            <li><strong>{t('whatIs.interviews')}:</strong> {t('whatIs.interviewsDesc')}</li>
          </ul>
        </div>

        <div className="content-card glass-card">
          <h2>{Icons.tree} Tipos de Estructuras de Datos</h2>
          
          <h3 className="primary-heading">Estructuras Lineales</h3>
          <ul>
            <li><strong>Arrays (Arreglos):</strong> Colección de elementos del mismo tipo almacenados en posiciones contiguas de memoria.</li>
            <li><strong>Listas Enlazadas:</strong> Secuencia de nodos donde cada nodo contiene un dato y una referencia al siguiente nodo.</li>
            <li><strong>Pilas (Stacks):</strong> Estructura LIFO (Last In, First Out) - El último en entrar es el primero en salir.</li>
            <li><strong>Colas (Queues):</strong> Estructura FIFO (First In, First Out) - El primero en entrar es el primero en salir.</li>
          </ul>

          <h3 className="secondary-heading">Estructuras No Lineales</h3>
          <ul>
            <li><strong>Árboles:</strong> Estructura jerárquica con un nodo raíz y nodos hijos. Incluye árboles binarios, BST, AVL, etc.</li>
            <li><strong>Grafos:</strong> Conjunto de vértices conectados por aristas. Pueden ser dirigidos o no dirigidos.</li>
            <li><strong>Tablas Hash:</strong> Estructura que permite búsqueda, inserción y eliminación en tiempo promedio O(1).</li>
            <li><strong>Heaps:</strong> Árbol binario completo que satisface la propiedad del heap (máximo o mínimo).</li>
          </ul>
        </div>

        <div className="content-card glass-card">
          <h2>{Icons.recursion} Recursividad</h2>
          <p>
            La <strong>recursividad</strong> es una técnica de programación donde una función se llama a sí misma 
            para resolver un problema dividiéndolo en subproblemas más pequeños del mismo tipo.
          </p>
          
          <h3 className="primary-heading">Recursividad de Pila (LIFO)</h3>
          <p>
            En la recursividad de pila, las llamadas recursivas se acumulan en el stack hasta que se alcanza 
            el caso base. Luego, se resuelven en orden inverso (el último en entrar es el primero en salir).
          </p>
          <div className="code-block-wrapper">
            <SyntaxHighlighter language="python" style={vscDarkPlus} customStyle={{ borderRadius: '12px', margin: 0 }}>
{`def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)  # Se acumula en el stack`}
            </SyntaxHighlighter>
          </div>

          <h3 className="secondary-heading">Recursividad de Cola (FIFO)</h3>
          <p>
            En la recursividad de cola, el resultado se va calculando y pasando como parámetro, 
            evitando la acumulación de llamadas en el stack. Es más eficiente en memoria.
          </p>
          <div className="code-block-wrapper">
            <SyntaxHighlighter language="python" style={vscDarkPlus} customStyle={{ borderRadius: '12px', margin: 0 }}>
{`def factorial_tail(n, accumulator=1):
    if n <= 1:
        return accumulator
    return factorial_tail(n - 1, n * accumulator)  # Tail call`}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className="content-card glass-card">
          <h2>{Icons.tree} Árbol Binario de Búsqueda (BST)</h2>
          <p>
            Un <strong>Árbol Binario de Búsqueda (Binary Search Tree - BST)</strong> es una estructura de datos 
            de árbol donde cada nodo tiene como máximo dos hijos, y cumple la siguiente propiedad:
          </p>
          <ul>
            <li>Todos los valores en el subárbol izquierdo son <strong>menores</strong> que el nodo raíz.</li>
            <li>Todos los valores en el subárbol derecho son <strong>mayores</strong> que el nodo raíz.</li>
          </ul>
          
          <h3 className="primary-heading">Operaciones Principales</h3>
          <ul>
            <li><strong>Inserción:</strong> O(log n) en promedio, O(n) en el peor caso.</li>
            <li><strong>Búsqueda:</strong> O(log n) en promedio, O(n) en el peor caso.</li>
            <li><strong>Eliminación:</strong> O(log n) en promedio, O(n) en el peor caso.</li>
          </ul>

          <h3 className="secondary-heading">Recorridos</h3>
          <ul>
            <li><strong>In-order (LNR):</strong> Izquierda → Nodo → Derecha (produce elementos ordenados)</li>
            <li><strong>Pre-order (NLR):</strong> Nodo → Izquierda → Derecha</li>
            <li><strong>Post-order (LRN):</strong> Izquierda → Derecha → Nodo</li>
          </ul>
        </div>

        <div className="content-card glass-card">
          <h2>{Icons.graph} Grafos</h2>
          <p>
            Un <strong>grafo</strong> es una estructura de datos que consiste en un conjunto de 
            <strong> vértices (nodos)</strong> y <strong>aristas (conexiones)</strong> entre ellos.
          </p>
          
          <h3 className="primary-heading">Tipos de Grafos</h3>
          <ul>
            <li><strong>Dirigido:</strong> Las aristas tienen una dirección (A → B no implica B → A).</li>
            <li><strong>No Dirigido:</strong> Las aristas no tienen dirección (A — B implica conexión mutua).</li>
            <li><strong>Ponderado:</strong> Las aristas tienen un peso o costo asociado.</li>
            <li><strong>No Ponderado:</strong> Todas las aristas tienen el mismo peso.</li>
          </ul>

          <h3 className="secondary-heading">Representación</h3>
          <ul>
            <li><strong>Lista de Adyacencia:</strong> Cada vértice tiene una lista de sus vecinos. Eficiente en memoria para grafos dispersos.</li>
            <li><strong>Matriz de Adyacencia:</strong> Matriz n×n donde M[i][j] indica si existe arista entre i y j. Eficiente para grafos densos.</li>
          </ul>

          <h3 className="accent-heading">Algoritmos de Recorrido</h3>
          <ul>
            <li><strong>BFS (Breadth-First Search):</strong> Recorre el grafo por niveles. Usa una cola. Encuentra el camino más corto en grafos no ponderados.</li>
            <li><strong>DFS (Depth-First Search):</strong> Recorre el grafo en profundidad. Usa una pila (o recursión). Útil para detectar ciclos y componentes conexas.</li>
          </ul>
        </div>

        <div className="content-card glass-card">
          <h2>{Icons.graph} Complejidad Algorítmica</h2>
          <p>
            La <strong>complejidad algorítmica</strong> mide los recursos (tiempo y espacio) que requiere un 
            algoritmo en función del tamaño de la entrada.
          </p>
          
          <h3 className="primary-heading">Notación Big O</h3>
          <ul>
            <li><strong>O(1):</strong> Constante - El mejor caso posible.</li>
            <li><strong>O(log n):</strong> Logarítmica - Muy eficiente (ej: Binary Search).</li>
            <li><strong>O(n):</strong> Lineal - Proporcional al tamaño de entrada.</li>
            <li><strong>O(n log n):</strong> Linearítmica - Algoritmos de ordenamiento eficientes.</li>
            <li><strong>O(n²):</strong> Cuadrática - Algoritmos con bucles anidados.</li>
            <li><strong>O(2ⁿ):</strong> Exponencial - Muy ineficiente para grandes entradas.</li>
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

export default WhatIs
