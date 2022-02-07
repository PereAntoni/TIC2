"""
Write a program that reads a number and prints it reversed.

Input

Input consists of a natural number.

Output

Print the number reversed, with as many zeros at its left as it has at its right.

P50327 
"""

from easyinput import read


entrada = read(int)
cadena = str(entrada)
longitud = len(cadena)
sortida=''
for i in range(longitud - 1,-1,-1):
    sortida += cadena[i]
print(sortida)
