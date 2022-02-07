"""

"""

from easyinput import read

def giraCadena(c):
    
    longitud = len(c)
    sortida=''
    for i in range(longitud - 1,-1,-1):
        sortida += c[i]
    return sortida

entrada = read(int)
#cadena s'ha de transformar a binari
binari = bin(entrada).replace("0b", "")
cadena = giraCadena(str(binari)) 
print(cadena)
