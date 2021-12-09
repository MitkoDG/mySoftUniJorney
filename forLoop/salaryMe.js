function salary(input) {
    let index = 0;
    let openTabs = Number(input[index]);
    index++;
    let salaryAmount = Number(input[index]);

    let isLostSalary = false;

    for (let i = 0; i <= openTabs; i++) { // let me check this =
        let currentTab = input[index];
        index++;

        if (currentTab == 'Facebook') {
            salaryAmount -= 150;
        } else if (currentTab == "Instagram") {
            salaryAmount -= 100;
        } else if (currentTab == "Reddit") {
            salaryAmount-= 50;
        }

        if ( salaryAmount <= 0) {
            console.log(`You have lost your salary.`);
            isLostSalary = true;
            break;
        }

    }
    if (!isLostSalary) {
    console.log(salaryAmount);
    }
}
salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])
;