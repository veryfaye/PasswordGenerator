// Assignment Code
var generateBtn = document.querySelector("#generate");
var charactersAvailable = [
  { ch: "lowercase letters", value: false, min: 97, max: 122 },
  { ch: "uppercase letters", value: false, min: 68, max: 90 },
  { ch: "numeric values", value: false, min: 48, max: 57 },
  { ch: "special characters", value: false, min: 33, max: 47 },
];
var charactersUsed = [];
var generatePass = "";

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
  var numChar = parseInt(
    prompt(
      "How many characters are in this password? Please select between 8 and 128."
    )
  );
  // verify a valid number was entered
  while (numChar < 8 || numChar > 128 || isNaN(numChar)) {
    console.log("Number of characters selected is: " + numChar);
    if (isNaN(numChar)) {
      numChar = parseInt(
        prompt(
          "A number was not entered. Please enter a number within 8 and 128 again"
        )
      );
    } else if (numChar > 8 || numChar < 128) {
      numChar = parseInt(
        prompt(
          "The number " +
            numChar +
            " is not within 8 and 128. Please enter again"
        )
      );
    }
  }

  //confirm all values are false so if the user wants to generate a new password they need to confirm the characters used again
  for (h = 0; h < charactersAvailable.length; h++) {
    charactersAvailable[h].value = false;
  }

  //while every charactersAvailable value is false then loop
  while (charactersAvailable.every((element) => element.value === false)) {
    //request for each character type to be used
    for (i = 0; i < charactersAvailable.length; i++) {
      charactersAvailable[i].value = confirm(
        "Do you want " + charactersAvailable[i].ch + " used?"
      );
      console.log(charactersAvailable[i]);
    }
    // if user does not select any characters then start over at lowercase request
    if (charactersAvailable.every((element) => element.value === false)) {
      alert(
        "You must select at least one character type to be in the password. Please try again."
      );
    }
  }

  generatePass = "";
  // rewrite characters available object to a characters used object
  for (j = 0; j < charactersAvailable.length; j++) {
    if (charactersAvailable[j].value === true) {
      charactersUsed.push(charactersAvailable[j]);
    }
  }
  console.log(charactersUsed);

  //generate password
  for (k = 0; k < numChar; k++) {
    //Randomly select character type
    var l = Math.floor(Math.random() * charactersUsed.length);
    console.log("l: " + l + ", char type: " + charactersUsed[l].ch);

    //Get the character from randomly generated ASCII
    var randChar = String.fromCharCode(
      Math.floor(
        Math.random() * (charactersUsed[l].max - charactersUsed[l].min + 1) +
          charactersUsed[l].min
      )
    );
    console.log("randChar: " + randChar);
    //push character to the password
    generatePass = generatePass.concat(randChar);
    console.log(generatePass);
  }

  return generatePass;
}
