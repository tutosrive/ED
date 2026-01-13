// ========================================
// ED - Estructuras de Datos
// JavaScript Functionality
// ========================================

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initMobileMenu();
    initPlayground();
});

// ========================================
// Floating Particles Animation
// ========================================
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (10 + Math.random() * 20) + 's';
        
        const colors = ['#00f0ff', '#7b2ff7', '#f72585', '#00ff88'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particlesContainer.appendChild(particle);
    }
}

// ========================================
// Mobile Menu
// ========================================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!menuBtn || !mobileMenu) return;
    
    menuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// ========================================
// Playground Functionality
// ========================================
let monacoEditor = null;
let currentFile = null;

const codeFiles = {
    // Workshop 1
    'binary_search': {
        name: 'Binary Search',
        description: 'Implementar un algoritmo recursivo que, dada una lista ordenada y un elemento, devuelva el índice del elemento o -1 si no se encuentra. Utiliza recursividad de pila (LIFO).',
        author: 'Santiago Rivera Marin',
        code: `from typing import Union

def binary_search(lista: list, value: int, left: int, right: int):
    medio = (left + right) // 2

    # Base Case
    if medio > (len(lista) - 1) or right < left:
        # Value not exists in list
        return -1
    elif lista[medio] == value:
        # Found value
        return medio

    if value > lista[medio]:
        # Carry out the recursion to right side
        left = medio + 1
    else:
        # Carry out the recursion to left side
        right = medio - 1

    return binary_search(lista, value, left, right)


# Tests
list_integer: list[int] = [4, 2, 1, 6, 7, 3, 8, 12, 5, 9, 13]
list_integer.sort()
print(f"{list_integer=}")

int_to_find: int = 7
left, right = 0, len(list_integer)
index: Union[int, None] = binary_search(list_integer, int_to_find, left, right)

print(f"Searching for: {int_to_find}")
print(f"Found at index: {index}")
`
    },
    'binary_search_random': {
        name: 'Binary Search (Random Tests)',
        description: 'Test del algoritmo de Binary Search usando valores aleatorios.',
        author: 'Santiago Rivera Marin',
        code: `from typing import Union
from random import randint as rdint

def binary_search(lista: list, value: int, left: int, right: int):
    medio = (left + right) // 2
    
    if medio > (len(lista) - 1) or right < left:
        return -1
    elif lista[medio] == value:
        return medio
    
    if value > lista[medio]:
        left = medio + 1
    else:
        right = medio - 1
    
    return binary_search(lista, value, left, right)


# Test Using random values
max_int: int = 100
max_len: int = 30
count: int = 0
list_integer: list[int] = []

# Generate unique values in list
while count < max_len:
    rd_value: int = rdint(0, max_int)
    if rd_value not in list_integer:
        list_integer.append(rd_value)
        count += 1

list_integer.sort()
print(f"{list_integer=}")

int_to_find: int = rdint(0, max_int)
print(f"{int_to_find=}")

left, right = 0, len(list_integer)
index: Union[int, None] = binary_search(list_integer, int_to_find, left, right)

print(f"{index=}")
`
    },
    'factorial_stack': {
        name: 'Factorial (Stack Recursion)',
        description: 'Implementar el cálculo factorial con recursividad de pila (LIFO). Este método almacena cada llamada en el stack hasta llegar al caso base.',
        author: 'Santiago Rivera Marin',
        code: `# Factorial using Stack Recursion (LIFO)
# If n == 5
# Factorial(n) = 5x4x3x2x1 = 120
# Base Case: n == 2 (Any value by 1 is the same value)

def factorial_pila(n: int):
    if n < 0:
        # Not missing the joker...
        return -1
    elif n == 0:
        return 0
    elif n in [2, 1]:
        return n
    
    return n * factorial_pila(n - 1)


# Tests
test_values = [5, 10, 0, 1, -10]

for n in test_values:
    fact_pila: int = factorial_pila(n)
    print(f"The factorial of {n} (Using LIFO), is: {fact_pila}")
`
    },
    'factorial_tail': {
        name: 'Factorial (Tail Recursion)',
        description: 'Implementar el cálculo factorial con recursividad de cola (FIFO). Este método es más eficiente en memoria ya que no acumula llamadas en el stack.',
        author: 'Santiago Rivera Marin',
        code: `# Factorial using Tail Recursion (FIFO)
# If n == 5
# Factorial(n) = 5x4x3x2x1 = 120
# Base Case: n == 2 (Any value by 1 is the same value)

def factorial_cola(n: int, array: list):
    if n < 0:
        # Not missing the joker...
        array[0] = -1
    elif n == 0:
        array[0] = 0
    elif n > 1:
        # Only if array[0] from begin is 1
        # To can get the product (array[0] * n)...
        array[0] *= n
        factorial_cola(n - 1, array)


# Tests
test_values = [5, 10, 1]

for n in test_values:
    fact_cola: list = [1]
    factorial_cola(n, fact_cola)
    print(f"The factorial of {n} (Using FIFO), is: {fact_cola[0]}")
`
    },
    'list_sum': {
        name: 'Sum of List Elements',
        description: 'Implementar la suma de los elementos de una lista usando recursividad de cola (FIFO).',
        author: 'Santiago Rivera Marin',
        code: `# Sum of list elements using Tail Recursion (FIFO)
# Base Case: When n reaches len(list)

def list_sum(index: int, array: list, result: list) -> None:
    if index >= 0 and index < len(array):
        result[0] += array[index]
        list_sum(index + 1, array, result)


# Tests
result: list = [0]
num_array: list = [0, 1, 2, 3, 4]
i: int = 0

list_sum(i, num_array, result)

print(f"Array: {num_array}")
print(f"The addition of all elements is (FIFO): {result[0]}")

# Another test
result2: list = [0]
num_array2: list = [10, 20, 30, 40, 50]
list_sum(0, num_array2, result2)

print(f"\\nArray: {num_array2}")
print(f"The addition of all elements is (FIFO): {result2[0]}")
`
    },
    'fibonacci_tail': {
        name: 'Fibonacci (Tail Recursion)',
        description: 'Calcular el n-ésimo número de Fibonacci usando recursividad de cola.',
        author: 'Santiago Rivera Marin',
        code: `# Fibonacci using Tail Recursion

def fibonacci(n: int, suma: list = [0], left: int = 0, right: int = 1):
    # To avoid use the Return
    if n not in [0, 1]:
        suma[0] = left + right
        
        print(f'{left=} ------ {right=} ------- {suma=}')
        
        # Like bubble sort
        left, right = right, suma[0]
        fibonacci(n - 1, suma, left, right)


# Tests
suma = [0]
n: int = 15

fibonacci(n, suma)

print(f"\\nThe Fibonacci Serie for {n} is: {suma[0]}")
`
    },
    'fibonacci_memoization': {
        name: 'Fibonacci (Memoization)',
        description: 'Calcular el n-ésimo número de Fibonacci usando recursividad de pila con memorización para optimizar el rendimiento.',
        author: 'Santiago Rivera Marin',
        code: `# Fibonacci with Memoization (Stack Recursion)

def fibonacci_memo(n: int, values: dict):
    # Base Case
    if n in [0, 1]:
        return n
    
    left, right = n - 1, n - 2
    
    # Case n-1 values already!
    if values.get(left):
        left = values[left]
    else:
        values[left] = fibonacci_memo(left, values)
        left = values[left]
    
    # Case n-2 values already!
    if values.get(right):
        right = values[right]
    else:
        values[right] = fibonacci_memo(right, values)
        right = values[right]
    
    # Missing the n: x
    return values[n - 1] + values[n - 2]


# Tests
dict_values: dict = {0: 0, 1: 1}
n: int = 15

fibo: int = fibonacci_memo(n, dict_values)

print(f"Memoization cache: {dict_values}")
print(f"\\nThe Fibonacci Serie for {n} is: {fibo}")
`
    },
    // BST - Teacher
    'bst_teacher': {
        name: 'BST (Teacher - Jotarlo)',
        description: 'Binary Search Tree implementation taught by Professor Jotarlo. Includes Node class and BST with insert, search, delete, and traversal methods.',
        author: 'Profesor Jotarlo',
        code: `# Binary Search Tree - Professor Jotarlo
# Universidad de Caldas - Estructuras de Datos

class Node:
    def __init__(self, value, parent=None):
        self.value = value
        self.left = None
        self.right = None
        self.parent = parent


class BST:
    def __init__(self):
        self.root = None

    # Insert a new value into the BST
    def insert(self, value):
        new_node = Node(value)
        if self.root is None:
            self.root = new_node
        else:
            self._insert(self.root, new_node)

    def _insert(self, current_node, new_node):
        if new_node.value < current_node.value:
            if current_node.left is None:
                current_node.left = new_node
                new_node.parent = current_node
            else:
                self._insert(current_node.left, new_node)
        else:
            if current_node.right is None:
                current_node.right = new_node
                new_node.parent = current_node
            else:
                self._insert(current_node.right, new_node)

    # Search for a value in the BST
    def search(self, value):
        if self.root is None:
            print("The tree is empty.")
            return None
        else:
            return self._search(self.root, value)

    def _search(self, current_node, value):
        if current_node is None or current_node.value == value:
            return current_node
        if value < current_node.value:
            return self._search(current_node.left, value)
        return self._search(current_node.right, value)

    # Find the inorder predecessor (the maximum in the left subtree)
    def _getPredecessor(self, node):
        if node.left is not None:
            current = node.left
            while current.right is not None:
                current = current.right
            return current
        return None

    # Replace one subtree with another (adjusts parent references)
    def changeNodePosition(self, node_to_replace, new_subtree_root):
        if node_to_replace.parent is None:  # If replacing the root
            self.root = new_subtree_root
        else:
            if node_to_replace == node_to_replace.parent.left:
                node_to_replace.parent.left = new_subtree_root
            else:
                node_to_replace.parent.right = new_subtree_root
        if new_subtree_root is not None:
            new_subtree_root.parent = node_to_replace.parent

    # Delete a node by value
    def delete(self, value):
        node_to_delete = self.search(value)
        if node_to_delete is not None:
            self._delete(node_to_delete)

    def _delete(self, node_to_delete):
        # Case 1: node is a leaf (no children)
        if node_to_delete.left is None and node_to_delete.right is None:
            self.changeNodePosition(node_to_delete, None)
            return

        # Case 2: node has two children
        if node_to_delete.left is not None and node_to_delete.right is not None:
            predecessor = self._getPredecessor(node_to_delete)
            if predecessor.parent != node_to_delete:
                self.changeNodePosition(predecessor, predecessor.left)
                predecessor.left = node_to_delete.left
                predecessor.left.parent = predecessor
            self.changeNodePosition(node_to_delete, predecessor)
            predecessor.right = node_to_delete.right
            predecessor.right.parent = predecessor
            return

        # Case 3: node has only one child
        if node_to_delete.left is not None:
            self.changeNodePosition(node_to_delete, node_to_delete.left)
        else:
            self.changeNodePosition(node_to_delete, node_to_delete.right)

    # Inorder traversal (left → root → right)
    def inorder(self, node=None):
        if node is None:
            node = self.root
        if node.left:
            self.inorder(node.left)
        print(node.value, end=" ")
        if node.right:
            self.inorder(node.right)

    # Method to print the tree in console
    def print_tree(self, node=None, prefix="", is_left=True):
        if node is not None:
            if node.right:
                new_prefix = prefix + ("│   " if is_left else "    ")
                self.print_tree(node.right, new_prefix, False)
            connector = "└── " if is_left else "┌── "
            print(prefix + connector + str(node.value))
            if node.left:
                new_prefix = prefix + ("    " if is_left else "│   ")
                self.print_tree(node.left, new_prefix, True)


# Example of usage
if __name__ == "__main__":
    bst = BST()
    values = [50, 30, 70, 20, 40, 60, 80, 10, 25, 35]

    for v in values:
        bst.insert(v)

    print("Original tree:")
    bst.print_tree(bst.root)
    print("\\nInorder traversal:")
    bst.inorder()
    print()
`
    },
    // BST - Homework
    'bst_homework': {
        name: 'BST Search & Remove (Homework)',
        description: 'Complete Binary Search Tree implementation with search and remove operations, including pre-order and post-order traversals.',
        author: 'Santiago Rivera Marin',
        code: `# BST - Search and Remove Homework
# By: Santiago Rivera Marin

from typing import Optional

class Node:
    def __init__(self, value, parent=None):
        self.value = value
        self.left = None
        self.right = None
        self.parent = parent


class BST:
    def __init__(self):
        self.root = None

    def insert(self, value):
        new_node = Node(value)
        if self.root is None:
            self.root = new_node
        else:
            self._insert(self.root, new_node)

    def _insert(self, current_node, new_node):
        if new_node.value < current_node.value:
            if current_node.left is None:
                current_node.left = new_node
                new_node.parent = current_node
            else:
                self._insert(current_node.left, new_node)
        else:
            if current_node.right is None:
                current_node.right = new_node
                new_node.parent = current_node
            else:
                self._insert(current_node.right, new_node)

    def search(self, value):
        if self.root is None:
            print("The tree is empty.")
            return None
        else:
            return self._search(self.root, value)

    def _search(self, current_node, value):
        if current_node is None or current_node.value == value:
            return current_node
        if value < current_node.value:
            return self._search(current_node.left, value)
        return self._search(current_node.right, value)

    def _getPredecessor(self, node):
        if node.left is not None:
            current = node.left
            while current.right is not None:
                current = current.right
            return current
        return None

    def changeNodePosition(self, node_to_replace, new_subtree_root):
        if node_to_replace.parent is None:
            self.root = new_subtree_root
        else:
            if node_to_replace == node_to_replace.parent.left:
                node_to_replace.parent.left = new_subtree_root
            else:
                node_to_replace.parent.right = new_subtree_root
        if new_subtree_root is not None:
            new_subtree_root.parent = node_to_replace.parent

    def delete(self, value):
        node_to_delete = self.search(value)
        if node_to_delete is not None:
            self._delete(node_to_delete)

    def _delete(self, node_to_delete):
        if node_to_delete.left is None and node_to_delete.right is None:
            self.changeNodePosition(node_to_delete, None)
            return

        if node_to_delete.left is not None and node_to_delete.right is not None:
            predecessor = self._getPredecessor(node_to_delete)
            if predecessor.parent != node_to_delete:
                self.changeNodePosition(predecessor, predecessor.left)
                predecessor.left = node_to_delete.left
                predecessor.left.parent = predecessor
            self.changeNodePosition(node_to_delete, predecessor)
            predecessor.right = node_to_delete.right
            predecessor.right.parent = predecessor
            return

        if node_to_delete.left is not None:
            self.changeNodePosition(node_to_delete, node_to_delete.left)
        else:
            self.changeNodePosition(node_to_delete, node_to_delete.right)

    def inorder(self, node=None):
        if node is None:
            node = self.root
        if node.left:
            self.inorder(node.left)
        print(node.value, end=" ")
        if node.right:
            self.inorder(node.right)

    def pre_order(self):
        if not self.root:
            print("The tree is empty!")
        else:
            print('Pre Order:', end=' ')
            self.__pre_order(self.root)

    def pos_order(self):
        if not self.root:
            print("The tree is empty!")
        else:
            print('Pos Order:', end=' ')
            self.__pos_order(self.root)

    def __pre_order(self, parent):
        if parent:
            print(parent.value, end=' ')
            self.__pre_order(parent.left)
            self.__pre_order(parent.right)

    def __pos_order(self, parent):
        if parent:
            self.__pos_order(parent.left)
            self.__pos_order(parent.right)
            print(parent.value, end=' ')

    def print_tree(self, node=None, prefix="", is_left=True):
        if node is not None:
            if node.right:
                new_prefix = prefix + ("│   " if is_left else "    ")
                self.print_tree(node.right, new_prefix, False)
            connector = "└── " if is_left else "┌── "
            print(prefix + connector + str(node.value))
            if node.left:
                new_prefix = prefix + ("    " if is_left else "│   ")
                self.print_tree(node.left, new_prefix, True)


# Test
bst = BST()
values = [50, 30, 70, 20, 40, 60, 80, 10, 25]

for v in values:
    bst.insert(v)

print("Original tree:")
bst.print_tree(bst.root)
print("\\nPre Order: ", end="")
bst.pre_order()
print("\\nPos Order: ", end="")
bst.pos_order()
print("\\nIn Order: ", end="")
bst.inorder()
print()

print("\\n--- Deleting node 30 ---")
bst.delete(30)
bst.print_tree(bst.root)
`
    },
    // Graphs
    'graph_basic': {
        name: 'Graph (Basic)',
        description: 'Creación del código para la construcción de un grafo no dirigido, considerando aristas y vértices mediante listas de adyacencias.',
        author: 'Profesor Jotarlo',
        code: `# Graph Implementation with Adjacency List
# Professor Jotarlo - Universidad de Caldas

class Vertex:
    def __init__(self, id):
        self.id = id
        self.adjacent = {}

    def add_neighbor(self, neighbor, weight=0):
        self.adjacent[neighbor] = weight

    def get_connections(self):
        return self.adjacent

    def get_id(self):
        return self.id


class Graph:
    def __init__(self):
        self.vertex_list = {}
        self.num_vertex = 0

    def add_vertex(self, id):
        self.num_vertex += 1
        new_vertex = Vertex(id)
        self.vertex_list[id] = new_vertex

    def add_edge(self, origin, destination, weight=0):
        if origin not in self.vertex_list:
            self.add_vertex(origin)
        if destination not in self.vertex_list:
            self.add_vertex(destination)
        self.vertex_list[origin].add_neighbor(destination, weight)

    def print_graph(self):
        for v_id, vertex in self.vertex_list.items():
            connections = vertex.get_connections()
            print(f"Vertex {v_id}: {connections}")


# Create and populate the graph
g = Graph()
g.add_edge('A', 'B', 2)
g.add_edge('B', 'C', 3)
g.add_edge('C', 'D', 1)
g.add_edge('D', 'E', 4)
g.add_edge('E', 'F', 2)
g.add_edge('B', 'G', 5)
g.add_edge('G', 'H', 2)
g.add_edge('D', 'B', 1)

print("Graph Representation:")
print("=" * 40)
g.print_graph()
print("=" * 40)
print(f"Total vertices: {g.num_vertex}")
`
    },
    'graph_visualization': {
        name: 'Graph Visualization (NetworkX)',
        description: 'Visualización de grafos usando NetworkX y Matplotlib. Este código muestra cómo convertir nuestro grafo a formato NetworkX para visualización.',
        author: 'Profesor Jotarlo',
        code: `# Graph Visualization with NetworkX
# Note: This requires networkx and matplotlib libraries
# Run: pip install networkx matplotlib

class Vertex:
    def __init__(self, id):
        self.id = id
        self.adjacent = {}

    def add_neighbor(self, neighbor, weight=0):
        self.adjacent[neighbor] = weight

    def get_connections(self):
        return self.adjacent

    def get_id(self):
        return self.id


class Graph:
    def __init__(self):
        self.vertex_list = {}
        self.num_vertex = 0

    def add_vertex(self, id):
        self.num_vertex += 1
        new_vertex = Vertex(id)
        self.vertex_list[id] = new_vertex

    def add_edge(self, origin, destination, weight=0):
        if origin not in self.vertex_list:
            self.add_vertex(origin)
        if destination not in self.vertex_list:
            self.add_vertex(destination)
        self.vertex_list[origin].add_neighbor(destination, weight)

    def get_edges(self):
        edges = []
        for v_id, vertex in self.vertex_list.items():
            for neighbor, weight in vertex.get_connections().items():
                edges.append((v_id, neighbor, weight))
        return edges


# Create graph
g = Graph()
g.add_edge('A', 'B', 2)
g.add_edge('B', 'C', 3)
g.add_edge('C', 'D', 1)
g.add_edge('D', 'E', 4)
g.add_edge('E', 'F', 2)
g.add_edge('B', 'G', 5)
g.add_edge('G', 'H', 2)
g.add_edge('D', 'B', 1)

print("Graph Edges:")
for edge in g.get_edges():
    print(f"  {edge[0]} --({edge[2]})--> {edge[1]}")

print("\\n--- NetworkX Visualization Code ---")
print('''
import networkx as nx
import matplotlib.pyplot as plt

G_nx = nx.DiGraph()

for v_id, vertex in g.vertex_list.items():
    for neighbor, weight in vertex.get_connections().items():
        G_nx.add_edge(v_id, neighbor, weight=weight)

pos = nx.spring_layout(G_nx, seed=42)
edge_labels = nx.get_edge_attributes(G_nx, 'weight')

plt.figure(figsize=(8, 6))
nx.draw(G_nx, pos, with_labels=True, node_color='skyblue', 
        node_size=1500, font_size=12, font_weight='bold', arrows=True)
nx.draw_networkx_edge_labels(G_nx, pos, edge_labels=edge_labels, font_color='red')
plt.title("Graph Visualization with NetworkX", fontsize=14)
plt.show()
''')
`
    },
    'graph_complete': {
        name: 'Graph (Complete Implementation)',
        description: 'Implementación completa de grafos con BFS, DFS y más operaciones.',
        author: 'Profesor Jotarlo',
        code: `# Complete Graph Implementation
# With BFS and DFS traversals

from collections import deque

class Vertex:
    def __init__(self, id):
        self.id = id
        self.adjacent = {}
        self.visited = False
        self.color = 'white'
        self.distance = float('inf')
        self.predecessor = None

    def add_neighbor(self, neighbor, weight=0):
        self.adjacent[neighbor] = weight

    def get_connections(self):
        return self.adjacent.keys()

    def get_weight(self, neighbor):
        return self.adjacent.get(neighbor, None)

    def __repr__(self):
        return f"Vertex({self.id})"


class Graph:
    def __init__(self):
        self.vertices = {}
        self.num_vertices = 0

    def add_vertex(self, key):
        self.num_vertices += 1
        new_vertex = Vertex(key)
        self.vertices[key] = new_vertex
        return new_vertex

    def get_vertex(self, key):
        return self.vertices.get(key)

    def add_edge(self, from_key, to_key, weight=0):
        if from_key not in self.vertices:
            self.add_vertex(from_key)
        if to_key not in self.vertices:
            self.add_vertex(to_key)
        self.vertices[from_key].add_neighbor(to_key, weight)

    def bfs(self, start):
        """Breadth-First Search"""
        # Reset all vertices
        for v in self.vertices.values():
            v.color = 'white'
            v.distance = float('inf')
            v.predecessor = None

        start_vertex = self.vertices[start]
        start_vertex.color = 'gray'
        start_vertex.distance = 0
        
        queue = deque([start_vertex])
        result = []

        while queue:
            current = queue.popleft()
            result.append(current.id)
            
            for neighbor_id in current.get_connections():
                neighbor = self.vertices[neighbor_id]
                if neighbor.color == 'white':
                    neighbor.color = 'gray'
                    neighbor.distance = current.distance + 1
                    neighbor.predecessor = current
                    queue.append(neighbor)
            
            current.color = 'black'
        
        return result

    def dfs(self, start):
        """Depth-First Search"""
        for v in self.vertices.values():
            v.visited = False
        
        result = []
        self._dfs_visit(start, result)
        return result

    def _dfs_visit(self, vertex_id, result):
        vertex = self.vertices[vertex_id]
        vertex.visited = True
        result.append(vertex_id)
        
        for neighbor_id in vertex.get_connections():
            if not self.vertices[neighbor_id].visited:
                self._dfs_visit(neighbor_id, result)

    def __repr__(self):
        return f"Graph with {self.num_vertices} vertices"


# Test
g = Graph()
edges = [
    ('A', 'B', 1), ('A', 'C', 2),
    ('B', 'D', 3), ('B', 'E', 4),
    ('C', 'F', 5), ('D', 'G', 6),
    ('E', 'H', 7)
]

for from_v, to_v, weight in edges:
    g.add_edge(from_v, to_v, weight)

print(f"Graph: {g}")
print(f"\\nBFS from 'A': {g.bfs('A')}")
print(f"DFS from 'A': {g.dfs('A')}")
`
    }
};

function initPlayground() {
    // Initialize folder toggles
    document.querySelectorAll('.folder-toggle').forEach(toggle => {
        toggle.addEventListener('click', function() {
            this.classList.toggle('open');
            const contents = this.nextElementSibling;
            if (contents) {
                contents.classList.toggle('open');
            }
        });
    });

    // Initialize file buttons
    document.querySelectorAll('.file-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const fileId = this.getAttribute('data-file');
            loadFile(fileId);
            
            // Update active state
            document.querySelectorAll('.file-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Initialize Monaco Editor
    if (document.getElementById('monaco-editor')) {
        loadMonacoEditor();
    }

    // Initialize run button
    const runBtn = document.getElementById('runBtn');
    if (runBtn) {
        runBtn.addEventListener('click', runCode);
    }

    // Initialize copy button
    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', copyCode);
    }

    // Initialize clear output button
    const clearBtn = document.getElementById('clearOutputBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearOutput);
    }

    // Check URL hash and load corresponding file
    const hash = window.location.hash.substring(1);
    if (hash && codeFiles[hash]) {
        loadFile(hash);
    } else {
        // Load first file by default
        loadFile('binary_search');
    }
}

function loadMonacoEditor() {
    // Load Monaco Editor from CDN
    require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs' }});
    
    require(['vs/editor/editor.main'], function() {
        // Define custom theme
        monaco.editor.defineTheme('futuristicDark', {
            base: 'vs-dark',
            inherit: true,
            rules: [
                { token: 'keyword', foreground: 'f72585', fontStyle: 'bold' },
                { token: 'string', foreground: 'ffcc00' },
                { token: 'number', foreground: '00ff88' },
                { token: 'comment', foreground: '6272a4', fontStyle: 'italic' },
                { token: 'function', foreground: '00f0ff' },
                { token: 'variable', foreground: 'ffffff' },
                { token: 'type', foreground: '7b2ff7' }
            ],
            colors: {
                'editor.background': '#1e1e2e',
                'editor.foreground': '#ffffff',
                'editorCursor.foreground': '#00f0ff',
                'editor.lineHighlightBackground': '#2a2a4e',
                'editorLineNumber.foreground': '#6272a4',
                'editor.selectionBackground': '#44475a',
                'editor.inactiveSelectionBackground': '#3d3d5c'
            }
        });

        monacoEditor = monaco.editor.create(document.getElementById('monaco-editor'), {
            value: codeFiles['binary_search'].code,
            language: 'python',
            theme: 'futuristicDark',
            fontSize: 14,
            fontFamily: "'JetBrains Mono', monospace",
            minimap: { enabled: true },
            automaticLayout: true,
            scrollBeyondLastLine: false,
            padding: { top: 16, bottom: 16 },
            lineNumbers: 'on',
            renderLineHighlight: 'all',
            cursorBlinking: 'smooth',
            cursorSmoothCaretAnimation: 'on',
            smoothScrolling: true,
            tabSize: 4,
            wordWrap: 'on'
        });

        // Update current file
        currentFile = 'binary_search';
        updateDescription();
    });
}

function loadFile(fileId) {
    const file = codeFiles[fileId];
    if (!file) return;

    currentFile = fileId;

    // Update editor content
    if (monacoEditor) {
        monacoEditor.setValue(file.code);
    }

    // Update tab name
    const tabName = document.getElementById('currentFileName');
    if (tabName) {
        tabName.textContent = fileId + '.py';
    }

    // Update description
    updateDescription();

    // Update URL hash
    window.location.hash = fileId;
}

function updateDescription() {
    const descContainer = document.getElementById('codeDescription');
    if (!descContainer || !currentFile) return;

    const file = codeFiles[currentFile];
    descContainer.innerHTML = `
        <h3><i class="fas fa-info-circle"></i> ${file.name}</h3>
        <p>${file.description}</p>
        <p><strong>Autor:</strong> ${file.author}</p>
    `;
}

function runCode() {
    const outputContent = document.getElementById('outputContent');
    if (!outputContent) return;

    const code = monacoEditor ? monacoEditor.getValue() : '';
    
    outputContent.innerHTML = `<span class="info">[${new Date().toLocaleTimeString()}] Ejecutando código...</span>\n\n`;
    
    // Simulate code execution
    // In a real implementation, you would send this to a backend Python executor
    // or use something like Pyodide for browser-based Python execution
    
    setTimeout(() => {
        outputContent.innerHTML += `<span class="info">[Info] Este playground es solo para visualización y edición del código.</span>\n`;
        outputContent.innerHTML += `<span class="info">[Info] Para ejecutar el código, copia el contenido y ejecútalo en:</span>\n`;
        outputContent.innerHTML += `  • <a href="https://colab.research.google.com" target="_blank" class="success">Google Colab</a>\n`;
        outputContent.innerHTML += `  • <a href="https://www.online-python.com" target="_blank" class="success">Online Python</a>\n`;
        outputContent.innerHTML += `  • Tu entorno local de Python\n\n`;
        outputContent.innerHTML += `<span class="success">[✓] Código listo para copiar</span>`;
    }, 500);
}

function copyCode() {
    const code = monacoEditor ? monacoEditor.getValue() : '';
    navigator.clipboard.writeText(code).then(() => {
        const copyBtn = document.getElementById('copyBtn');
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
        setTimeout(() => {
            copyBtn.innerHTML = originalHTML;
        }, 2000);
    });
}

function clearOutput() {
    const outputContent = document.getElementById('outputContent');
    if (outputContent) {
        outputContent.innerHTML = '<span class="info">Output cleared. Press "Ejecutar" to run code.</span>';
    }
}
