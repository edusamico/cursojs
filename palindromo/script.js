// input any word (string) in var wordToTest to test - ex: raiar, ama, ovo, radar
var wordToTest = "radar";

function verifyPalindromo (string) {
    if (!string) return "não existe string para verificação 1";

    return string.split("").reverse().join("") === string;
}

console.log(verifyPalindromo (wordToTest));

function verifyPalindromo2 (string) {
    if (!string) return "não existe string";

    for (let i = 0; i < string.length / 2; i++){
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    
    return true;
}
console.log(verifyPalindromo2 (wordToTest));

