//Scrivi una funzione che accetti una stringa come argomento e la restituisca girata (es. "Ciao" -> "oaiC")

function turnItOver(word) {
    let reverse = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reverse += word[i];
    }

    // Stampo il risultato nella console
    console.log(reverse); 
}

turnItOver(prompt("Inserisci la parola"));
