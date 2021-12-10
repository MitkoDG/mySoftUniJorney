function factory(arr) {
    let biscuitsPerDay = Number(arr.shift())
    let workers = Number(arr.shift())
    let competiveCompany30Days = Number(arr.shift())
    let biscuitsWorkingDay = biscuitsPerDay * workers
    let totalFor30Days = 0
    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0) {
            let lessFor3rdDay = Math.floor(biscuitsWorkingDay*0.75)
            totalFor30Days+=lessFor3rdDay
        } else {
            totalFor30Days+=Math.floor(biscuitsWorkingDay)
        }
    }
    console.log(`You have produced ${totalFor30Days} biscuits for the past month.`);

    if (totalFor30Days > competiveCompany30Days) {
        let diff = totalFor30Days - competiveCompany30Days;
        let percentageDiff = (diff / competiveCompany30Days * 100).toFixed(2)
        console.log(`You produce ${percentageDiff} percent more biscuits.`);
    } else {
        let diff = competiveCompany30Days - totalFor30Days;
        let percentageDiff = (diff / competiveCompany30Days * 100).toFixed(2)
        console.log(`You produce ${percentageDiff} percent less biscuits.`);
    }
}
factory(["78",
"8",
"16000"])
factory((["65",
"12",
"26000"])
)
factory(["163",
"16",
"67020"])

