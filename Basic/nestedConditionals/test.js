function test(input) {
    let language = input[0];

    if (language === 'BG') {
        console.log('Здравейте');
    } else if ( language === 'EN') {
        console.log('Welcome');
    } else if (language === 'ES') {
        console.log('Hola');
    }
}
test(['EN']);