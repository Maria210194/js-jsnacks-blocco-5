console.log('OK JS! ');

// scrivi una funzione che fonde due array aventi lo stesso numero di elementi
// gli elementi devono essere presi alternativamente 


// creo i due array di riferimento e quello nuovo che per ora è vuoto

const words = ['H', 'L', 'O'];
const numbers = [3, 2, 0];

const mix = [];

// f.ne che mixa gli elementi degli altri due

function mixArray(first, second) {

    for (let i = 0; i < words.length; i++) {

        mix.push(first[i]);
        mix.push(second[i]);

    }
    return mix;
}


// richiamo la f.ne

const newArray = mixArray(words, numbers);
console.log(newArray);


