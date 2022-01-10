var generateBtn = document.querySelector("#generate");

//Assignment code
//Add generatePassword function
function generatePassword() {

//Define a compile array and array for password characters
var compileArray = [];
var passwordArray = [];

//Define character arrays
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charactersArray = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

//Set prompts
var characterCount = prompt ("How many number characters do you want your password to be (between 8 and 128)?");
var numbers = confirm ("Do you want your password to include numbers?");
var uppercase = confirm ("Do you want your password to include uppercase letters?");
var lowercase = confirm ("Do you want your password to include lowercase letters?");
var character = confirm ("Do you want your password to include special characters?");


//set compileArray with conditions
if (numbers){
  compileArray = compileArray.concat(numberArray); 
}
if (uppercase){
  compileArray = compileArray.concat(uppercaseArray);
}
if (lowercase){
  compileArray = compileArray.concat(lowercaseArray);
}
if (character){
  compileArray = compileArray.concat(charactersArray);
}

//generate passwordArray and join
for (var i = 0; i < characterCount; i++) {
      
  passwordArray.push (compileArray[Math.floor(Math.random() * compileArray.length)]); 
  
}
  return passwordArray.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
