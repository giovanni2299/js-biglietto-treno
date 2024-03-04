// console.log('ciao')


//DATI DEL PROBLEMA
//età passeggero fornità dal passeggero
//costo 0,21$ AL KM
//Sconto minorenni -20%
//over 65 -40% di sconto 
//calcolare il prezzo del biglietto in base ai km e al età del passeggero

//AGE
let age = parseFloat(prompt('write your age')); //number
console.log('età:',age); //number

//KM
let KM = parseFloat(prompt('write your distance')); //number
console.log('distance:',KM); //number

//TIKET-PRICE
let price = parseFloat(KM * 0,21); //number
if(age >=18 || age >=65){
    console.log('full price:',price);
}

//discounnt 20%
let price20 = parseFloat(price * 0.2); //number 
if(age <18){
    console.log('ticket20:' ,price - price20);
}

//discount 40%