# -*- coding: utf-8 -*-
cadena = ['Aglà', 'Granot arbori', 'Bolet de fems o de tinta', 'Corb marí', 'Zooplàncton', 'Ferrassa']
cadena2 = [1,4,5,6,7,3]
nom =  'Corb marí'


def cercaMax(cadena):
    max=0
    for i in cadena:
        if max < i:
            max = i
    return max

def cercaMax2(cadena):
    m = cadena[0]
    p = 0
    z = 0
    for i in cadena:
        if m < i:
            m = i
            z = p
        p += 1        
    return z

def cercaLletra(cadena,lletra):
    nombreLletres=0
    lletraCercada=0
    for i in cadena:
        for j in i:
            if j == lletra:
                lletraCercada += 1
            nombreLletres += 1
    print ("El nombre de lletres de la cadena és " + str(nombreLletres) + ", aparicions de la lletra ", lletra, " és ", str(lletraCercada))
    nombreLletres = 0
    for i in cadena:
        for l in i:
            if lletra == l:
                nombreLletres += 1
    return nombreLletres;


#trobar una cadena
a = 0
for i in cadena:
    if i == nom:
        print(a)
    a +=1

#trobar una cadena
a = 5
for i in cadena:
    if i == nom:
        print(a)
    a +=2

a = 0
for i in cadena:
    print("bon dia")

a = 0
print(cercaMax2(cadena), "---",cercaMax(cadena2))

cercaLletra(cadena,'b')

a='j'
print("Cercam lletra ", a, ", dins la cadena, ni hi ha : ", cercaLletra(cadena,a))

