#El programa ha de llegir una paraula d'un llistat de paraules

import requests
import json
import random
import operator

#clients_sort = sorted(clients.items(), key=operator.itemgetter(1), reverse=True)
#cream el diccionari a partir del consum de l'api de gimnesia

resp = requests.get('http://api.gimnesia.net/especie/read.php')
person_dict = json.loads(resp.content)

#person_dict = sorted(person_dict.records(),key=operator.itemgetter(1),reverse=False)
#person_dict = sorted(person_dict)
#print(person_dict)
# Output: ['English', 'French']
def getRandom():
    especie=person_dict['records'][random.randint(0, 92)]
    return especie["nom"]


def llistatTots():
    for i in person_dict['records']:
        print (i["codi"], ":",i["nom"])
#print(especie['nom'])
#print(especie['cientific'])



for i in range(25):
    llista=[]
    for j in range(7):
        llista.append(getRandom())
    print(llista)

llistatTots()

