"""
CLASSE JOC
"""

class ElsMurs:
    def __init__(self):
        self.setUsuari()
        self.juga = True
        while self.juga:
            self.setVasa()
            self.setEscenari()
            self.setMarcador()
            
    def setMarcador(self):
        print("")   
    
    def vasa(self):
        #cada vasa tendrà un resultat
        self.creaVassa()
        print(self.nom, ", les teves opcions són:")
        self.opcions()

    def opcions(self):
        pass 

    def setVasa(self):
        self.pedres = [3,4,0]
        self.escales = [2,1,5]
        self.murs = [5,8,6]

    def setUsuari(self):
        
        print("Que nom el teu jugador?", end="")
        self.nom=input()
        self.punts = 0
        self.nivell = 0
    
    def setEscenari(self):
        #encarregat de pintar la partida
        print("********************")
        print("-----ELS MURS-------")
        print(" Catapultes i Pedres")
        print("********************")
        print("--------------------")
        print("|",self.nom)
        print("| punts:",self.punts, "| nivell: ", self.nivell)
        print("--------------------")
        
joc = ElsMurs()

