

def iniciaTauler(l):
    fila=[]
    for i in range(10):
        fila.append("B")
    for j in range(10):
        l.append(fila)

def esbuida():
    pass


tauler=[]
iniciaTauler(tauler)
print(tauler)
print(tauler[0][2])