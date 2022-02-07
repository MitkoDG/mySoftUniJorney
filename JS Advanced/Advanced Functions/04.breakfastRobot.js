function solution() {
    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    return function (command) {
        const menu = {
            apple: new Map(),
            lemonade: new Map(),
            burger: new Map(),
            eggs: new Map(),
            turkey: new Map(),
        }

        menu.apple.set('carbohydrate', 1);
        menu.apple.set('flavour', 2);
        menu.lemonade.set('carbohydrate', 10);
        menu.lemonade.set('flavour', 20);
        menu.burger.set('carbohydrate', 5);
        menu.burger.set('fat', 7);
        menu.burger.set('flavour', 3);
        menu.eggs.set('protein', 5);
        menu.eggs.set('fat', 1);
        menu.eggs.set('flavour', 1);
        menu.turkey.set('protein', 10);
        menu.turkey.set('carbohydrate', 10);
        menu.turkey.set('fat', 10);
        menu.turkey.set('flavour', 10);


        let status = '';

        const methods = {
            restock(element, quantity = 1) {
                ingredients[element] += Math.abs(quantity);
                status = 'Success';
            },
            prepare(element, quantity = 1) {
                const food = menu[element];
                let canBePrepared = true;
                for (const item of food) {
                    const ingredient = item[0];
                    const amount = item[1];

                    if (ingredients[ingredient] < amount * quantity) {
                        status = `Error: not enough ${ingredient} in stock`;
                        canBePrepared = false;
                        break;
                    }
                }

                if (canBePrepared) {
                    for (const item of food) {
                        const ingredient = item[0];
                        const amount = item[1];

                        ingredients[ingredient] -= amount * quantity;
                    }
                    status = 'Success';
                }
            },
            report() {
                status = `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
            }
        }

        let [method, element, quantity] = command.split(' ');
        quantity = Number(quantity);
        methods[method](element, quantity);

        return status.trim();
    }
}