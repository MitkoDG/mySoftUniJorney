function name(input) {

    for (let singleName of input) {
        let singlePerson = {
            name: singleName,
            personalNum: singleName.length
        };
        console.log(`Name: ${singlePerson.name} -- Personal Number: ${singlePerson.personalNum}`);
    }
}
name(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);
