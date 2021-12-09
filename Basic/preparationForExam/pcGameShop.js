function pcGameShop(input) {

    let soldGames = Number(input[0]);

    let hearthstoneCounter = 0;
    let fortniteCounter = 0;
    let overwathcCounter = 0;
    let others = 0;

    for (let index = 1; index <= soldGames; index++) {
        let currentGame = input[index];

        switch (currentGame) {
            case 'Hearthstone': hearthstoneCounter++; break;
            case 'Fornite': fortniteCounter++; break;
            case 'Overwatch': overwathcCounter++; break;
            default: others++; break;
        }
    }

    console.log(`Hearthstone - ${(hearthstoneCounter * 100 / soldGames).toFixed(2)}%`);
    console.log(`Fornite - ${(fortniteCounter * 100 / soldGames).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwathcCounter * 100 / soldGames).toFixed(2)}%`);
    console.log(`Others - ${(others * 100 / soldGames).toFixed(2)}%`);
}
pcGameShop(["4","Hearthstone","Fornite","Overwatch","Counter-Strike"]);