function arenaTier(input) {
    let gladiators = {};

    let getTotalSkill = (duelist) =>{
        let duelistSkillArr = Object.entries(gladiators[duelist]);
        let totalSkill = 0;
        duelistSkillArr.forEach(el => {
            totalSkill += el[1];
        })
        return totalSkill;
    }
    
    for (let command of input) {
        if (command === "Ave Cesar"){
            break;
        }
        let token = command.split(" ");
        if (token.includes("vs")){
            let firstDuelist = token[0];
            let secondDuelist = token[2];
            if (gladiators.hasOwnProperty(firstDuelist) && gladiators.hasOwnProperty(secondDuelist)){
                let firstGladiatorTechs = Object.keys(gladiators[firstDuelist]);
                let secondGladiatorTechs = Object.keys(gladiators[secondDuelist]);
                let isContaining = false;

                firstGladiatorTechs.forEach(el => {
                    if (secondGladiatorTechs.includes(el)){
                        isContaining = true;
                        return isContaining;
                    }
                })
                if (isContaining){
                    if (getTotalSkill(firstDuelist) > getTotalSkill(secondDuelist)){
                        delete gladiators[secondDuelist];
                    }
                    else if(getTotalSkill(firstDuelist) < getTotalSkill(secondDuelist)){
                        delete  gladiators[firstDuelist];
                    }
                }
            }
        }
        else{
            token = token.join(" ").split((" -> "));
            let name = token[0];
            let tech = token[1];
            let skill = Number(token[2]);

            if (!gladiators.hasOwnProperty(name)){
                gladiators[name] = {};
                gladiators[name][tech] = skill;
            }
            else{
                if(!gladiators[name].hasOwnProperty(tech)){
                    gladiators[name][tech] = skill;
                }
                else{
                    if (gladiators[name][tech] < skill){
                        gladiators[name][tech] = skill;
                    }
                }
            }
        }
    }

    let duelistNames = Object.keys(gladiators);
    duelistNames.forEach(el =>{
        gladiators[el].totalSkill = getTotalSkill(el);
    })
    let sortedDuelists = Object.entries(gladiators)
        .sort((a,b) => {
            if(a[1].totalSkill === b[1].totalSkill){
                return a[0].localeCompare(b[0]);
            }
            return b[1].totalSkill - a[1].totalSkill
        });
    sortedDuelists.forEach(el => {
        delete el[1].totalSkill;
    })
    sortedDuelists.forEach(el =>{
        let sortedTechs = Object.entries(el[1])
            .sort((a,b) => {
                if (a[1] === b[1]){
                    return a[0].localeCompare(b[0]);
                }
                return b[1] - a[1];
            });
        el.splice(1,1,sortedTechs);

    })
    for (let duelist of sortedDuelists) {
        console.log(`${duelist[0]}: ${getTotalSkill(duelist[0])} skill`)
        for (let tech of duelist[1]) {
            console.log(`- ${tech[0]} <!> ${tech[1]}`)
        }
    }

}