function player(input) {
    let index = 0;
    let bestPlayer = "";
    let bestPlayerScore = 0;
    while (input[index] !== "END" && index <= input.length) {
      let player = input[index++];
      let score = input[index++];
      if (score > bestPlayerScore) {
        bestPlayer = player;
        bestPlayerScore = score;
      } else if (score >= 10) {
        bestPlayer = player;
        bestPlayerScore = score;
        break;
      }
    }
    if (bestPlayerScore >= 3) {
      console.log(`${bestPlayer} is the best player!`);
      console.log(
        `He has scored ${bestPlayerScore} goals and made a hat-trick !!!`
      );
    } else {
      console.log(`${bestPlayer} is the best player!`);
      console.log(`He has scored ${bestPlayerScore} goals.`);
    }
  }