// Inserisco data e ora da raggiungere con il countDown e converto in ms
let countDownDate = new Date("Feb 12, 2024 9:30:00").getTime();
console.log(countDownDate)

//  iserisco tutto in una funzione setInterval 
const countDownStart = setInterval(function () {


    // Inserisco data e ora attuale e converto in ms
    let nowDate = new Date().getTime();
    console.log(nowDate)

    // Calcolo la differenza di ms tra countDown e data di ora
    
    let differenceDate = countDownDate - nowDate;
    document.querySelector(".totale-millisecondi").innerHTML = differenceDate;
    console.log(differenceDate);







    // Calcolo delle dei giorni rimanenti
    let days = Math.floor(differenceDate / (1000 * 60 * 60 * 24));

    // Calcolo delle delle ore rimanenti
    let hours = Math.floor((differenceDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // Calcolo delle dei minuti rimanenti
    let minutes =Math.floor((differenceDate % (1000 * 60 * 60)) / (1000 * 60));


    // Calcolo delle dei secondi rimanenti
    let seconds =Math.floor((differenceDate % (1000 * 60)) / 1000);



    
    // / Calcolo delle dei millisecondi rimanenti
    let milliSeconds = Math.floor (differenceDate % 1000);
    milliSeconds = document.querySelector(".milliseconds").innerHTML = milliSeconds;

    console.log( milliSeconds + "ms");



    days = document.querySelector(".days").innerHTML =days;
    hours = document.querySelector(".hours").innerHTML = hours;
    minutes = document.querySelector(".minutes").innerHTML = minutes;
    seconds = document.querySelector(".seconds").innerHTML = seconds;


    // blocco la funzione setInterval se il conteggio arriva a 0
    if (differenceDate < 0) {
        clearInterval(countDownStart);
        document.querySelector(".milliseconds").innerHTML = 0;
        document.querySelector(".days").innerHTML = 0;
        document.querySelector(".hours").innerHTML = 0;
        document.querySelector(".minutes").innerHTML = 0;
        document.querySelector(".seconds").innerHTML = 0;
        document.querySelector(".totale-millisecondi").innerHTML = 0;
        console.log("Il tempo è terminato");
        return;

    }
}, 0);





