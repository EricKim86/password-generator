// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  // GIVEN I need a new, secure password
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  // let character;

  //arrays

  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]

  var characterSelect = window.prompt("How many characters do you want your password to have (please select a number between 8 and 128)?")

  if (characterSelect >= 8 && characterSelect < 129) {
    var lowercase = window.confirm ("Do you want to include lowercase?");
  } else {
      window.alert("You did not provide a valid length, please try again!")
  }


  // if (confirm("Do you want to include lowercase?")) {
  //   console.log("user selected to include lowercase");
  // } else {
  //   console.log("user selected to not include lowercase");
  // }
  // var randomLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
  // console.log(randomLowercase);

  // if (confirm("Do you want to include uppercase?")) {
  //   console.log("user selected to include uppercase");
  // } else {
  //   console.log("user selected to not include uppercase");
  // }
  // var randomUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];
  // console.log(randomUppercase);

  // if (confirm("Do you want to include numeric?")) {
  //   console.log("user selected to include numeric");
  // } else {
  //   console.log("user selected to not include numeric");
  // }
  // var randomNumeric = numeric[Math.floor(Math.random() * numeric.length)];
  // console.log(randomNumeric);

  // if (confirm("Do you want to include special characters?")) {
  //   console.log("user selected to include special characters");
  // } else {
  //   console.log("user selected to not include special characters");
  // }
  // var randomSpecial = special[Math.floor(Math.random() * special.length)];
  // console.log(randomSpecial);

  return "Display Randomly Generated Password Here"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
