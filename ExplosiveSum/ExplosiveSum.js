const sum = (n) => {
  let explosives = [1, 1];
  for (let i = 2; i <= n; i++) {
    let p = 0;
    let k = 1;
    let sign = 1;
    let continueLoop = true;
    while (continueLoop) {
      // pent1 = Pentagonal number
      let pent1 = (k * (3 * k - 1)) / 2; //1, 5, 12, 22, 35, 51, 70, 92,
      let pent2 = (k * (3 * k + 1)) / 2; //2, 7, 15, 26, 40, 57, 77, 100
      if (pent1 <= i) {
        p += sign * explosives[i - pent1];
      }
      if (pent2 <= i) {
        p += sign * explosives[i - pent2];
      }
      k++;
      sign = -sign;
      continueLoop = pent2 <= i;
    }
    explosives.push(p);
  }
  return explosives[n];
};

module.exports = sum;