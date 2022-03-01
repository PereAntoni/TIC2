"""
Write a program such that, given a number n, prints a “rhombus of size n”.

Input

Input consists of a natural number n ≥ 1.

Output

Print 2*n − 1 lines, as shown in the examples.
"""

from easyinput import read


longitud = read(int)
b = 0
for a in range(longitud):
    
    print('*')