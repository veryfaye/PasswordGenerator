# PasswordGenerator
Homework assignment to use JavaScript to make a password generator for an existing webpage.

## Description
This webpage is a password generator that uses user inputs to randomly generate a password. When the user clicks the button "Generate Password" a series of prompts will appear asking for the length of the password, and what character types to use. Then using the user determined parameters are used to generate a password at random. If the user enters a length that is outside of the set parameters, they are requested to enter the length again, and if the user does not select any of the available character types they are requested to select them again. If the user wants to randomly generate a different password, then they can press the "Generate Password" button again. They will be prompted again for the parameters, and a new randomly generated password will replace the first one. See the images below for potential prompts the user will encounter.

## Reference Images
Ask the user for length of password:
![Request for Length of Password](/readmeimages/RequestLength.png)

The user did not supply a number for the length:
![Non Number Entered](/readmeimages/NaNEntered.png)

The user gave a number outside of the listed range:
![Outside of Range Entered](/readmeimages/OutsideOfRangeEntered.png)

Ask the user about character types:
![Character Type Request](/readmeimages/CharacterTypeRequest.png)

If the user selected cancel on all character types listed:
![All Character Types are False](/readmeimages/AllCharacterTypesFalse.png)

Randomly generated password:
![Randomly Generated Password](/readmeimages/RandomPassword.png)

## License
MIT License

Copyright (c) 2020 Amanda LeMoine

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
