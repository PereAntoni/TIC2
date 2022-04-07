def esPar(n):
    if n==0:
        print("es par")
    else:
        esImpar(n-1)

def esImpar(n):
    if n==0:
        print("es impar")
    else:
        esPar(n-1)

esPar(1)
esPar(4)

