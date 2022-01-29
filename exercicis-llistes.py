x=[3,8,7,0,5,5,2,1]
print(x)
#mostra per pantalla: [3, 8, 7, 0, 5, 5, 2, 1]
print(x[3])
#mostra per pantalla: 0
print(x[3+1])
#mostra per pantalla: 5
i=5
print(x[i])

for i in range(8):
    print(x[i])

x= list("38705521")
print((x))

x=["som a la posició 0", 4, 2 , ["1",2], "som a la posició 4"]
print (x)

llista=[1,2.9,"Gimnèsia", [4,3],5]
print (llista[0]) # 1
print (llista[1]) # 2.9
print (llista[2]) # Gimnèsia
print (llista[3]) # [4,3]
print (llista[3][0]) # 4
print (llista[3][1]) # 3
print (llista[1:3]) # [2.9, 'Gimnèsia']
print (llista[1:6]) # [2.9,"Gimnèsia", [4,3],5]
print (llista[1:6:2]) # [2.9, [4, 3]]