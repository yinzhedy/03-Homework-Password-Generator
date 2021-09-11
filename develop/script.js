
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
// Assignment Code


var generateButton = document.querySelector("#generate");
var formSubmitButtom = document.getElementById(submit);
var charRange = document.getElementById(charRange);
var charNum = document.getElementById(charNum);
var form = document.getElementById(form);
const newPassword = document.getElementById(password)
// var includeUpper = document.getElementById(includeUpper);
// var includeNum = document.getElementById(includeNum);
// var includeSym = document.getElementById(includeSym);
var includeUpper = document.getElementById(includeUpper);
var includeNum = document.getElementById(includeNum);
var includeSym = document.getElementById(includeSym);
var upperCharCodes = arrayCharCodes(65, 90)
var lowerCharCodes = arrayCharCodes(97, 122)
var numCharCodes = arrayCharCodes(48, 57)
var symCharCodes = arrayCharCodes(33, 47).concat(
                    arrayCharCodes(58,64)
                    ).concat(
                    arrayCharCodes(91,96)
                    ).concat(
                    arrayCharCodes(123,126)
                  )


charNum.addEventListener("input", enterChar);
charRange.addEventListener("input", enterChar);

// Write password to the #password input
function enterChar(c) {
  const value = c.target.value
  charNum.value = value
  charRange.value = value
}

form.addEventListener("sumbit", c => {
  c.preventDefault()
  const characterAmount = charNum.value
  const includeUpper = includeUpper.checked
  const includeNum = includeNum.checked
  const includeSym = includeSym.checked
  const password = writePassword (characterAmount, includeUpper, includeNum, includeSym)
  newPassword.innerText = password

})

function arrrayCharCodes(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  } return;
}

function writePassword(characterAmount, includeUpper, includeNum, includeSym) {
  let charCodes = lowerCharCodes
  if (includeUpper) charCodes = charCodes.concat(UpperCharCodes)
  if (includeNum) charCodes = charCodes.concat(NumCharCodes)
  if (includeSym) charCodes = charCodes.concat(SymCharCodes)

  const passwordChar = []
  for (let i = 0; i < characterAmound; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
     passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join("")

}

function showForm() {
  form.removeAttribute("display", "block")
}
// Add event listener to generate button
generateButton.addEventListener("click", writePassword, showForm);


