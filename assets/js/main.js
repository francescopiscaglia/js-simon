// - Visualizzare in pagina 5 numeri casuali.

// creare un'array per salvare questi numeri
let randomNumber = [];

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
}

console.log(randomNumber);

// far partire un timer di 30 sec

// far scomparire i numeri

// far apparire 5 input per l'utente



// verificare se i numeri inseriti dall'utente corrispondo a quelli generati


// mostrare il risultato