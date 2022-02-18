class Partida{
    //mètodes de classe
    constructor(codi,nBolles,nPunts){
        this.codi=codi;
        this.nBolles=nBolles;
        this.nPunts=nPunts;
        this.jugadors =[];
        this.nJugadors=0;
    }
   
    mostraCodi(){
        alert(this.codi);
        return this.codi;
    }

    afegirJugador(){
        let nom = prompt("nom del jugador");
        this.jugadors.push(new Jugador(nom));
        this.nJugadors++;
        //alert("Afegit el jugador "  + this.jugadors.getNom());
    }

    guiPartida(){
        
    }

}