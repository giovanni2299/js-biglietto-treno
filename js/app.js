// console.log('ciao')


//DATI DEL PROBLEMA
//età passeggero fornità dal passeggero
//costo 0,21$ AL KM
//Sconto minorenni -20%
//over 65 -40% di sconto 
//calcolare il prezzo del biglietto in base ai km e al età del passeggero

//AGE
let age = parseInt(prompt('write your age')); //number
console.log('your age:',age); //number

//KM
let KM = parseInt(prompt('write your distance')); //number
console.log('distance to do in KM:',KM); //number

//TIKET-PRICE
let price = parseFloat(KM * 0.21); //number



//discount 40%
// let priceOff40 = parseInt(price * 0.4); //number
// let discountPrice40 = price - priceOff40

//discount 20%
// let priceOff20 = parseInt(price * 0.2); //number
// let discountPrice20 = price - priceOff20



//SE over 65 applico uno sconto del 40%
if(age >=65){
    //discount 40%
    let priceOff40 = parseInt(price * 0.4); //number
    let discountPrice40 = price - priceOff40
    console.log('tiketoff40:' ,discountPrice40.toFixed(2)); //string

    //Altrimenti se minorenne applico uno sconto del 20%
}else if(age <18){
    //discount 20%
    let priceOff20 = parseInt(price * 0.2); //number
    let discountPrice20 = price - priceOff20
    console.log('ticketoff20:' ,discountPrice20.toFixed(2)); //string

    //Altrimenti niente sconto 
}else{
    console.log('full price:' ,price.toFixed(2)); //string
}


