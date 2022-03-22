console.log('OK JS :) ');

// scrivi una f.ne che accetti una stringa come argomento e la ritorni girata

function reverse(wordInput) {
    // la f.ne accetta una stringa come argomento
    let reversedWord = "";
    for (let i = wordInput.length - 1; i >= 0; i--) {
        reversedWord += wordInput[i];
    }
    return reversedWord;
}

let prova = reverse("yraM");
console.log(prova);