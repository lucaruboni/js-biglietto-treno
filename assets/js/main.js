/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:


il prezzo del biglietto è definito in base ai km (0.21 € al km)

va applicato uno sconto del 20% per i minorenni

va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */



/* chiedere quanti km vuole percorrere l'utente */

const kilometers = prompt("How many km do you have to travel?");
console.log(kilometers);

/* anni del passeggero */

const customerAge = prompt("What's your age?")
console.log(customerAge);

/* prezzo del biglietto */

let ticketPrice = (Number(kilometers * 0.21));
console.log(ticketPrice);


/* sconti */
let ticketPriceDiscounted;

if (customerAge <= 18){
    ticketPriceDiscounted = (ticketPrice - (ticketPrice * 20 / 100));
    console.log("20%");
}

else if (customerAge >= 65){
    ticketPriceDiscounted = (ticketPrice - (ticketPrice * 40 / 100));
    console.log("40%");
}

    

// let overDiscount = Number(ticketPrice - (ticketPrice * 40 / 100));
// console.log(overDiscount);

/**
 
if(eta < 18){
    ticketprice = ticketprice * sconto
}else if(eta > 65){
    ticketprice = .....
}
 */




//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 


