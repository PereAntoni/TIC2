from PIL import Image, ImageDraw
from easyinput import read
import random


    
n = read(int)

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

img = Image.new('RGB', (n*8, n*8), 'White')
dib = ImageDraw.Draw(img)


dib.ellipse([0,0,8*n,8*n],"blue")
dib.ellipse([n,n,7*n,7*n],"yellow")
dib.ellipse([2*n,2*n,6*n,6*n],"red")
dib.ellipse([3*n,3*n,5*n,5*n],"green")






img.save('output.png')