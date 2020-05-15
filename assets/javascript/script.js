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
  password = '';
  var randSelected = '';
  for (var i = 0; i < length; i++) {
    randSelected = randomFunc(isLower, isUpper, isNumbers, isSymbols);
    if (randSelected !== "retry") {
      password = password + randSelected;
    } else {
      i--;
    }
  }
  
  console.log(password);
  document.getElementById("password").innerHTML = password;
  return password;
}
//SELECT RANDOM CHARACTERS FOR PASSWORD GENERATOR
function randomFunc(isLower = false, isUpper = false, isNumbers = false, isSymbols = false) {
  var selector = Math.floor(Math.random() * 4);
  if (isLower && selector === 0) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  } else if (selector === 0) {
    return "retry";
  }
  if (isUpper && selector === 1) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  } else if (selector === 1) {
    return "retry";
  }
  if (isNumbers && selector === 2) {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  } else if (selector === 2) {
    return "retry";
  }
  if (isSymbols && selector === 3) {
    const symbols = '!@#$%^&*'
    return symbols[Math.floor(Math.random() * symbols.length)];
  } else if (selector === 3) {
    return "retry";
  }
  console.log(isLower, isUpper, isNumbers, isSymbols);
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// var password = generatePassword();
var passwordText = document.getElementById("#password");
passwordText = password;
