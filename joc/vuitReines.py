"""
PROBLEMA DE LES VUIT REINES
1. l'estructura és una llista que representa la posició de cada reina fila, columna.
2. s'usa bactraking recursiu per calcular les possibilitats.
"""
nombre = 8

def correcte(llista):
    #funcio que mira si es correcte la colocació de les reines
    if llista[-1] in llista[0:-2]: return False

    
    return True

def inici(llista,p):
    
    for i in range(p,nombre,1):
        llista.append(i)
        for j in range(nombre):
            llista.append(j)
            if correcte(llista):
                print("El p:",str(p), "calculam la llista", llista)
                inici(llista,i+1)
    return (llista)

l = []
inici(l,0)