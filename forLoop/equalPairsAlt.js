function equalPairs (input) {
    input = input.map(Number)
    let count = input[0]
    let first = input[1]
    let second = input[2]
    let total = first + second
    let maxDifference = 0
  
    for (let i = 3; i <= count * 2; i += 2) {
      first = input[i]
      second = input[i + 1]
  
      let currentTotal = first + second
      let currentDifference = Math.abs(currentTotal - total)
      if (currentDifference > maxDifference) {
        maxDifference = currentDifference
      }
  
      total = currentTotal
    }
  
    let result = maxDifference === 0 ? `Yes, value=${total}` : `No, maxdiff=${maxDifference}`
    console.log(result)
  }
  equalPairs(['4',
  '1',
  '1',
  '3',
  '1',
  '2',
  '2',
  '0',
  '0'
  ])