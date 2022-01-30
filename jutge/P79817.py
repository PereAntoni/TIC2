"""
P79817
Write a program to compute powers.

Input

Input consists of several pairs of integer numbers a and b. Assume b ≥ 0.

Output

For every pair a,b, print ab. Supose, as usual, that 00 = 1.
"""

from easyinput import read


def pow(x, y):
    resultat = 1
    while y > 0:
        y -= 1
        resultat = resultat * x
    return resultat


sortida = ''
x, y = read(int, int)

while x is not None:
    print(pow(x, y))
    x, y = read(int, int)

