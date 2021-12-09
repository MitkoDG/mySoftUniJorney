function password(input) {

    let password = (input[0]);
    let correct = 's3cr3t!P@ssw0rd'

    if (password === correct) {
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}


password(["qwerty"]);