/* DESCRIZIONE:
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va scritto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */

//Prezzo al km
const prezzo_al_km = 0.21;

//prezzo finale + messaggio
let prezzo_finale, messaggio;

//Chiedere all'utente km
const km_da_percorrere = parseInt(prompt("Quanti km devi percorrere?"));
document.getElementById("km_da_percorrere").innerHTML = `Devi percorrere ${km_da_percorrere} km`;

//Errore dati inseriti
if (isNaN(km_da_percorrere)) {
    alert("Ti sei sbagliato ad insertire i KM");
}

//Chiedere all'utente età
const eta_utente = parseInt(prompt("Quanti anni hai?"));
document.getElementById("eta_utente").innerHTML = `Hai ${eta_utente} anni`;

//Errore dati inseriti
if (eta_utente < 1 || eta_utente > 120 || isNaN(eta_utente)) {
    alert("Ti sei sbagliato ad insertire la tua età");
}

//prezzo biglietto
const prezzo_biglietto = km_da_percorrere * prezzo_al_km;
document.getElementById(
    "prezzo_biglietto"
).innerHTML = `Il costo del biglietto è ${prezzo_biglietto.toFixed(2)}€`;

//Definire sconti
const sconto_minorenne = (prezzo_biglietto * 20) / 100;
const sconto_over_65 = (prezzo_biglietto * 40) / 100;

//sconto minorenni + comunicazione costo biglietto
if (eta_utente < 18 && !isNaN(eta_utente)) {
    messaggio = `Complimenti sei minorenne abbiamo applicato ${sconto_minorenne.toFixed(2)}€ di sconto.`;
    prezzo_finale = prezzo_biglietto - sconto_minorenne;
}
//sconto anziani + comunicazione costo biglietto
else if (eta_utente > 65 && !isNaN(eta_utente)) {
    messaggio = `Ci dispiace sei vecchio, ma abbiamo applicato ${sconto_over_65.toFixed(2)}€ di sconto.`;
    prezzo_finale = prezzo_biglietto - sconto_over_65;
}
//nessuno sconto + comunicazione costo biglietto
else if (eta_utente > 17 && eta_utente < 66 && !isNaN(eta_utente)) {
    messaggio = `Ci dispiace ma non abbiamo sconti per te.`;
    prezzo_finale = prezzo_biglietto;
} else {
    messaggio = "Devi solo inserire numeri";
}

if (isNaN(prezzo_finale)) {
    document.getElementById("prezzo_finale").innerHTML = `${messaggio}`;
} else {
    document.getElementById(
        "prezzo_finale"
    ).innerHTML = `${messaggio} Il prezzo è ${prezzo_finale.toFixed(2)}€`;
}