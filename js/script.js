// Inserisco data e ora da raggiungere con il countDown e converto in ms
let countDownDate = new Date("Feb 12, 2024 9:30:00").getTime();
console.log(countDownDate)

//  iserisco tutto in una funzione setInterval 
const countDownStart = setInterval(function () {


    // Inserisco data e ora attuale e converto in ms
    let nowDate = new Date().getTime();
    console.log(nowDate)

    // Calcolo la differenza di ms tra countDown e data di ora
    const differenceDate = countDownDate - nowDate;
    console.log(differenceDate)



    // Calcolo delle dei giorni rimanenti
    const days = Math.floor(differenceDate / (1000 * 60 * 60 * 24));
    
    // Calcolo delle delle ore rimanenti
    const hours = Math.floor((differenceDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    // Calcolo delle dei minuti rimanenti
    const minutes = Math.floor((differenceDate % (1000 * 60 * 60)) / (1000 * 60));
    
    
    // Calcolo delle dei secondi rimanenti
    const seconds = Math.floor((differenceDate % (1000 * 60)) / 1000);
    
    // Calcolo delle dei millisecondi rimanenti
    const milliSeconds = Math.floor(differenceDate % (1000 * 1000) / 1000);
        console.log(days, hours + "h", minutes + "m", seconds + "s", milliSeconds + "ms");


    // blocco la funzione setInterval se il conteggio arriva a 0
    if (differenceDate < 0) {
        clearInterval(countDownStart);
    }
}, 1000);

