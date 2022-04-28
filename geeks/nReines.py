def coloca(t,x,y):
    #podrà posar
    #si la posició x està buida:
    #print(t,x,y)
    if (t[x]==-1):
        #cap posició està a la mateixa y
        #NO SON A LA MATEIXA FILA
        for i in t:
            if y==i:
                print("retorn false",t,x,y)
                return False
            
        #si ha passat possam la reina a la posició que li toca
        #i retornam vertader
        t[x]=y
        return True
    return False

def potColocar(t,x,y):
    #podrà posar
    #si la posició x està buida:
    #print(t,x,y)
    if (t[x]!=-1): return False
    i = 0
    while i<n:
        if t[i]==y: 
            #print("dona fals per t[i]=y")
            return False
        if abs(t[i]-y)==abs(i-x) and t[i]!=-1: 
            #print("dona false per columna")
            return False
        i+=1
        #cap posició està a la mateixa y
        #NO SON A LA MATEIXA FILA
        for fila in t:
            if y==fila:
                #print("retorn false",t,x,y)
                return False   
        #si ha passat possam la reina a la posició que li toca
        #i retornam vertader
    return True


"""
def nReines(t,x,y):
    #print(t)
    if x == n:
        es=1 
        for i in range(n):
            if t[i]==-1: es = 0
        if es==1:
            print ("he trobat",t)
        else:
            print("ha passat---->",t)
        return True
    for i in range(x,n):
        #print("provant i ", i, "on x és",x, "sobre",t)
        for j in range(y,n):
            #print("provant ",i,j)
            if potColocar(t,i,j):
                #coloca i cerca el següent
                t[i]=j
                #print ("he colocat a ",i,j,t)
                nReines(t,i+1,0)
            else:
                t[i]=-1
"""
def nReines(t,x):

    if x >= n:
        return True
    
    for i in range(n):
        if potColocar(t,x,i):
            t[x]=i
            if nReines(t,x+1)== True:
                return True
            t[x]=-1
    return False

n = 16
t=[-1]*n
print("resolent nReines",t,n)
if nReines(t,0)==True:
    print(t)