
// •	The length should be 6 - 10 characters (inclusive)
// •	It should consist only of letters and digits
// •	It should have at least 2 digits

//Royal gave it to me
function validatePassword(password) {
  let isLongEnough = false;
  let consistsOfLettersAndDigits = true;
  let hasTwoDigits = false;
  let length = password.length;

  function checkLength() {
    if (length >= 6 && length <= 10) {
      isLongEnough = true;
    } else {
      console.log("Password must be between 6 and 10 characters");
    }
  }

  checkLength();

  function checkLettersAndDigits() {
    let char = "";
    let ascii = 0;

    for (let i = 0; i < length; i++) {
      char = password[i];
      ascii = char.charCodeAt(0);

      if (
        ascii < 48 ||
        (ascii > 57 && ascii < 65) ||
        (ascii > 90 && ascii < 97) ||
        ascii > 122
      ) {
        consistsOfLettersAndDigits = false;
        console.log("Password must consist only of letters and digits");
        break;
      }
    }
  }

  checkLettersAndDigits();

  function checkForTwoDigits() {
    let char = "";
    let ascii = 0;
    let digits = 0;

    for (let i = 0; i < length; i++) {
      char = password[i];
      ascii = char.charCodeAt(0);

      if (ascii >= 48 && ascii <= 57) {
        digits++;

        if (digits === 2) {
          hasTwoDigits = true;
          break;
        }
      }
    }

    if (digits < 2) {
      console.log("Password must have at least 2 digits");
    }
  }

  checkForTwoDigits();

  if (isLongEnough && hasTwoDigits && consistsOfLettersAndDigits) {
    console.log("Password is valid");
  }
}
validatePassword("logIn");
// diana.neeva
function password(input) {
  let inputL = input.length;
  let pasword = input.toString().split("");
  let digits = 0;
  let validPass = true;
  let specialSymb = false;

  for (let i = 0; i < inputL; i++) {
    if (!isNaN(pasword[i])) {
      digits++;
    }
    let myChar = pasword[i].charCodeAt();
    if (
      !(
        (myChar >= 48 && myChar <= 57) ||
        (myChar >= 65 && myChar <= 90) ||
        (myChar >= 97 && myChar <= 122)
      )
    ) {
      specialSymb = true;
    }
  }

  if (inputL < 6 || inputL > 10) {
    console.log("Password must be between 6 and 10 characters");
    validPass = false;
  }

  if (specialSymb) {
    console.log("Password must consist only of letters and digits");
    validPass = false;
  }

  if (digits < 2) {
    console.log("Password must have at least 2 digits");
    validPass = false;
  }
  if (validPass) {
    console.log("Password is valid");
  }
}
password('MyPass123');
