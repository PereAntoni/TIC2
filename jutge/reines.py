

def potPosar(cadena):
    #mira la darrera posicio de la cadena
    fila=0
    col= len(cadena)
    if len(cadena)>2:
        fila = cadena[-1] 
        if fila in cadena[:-1]:
            return False
    
    print(fila,col)
    return True

def reines(cadena,posicio):
    
    for i in range(posicio,n):
        cn = cadena
        cn.append(i)
        print(cn)
        if potPosar(cn):
            for j in range(i,n,1):
                cadena.append(i)
                if potPosar(cn):
                    reines(cn,i + 1)
                else:
                    reines(cadena[:-1],i+1)
    print (cadena)

c=[]
n=6
reines(c,0)