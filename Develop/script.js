//Below are variables for the windowed prompts.
var choose;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

//For the lowercase, uppercase, numbers and special chaarcters. I created an array function to get the characters through charcodes ASCII.
var upper = arrayFromLowToHigh(65, 90)

var lower = arrayFromLowToHigh(97, 122)

var number= arrayFromLowToHigh(48, 57)

var character = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
)




//variable that identifies where the generated code will go into the html file.
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //The first prompt to appear that asks the user what charatcers they would like to use for their password.
  choose = parseInt(prompt("Please select the amount of characters you would like your password to be. Choose between 8-128."));

  //The 4 different prompts that will appear asking for lowercase, uppercase, numbers, or special charatcers to be used as options for the user's password.
  if(!choose) {
    alert("Please enter a value.");
  } 
  //Below is choosing between 8 to 128 charatcers to use in password.
  else if (choose < 8 || choose > 128) {
    choose = parseInt(prompt("Please choose a number between 8 and 128."));

  } 
  //Prompts that will appear after choosing your characters.
  else {
        confirmNumber = confirm("Will your password contain numbers?");
        confirmCharacter = confirm("Will your password contain special characters?");
        confirmUppercase = confirm("Will your password contain Uppercase letters?");
        confirmLowercase = confirm("Will your password contain Lowercase letters?");
  };

  //If no options are chosen, the below prompt will appear.
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    options = alert("You must choose an option");
  }
  
  //If all 4 types of charatcers are chosen
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
    options = character.concat(number, lower, upper);
  }

  //If user is just choosing special charatcers, numbers, and uppercase letters
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    options = character.concat(number, upper);
  }

  //If user is chossing special charatcers, numbers, and lowercase letters
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    options = character.concat(number, lower);
  }

  //If user is choosing special characters, lowercase letters, and uppercase letters
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    options = character.concat(lower, upper);
  }

  //If user is choosing numbers, lowercase letters, and uppercase letters
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    options = number.concat(lower, upper);
  }

  //If user is choosing special charatcers and numbers
  else if (confirmCharacter && confirmNumber) {
    options = character.concat(number);
  }
  //If user is choosing special characters and lowercase letters
  else if (confirmCharacter && confirmLowercase) {
    options = character.concat(lower);  
  } 
  //If user chooses special character and uppercase letters
  else if (confirmCharacter && confirmUppercase) {
    options = character.concat(upper);
  }
  //If user chooses lowercase letters and numbers
  else if (confirmLowercase && confirmNumber) {
    options = lower.concat(number);
  } 
  //If user chooses lowercase and uppercase letters
  else if (confirmLowercase && confirmUppercase) {
    options = lower.concat(upper);
  } 
  //If user chooses numbers and uppercase letters
  else if (confirmNumber && confirmUppercase) {
    options = number.concat(upper);
  }
  //If user only chooses special characters 
  else if (confirmCharacter) {
    options = character;
  }
  //If user only chooses numbers
  else if (confirmNumber) {
    options = number;
  }
  //If user only chooses lowercase characters
  else if (confirmLowercase) {
    options = lower;
  }
  //If user only chooses uppercase letters
  else if (confirmUppercase) {
    options = upper;
  };

  //Defining password as an array to combine all the characters chosen
  var password = []

  //For loop to keep generating new charatcers for password depending on the user's chosen rate
  for (let i = 0; i < choose; i++) {
        var pickOptions = options[Math.floor(Math.random() * options.length)];
        //below is identifying the charcode ASCII to put into a string.
        password.push(String.fromCharCode(pickOptions));
  }
    // Joins the password to a string
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}
  
//The array function to generate the ASCII charatcers defined at the top.
function arrayFromLowToHigh(low, high) {
  const array = []
  for(let i = low; i <= high; i++) {
      array.push(i)
  }
  return array
}

// The function that pulls the values from the functions above to make the password.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //where the password will go on the html doc
 

  passwordText.value = password; //displays onto the screen

}

//After clicking the generate password button, prompts will appear for user's criteria.
generateBtn.addEventListener("click", writePassword);
