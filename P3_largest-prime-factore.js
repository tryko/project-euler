/*
Problem 3: Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
*/

function largestPrimeFactor(number) {
  const primeFactors = [];
  // largest possible factor is number
  const sqrt = Math.floor(Math.sqrt(number));

  for (let i = 2; i <= sqrt; i++) {
    if (number % i === 0) {
      // check if it devides with any of the primeFactors;
      let isPrimeFactor = true;
      for (let j = 0; j < primeFactors.length; j++) {
        if (i % primeFactors[j] === 0) {
          isPrimeFactor = false;
          break;
        }
      }
      isPrimeFactor && primeFactors.push(i);
    }
  }
  if (!primeFactors.length) return number;
  return primeFactors[primeFactors.length - 1];
}

// largestPrimeFactor(13195);

// console.log(largestPrimeFactor(3)); // should return 3.

console.log(largestPrimeFactor(9)); // should return 5.

console.log(largestPrimeFactor(7)); // should return 7.

console.log(largestPrimeFactor(8)); // should return 2.

console.log(largestPrimeFactor(13195)); // should return 29.

console.log(largestPrimeFactor(600851475143)); // should return 6857
