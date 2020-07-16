// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

var nome = document.getElementById('nome-cognome').value;

document.getElementById("nome-passeggero").innerHTML = nome;

var carrozza = nRandom(1,9);
var cP = nRandom(90000,99999);

document.getElementById("carrozza").innerHTML = carrozza;
document.getElementById("cp").innerHTML = cP;

// caolcolo prezzo e categoria sconto
var km = document.getElementById('km').value;
var pb = km * 0.21;
var categoria = document.getElementById('categoria').value;
if (categoria == "cinno") {
    pb *= 0.8;
}else if (categoria == "senior") {
    pb *= 0.6;
}
console.log(pb);
document.getElementById("pb").innerHTML = pb;





// funzioni
function nRandom(min,max){
    return Math.floor(Math.random()* (max - min+ 1) + min);
}
