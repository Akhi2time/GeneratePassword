// Assignment Code
var generateBtn = document.querySelector("#generate");
var ReturnPassword
var ChosenCharacters = [];
var passwordLength
// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
 passwordLength = window.prompt("Please enter a number 8-128, to chose how many characters you want in your password");
  window.alert("Your pass word length is " + passwordLength);

  if(Number.isNaN(passwordLength)){
    window.alert("Alert!");
    return;
  }
  if(passwordLength<8){
    window.alert("Invalid");
    return;
  }
  if(passwordLength>128){
    window.alert("Invalid");
    return;
  }

  var UppercaseLetters = window.confirm("Would you like Uppers Case Letter");
  if (UppercaseLetters) {
    window.alert("You choose a UpperCase Letter");
    var UppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    ChosenCharacters.push(...UppercaseLetters);
    console.log(ChosenCharacters);

  }
  if (UppercaseLetters === false) {
    window.alert("Did not choose UpperCase Letter");
  }


  var LowerCaseLetters = window.confirm("Would you like a Lower Case Letter");
  if (LowerCaseLetters) {
    window.alert("You choose a LowerCasse Letter");
    var LowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    ChosenCharacters.push(...LowerCaseLetters);
    console.log(ChosenCharacters);

  }
  if (LowerCaseLetters === false) {
    window.alert("Did not choose LowerCase Letter")
  }


  var Numbers = window.confirm("Would you like a Number");
  if (Numbers) {
    window.alert("You choose a Number");
    var Numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    ChosenCharacters.push(...Numbers);
    console.log(ChosenCharacters);

  }
  if (Numbers === false) {
    window.alert("Did not choose a Number");
  }


  var SpecialCharacters = window.confirm("Would you like a Special Characters");
  if (SpecialCharacters) {
    window.alert("You choose a Special Character");
    var SpecialCharacters = ['@', '!', '#', '$', '^', '&', '*'];
    ChosenCharacters.push(...SpecialCharacters);
    console.log(ChosenCharacters); 
  }
  if (SpecialCharacters === false) {
    window.alert("Did not choose Special Character");
  }
  function Randomizer() {
    var ScrambledPassword = ""
  //Scramble Characters from the global array
  for (var i = 0; i < passwordLength; i++) {
    var Random = Math.floor(Math.random() * ChosenCharacters.length);
  ScrambledPassword += ChosenCharacters[Random]
  console.log(ScrambledPassword);
    }
      ReturnPassword = ScrambledPassword
  }
  Randomizer()
  return ReturnPassword
}





generateBtn.addEventListener("click", writePassword);