"""
SELECTION SORT
https://pythontutor.com/

"""

def selecionSort(matriu):
    mo=[]
    # repetim per totes les posicions de la matriu
    while len(matriu)>0:
        min=matriu[0]
        pos = 0
        for i in range(len(matriu)):
            if matriu[i] < min: 
                min = matriu[i]
                pos = i
        mo.append(matriu.pop(pos))
    return mo

def sortBubble(matriu):
    canvi = 1
    while canvi > 0:
        canvi = 0
        for i in range(len(matriu) - 1):
            if(matriu[i]>matriu[i + 1]):
                matriu[i],matriu[i+1]=matriu[i+1],matriu[i]
                canvi += 1 #tenim el nombre de canvis que s'han efectuat
                #print(matriu)
            #print(canvi)
    return matriu

def sortInsertion(matriu):
    #de 1 fins al final
    for i in range(1,len(matriu)):
        if matriu[i]<matriu[i-1]:
            #print (i,":",matriu[i],"<",matriu[i-1])
            valorCanvi = matriu.pop(i)
            for j in range(i-1,0,-1):
                #print("comparant",j,":",matriu[i],matriu[j]," / ",end="")
                if valorCanvi < matriu [j]:
                    treu = matriu.pop(j)
                    matriu.insert(j+1,valorCanvi)
                    print("---->",matriu)
                else: break
    return matriu

m = [4,3,2,6,5,4,5,3,12,3,45,0,7,6,5,4,6]
print(m)
print("selecion Sort:",selecionSort(m))

m = [4,3,2,6,5,4,5,3,12,3,45,0,7,6,5,4,6]
print("bubble   sort:",sortBubble(m))

m = [4,3,2]
print("insertion   sort:",sortInsertion(m))