// Project Euler: Problem 6: Sum square difference

// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385

// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

function sumSquareDifference(n) {
  const squareOfSum = ((n * (1 + n)) / 2) ** 2;
  let sumOfSqaure = 0;
  for (let i = 0; i <= n; i++) {
    sumOfSqaure += i ** 2;
  }
  //   console.log(squareOfSum, sumOfSqaure);
  return squareOfSum - sumOfSqaure;
}

sumSquareDifference(10);
