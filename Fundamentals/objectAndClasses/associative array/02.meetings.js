function meetings(input) {
    let schedule = {}

    for (let weekday of input) {
        weekday = weekday.split(" ");
        let day = weekday[0];
        let name = weekday[1];
        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);
        }

    }
    for (let key in schedule) {
        console.log(`${key} -> ${schedule[key]}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)