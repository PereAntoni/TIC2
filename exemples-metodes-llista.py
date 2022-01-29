#EXEMPLES AMB ELS MÈTODES LLISTA.

llista=[1,2.9,"Gimnèsia", [4,1],5,5]

#APPEND
llista.append("afegim item")
print("- Metode append:", llista)

#COUNT
n=llista.count(1)
print("- Mètode count: El nombre 1 surt ", n , " vegades")

n=llista.count(5)
print("- Mètode count: El nombre 5 surt ", n , " vegades")

#INDEX
posicio=llista.index(5)
print("- Mètode index: L'element 5 es troba a la posició", posicio)

#INSERT
llista.insert(3,"som item nou")
print("- Mètode insert:", llista)

#LEN
print("- Mètode len: la longitud de la llista és", len(llista))

#POP
llista.pop()
print("- Mètode pop: La llista ara és:", llista)

#REMOVE
llista.remove(2.9)
print("- Mètode remove: La llista ara és:", llista)

#REVERSE
llista.reverse()
print("- Mètode reverse: llista girada: ", llista)

#SORT
llistaInt=[3,4,2,8,6,5,4,3]
llistaInt.sort()
print("- Mètode sort: llista ordenada", llistaInt)
