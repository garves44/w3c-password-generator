// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Page state when loaded
var length = '';
var isLower = false;
var isUpper = false;
var isNumbers = false;
var isSymbols = false;
var password = '';
//REESET TO DEFAULT STATE
function reset() {
  length = '';
  isLower = false;
  isUpper = false;
  isNumbers = false;
  isSymbols = false;
  password = '';
  writePassword();
}
//PASSWORD CRITERIA SELECTOR & PASSWORD GENERATION
function writePassword() {
  var length = prompt("Enter password length! Between 8-128.");
  length = parseInt(length);
  if (isNaN(length)) {
    alert("The input is not a number! Try again!");
    reset();
    return;
  } else if (length < 8) {
    alert("Password to short needs to be longer than 8.");
    reset();
    return;
  } else if (length > 128) {
    alert("Password to long needs to be shorter than 128.");
    reset();
    return;
  }

  var isLower = confirm('Would you like to include lower case letters?');
  var isUpper = confirm('Would you like to include upper case letters?');
  var isNumbers = confirm('Would you like to include numbers?');
  var isSymbols = confirm('Would you like to include symbols?');

  if (isLower === false && isUpper === false && isNumbers === false && isSymbols === false) {
    alert('You need to select at least one option!');
    reset();
  }
  var randSelected = '';
  for (var i = 0; i < length; i++) {
    randSelected = randomFunc(isLower, isUpper, isNumbers, isSymbols);
    if (randSelected !== null){
      password = password + randSelected;
    } else {
      i--;
    }
  }
  console.log(password);
  return password;
}
//SELECT RANDOM CHARACTERS FOR PASSWORD GENERATOR
function randomFunc(isLower = false, isUpper = false, isNumbers = false, isSymbols = false) {
  var selector = Math.floor(Math.random() * 4);
  if (isLower && selector === 0) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  if (isUpper && selector === 1) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  if (isNumbers && selector === 2) {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  if (isSymbols && selector === 3) {
    const symbols = '!@#$%^&*'
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  console.log(isLower, isUpper, isNumbers, isSymbols);
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;














// // DOM elements
// var resultElement = document.getElementById('result');
// var lengthElement = document.getElementById('length');
// var upperCaseElement = document.getElementById('uppercase');
// var lowerCaseElement = document.getElementById('lowercase');
// var numbersElement = document.getElementById('numbers');
// var symbolsElement = document.getElementById('symbols');
// var generateElement = document.getElementById('generate');
// var clipboardElement = document.getElementById('clipboard');

// var randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomSymbol
// };
// //Generate event listen
// generateElement.addEventListener('click', () => {
//   var length = +lengthElement.value;
//   var isLower = lowerCaseElement.checked;
//   var isUpper = upperCaseElement.checked;
//   var isNumbers = numbersCaseElement.checked;
//   var isSymbols = symbolsCaseElement.checked;

//   resultElement.innerText = generatePassword(length, isLower, isUpper, isNumbers, isSymbols);
// })

// //Generate Password Function
// function generatePassword(lower, upper, number, symbol, length) {
//   var generatedPassword = '';
//   const typesCount = lower + upper + number + symbol;
//   const typesArr = [{
//     lower
//   }, {
//     upper
//   }, {
//     number
//   }, {
//     symbol
//   }].filter(item => Object.values(item)[0]);
//   if (typesCount === 0) {
//     return '';
//   }
//   for (var i = 0; i < length; i += typesCount) {
//     typesArr.forEach(type => {
//       var funcName = Object.keys(type)[0];

//       generatedPassword += randomFunc[funcName]();
//     });
//   }
//   const finalPassword = generatedPassword.slice(0, length);
//   return finalPassword;
// }

// // Generator Functions
// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol() {
//   const symbols = '!@#$%^&*'
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

// //Copy password to clipboard
// clipboardElement.addEventListener('click', () => {
//   const textarea = document.createElement('textarea');
//   const password = resultElement.innerText;

//   if (!password) {
//     return;
//   }
//   textarea.value = password;
//   document.body.appendChild(textarea);
//   textarea.select();
//   document.execCommand('copy');
//   textarea.remove();
//   alert('Password copied to clipboard!');
// })