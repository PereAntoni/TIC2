"""
Aplicació: Castells i catapultes

Aquesta lliçó presenta una simple modelació amb booleans de l’èxit o el fracàs d’un atac a un castell medieval.
El problema

Un castell medieval està assetjat. Disposem dels valors de l’alçada de les muralles, i també 
de l’alçada de les escales dels atacants. A més, sabem si els atacants tenen o no catapultes, 
i quantes pedres grosses poden disparar.

Les regles que regeixen l’èxit de l’atac són:

    Si els atacants tenen escales més altes que les muralles del castell, l’atac té èxit.
    Si els atacants tenen alguna catapulta i almenys deu pedres grosses, l’atac té èxit.

En qualsevol altre cas, l’atac fracassa.
"""



def atac(murada,escala,pedres):
    if (escala>murada):
        return True
    if (pedres>10):
        return True
    return False


print(atac(2,3,5))
print(atac(12,3,5))
print(atac(4,3,15))
