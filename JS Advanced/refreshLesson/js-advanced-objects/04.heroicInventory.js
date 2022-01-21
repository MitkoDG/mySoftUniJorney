function heroInventory(input) {
    let result = [];

    for (const nextHero of input) {
        let [name, level, items] = nextHero.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        result.push({name, level, items});
    }


        console.log(JSON.stringify(result));
    
}
heroInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)