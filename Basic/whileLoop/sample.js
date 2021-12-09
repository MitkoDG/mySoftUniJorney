function whileDemo() {
    let number = 1;

    for(let i = 1; i<=10; i++){
        if(i === 5) {
            break;
        } else {
            console.log(i);
        }
    }

    // let number = 1;
    // while (number <= 5) {
    //     console.log(number);
    //     number++;
    // }
    // console.log(`Value ${number}`);
}
whileDemo();