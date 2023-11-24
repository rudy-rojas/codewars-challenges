const isPrime = (num) => {
  const limit = Math.floor(Math.sqrt(num));
  let answer = true;
  let i = 2;
  while (i <= limit && answer) {
    if (num % i == 0) {
      answer = false;
    } else {
      i++;
    }
  }
  return answer;
};

const isPrimeSextuplets = (p) => {
  let answer = false;
  if (isPrime(p)) {
    if (isPrime(p + 4)) {
      if (isPrime(p + 6)) {
        if (isPrime(p + 10)) {
          if (isPrime(p + 12)) {
            if (isPrime(p + 16)) {
              answer = true;
            }
          }
        }
      }
    }
  }
  return answer;
};

const sumPrimeSextuplets = (p) => {
  const answer = p + (p + 4) + (p + 6) + (p + 10) + (p + 12) + (p + 16);
  return answer;
};

const findPrimeSextuplet = (min) => {
  let init = Math.floor(min / 9);
  let finded = false;
  const answer = [];
  while (!finded) {
    if (isPrimeSextuplets(init)) {
      if (sumPrimeSextuplets(init) >= min) {
        finded = true;
        answer.push(init);
        answer.push(init + 4);
        answer.push(init + 6);
        answer.push(init + 10);
        answer.push(init + 12);
        answer.push(init + 16);
      } else {
        init++;
      }
    } else {
      init++;
    }
  }
  return answer;
};

module.exports = findPrimeSextuplet;