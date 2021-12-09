function datesTask(text) {
    let regEx = /(?<day>\d{2})([\.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g

   let validMatch
   while ((validMatch = regEx.exec(text)) !== null) {
    let day = validMatch.groups.day
    let month = validMatch.groups.month
    let year = validMatch.groups.year
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
  }
}
datesTask("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016")