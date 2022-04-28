
max = 4

def llistaBuida(l,n):
    for i in range(n):
        l.append(-1)

def coloca(l,f,c):
    #colocam una pesa a la fila f icolumna c
    l[f] = c 
    return l

def recorrer(l,p,n):
# llista: la llista que es genra 
# posicio actual: posició on es genera actualment
# nombre a tractar a la posició p
    print(l)
    for i in range (max):
        coloca(l,p,i)
        recorrer(l,p+1,0)
    print(l)

llista=[]
n=5
for i in range(n):
    llistaBuida(llista,n)
    recorrer(llista,0,0)

print(coloca(llista,1,2))
#recorrer(llista,0,0)
