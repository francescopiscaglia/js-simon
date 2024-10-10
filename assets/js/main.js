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
setTimeout(userInput, 30000);

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

    // creo un contatore per i numberi uguali
    let counter = 0;
    // creo un array dove pushare i numeri uguali
    let sameNumber = [];
    // creo una variabile result
    let result;
    
    // ciclo all'interno dei inputNumber per vedere quali combaciano con gli randomNumber
    for (let i = 0; i < inputNumberValue.length; i++) {
        if (randomNumber.includes(inputNumberValue[i])) {
            // aumento il contatore di 1
            counter++
            // pusho dentro all'array
            sameNumber.push(inputNumberValue[i]);
        };   
    };
    
    // verifico quanti numeri combaciano
    if (counter === randomNumber.length) {
        // allora tutti i numberi combaciano
        result = "vinto";
        
    } else if (counter === 0){
        result = "Hai perso";

    } else {
        // mostro quanti numeri combaciano
        result = "c'eri quasi";
    }
    
    // mostrare il risultato
    const markup = addMarkup(result ,counter, sameNumber);

    formEL.insertAdjacentHTML("beforeend", markup);
});

function addMarkup(result, counter, equalNumber) {
    return `
    <div>
        <p>Hai ${result}. Hai trovato ${counter} numeri corretti: ${equalNumber}</p>
    </div>
    `;    
};

// 81,78,10,44,1
// 70,66,57,26,29
// 4,15,8,71,44