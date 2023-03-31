const score = (dice) => {
  let score = 0;
  let ones = 0;
  let twos = 0;
  let threes = 0;
  let fours = 0;
  let fives = 0;
  let sixs = 0;
  for (const side of dice) {
    switch (side) {
      case 1:
        ones++;
        break;
      case 2:
        twos++;
        break;
      case 3:
        threes++;
        break;
      case 4:
        fours++;
        break;
      case 5:
        fives++;
        break;
      case 6:
        sixs++;
    }
  }

  if (ones >= 3) {
    score = 1000;
    ones -= 3;
  } else if (twos >= 3) {
    score = 200;
    twos -= 3;
  } else if (threes >= 3) {
    score = 300;
    threes -= 3;
  } else if (fours >= 3) {
    score = 400;
    fours -= 3;
  } else if (fives >= 3) {
    score = 500;
    fives -= 3;
  } else if (sixs >= 3) {
    score = 600;
    sixs -= 3;
  }

  if (ones >= 1) {
    score += ones * 100;
  }
  if (fives >= 1) {
    score += fives * 50;
  }

  return score;
};

module.exports = score;
