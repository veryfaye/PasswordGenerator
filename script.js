// Assignment Code
var generateBtn = document.querySelector("#generate");
var numChar = 0;
var charactersUsed={
  'lowerCase':false,
  'upperCase':false,
  'numeric':false,
  'special':false
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// function generatePassword to Prompt user, and generate the password
function generatePassword() {

  // request number of characters needed for the password. Only allow between 8 and 128 characters
  while (numChar<8 || numChar>128) {
    numChar = prompt('How many characters are in this password? Please select between 8 and 128.');
    console.log("Number of characters selected is: " + numChar);
  }

  // request if lowercase letters are included
  // validate "Lowercase Letters Included" or "Lowercase Letters not Included"

  // request if uppercase letters are included
  // validate "Uppercase Letters Included" or "Uppercase Letters not Included"

  // request if numeric values are included
  // validate "Numeric Values Included" or "Numeric Values not Included"

  // request if special characters are included
  // validate "Special Characters Included" or "Special Characters not Included"

  // if user does not select any characters then start over at lowercase request



  return 'passwordtext'
}
