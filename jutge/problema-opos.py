"""
"""

amics = dict()
amics['angel']  =['pep','miquel','aina','maria']

amics['pep']    =['miquel','aina','maria','joan']
amics['miquel'] =['cati','pere','jaume']
amics['aina']  =['maria','maria','pere']
amics['maria']  =['guillem','roser','cati']

amics['joan']  =['guillem','roser','cati']
amics['pere']   =[]
amics['bernat']   =["august"]

amics['guillem']=['guillem','roser','angel']
amics['roser']  =['guillem','roser','bernat']
amics["bernar"] = ["august"]
amics['cati']  =['guillem','roser','biel']
amics['jaume']  =['angel','roser','cati']
amics['biel'] = []
amics['august'] = []


cercats=[]


def amicsDe(a):
    #funcio que retorna tots els amics de a
    #petició a l'API de la llista dels amics de a
    return amics[a]

def teLlenguatge(a):
    #petició a l'API de la llista dels llenguatges de a
    #cerca de la llista dels llenguatges
    if a=='guillem': return True
    return False

def cercaLlenguatge(llista,llenguatge,grau):
    #llista per la cerca dins del pròxim grau
    llistaNova=[]
    print('Iniciant cerca grau ', grau , ":", end='')
    for i in llista:
        #Miram si ja està cercat
        print( i, end=', ')
        if i in cercats: 
            #print ('Botant usuari:', i )
            continue
        #cercam si l'usuari i te el llenguatge
        if teLlenguatge(i):
            print() 
            print("-------->L'usuari ", i, "té el llenguatge", llenguatge, "amb el grau", grau)
            return i
        else:
            #afegim dins els cercats
            cercats.append(i)
            #afegim els amics de i dins la llista nova
            llistaNova += amicsDe(i)
    print()
    print("no s'ha trobat el llenguatge")
    print("La pròxima llista és: ", llistaNova)
    if len(llistaNova)>0:
        return cercaLlenguatge(llistaNova,llenguatge,grau + 1)
    else:
        return "Cap usuari"
#organització de les peticions

llistaInicial = amicsDe('angel')
a = cercaLlenguatge(llistaInicial,'java',1)
print("s'ha cercat sobre ", cercats)
print(a)