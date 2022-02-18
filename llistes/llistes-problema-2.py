"""
Volem saber si una paraula és capicua:

    entrada: “capicua”, sortida: no és capicua
    entrada: “anna”, sortida: és capicua.
"""

def capicua(paraula):
    
    r= True             #EN PRINCIPI CONSIDERAM QUE LA PARAULA SÍ ÉS CAPICUA
    j = len(paraula) - 1    #la longitud de la paraula per recorrer d'un cap a l'altre
    
    for i in paraula:
        if i != paraula[j]:
            r=False
        j-=1

    return r

def printCapicua(paraula):
    print("La paraula ", paraula , end=" ")
    if (capicua(paraula)):
        print("és capicua")
    else:
        print("No és capicua")
    return True




entrada="caac"
printCapicua(entrada)

entrada="caca"
printCapicua(entrada)


entrada="123456654321"
printCapicua(entrada)