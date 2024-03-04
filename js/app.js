// console.log('ciao')


//DATI DEL PROBLEMA
//età passeggero fornità dal passeggero
//costo 0,21$ AL KM
//Sconto minorenni -20%
//over 65 -40% di sconto 
//calcolare il prezzo del biglietto in base ai km e al età del passeggero

//AGE
let age = parseFloat(prompt('write your age')); //number
console.log('your age:',age); //number

//KM
let KM = parseFloat(prompt('write your distance')); //number
console.log('distance to do in KM:',KM); //number

//TIKET-PRICE
let price = parseFloat(KM * 0.21); //number
if(age >=18 || age <65){
    console.log('full price:',price).toFixed(2);
} else if(age <18){
    let priceOff20 = parseFloat(price * 0.2).toFixed(2); //number
    console.log('ticketoff20:' ,price - priceOff20);
}

//discounnt 20%
// let priceOff20 = parseFloat(price * 0.2); //number 
// if(age <18){
//     console.log('ticketoff20:' ,price - priceOff20).toFixed(2);
// }

//discount 40%
let priceOff40 = parseFloat(price * 0.4); //number
if(age >=65){
    console.log('tiketoff40:' ,price - priceOff40).toFixed(2);
}