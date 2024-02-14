// Scrivi una funzione che accetti una stringa come parametro e restituisca la stessa stringa ma con le iniziali delle parole tutte in maiuscolo
// Es: funzioneEsempio("nel mezzo del cammin di nostra vita")  :freccia_destra:  "Nel Mezzo Del Cammin Di Nostra Vita"


function upperCase(string) {

    let Words = string.split(" ");

    for (let i = 0; i < Words.length; i++) {

        Words[i] = Words[i].charAt(0).toUpperCase() + Words[i].slice(1);
    }

    console.log(Words)

    let sentence = Words.join(" ");

    return sentence;

}




let commedia = upperCase("nel mezzo del cammin di nostra vita");

document.getElementById("firstMaiuscWord").innerText = commedia;