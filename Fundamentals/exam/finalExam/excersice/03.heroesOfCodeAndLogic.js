function heroesCodeLogic (input){
    let heroesNum = Number(input.shift());
 
    let heroes = [];

    for (let i = 0; i < heroesNum; i++){
        let [hero, hp, mp] = input.shift().split(' ');
        let newHero = {
            hero,
            hp: Number(hp),
            mp: Number(mp)
        }
        heroes.push(newHero);
    }

    let line = input.shift();
    while(line !== 'End'){
        let command = line.split(' - ')[0];
        let heroName = line.split(' - ')[1];
        let currentHero = heroes.find((e) => e.hero === heroName);
        switch(command){
            case 'CastSpell':
                let mpNeeded = Number(line.split(' - ')[2]);
                let spellName = line.split(' - ')[3];
                if(currentHero.mp >= mpNeeded){
                    currentHero.mp -= mpNeeded;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${currentHero.mp} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
                break;
            case 'TakeDamage':
                let damage = Number(line.split(' - ')[2]);
                let attacker = line.split(' - ')[3];
                currentHero.hp -= damage;
                if(currentHero.hp > 0){
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${currentHero.hp} HP left!`);
                } else {
                    let heroIndex = heroes.indexOf(currentHero);
                    heroes.splice(heroIndex, 1);
                    console.log(`${heroName} has been killed by ${attacker}!`);
                }
                break;
            case 'Recharge':
                let recharge = Number(line.split(' - ')[2]);
                if(currentHero.mp + recharge > 200){
                    recharge = 200 - currentHero.mp;
                }
                currentHero.mp += recharge;
                console.log(`${heroName} recharged for ${recharge} MP!`);
                break;
            case 'Heal':
                let hpAmount = Number(line.split(' - ')[2]);
                if(currentHero.hp + hpAmount > 100){
                    hpAmount = 100 - currentHero.hp;
                }
                currentHero.hp += hpAmount;
                console.log(`${heroName} healed for ${hpAmount} HP!`);
                break;
        }

        line = input.shift();
    }

    let sortedHeroes = heroes.sort((a,b) => b.hp - a.hp || a.hero.localeCompare(b.hero));
    sortedHeroes.forEach(el => {
        console.log(el.hero);
        console.log(`  HP: ${el.hp}`);
        console.log(`  MP: ${el.mp}`);
    })
}

console.log('-----Next solution------');

function solve(input) {
    let heroes = {};
    let i = 1;
    for(;i<=Number(input[0]);i++){
        let info = input[i].split(' ');
        heroes[info[0]] = { HP:Number(info[1]), MP:Number(info[2]) };
    }
    while(input[i]!=='End'){
        let action = input[i].split(' - ');
        switch (action[0]){
            case 'CastSpell':
                if(heroes[action[1]].MP >= Number(action[2])){
                    heroes[action[1]].MP-= Number(action[2]);
                    console.log(`${action[1]} has successfully cast ${action[3]} and now has ${heroes[action[1]].MP} MP!`);
                }else{
                    console.log(`${action[1]} does not have enough MP to cast ${action[3]}!`);
                }
                break;
            case 'TakeDamage':
                heroes[action[1]].HP-= Number(action[2]);
                if(heroes[action[1]].HP>0){
                    console.log(`${action[1]} was hit for ${action[2]} HP by ${action[3]} and now has ${heroes[action[1]].HP} HP left!`)
                }else{
                    console.log(`${action[1]} has been killed by ${action[3]}!`);
                    delete heroes[action[1]];
                }
                break;
            case 'Recharge':
                let currMP = heroes[action[1]].MP
                let tempMP = currMP + Number(action[2]);
                tempMP = tempMP>200 ? 200 : tempMP;
                heroes[action[1]].MP = tempMP
                console.log(`${action[1]} recharged for ${tempMP-currMP} MP!`);
                break;
            case 'Heal':
                let currHP = heroes[action[1]].HP
                let tempHP = currHP + Number(action[2]);
                tempHP = tempHP>100 ? 100 : tempHP;
                heroes[action[1]].HP = tempHP
                console.log(`${action[1]} healed for ${tempHP - currHP} HP!`);
            default:
                break;
        }
        i++;
    }
    Object.entries(heroes)
        .sort(function(a,b){
            if(a[1].HP === b[1].HP){
                return a[0].localeCompare(b[0])
            }else{
                return b[1].HP - a[1].HP
            }
           
        })
        .forEach(hero=>{
            console.log(hero[0]);
            console.log(`  HP: ${hero[1].HP}`);
            console.log(`  MP: ${hero[1].MP}`);
        })
}