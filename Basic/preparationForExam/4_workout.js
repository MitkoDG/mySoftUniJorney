function solve(input) {
    // Г-жа Иванова иска да отслабне след празниците. Започвайки тренировка, първия ден тя пробягва М километра. Следващите N дни, тя увеличава дневната си норма с К%. За да успее да отслабне, тя трябва да избяга минимум 1 000 км. Съставете програма, която при получени начални километри, брой дни и проценти, с които тя ще увеличава всеки ден нормата си, ще проверява дали километрите, които тя е избягала са достатъчни. Ако километрите не са достатъчни, на конзолата да се изведат недостигащите километри. Ако са достатъчни да се изведе съобщение в което г-жа Иванова е поздравена за добре свършената работа.
    // Вход:
    // От конзолата се четат поредица от числа, всяко на отделен ред:
    // •	На първия ред – N – брой дни, в които г-жа Иванова тренира  – цяло число в интервала [1...50]
    // •	На втория ред – M – километрите, които е избягала първия ден – реално число в интервала [1.00…500.00]
    // •	За всеки един ден на отделен ред :
    // 	Процентите, с които се увеличава дневната си норма – цяло число в интервала [1…100]

    let M_kmRunningFirstDay = Number(input[1]);
    let totalRunningDistance = M_kmRunningFirstDay;
    let inputL = input.length;
    let target = 1000;  //km

    for (i = 2; i < inputL; i++) {
        M_kmRunningFirstDay = M_kmRunningFirstDay + (M_kmRunningFirstDay * input[i]/100);
        totalRunningDistance += M_kmRunningFirstDay;
    }

    if (totalRunningDistance > target) {
        kmAdoveTarget = totalRunningDistance - target;
        console.log(`You've done a great job running ${Math.ceil(kmAdoveTarget)} more kilometers!`);
    } else {
        kmBelowTarget = target - totalRunningDistance;
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(kmBelowTarget)} more kilometers`);
    }
}

solve(["5",
"30",
"10",
"15",
"20",
"5",
"12"])