// Assignment Code
var generateBtn = document.querySelector("#generate");
var charactersAvailable = [
  { ch: 'lowercase letters', value: false, min: 97, max: 122},
  { ch: 'uppercase letters', value: false, min: 68, max: 90},
  { ch: 'numeric values', value: false, min:48, max: 57},
  { ch: 'special characters', value: false, min:33, max: 47}
];
var charactersUsed = [];


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
  var numChar = prompt('How many characters are in this password? Please select between 8 and 128.');
  while (numChar < 8 || numChar > 128) {
    console.log("Number of characters selected is: " + numChar);
    if (numChar > 8 || numChar < 128) {
      numChar = prompt('The number ' + numChar + ' is not within 8 and 128. Please enter again');
    }
  }

  while (charactersAvailable[0].value == false && charactersAvailable[1].value == false && charactersAvailable[2].value == false && charactersAvailable[3].value == false) {
    //request for each character type to be used
    for (i = 0; i < charactersAvailable.length; i++) {
      charactersAvailable[i].value = confirm('Do you want ' + charactersAvailable[i].ch + ' used?')
      console.log(charactersAvailable[i])
    }

    
    // if user does not select any characters then start over at lowercase request
    if(charactersAvailable[0].value == false && charactersAvailable[1].value == false && charactersAvailable[2].value == false && charactersAvailable[3].value == false){
      alert('You must select at least one character type to be in the password. Please try again.')
    }
  }

  // rewrite characters available object to a characters used object

  // NOT WORKING YET. NEED TO TAKE A BREAK START HERE TOMORROW!
  
  for (j=0;j<charactersAvailable.length;j++){
    charactersUsed.push(charactersAvailable[i])
  }
  console.log(charactersUsed)

  //generate password:
  //for i=8 to i<=numChar
  //randomly generate 0-characters selected max 3
  //if randomly generated # is lowercase object =>



  return 'passwordtext';
}
