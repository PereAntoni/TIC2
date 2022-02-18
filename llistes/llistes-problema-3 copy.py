"""
Volem calcular el total de una comanda d’articles. La llista durà el preu, quantitat i, si n’hi ha, descompte de cada item.

    entrada: [[2,3.5],[4,12.1],[1,3.5]]
    sortida: 48.9
    entrada: [[2,3.5,10],[4,12.1],[1,3.5]]
    sortida: 48.2


"""

def total(llista):
    t=0
    for i in llista:
        print (i)

    return t

def printTotal(l):
    print("La llista ", l , " suma total: ", total(l))
    




entrada= [[2,3.5],[4,12.1],[1,3.5]]
printTotal(entrada)