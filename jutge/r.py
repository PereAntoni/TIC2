def diagonal(llista,nou):
#Diagonal retorna True si ocupa una posició 
#que està amenaçada per una altra reina.
    filaNova = nou
    columnaNova= len(llista)
    columna = 0
    for fila in llista:
        if abs(filaNova-fila) == abs(columnaNova-columna): 
            return True
        columna += 1
    return False

def posicioValida(llista, nou):
#la llista té les reines colocades en posició vàlida
#es proposa un altre element a la darrera posició.
# si pasa els tres condicionals, podrà colocar la peça.
    #print("Mirant ", llista)
    if nou in llista: return False
    if diagonal(llista, nou): return False
    return True

n = 5

def backGenera(llista,p):
    print(llista,p)
    if len(llista) == (n-1):
        print (llista)
    else:
        for j in range(p,n):
            if posicioValida(llista,j):
                llista.append(j)
                backGenera(llista,j)
    
def genera():
    print("he entrat a genera")
    for i in range(n):
        #print(str(i))
        llista=[]
        llista.append(i)
        backGenera(llista,0)
    
        
#genera()
#print(posicioValida([4,0,3,5,7,1,6],2))


def g2():
    llista =[]
    for i in range(5):
        llista.append(i)
        for j in range(5):
            llista.append(j)
        print(llista)
        llista=[]

g2()