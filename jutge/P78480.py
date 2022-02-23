from PIL import Image, ImageDraw
from easyinput import read
import random


    
#n = read(int)

"""
nombreDianes=4

def colorAleatori():
    R = random.choice(range(256))
    G = random.choice(range(256))
    B = random.choice(range(256))
    dib.ellipse([0,0,8*n,8*n],(R,G,B))
    return "(" + str(R) + "," + str(G) + "," + str(B) + ")"
print (colorAleatori())

"""
from easyinput import read

n = read(int)

img = Image.new('RGB', (1+n*8, 1+n*8), 'White')
dib = ImageDraw.Draw(img)

#LA RELACIÓ ENTRE ELS CERCLES CANVIA PER EL PARÀMETRE 
# 8/X ON X ÉS EL NOMBRE DE CERCLES QUE VOLEM OBTENIR

"""
def dibuixaCercles(d,n,x):
    rao = ((n*8)/x)/2
    for i in range(x):
        d.ellipse([i*n*rao,i*n*rao,(rao-i)*n,(rao-i)*n],"yellow")
        print(i,"pintant de ", i*n*rao, "fins",(rao-i)*n)
"""
dib.ellipse([0,0,8*n,8*n],"blue")
dib.ellipse([n,n,7*n,7*n],"yellow")
dib.ellipse([2*n,2*n,6*n,6*n],"red")
dib.ellipse([3*n,3*n,5*n,5*n],"green")
dib.ellipse([3.5*n,3.5*n,4.5*n,4.5*n],"blue")


img.save('output.png')