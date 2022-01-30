"""
P31170

Write a program that reads a number n and prints 
the “multiplication table” of n.

Input

Input consists of a natural number n between 1 and 9.

Output

Print the “multiplication table” of n.
"""

x = int(input())
sortida = ''
for i in range(1, 11):
    r = i*x
    if sortida == '':
        sortida += str(x) + "*" + str(i) + " = " + str(r)
    else:
        sortida += '\n' + str(x) + "*" + str(i) + " = " + str(r)
print(sortida)
