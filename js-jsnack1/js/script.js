console.log('OK JS :) ');

// ESERCIZIO 1:

// Crea un array con dentro 10 zucchine
// per ogni zucchine indica varietà, peso e lunghezza
// calcola quanto pesano tutte le zucchine

const contenitoreZucchine = [
    {
        varietà: 'napoletana',
        peso: 100,
        lunghezza: 12

    },
    {
        varietà: 'nera',
        peso: 300,
        lunghezza: 14

    },
    {
        varietà: 'romanesco',
        peso: 200,
        lunghezza: 10

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
        lunghezza: 13

    },
    {
        varietà: 'napoletana',
        peso: 200,
        lunghezza: 12

    },
    {
        varietà: 'napoletana',
        peso: 300,
        lunghezza: 12

    },
    {
        varietà: 'romanesco',
        peso: 200,
        lunghezza: 12

    }
]


// calcola quanto pesano tutte le zucchine

let pesoTotaleZucchine = 0;

// uso ciclo per fargli sommare tutti i pesi presenti nell'array

for (let i = 0; i < contenitoreZucchine.length; i++) {
    pesoTotaleZucchine += contenitoreZucchine[i].peso;
}

console.log(`Le zucchine nel contenitore pesano: ${pesoTotaleZucchine / 1000} Kg)`)
