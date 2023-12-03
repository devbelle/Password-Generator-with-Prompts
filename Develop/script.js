// Assignment Code

//Will need to write out var charatcers you will be adding to each function below.
//Symbols, Numbers, Uppercase, Lowercase, integerChoice:for number 8-128, option: character choices.

var generateBtn = document.querySelector("#generate");

//Need to define generatePassword() as a function
function generatePassword(){
  //define password length.
  //step 1 prompt the user for the password criteria. Password length 8 < 128. Lowercase, uppercase, numbers, special characters.
  //create a window prompt that asks for number of characters between 8-128
  //create window prompt that asks for upper case, lowercase, special characters, and numbers,
}

//Define what var password is.

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
