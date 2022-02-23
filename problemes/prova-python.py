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

