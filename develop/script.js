
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


// Welcome Splash Screen

// var welcomescreen = document.getElementsByClassName("welcomescreen")

// (function () {
//   $(window).load(function () {
//       setTimeout(function () {
//          $('.loader').fadeOut();
//           start();
//       }, 200);
//   });

//   $(document).ready(function () {
//       $('.splash').slideToggle(3000);
//       $('.frame1').delay(3200).show('slide', { direction: 'right' }, 1000);
//       $('.frame2').delay(3300).show('slide', { direction: 'left' }, 1000);
//       $('.frame3').delay(3800).slideToggle(1000);
//       $('.frame3').css('line-height', '400px');
//       $('.frame2').delay(4000).hide('slide', { direction: 'left' }, 1000);
//       $('.frame1').delay(4200).hide('slide', { direction: 'right' }, 1000);
//       $('.splash').delay(4500).slideToggle(2000);
//       $('.frame3').delay(4800).transition({
//           scale: [
//               1.2,
//               1.2
//           ],
//           duration: 1000
//       });
//       $('.splash').delay(500).animate({ width: '50%' }, 1000);
//   });
// }.call(this));

// var timeleft = 4;
// var Timer = setInterval(function splashScreenTimer(){
//   if(timeleft <= 0){
//     welcomescreen.setAttribute("display", "none")
//     clearInterval(downloadTimer);
//   }
//   welcomescreen.value = 4 - timeleft;
//   timeleft -= 1;
// }, 1000);


// // Welcome Screen timer
// function setTime() {
//   var secondsLeft = 3;
//   var timerInterval = function setInterval() {
//     secondsLeft--;

//     if (secondsLeft === 0) {
//       clearInterval(timerInterval);
//       removeElement();
//     }

//   }, 1000);
// }

// function removeElement(dog) {
//      var element = document.getElementById(dog);
//      element.parentNode.removeChild(dog);
//      }
// }

// setTime();



// Password Generator

const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountNumber = document.getElementById('characterAmountNumber');
const includeUpperEl = document.getElementById('includeUpper');
const includeNumEl = document.getElementById('includeNum');
const includeSymEl = document.getElementById('includeSym');
const form = document.getElementById('passwordGeneratorForm');
const passwordBox = document.getElementById('passwordDisplay');

const upperCharCodes = arrayFromLowToHigh(65, 90);
const lowerCharCodes = arrayFromLowToHigh(97, 122);
const numCharCodes = arrayFromLowToHigh(48, 57);
const symCharCodes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

characterAmountNumber.addEventListener('input', syncCharacterAmount);
characterAmountRange.addEventListener('input', syncCharacterAmount);



form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUpper = includeUpperEl.checked
  const includeNum = includeNumEl.checked
  const includeSym = includeSymEl.checked
  const password = generatePassword(characterAmount, includeUpper, includeNum, includeSym)
  passwordBox.innerText = password
});

function generatePassword(characterAmount, includeUpper, includeNum, includeSym) {
  let charCodes = lowerCharCodes
  if (includeUpper) charCodes = charCodes.concat(upperCharCodes)
  if (includeSym) charCodes = charCodes.concat(symCharCodes)
  if (includeNum) charCodes = charCodes.concat(numCharCodes)
  
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
};

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
};

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
};
