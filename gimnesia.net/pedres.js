function importarScript(nom) {
    var s = document.createElement("script");
    s.src = nom;
    document.querySelector("head").appendChild(s);
}

function crearElement(){
    var s = document.createElement("h1");
    s.innerHTML = "nonoanoam";
    s.id="a";
    s.onclick="alert('wqwqwq')";
    document.querySelector("#marcadorPartida").appendChild(s);
}


importarScript("Partida.js");
importarScript("Jugador.js");

var partida;


function novaPartida(){
    partida = new Partida("codi");
    partida.mostraCodi();

}

function nouJugador(){
   
    partida.afegirJugador();

}

