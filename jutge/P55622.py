"""
 P55622 
Write a program that reads a number and prints its number of digits.

Input

Input consists of a natural number n.

Output

Print the number of digits of n.
"""

from easyinput import read


entrada = read(int)
cadena = str(entrada)
print("The number of digits of ", entrada ," is ",len(cadena),".", sep="")    