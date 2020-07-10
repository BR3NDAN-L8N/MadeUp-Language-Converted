const englishText = document.getElementById('englishText');
const azgarishText = document.querySelector('#azgarishText');
const translateBTN = document.querySelector('#translate');

translateBTN.addEventListener('click', translate);

function translate() {
    // console.log(englishText.value);


}

function addEnding(letter) {
    if (letter /aeiouy/i) {
        newString += "gar";
    } else {
        newString += "ah";
    }
}