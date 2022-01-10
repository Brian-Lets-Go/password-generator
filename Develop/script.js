// Assignment code here
function generatePassword() {

//Make an empty array to compile charachters
var compileArray = []

//Make an array to compile the charachters of the password
var passwordArray = []

//Add arrays for each set of charachters
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charactersArray = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

//Add the prompt for character count
var characterCount = prompt ("How many Characters do you want your password to be (between 8 and 128)?");

//Prompt for lowercase characters
var lowercase = confirm ("Do you want to include lowercase characters in your password?");

//Prompt for uppercase characters
var uppercase = confirm ("Do you want to include uppercase characters in your password?");

//Prompt for numbers
var numbers = confirm ("Do you want numbers in your password?");

//Prompt for special characters
var characters = confirm ("Do you want special characters in your password?");


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
