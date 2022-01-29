#El programa ha de llegir una paraula d'un llistat de paraules

import requests
import json
import random

resp = requests.get('http://api.gimnesia.net/especie/read.php')
person_dict = json.loads(resp.content)



# Output: ['English', 'French']
especie=person_dict['records'][random.randint(0, 99)]
print(especie['nom'])
print(especie['cientific'])
