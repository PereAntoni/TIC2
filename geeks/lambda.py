

from audioop import mul


mi_lista = [1, 2, 3, 4, 5, 6]
lista_nueva = list(map(lambda x: x * 2, mi_lista))
print(lista_nueva)

llista2=list(lambda x: x*3)
print(llista2)

def multiplicarper(n):
    return lambda x: x * n

duplicar = multiplicarper(2)

llista3= list(map(lambda x: duplicar(x),mi_lista))
print(llista3)