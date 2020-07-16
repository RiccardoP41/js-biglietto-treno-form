// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

// ******PRIMA CREO TUTTO IN PARTI DIVERSE POI LO INSERISCO NELL'addEventListener


// ****Nome

// var nome = document.getElementById('nome-cognome').value;
// document.getElementById("nome-passeggero").innerHTML = nome;


// ****Numeri random

// var carrozza = nRandom(1,9);
// var cP = nRandom(90000,99999);//
// document.getElementById("carrozza").innerHTML = carrozza;
// document.getElementById("cp").innerHTML = cP;


//****Prezzo e categoria sconto

// var km = document.getElementById('km').value;
// var pb = km * 0.21;
// var categoria = document.getElementById('categoria').value;
// var sconto = "";
// if (categoria == "cinno") {
//     pb * 0.8;
//     sconto += "Sconto Minorenne"
// }else if (categoria == "senior") {
//     pb * 0.6;
//     sconto += "Sconto Silver"
// }else {
//     sconto += "Paghi Tutto"
// }
// document.getElementById("pb").innerHTML = pb;
// document.getElementById("sconto").innerHTML = sconto;

document.getElementById("genera").addEventListener("click", function(){

    var nome = document.getElementById('nome-cognome').value;
    document.getElementById("nome-passeggero").innerHTML = nome;

    var carrozza = nRandom(1,9);
    var cP = nRandom(90000,99999);
    document.getElementById("carrozza").innerHTML = carrozza;
    document.getElementById("cp").innerHTML = cP;

    var km = document.getElementById('km').value;
    var pb = km * 0.21;
    var categoria = document.getElementById('categoria').value;
    var sconto = "";
    if (categoria == "cinno") {
        pb * 0.8;
        sconto += "Sconto Minorenne"
    }else if (categoria == "senior") {
        pb * 0.6;
        sconto += "Sconto Silver"
    }else {
        sconto += "Paghi Tutto"
    }
    document.getElementById("pb").innerHTML = "€ " + pb;
    document.getElementById("sconto").innerHTML = sconto;

    biglietto.className = "show";
})

document.getElementById("annulla").addEventListener("click", function(){
    biglietto.className = "hidden";
})

// funzioni

// per i numeri random
function nRandom(min,max){
    return Math.floor(Math.random()* (max - min+ 1) + min);
}
