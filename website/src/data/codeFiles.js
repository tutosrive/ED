// Code files from the ED repository
// Organized by sections

export const codeFiles = {
  // Workshop 1 - Recursion
  'binary_search': {
    id: 'binary_search',
    name: 'Binary Search',
    filename: 'binary_search.py',
    category: 'workshop',
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
    id: 'binary_search_random',
    name: 'Binary Search (Random Tests)',
    filename: 'binary_search_random.py',
    category: 'workshop',
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
    id: 'factorial_stack',
    name: 'Factorial (Stack Recursion)',
    filename: 'factorial_stack.py',
    category: 'workshop',
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
    id: 'factorial_tail',
    name: 'Factorial (Tail Recursion)',
    filename: 'factorial_tail.py',
    category: 'workshop',
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
    id: 'list_sum',
    name: 'Sum of List Elements',
    filename: 'list_sum.py',
    category: 'workshop',
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
    id: 'fibonacci_tail',
    name: 'Fibonacci (Tail Recursion)',
    filename: 'fibonacci_tail.py',
    category: 'workshop',
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
    id: 'fibonacci_memoization',
    name: 'Fibonacci (Memoization)',
    filename: 'fibonacci_memo.py',
    category: 'workshop',
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
    id: 'bst_teacher',
    name: 'BST (Teacher - Jotarlo)',
    filename: 'bst_teacher.py',
    category: 'teacher',
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
    id: 'bst_homework',
    name: 'BST Search & Remove (Homework)',
    filename: 'bst_search_remove.py',
    category: 'homework',
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
    id: 'graph_basic',
    name: 'Graph (Basic)',
    filename: 'graph_basic.py',
    category: 'teacher',
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
    id: 'graph_visualization',
    name: 'Graph Visualization (NetworkX)',
    filename: 'graph_visualization.py',
    category: 'teacher',
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
    id: 'graph_complete',
    name: 'Graph (Complete Implementation)',
    filename: 'graph_complete.py',
    category: 'teacher',
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

export const categories = {
  workshop: {
    id: 'workshop',
    name: 'Taller 1 - Recursividad',
    icon: '📝',
    color: '#00f0ff'
  },
  teacher: {
    id: 'teacher',
    name: 'Explicaciones - Profesor',
    icon: '👨‍🏫',
    color: '#7b2ff7'
  },
  homework: {
    id: 'homework',
    name: 'Tareas',
    icon: '📚',
    color: '#f72585'
  }
};

export default codeFiles;
