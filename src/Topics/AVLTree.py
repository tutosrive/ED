class Node:
    def __init__(self, key, value=None):
        self.key = key
        self.value = value
        self.height = 1  # Altura inicial del nodo
        self.left = None
        self.right = None

class AVLTree:
    def __init__(self):
        self.root = None

    # Calcula la altura del nodo
    def get_height(self, node):
        return node.height if node else 0

    # Calcula el factor de balance
    def get_balance(self, node):
        if not node:
            return 0
        return self.get_height(node.left) - self.get_height(node.right)

    # Rotación a la derecha
    def rotate_right(self, z):
        y = z.left
        T3 = y.right
        y.right = z
        z.left = T3

        z.height = 1 + max(self.get_height(z.left), self.get_height(z.right))
        y.height = 1 + max(self.get_height(y.left), self.get_height(y.right))
        return y

    # Rotación a la izquierda
    def rotate_left(self, z):
        y = z.right
        T2 = y.left
        y.left = z
        z.right = T2

        z.height = 1 + max(self.get_height(z.left), self.get_height(z.right))
        y.height = 1 + max(self.get_height(y.left), self.get_height(y.right))
        return y

    # Inserta un nodo en el árbol
    def insert(self, root, key, value=None):
        if not root:
            return Node(key, value)
        elif key < root.key:
            root.left = self.insert(root.left, key, value)
        elif key > root.key:
            root.right = self.insert(root.right, key, value)
        else.right))

        # Obtener el factor de balance
        balance = self.get_balance(root)

        # Rotaciones para balancear el árbol si es necesario
        if balance > 1 and key < root.left.key:  # Rotación derecha
            return self.rotate_right(root)
        if balance < -1 and key > root.right.key:  # Rotación izquierda
            return self.rotate_left(root)
        if balance > 1 and key > root.left.key:  # Rotación izquierda-derecha
            root.left = self.rotate_left(root.left)
            return self.rotate_right(root)
        if balance < -1 and key < root.right.key:  # Rotación derecha-izquierda
            root.right = self.rotate_right(root.right)
            return self.rotate_left(root)

        return root

    # Encuentra el nodo con el valor más pequeño
    def get_min_value_node(self, node):
        if node is None or node.left is None:
            return node
        return self.get_min_value_node(node.left)

    # Elimina un nodo del árbol
    def delete(self, root, key):
        # Caso base
        if not root:
            return root

        # Recorrer para encontrar el nodo a eliminar
        if key < root.key:
            root.left = self.delete(root.left, key)
        elif key > root.key:
            root.right = self.delete(root.right, key)
        else:
            # Caso 1: Nodo con un solo hijo o sin hijos
            if not root.left:
                return root.right
            elif not root.right:
                return root.left

            # Caso 2: Nodo con dos hijos
            temp = self.get_min_value_node(root.right)
            root.key = temp.key
            root.value = temp.value
            root.right = self.delete(root.right, temp.key)

        # Actualizar altura
        root.height = 1 + max(self.get_height(root.left), self.get_height(root.right))

        # Balancear el nodo
        balance = self.get_balance(root)

        # Rotaciones
        if balance > 1 and self.get_balance(root.left) >= 0:  # Izquierda
            return self.rotate_right(root)
        if balance > 1 and self.get_balance(root.left) < 0:  # Izquierda-Derecha
            root.left = self.rotate_left(root.left)
            return self.rotate_right(root)
        if balance < -1 and self.get_balance(root.right) <= 0:  # Derecha
            return self.rotate_left(root)
        if balance < -1 and self.get_balance(root.right) > 0:  # Derecha-Izquierda
            root.right = self.rotate_right(root.right)
            return self.rotate_left(root)

        return root

    # Búsqueda de un nodo
    def search(self, root, key):
        if root is None or root.key == key:
            return root
        if key < root.key:
            return self.search(root.left, key)
        return self.search(root.right, key)

    # Interfaz pública para insertar
    def add(self, key, value=None):
        self.root = self.insert(self.root, key, value)

    # Interfaz pública para eliminar
    def remove(self, key):
        self.root = self.delete(self.root, key)

    # Interfaz pública para buscar
    def find(self, key):
        node = self.search(self.root, key)
        return node.value if node else None

# Casos de prueba
avl = AVLTree()
print("=== Agregar nodos ===")
avl.add(10, "valor10")
avl.add(20, "valor20")
avl.add(30, "valor30")
avl.add(40, "valor40")
avl.add(50, "valor50")
avl.add(25, "valor25")
print("Árbol AVL creado con inserciones.")

print("\n=== Buscar nodos ===")
print("Buscar 20:", avl.find(20))  # valor20
print("Buscar 25:", avl.find(25))  # valor25
print("Buscar 100:", avl.find(100))  # None

print("\n=== Eliminar nodos ===")
avl.remove(30)
print("Nodo 30 eliminado.")
avl.remove(40)
print("Nodo 40 eliminado.")
print("Buscar 30:", avl.find(30))  # None
print("Buscar 40:", avl.find(40))  # None