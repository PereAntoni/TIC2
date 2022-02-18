"""
Una aplicació de seguretat controlaMaquina reb  una llistes de valors que indiquen les temperatures d’una màquina. 
A cada rebuda de dades l’aplicació ha de imprimir el valor màxim i el mínim. 
També ha d’imprimir el nombre de vegades que ha superat el valor 3 (sols una vegada superat i desprès baixa i el torna superar, són dos pics).
Exemples de valors:

    Entrada de valors: [1,2,4,4,5,6,7,1,2,5]
    Sortida de valors: “màxim: 7, mínim: 1, variat: 2
    Entrada de valors: [1,4,1,4,1,4]
    Sortida de valors: “màxim: 4, mínim: 1, variat: 3
"""




def controlaMaquina(llista):
    maxim=0
    minim=1000
    supera=0
    superat=False
    for i in llista:
        if maxim<i:
            maxim=i
        if minim>i:
            minim=i
        if(not superat) and (i>3):
            superat=True
            supera+=1
        if(superat) and (i<3):
            superat=False
    print("-He analitzat la llista ", llista)
    print("el màxim és: ", maxim,". El mínim: ", minim, ", supera: ", supera )



entrada=[1,2,4,4,5,6,7,1,2,5]
controlaMaquina(entrada)

entrada=[1,4,1,4,1,4]
controlaMaquina(entrada)


entrada=[3,4,1,2,3,4,5,6,7,8,9,8,1,4,6,2,4,2,4,1,4,1,4,1,4]
controlaMaquina(entrada)