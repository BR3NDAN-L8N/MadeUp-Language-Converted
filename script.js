// Assigning IDs from HTML
const englishText = document.getElementById('englishText');
const azgarishText = document.querySelector('#azgarishText');
const translateBTN = document.querySelector('#translate');
// These are variables I'll need globaly
let newString = "";
const vowels = /a|e|i|o|u|y/i;
const alphanumeric = /[a-z]/i;
const notALetter = /[^a-z]/i;
let word = "";
let oldWord = "";
let newWord = "";
// Click event for the "translate" button
translateBTN.addEventListener('click', translate);
// Main function of the script, fires upon clicking above button
function translate() {
    // translation will hold our final translation
    let translation = "";
    // Convert user input from English Textarea in an array of single words
    const wordsArray = englishText.value.split(" ");
    // iterating through array, 1 index/word at a time
    for (i = 0; i < wordsArray.length; i++) {
        translation += `${addEnding(wordsArray[i])} `;
    }
    console.log(translation);
    // azgarish textarea being updated with the new translation
    azgarishText.textContent = translation;
}
// Add an ending based on the last letter being a vowel or not
function addEnding(wordToCheck) {
    // This variable will hold all the characters at the end of a word that are not letters
    notLetters = "";
    // Checking if the words has any non-letter characters at the end
    if (notALetter.test(wordToCheck.charAt(wordToCheck.length-1))) {
        // i starts as 1 as we deduct 1 from the word.length to access the last character
        // the conditional in the middle returns True if the character is not a letter thus stopping once we hit a letter
        for (i = 1; notALetter.test(wordToCheck.charAt(wordToCheck.length-i)) ; i++) {
            let tempCharHolder = wordToCheck.charAt(wordToCheck.length-i);
            // we concatinate like this to keep multiple non-letter characters in their original order
            notLetters = tempCharHolder + notLetters;
        }
    }
    // removing the non-letters from the word we are checking
    wordToCheck = wordToCheck.replace(notLetters, "");
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