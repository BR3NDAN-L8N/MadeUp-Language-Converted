const englishText = document.getElementById('englishText');
const azgarishText = document.querySelector('#azgarishText');
const translateBTN = document.querySelector('#translate');
let newString = "";
vowels = /a|e|i|o|u|y/i;
vowelAtEnd = /a|e|i|o|u|y\b/i;
word = "";
oldWord = "";
newWord = "";

translateBTN.addEventListener('click', translate);

function translate() {
    // console.log(englishText.value);


}

// Add an ending based on the last letter being a vowel or not
function addEnding(oldWord, newWord) {
    if (vowels.test(oldWord.charAt(oldWord.length-1))) {
        newWord += "gar";
    } else {
        newWord += "ah";
    }
    console.log(newWord);
    return newWord;   
}


// const lastLetter = oldWord.charAt(oldWord.length-1);
// console.log(/a|e|i|o|u|y/i.test(lastLetter));
addEnding(oldWord, newString);