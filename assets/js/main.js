/* DESCRIZIONE:
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va scritto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */


//Chiedere all'utente km
const km_da_percorrere = parseInt(prompt('Quanti km devi percorrere?'));
console.log(km_da_percorrere);
document.getElementById('km_da_percorrere').innerHTML = `Devi percorrere ${km_da_percorrere} km`

//Errore dati inseriti
if (isNaN(km_da_percorrere)) {
    alert('Ti sei sbagliato ad insertire i KM')
}

//Chiedere all'utente età
const eta_utente = parseInt(prompt('Quanti anni hai?'));
console.log(eta_utente);
document.getElementById('eta_utente').innerHTML = `Hai ${eta_utente} anni`

//Errore dati inseriti
if (eta_utente < 1 || eta_utente > 120 || isNaN(eta_utente)) {
    alert('Ti sei sbagliato ad insertire la tua età')
}

//prezzo biglietto
let prezzo_biglietto = km_da_percorrere * 0.21;
console.log(prezzo_biglietto);
document.getElementById('prezzo_biglietto').innerHTML = `Il costo del biglietto è ${prezzo_biglietto.toFixed(2)}€`

//Definire sconti
const sconto_minorenne = (prezzo_biglietto * 20) / 100; 
console.log(sconto_minorenne.toFixed(2));
const sconto_over_65 = (prezzo_biglietto * 40) / 100;
console.log(sconto_over_65.toFixed(2));  

//sconto minorenni + comunicazione costo biglietto
if (eta_utente < 18) {
    prezzo_biglietto = prezzo_biglietto - sconto_minorenne;
    console.log(`prezzo scontato è ${prezzo_biglietto.toFixed(2)}`);
    document.getElementById('prezzo_finale').innerHTML = `Complimenti sei minorenne abbiamo applicato ${sconto_minorenne.toFixed(2)}€ di sconto. Il prezzo è ${prezzo_biglietto.toFixed(2)}€`
}
//sconto anziani + comunicazione costo biglietto
else if(eta_utente > 65){
    prezzo_biglietto = prezzo_biglietto - sconto_over_65;
    console.log(`prezzo finale è ${prezzo_biglietto.toFixed(2)}`);
    document.getElementById('prezzo_finale').innerHTML = `Ci dispiace sei vecchio, ma abbiamo applicato ${sconto_over_65.toFixed(2)}€ di sconto. Il prezzo è ${prezzo_biglietto.toFixed(2)}€`
}
//nessuno sconto + comunicazione costo biglietto
else {
    document.getElementById('prezzo_finale').innerHTML = `Ci dispiace ma non abbiamo sconti per te. Il prezzo è ${prezzo_biglietto.toFixed(2)}€`
}