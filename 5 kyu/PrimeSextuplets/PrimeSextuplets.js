const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const limit = Math.floor(Math.sqrt(num));
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const isPrimeSextuplets = (p) => {
  return (
    isPrime(p) &&
    isPrime(p + 4) &&
    isPrime(p + 6) &&
    isPrime(p + 10) &&
    isPrime(p + 12) &&
    isPrime(p + 16)
  );
};


const sumPrimeSextuplets = (p) => {
  const answer = p + (p + 4) + (p + 6) + (p + 10) + (p + 12) + (p + 16);
  return answer;
};

const findPrimesSextuplet = (min) => {
  let init = Math.floor(min / 9);
  let finded = false;
  const answer = [];
  while (!finded) {
    if (isPrimeSextuplets(init)) {
      if (sumPrimeSextuplets(init) >= min) {
        finded = true;
        answer.push(init, init + 4, init+6, init +10, init + 12, init + 16);
      } else {
        init++;
      }
    } else {
      init++;
    }
  }
  return answer;
};

module.exports = findPrimesSextuplet;