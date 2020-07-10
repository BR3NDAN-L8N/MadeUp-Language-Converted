const englishText = document.getElementById('englishText');
const azgarishText = document.querySelector('#azgarishText');
const translateBTN = document.querySelector('#translate');


let newString = "";
const vowels = /a|e|i|o|u|y/i;
const alphanumeric = /[a-z]/i;
const notALetter = /[^a-z]/i;
let word = "";
let oldWord = "";
let newWord = "";

translateBTN.addEventListener('click', translate);

function translate() {
    console.log(englishText.value);
    let translation = "";
    phraseToTranslate = englishText.value;
    const words = englishText.value.split(" ");

    for (i = 0; i < words.length; i++) {
        newString += `${addEnding(words[i])} `;
    }
    console.log(newString);
    azgarishText.textContent = newString;
}

// Add an ending based on the last letter being a vowel or not
function addEnding(wordToCheck) {
    // This variable will hold all the characters at the end of a word that are not letters
    notLetters = "";
    // Checking if the words has any non-letter characters at the end
    if (notALetter.test(wordToCheck.charAt(wordToCheck.length-1))) {
        // i starts as 1 as we deduct i from the word.length to access the last character
        // the conditional in the middle returns True if the character is not a letter
        for (i = 1; notALetter.test(wordToCheck.charAt(wordToCheck.length-i)) ; i++) {
            let tempCharHolder = wordToCheck.charAt(wordToCheck.length-i);
            // we concatinate like this to keep multiple non-letter characters in their original order
            notLetters = tempCharHolder + notLetters;
        }
    }
    // removing the non-letters from the word we are checking
    wordToCheck = wordToCheck.replace(notLetters, "");
    console.log(`this is ${notALetter.test(wordToCheck.charAt(wordToCheck.length-1))}`);

    // adding the appropriate ending to the word and then adding back the non-letters we removed previously... vowel endings get the truthy, non-vowels get the falsey
    if (vowels.test(wordToCheck.charAt(wordToCheck.length-1))) {
        wordToCheck += "gar" + notLetters;
    } else if (alphanumeric.test(wordToCheck.charAt(wordToCheck.length-1))) {
        wordToCheck += "ah" + notLetters;
    } else {
        wordToCheck = notLetters;
    }
    return wordToCheck;   
}


// const lastLetter = oldWord.charAt(oldWord.length-1);
// console.log(/a|e|i|o|u|y/i.test(lastLetter));
// addEnding(oldWord, newString);