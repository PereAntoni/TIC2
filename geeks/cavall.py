#problema cavall scacs

"""

https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/?ref=lbp

ALGORITME PRINCIPAL:
    if tots visitats: mostra solucio
    sino:
        a) Afegeix un nou moviment a la solució, agafant de la llista de solucions
        b) Sino hiha cap solucio llevar l'anteriror i provar una alternativa
        c) sino hi ha cap alternativa return false.


"""
n = 8

def potPosar(x,y,t):
    print("mirant",x,y)
    if(x>=0 and y >=0 and y < n and x < n):
        if(t[x][y]==-1): return True
    return False

def mostraSolucio(n,t):
    for i in range(n):
        for j in range(n):
            print(t[i][j],"#",end='')
        print()

def solucioCavall(n):
    board =[[-1 for i in range(n)] for i in range(n)]
    #mostraSolucio(n,board)
    #Tots els moviments del cavall
    mx=[2,2,1,-1,-2,-2,-1,1]
    my=[-1,1,2,2,1,-1,-2,-2]

    #La primera posició del cavall
    board[0][0]=0
    pos=1

    if (not trobaSolucio(n,board,0,0,mx,my,pos)): print ("No s'ha trobat cap solucio possible")
    else: mostraSolucio(n,board)

def trobaSolucio(n,t,px,py,mx,my,p):
    if (p==n**2):
        return True
    for i in range(len(mx)):
        #calculam els next x i y:
        #print(i)
        
        nx = px + mx[i]
        ny = py + my[i]
        if (potPosar(nx,ny,t)):
            print(p,"posam a ", nx,ny)
            t[nx][ny]=p
            if trobaSolucio(n,t,nx,ny,mx,my,p+1): 
                return True
            #accio de backtraking
            t[nx][ny]=-1    
    return False
    




solucioCavall(8)