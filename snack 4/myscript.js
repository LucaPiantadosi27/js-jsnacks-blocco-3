// Scrivi una funzione  che accetti una stringa come parametro e restituisca la stringa con i caratteri ordinati alfabeticamente
// Es: riordina("webmaster") :arrow_right: "abeemrstw"


function normalWord(word) {

    return word.split("")
        .sort()
        .join("");
}

let randomWord = "webmaster";

document.getElementById("modifiedWord").innerText = normalWord(randomWord);