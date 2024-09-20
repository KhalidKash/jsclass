// 1. RIGHT-ANGLE TRIANGLE

for (let i = 0; i < 5; i++){
    let row = ''
    for (let j = 0; j <= i; j++){
        row += '* '
    }
    console.log(row);
}

// 2. PALINDROME

let userInput = prompt("Enter a word");
let word = userInput.toLowerCase();
let isPalindrome = true;

for (let i = 0; i < word.length / 2; i++) {
  if (word[i] !== word[word.length - 1 - i]) {
    isPalindrome = false;
    break;

    
  }
}

if (isPalindrome) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palindrome.");
}
