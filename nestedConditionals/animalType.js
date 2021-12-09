function animal(input) {
    let animalType = input[0];
    switch (animalType) {
        case 'crocodile':
        case 'tortoise':
        case 'snake':
            console.log('reptile');
            break;
        case 'dog':
            console.log('mammal');
            break;
        default:
            console.log('unknown');
            break;
    }
}
