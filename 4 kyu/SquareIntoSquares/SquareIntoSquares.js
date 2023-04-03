const getNextNumber = (n) => Math.floor(Math.sqrt(n));

const getSumSquare = (arr) => arr.reduce((total, num) => total + num * num, 0);

const fillForward = (num, lastNum, possibleAnswers) => {
  possibleAnswers.push(lastNum);
  let isFinish = false;
  let i = 5;
  while (!isFinish) {
    let aux = num * num - getSumSquare(possibleAnswers);
    let nextNumber = getNextNumber(aux);
    if (
      nextNumber != possibleAnswers[possibleAnswers.length - 1] &&
      nextNumber * nextNumber <
        possibleAnswers[possibleAnswers.length - 1] *
          possibleAnswers[possibleAnswers.length - 1]
    ) {
      if (nextNumber != 0) {
        possibleAnswers.push(nextNumber);
      } else {
        isFinish = true;
      }
    } else {
      isFinish = true;
    }
  }
};

const find = (num, arr) => {
  let result = '';
  let j = 0;
  while (arr.length > 0 && num * num != getSumSquare(arr)) {
    if (arr[arr.length - 1] == 1) {
      arr.pop();
    } else {
      let lastOne = arr.pop() - 1;
      fillForward(num, lastOne, arr);
    }
    j++;
  }

  if (arr.length > 0) {
    result = [...arr.reverse()];
  } else {
    // result = 'Nothing';
    result = null;
  }

  return result;
};

const decompose = (num) => {
  let possibleAnswers = [];
  fillForward(num, num - 1, possibleAnswers);

  return find(num, possibleAnswers);
};

console.log(decompose(50));
