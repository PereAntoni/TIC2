def nombreMonedes(v):
    moneda=[1,2,5,10,20,50,100,500,1000]
    nm=0
    while v!=0:
        m= cercaMoneda(v,moneda)
        print("agafant moneda", m)
        v = v - m
        nm+=1
    return nm

def cercaMoneda(v,moneda):
    for i in moneda:
        if v == i: return i
        if v < i: return ant
        ant=i
    return moneda[-1] #retornam el mes gros
print(nombreMonedes(10325))