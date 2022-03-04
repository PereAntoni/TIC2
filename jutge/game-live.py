from easyinput import read

def isBacteri(e,px,py):
    #print("-->adjacent: ", px,py)
    if px>-1 and py>-1:
        try: 
            if ((e[py][px])=='B'): 
                #print("-hi ha un bacteri a ", px , py)
                return True 
        except:
            return False
    return False

def adjacents(e,px,py):
    #adjacents ens retorna el nombre de B's
    #adjacents a la posició px,py
    nB = 0
    #print ("MIRANT ADJACENTS ", px, py)
    if isBacteri(e,px-1,py-1): nB += 1
    if isBacteri(e,px-1,py): nB += 1
    if isBacteri(e,px-1,py+1): nB += 1

    if isBacteri(e,px,py+1): nB += 1
    if isBacteri(e,px,py-1): nB += 1
    
    if isBacteri(e,px+1,py-1): nB += 1
    if isBacteri(e,px+1,py+1): nB += 1
    if isBacteri(e,px+1,py): nB += 1
    return nB
"""
if (px > 0):
    if ((e[px-1][py])=='B'): nB +=1
if (px > 0) and (py > 0):
    if ((e[px-1][py-1])=='B'): nB +=1
if (px > 0) and (py + 1  < n):
    if ((e[px-1][py+1])=='B'): nB +=1
if (py < n-1):
    if ((e[px][py+1])=='B'): nB +=1
if (py > 0): 
    if ((e[px][py-1])=='B'): nB +=1
if (px < m-1): 
    if ((e[px+1][py])=='B'): nB +=1
if (px < m-1) and (py>0):
    if ((e[px+1][py-1])=='B'): nB +=1
if (px <m-1) and (py <n-1):
    if ((e[px+1][py+1])=='B'): nB +=1
#print("mirant:", str(px),str(py), "ad:",nB)
return nB
"""
        

def calcula(e,px,py):
    #calcula retorna un . o B
    #depenent de les regles del joc
    #nAdjacents = adjacents(e,px,py) 
    #for px in range(n):
    #    for py in range(m):
    #print("x:",str(px))
    #print("y:", str(py))
    if e[py][px]=='.':
        #print("a (", str(px), ",", str(py) ,") hi ha un ." )
        #print("té", adjacents(e,px,py))
        if adjacents(e,px,py)==3: 
            #print("a (", str(px), ",", str(py) ,") hi ha un ." )
            return 'B'
    else:
        #print("a (", str(px), ",", str(py) ,") hi ha una B" )
        #print("té", adjacents(e,px,py))
        if adjacents(e,px,py)==3 or adjacents(e,px,py)==2 : return 'B'
    #print ("valor:", e[py][px])
    #v = e[py][px]
    return '.'

def nouTauler(entrada):
    nou = []
    px = 0
    py = 0
    for i in entrada:
        px = 0
        filaNova = []
        for j in i:
            filaNova.append(calcula(entrada,px,py))
            px += 1
        py += 1
        print (filaNova)
        nou.append(filaNova)
    return nou

"""
#LECTURA SIMPLE
n = read(int)
m = read(int)

#PREPARAM ESTRUCTURA
tauler = []
for i in range(n):
    fila = []
    for j in range(m):
        fila.append(read(chr))
    tauler.append(fila)
"""
n = 3
m = 3
tauler=[
    ['.','B','.'],
    ['.','B','.'],
    ['.','B','.']
    ]
#tauler=[['a','b','c','d'],['e','f','g','h'],['i','j','k','l']]



tauler=[
    ['.','.','.','.','.','.','.','.','.','.'],
    ['.','B','.','.','.','.','.','.','.','.'],
    ['.','.','B','.','.','.','B','.','.','.'],
    ['B','B','B','.','.','.','B','.','.','.'],
    ['.','.','.','.','.','.','B','.','.','.'],
    ['.','.','.','.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.','.','.','.'],
    ['.','.','.','.','B','.','.','.','.','.'],
    ['.','.','.','.','B','.','.','.','.','.'],
    ['.','.','.','.','B','.','.','.','.','.']]

for i in tauler:
    print(i)

for i in range(10):
    print("NOU TAULER")
    tauler = nouTauler(tauler)
    

#print(nouTauler(tauler))
#calcula(tauler)

