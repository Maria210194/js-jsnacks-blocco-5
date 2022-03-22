console.log('OK JS :) ');

// ESERCIZIO 1:

// Crea 10 oggetti che rappresentano ognuno una zucchina
// dividi in due array le zucchine che misurano più e meno di 15cm
// stampa separatamante quanto pesano i due gruppi


// Crea 10 oggetti che rappresentano ognuno una zucchina

const contenitoreZucchine = [
    {
        varietà: 'napoletana',
        peso: 100,
        lunghezza: 16

    },
    {
        varietà: 'nera',
        peso: 300,
        lunghezza: 14

    },
    {
        varietà: 'romanesco',
        peso: 200,
        lunghezza: 16

    },
    {
        varietà: 'nera',
        peso: 100,
        lunghezza: 8

    },
    {
        varietà: 'nera',
        peso: 100,
        lunghezza: 11

    },
    {
        varietà: 'nera',
        peso: 100,
        lunghezza: 12

    },
    {
        varietà: 'romanesco',
        peso: 300,
        lunghezza: 17

    },
    {
        varietà: 'napoletana',
        peso: 200,
        lunghezza: 19

    },
    {
        varietà: 'napoletana',
        peso: 300,
        lunghezza: 15

    },
    {
        varietà: 'romanesco',
        peso: 200,
        lunghezza: 15

    }
]

// creo i due array in cui andranno le zucchine

let piccole = [];
let grandi = [];

console.log(piccole);
console.log(grandi);


// ciclo l'array iniziale per verificare tutte le zucchine

for (let i = 0; i < contenitoreZucchine.length; i++) {
    if (contenitoreZucchine[i].lunghezza <= 15) {
        piccole.push(contenitoreZucchine[i]);
    } else {
        grandi.push(contenitoreZucchine[i]);
    }
}


// creo funzione che mi calcola il peso totale

function pesoZucchine(array) {
    let pesoTotale = 0;
    for (let i = 0; i < array.length; i++) {
        pesoTotale += array[i].peso;
    }
    return pesoTotale;
}


// calcolo i pesi

const pesoPiccole = pesoZucchine(piccole);
const pesoGrandi = pesoZucchine(grandi);

console.log('Il peso totale delle zucchine piccole è: ', pesoPiccole, 'grammi');
console.log('Il peso totale delle zucchine grandi è: ', pesoGrandi, 'grammi');
