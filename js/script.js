
//  iserisco tutto in una funzione setInterval 
const countDownStart = setInterval (function(){
// Inserisco data e ora da raggiungere con il countDown e converto in ms
let countDownDate = new Date("Feb 12, 2024 9:30:00").getTime();
console.log(countDownDate)

// Inserisco data e ora attuale e converto in ms
let nowDate= new Date().getTime();
console.log(nowDate)

// Calcolo la differenza di ms tra countDown e data di ora
const differenceDate = countDownDate - nowDate;
console.log(differenceDate)
},1000);

