"""

Game of life (1)
P26100

Statement
 

pdf   zip

The English mathematician John Conway invented in 1970 the following game: Imagine a matrix with n rows and m columns. We consider neighbor positions to a given position the (at most, eight) adjacent positions, either horizontally, vertically or diagonally. Every moment, each position is either empty or it contains a bacterium. The rules are:

    An empty position at time t will contain a bacterium at time t + 1 if and only if at time t it had exactly three neighbor bacteria.
    An occupied position at time t will contain a bacterium at time t + 1 if and only if at time t it had two or three neighbor bacteria. 

Write a program that, for every given matrix, prints it at the next moment of time.

Input


Output

For each case, print the matrix corresponding to the next moment of time using the same format of the input (do not print n and m). Separate matrices with an empty line.
"""

from easyinput import read

n = read(int)
m = read(int)

n=2
m=3
cadena="B.B.B."

#LLEGIM LES DADES D'ENTRADA
tauler = []
for i in range(n):
    fila_nova =[]
    for j in range(m):
        fila_nova.append(read())
    tauler.append(fila_nova)
print(tauler)