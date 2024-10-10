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
setInterval(userInput, 5000);

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
    // creo un'array vuoto dove salvare i valori di input
    let inputNumberValue = [];
    // ciclo all'interno degli input e pusho i loro valori all'interno dell'array
    for (let i = 0; i < inputEL.length; i++) {
        const element = Number(inputEL[i].value);
        inputNumberValue.push(element);
        // console.log(inputValue);
    };
    
    // creo un'array per salvare i numeri che combaciano
    let sameNumber = [];
    // creo un contatore
    let counter = 0;
    // ciclo all'interno dei randomNumber per vedere quali combaciano con gli InputNumberValue
    for (let i = 0; i < randomNumber.length; i++) {
        if (inputNumberValue.includes(randomNumber[i])) {
            // incremento il contatore
            counter++
            // pusho gli elementi che sono inclusi in un terzo array
            sameNumber.push(randomNumber[i]);
            
        } else {
            console.log("Hai perso, 0 numeri indovinati");
        }

        console.log(sameNumber, counter);
        
    }
});

// mostrare il risultato