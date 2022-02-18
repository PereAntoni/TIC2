"""
Write a program that reads sequences with all the numbers between 1 and n but one, and tells which one is missing.

Input

Input consists of several sequences. Every sequence begins with a number n between 1 and 104 followed by n − 1 natural numbers. 
Every number between 1 and n appears exactly once, except one of them, which is missing.

Output

For every sequence, print the missing number.


Input

5   3 2 1 5
2   1
10  5 4 6 7 1 2 9 10 8

Output

4
2
3
"""

from easyinput import read

numberN = read(int)
llistaEntrada=[]
while numberN is not None:
    llistaEntrada=[]
    for index in range(numberN-1):
        nou = read(int)
        llistaEntrada.append(nou)
    for (index) in range(1,numberN + 1):
        trobat = llistaEntrada.count(index) 
        if trobat!=1:
            print(index)
    numberN = read(int)






