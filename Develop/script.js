// Assignment code here
var randomLength = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}

var generatePassword = function (passwordLength, characters) {
  var passwordLength = randomLength(8, 128);
  let characters = ["A", "B", "C"]
  let password = "";
  for (var i = 0; i <= passwordLength, i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    )
  }
  return password;
}

console.log(password);

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
