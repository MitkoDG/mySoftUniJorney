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

