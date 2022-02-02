function getNumber() {
    let randomNumber = Math.random();

    if (randomNumber < 0.5) {
        throw new Error('Your number is too low');
        // throw {
        //     message: 'Your number is too low',
        //     type: 'Some_error_TYPE'
        // }
    }

    return Math.floor(randomNumber * 100);
}


function app() {
    try {
        let number = getNumber();

        console.log(number);
    } catch (err) {
        console.log(err.stack);
    } finally {
        console.log('always executes last');
    }
}

app()
