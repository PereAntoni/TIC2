"""
Volem calcular el total de una comanda d’articles. La llista durà el preu, quantitat i, si n’hi ha, descompte de cada item.

    entrada: [[2,3.5],[4,12.1],[1,3.5]]
    sortida: 48.9
    entrada: [[2,3.5,10],[4,12.1],[1,3.5]]
    sortida: 48.2


"""

def mitjana(llista):
    t=0
    for i in llista:
        t += i
    return t/len(llista)

def printMitjana(l):
    print("La llista ", l , " mitjana: ", mitjana(l))
    




entrada= [1,32,4,56,3,12,3,54,6,3,2,1,34,4,2,1]
printMitjana(entrada)

entrada= [7,6,5,4,5,4,3,4,6,7,8,9]
printMitjana(entrada)