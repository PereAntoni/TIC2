"""

"""

llista = set()

amics = dict()

amics['angel']  =['pep','miquel','aina','maria']

amics['pep']    =['miquel','aina','maria','joan']
amics['miquel'] =['a','b','c']
amics['aina']  =['maria','maria','pere']
amics['maria']  =['guillem','roser','cati']

amics['joan']  =['guillem','roser','cati']

amics['pere']   =[]
amics['guillem']=['guillem','roser','angel']
amics['roser']  =['guillem','roser','bernat']
amics['cati']  =['guillem','roser','cati']

cercats=[]
grau = 1
#organització de les peticions

def cercaAmic(a):
    #print("cercant ", a)
    #grau += 1
    for amic in amics[a]:
        print("cercant ", amic)
        print("afegint",amics[a])
        llista.update(amics[amic])
        print (llista)
        if amic in cercats:
            print ("ja està cercat ", amic)
            continue
        long = len(amics[amic])
        print("En",amic,"té",long," amics són ",end="")
        for i in range(long):
            print(amics[amic][i], end=", ")
        print()
        #cercaAmic(amic)
        #print(cercats)
        #cercats.append(amic)
    
cercaAmic('angel')  #genera una llista de grau 1


print (llista)