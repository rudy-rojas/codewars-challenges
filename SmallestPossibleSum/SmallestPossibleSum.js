// Version 2.1
const solution = (numbers) => {
  let result = numbers[0];
  const size = numbers.length;
  for (let i = 1; i < size; i++) {
    result = euclidean(result, numbers[i]);
  }
  return result * size;
};
const euclidean = (a, b) => {
  if (b ==0) {
    return a;
  }
  return euclidean(b, a % b);
};

// Version 2.0
// const solution = (numbers) => {
//   let result = 0;
//   const size = numbers.length;
//   result = numbers[0];
//   for (let i = 1; i < size; i++) {
//     result = euclidean(result, numbers[i]);
//   }
//   return result*size;
// };

// const euclidean = (a, b) => {
//   let result = 0;
//   if (a > b) {
//     const temp = a;
//     a = b;
//     b = temp;
//   }
//   if (b > a) {
//     while (a % b != 0) {
//       result = a % b;
//       a = b;
//       b = result;
//     }
//   } else {
//     result = a;
//   }
//   return result;
// };



// Version 1.0
// INFO: This other one workds, but it's not as efficient
// const solution = (numbers) => {
//   console.log(numbers);
//   numbers.sort((a, b) => a - b);
//   let i = numbers.length - 1;
//   let j = numbers.length - 2;

//   while (numbers[0]!=numbers[numbers.length-1]) {
//     if (numbers[i] > numbers[j]) {
//       numbers[i] = numbers[i] - numbers[j];
//       i = numbers.length - 1;
//       j = numbers.length - 2;
//       numbers.sort((a, b) => a - b);
//     } else {
//       i--;
//       j--;
//     }
//   }

//   return numbers.reduce((acc, el) => acc + el, 0);
// };

module.exports = solution;