// Assignment Code
var generateBtn = document.querySelector("#generate");

  function generatePassword() {

//defining characters with arrays
 
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var special = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];


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

//user selection and randomizes choice.  Pushes into empty container

    var recordKeeper = []

    if (selectLowercase === true) {
      for (var i = 0; i < lowercase.length; i++) {
      var lowercaseRandom = lowercase[Math.floor(Math.random()*lowercase.length)];
      recordKeeper.push(lowercaseRandom);
      }
    }

    if (selectUppercase === true) {
      for (var i = 0; i < uppercase.length; i++) {
      var uppercaseRandom = uppercase[Math.floor(Math.random()*uppercase.length)];
      recordKeeper.push(uppercaseRandom);
      }
    }

    if (selectNumeric === true) {
      for (var i = 0; i < numeric.length; i++) {
      var numericRandom = numeric[Math.floor(Math.random()*numeric.length)];
      recordKeeper.push(numericRandom);
      }
    }

    if (selectSpecial === true) {
      for (var i = 0; i < special.length; i++) {
      var specialRandom = special[Math.floor(Math.random()*special.length)];
      recordKeeper.push(specialRandom);
      }
    }

//by default, numeric characters are placed in recordKeeper so there is no empty value

    if (recordKeeper.length === 0) {
      recordKeeper.push(numeric)
    }

//displayed code is created from user choices and randomized one final time

    var createdCode = ""

    for (var i = 0; i < characterSelect; i++) {
      var randomAnswer = recordKeeper[Math.floor(Math.random() * recordKeeper.length)];
      createdCode += randomAnswer;
    }


   if (!lowercase && !uppercase && !numeric && !special) {
    alert("You are required to make at least one selection")
    lowercase = confirm("Do you want to include lowercase characters?");
    uppercase = confirm("Do you want to include uppercase characters?");
    numeric = confirm("Do you want to include numeric?");
    special = confirm("Do you want to include special characters?");
  }

//created code is returned to the user 

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