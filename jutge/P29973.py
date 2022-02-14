"""
Write a program that, given a number n, prints a “triangle of size n”.

Input

Input consists of a natural number n.

Output

Print n lines, in such a way that the i-th line contains i asterisks.x
P29973
"""

from easyinput import read

entrada = read(int)
cadena = ''
for i in range(entrada):
    cadena += '*'
    print(cadena)
