'''
EXEMPLE DE FUNCIONS
'''

def suma(a,b):
    return int(a) + int(b)

def sumaLlista(llista):
#Funció que retornarà la suma d'una llista
#passada per paràmetre.
    a= 0
    for e in llista:
        a=a+e
    return a


#programa que crida la funció 
#i imprimeix el resultat.
llista1=[2,3,12,5,67,8,9,12,3,4,5,6,7]
llista2=[2,3,43,15,67,7,3,56,43]
llista3=[8,7,6,55,4324,5,8,0]
print("La suma de la llista és: ",sumaLlista(llista1))
print("La suma de la llista és: ",sumaLlista(llista2))
print("La suma de la llista és: ",sumaLlista(llista3))

print(suma("2",3))