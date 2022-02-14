"""
CLASSE JOC
"""
import random
import os

class Joc:
    def __init__(self):
        self.setUsuari()    #cada partida la juga un usuari
        self.juga = True    #juga determina el final de la partida
        while self.juga:
            #cream n murs nous
            self.setNivell(self.nivell)
            for i in range(self.nivell):
                self.pintaEscenari()
                print("Quines pedres?", end="")
                self.agafaPedres(input())
                print("Quina escala?", end="")
                self.agafaEscala(input())
                if self.calcula():
                    print("Pases")
                    self.pasaMur()
                else:
                    print ("No pases")
                    self.juga = False 
            self.nivell += 1

    
    def agafaPedres(self,posicio):
        print(posicio)
        self.pedres = self.llistaPedres.pop(int(posicio))

    def agafaEscala(self,posicio):
        self.escala = self.LlistaEscales.pop(int(posicio))
    
    def pasaMur(self):
        self.punts += self.llistaMurs.pop(0)

    def calcula(self):
        if (self.llistaMurs[0]<self.pedres) or (self.llistaMurs[0]<self.escala):
            return True
        else:
            return False
        
            
    def setMarcador(self):
        print("")   
    
    def vasa(self):
        #cada vasa tendrà un resultat
        self.creaVasa()
        print(self.nom, ", les teves opcions són:")
        self.opcions()

    def opcions(self):
        pass 

    def setNivell(self,n):
        #n determina el nombre de murs que hi haurà
        
        self.llistaPedres = random.sample(range(6), n)
        self.LlistaEscales = random.sample(range(6), n)
        self.llistaMurs = random.sample(range(6), n)

    def setUsuari(self):
        
        print("Que nom el teu jugador?", end="")
        self.nom=input()
        self.punts = 0
        self.nivell = 1
    
    def pintaEscenari(self):
        os.system("clear")
        #encarregat de pintar la partida
        print("*********************")
        print("*-----ELS MURS-------")
        print("* Catapultes i Pedres")
        print("*********************")
        print("*--------------------")
        print("*",self.nom)
        print("* punts:",self.punts, "| nivell: ", self.nivell)
        print("--------------------")
        print("Murs: ", end="")
        for i, val in enumerate(self.llistaMurs):
            print("pos.", i, "", val, end="")
        print("Pedres: ", end="")
        for i,val in enumerate(self.llistaPedres):
            print("pos.", i, ":", val, end="")
        print("Escales: ", end="")
        for i in enumerate(self.LlistaEscales):
            print("pos.", i, ":", val, end="")
        
        
joc = Joc()