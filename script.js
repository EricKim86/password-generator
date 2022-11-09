// Assignment Code
var generateBtn = document.querySelector("#generate");

  function generatePassword() {
    var characterSelect = prompt("How many characters do you want your password to have (please select a number between 8 and 128)?")
    if (isNaN(characterSelect)) {
      alert("You did not enter a valid number, please try again.")
      return "Click on the red button to try again."
    } 
  // character selection is either too small or too large

    if (characterSelect < 8 || characterSelect > 128) {
      alert("You did not provide a valid length, please try again!")
      return "Click on the red button to try again."
   }

  //character selection is in the acceptable range, progress

    var selectLowercase = confirm("Do you want to include lowercase characters?")
    var selectUppercase = confirm("Do you want to include uppercase characters?")
    var selectNumeric = confirm("Do you want to include numeric?")
    var selectSpecial = confirm("Do you want to include special characters?")

  //defining characters with arrays
 
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var special = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]

  //user choices will be entered here (storage container)

    var recordKeeper = []

    if (selectLowercase === true) {
      recordKeeper.push(lowercase)
    }

    if (selectUppercase === true) {
      recordKeeper.push(uppercase)
    }

    if (selectNumeric === true) {
      recordKeeper.push(numeric)
    }

    if (selectSpecial === true) {
      recordKeeper.push(special)
    }

    if (recordKeeper.length === 0) {
      recordKeeper.push(numeric)
    }

    var createdCode = ""

    for (var i = 0; i < characterSelect; i++) {
      var randomAnswer = recordKeeper[Math.floor(Math.random()*recordKeeper.length)]
      createdCode += randomAnswer
    }

  //if not selection is made, alert the user that at least one selection is required then prompt each question again.
    
  if (!lowercase && !uppercase && !numeric && !special) {
      alert("You are required to make at least one selection")
      lowercase = confirm("Do you want to include lowercase characters?");
      uppercase = confirm("Do you want to include uppercase characters?");
      numeric = confirm("Do you want to include numeric?");
      special = confirm("Do you want to include special characters?");
    }

  return createdCode
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);