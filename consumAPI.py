#El programa ha de llegir una paraula d'un llistat de paraules
#aquest es un canvib     

import requests
import json
import random

resp = requests.get('http://api.gimnesia.net/especie/read.php')
especie_dict = json.loads(resp.content)



# Output: ['English', 'French']
especie=especie_dict['records'][random.randint(0, 99)]
print(especie['nom'])
print(especie['cientific'])

print("El diccionari té: " + str(len(especie_dict['records'])) + " entrades")

for especie in especie_dict['records']:
    print ("codi:",especie['codi'], "nom:", especie['nom'])

