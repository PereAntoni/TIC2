from easyinput import read


def main():
    n = read(int)
    m = read(int)
    while m != 0 and n != 0:
        cuadricula = creaCuadricula(n, m)
        novaCuadricula = nouTauler(cuadricula)
        mostra(novaCuadricula)
        n = read(int)
        m = read(int)
    #print(cuadricula)

def creaCuadricula(n, m):
    cuadricula = []
    for i in range(n):
        fila = []
        for j in range(m):
            fila.append(read(chr))
        cuadricula.append(fila)
    return cuadricula

def mostra(c):
    print()
    for i in c:
        for j in i:
            print(j[0], end = '')
        print()


def nouTauler(entrada):
    nou = []
    px = 0
    py = 0
    for i in entrada:
        px = 0
        filaNova = []
        for j in i:
            filaNova.append(calcula(entrada, px, py))
            px += 1
        py += 1
        nou.append(filaNova)
    return nou

def calcula(e, px, py):

    if e[py][px]=='.':
        
        if adjacents(e, px, py)==3: 

            return 'B'
    else:

        if adjacents(e, px, py)==3 or adjacents(e, px, py)==2 : return 'B'
    return '.'

def isBacteri(e, px, py):
    #print("-->adjacent: ", px,py)
    if px>-1 and py>-1:
        try: 
            if ((e[py][px])=='B'): 
                #print("-hi ha un bacteri a ", px , py)
                return True 
        except:
            return False
    return False

def adjacents(e, px, py):
    #adjacents ens retorna el nombre de B's
    #adjacents a la posició px,py
    nB = 0
    #print ("MIRANT ADJACENTS ", px, py)
    if isBacteri(e, px-1, py-1): nB += 1
    if isBacteri(e, px-1, py): nB += 1
    if isBacteri(e, px-1, py+1): nB += 1

    if isBacteri(e, px, py+1): nB += 1
    if isBacteri(e, px, py-1): nB += 1
    
    if isBacteri(e, px+1, py-1): nB += 1
    if isBacteri(e, px+1, py+1): nB += 1
    if isBacteri(e, px+1, py): nB += 1
    return nB

main()