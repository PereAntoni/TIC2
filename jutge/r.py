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

n = 7

def backGenera(llista):
    if len(llista) == (n-1):
        print (llista)
    else:
        for j in range(n):
            if posicioValida(llista,j):
                llista.append(j)
                #print(llista)
                #print(llista)
                backGenera(llista)
    
def genera():
    print("he entrat a genera")
    for i in range(n):
        #print(str(i))
        llista=[]
        llista.append(i)
        backGenera(llista)
    
        
genera()
print(posicioValida([1,3,5,0,2],4))
