class Jugador{
    //mètodes de classe
    constructor(codi,nom){
        this.codi=codi;
        this.nom=nom;
    }
   
    getNom(){
        alert(this.nom);
        return this.nom;
    }
}