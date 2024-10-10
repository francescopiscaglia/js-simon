// preparazione
// seleziono gli input dall DOM e metto diplay none
const inputBlockEl = document.querySelector(".user-input");
inputBlockEl.style.display = "none";

// creare un'array per salvare questi numeri
let randomNumber = [];


// - Visualizzare in pagina 5 numeri casuali.

// creare la funzione che generi i numeri casuali
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// uso il ciclo for per pushare i 5 numeri dentro all'array
for (let i = 0; i < 5; i++) {

    // richiamo la funzione e salvo i numeri nella costante number
    const number = getRndInteger(1, 100);
    // pusho i numeri dentro all'array
    randomNumber.push(number);
};

// stampo in pagina i numeri
let randomNumberEL = document.getElementById("random-number");
randomNumberEL.innerText = randomNumber;

// far partire un timer di 30 sec
setInterval(userInput, 10000);

function userInput() {

    // faccio sparire i numeri
    randomNumberEL.style.display = "none";

    // faccio apparire gli unput
    inputBlockEl.style.display = "block";
};

// verificare se i numeri inseriti dall'utente corrispondo a quelli generati
const formEL = document.querySelector("form");

formEL.addEventListener("submit", function(e) {
    e.preventDefault();

    // recupero i valori degli input
    const inputEL = document.getElementsByTagName("input");
    // console.log(inputEL);

    // creo un'array vuoto dove salvare i valori di input
    let inputValue = [];

    // creo un contatore impostato a 0
    let counter = 0;
    // creo un nuovo array dove salvare i numeri che combaciano
    let sameNumber = [];

    // ciclo all'interno degli input e pusho i loro valori all'interno dell'array
    for (let i = 0; i < inputEL.length; i++) {
        const element = inputEL[i];
        inputValue.push(element.value);

        // verifico quanti e quali numeri sono stati individuati
        if (randomNumber.includes(inputValue[])) {

            // incremento il contatore di 1
            counter++
            // mostro i numeri che combaciano
            sameNumber.push(inputValue.includes(randomNumber));
            console.log(sameNumber, counter);

        } else {
            console.log("Hai sbagliato");
        }
    
    }

    // console.log(inputValue);


    // itero dentro 38 38 20 7 62 5 24 88 14 39


})

// mostrare il risultato