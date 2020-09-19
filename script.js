// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// generatePassword input function
function generatePassword(){
  password = parseInt(prompt("How many characters would you like your password to contain?"));
  // make array of password characters
  var numberCharacters = '1234567890';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var specialCharacters = '!@#$-+=_*&^%?/;:';
  var totalCharacters = [];
  // if input pwd length is between 8 and 129
  if(password>=8 && password<=129){
    var numberInclude = confirm("Click OK to confirm including numeric characters");
    if(numberInclude===true){
      totalCharacters += numberCharacters;
    }else{
      this.totalCharacters;
    }

    var lowerCaseInclude = confirm("Click OK to confirm including lowercase characters");
    if(lowerCaseInclude===true){
      totalCharacters += lowerCase;
    }else{
      totalCharacters;
    }

    var upperCaseInclude = confirm("Click OK to confirm including uppercase characters");
    if(upperCaseInclude===true){
      totalCharacters += upperCase;
    }else{
      totalCharacters;
    }

    var specialInclude = confirm("Click OK to confirm including special characters");
    if(specialInclude===true){
      totalCharacters += specialCharacters;
    }else{
      totalCharacters;
    }

    var ranPick = [];
    for(i=0; i<this.password; i++){
      var numPick = Math.floor(Math.random()*(totalCharacters.length));
      ranPick += totalCharacters[numPick];
    }
    this.password = ranPick;
  }
  // if input pwd length is not between 8 and 129
  else{
    if(password<8){
      alert("Password length must be at least 8 characters");
      return generatePassword();
    }else if (password>129){
      alert("Password length must be less than 129 characters");
      return generatePassword();
    }else{
      alert("Password length must be 8 to 129 characters");
      return generatePassword();
    }
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

