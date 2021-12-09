function encryptPasswords(passwords) {
    passwords.shift();
    let pattern = /(?<=(?<symbols>(.)\1)+\>)[0-9][0-9][0-9]\|[a-z][a-z][a-z]\|[A-Z][A-Z][A-Z]\|[^\<^\>][^\<^\>][^\<^\>](?=\<\k<symbols>+)/;
    for (let item of passwords) {
        let match = item.match(pattern)
        if (match) {
            console.log('Password: ' + match[0].replace(/\|/g, ''));
        } else {
            console.log('Try another password!');
        }
    }
}