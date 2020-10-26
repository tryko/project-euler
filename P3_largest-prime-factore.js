/*
Problem 3: Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
*/
// console.time();
// function largestPrimeFactor(number) {
//   const primeFactors = [];
//   // largest possible factor is number
//   const sqrt = Math.floor(Math.sqrt(number));

//   for (let i = 2; i <= sqrt; i++) {
//     if (number % i === 0) {
//       // check if it devides with any of the primeFactors;
//       let isPrimeFactor = true;

//       for (let j = 0; j < primeFactors.length; j++) {
//         if (i % primeFactors[j] === 0) {
//           isPrimeFactor = false;
//           break;
//         }
//       }

//       isPrimeFactor && primeFactors.push(i);
//     }
//   }
//   if (!primeFactors.length) return number;
//   return primeFactors[primeFactors.length - 1];
// }
// console.timeEnd();

/* YafiWebDev solution*/

// console.time();
// function largestPrimeFactor(number) {
//   // Make a copy of the original number to manipulate it by dividing it by prime factors
//   let sqrt = Math.floor(Math.sqrt(number));
//   let currentNum = number,
//     i = 2,
//     result;

//   // Keep going until the number has been divided by all factors and is 1
//   while (currentNum > 1) {
//     // Check whether the number is divisible by the current "i" value
//     if (currentNum % i == 0) {
//       currentNum /= i; // Update the current number by dividing it by the current factor "i"
//       result = i; // Set to the current prime factor, which is until now the largest, but could be overwritten by the next, larger, factor
//       // Don't change the counter, because the new number could also be divisible by it
//     } else {
//       // Increment if the current number isn't divisible by the factor any more (or if it's not even a prime factor)
//       if (i === sqrt) {
//         currentNum = 1;
//         result = number;
//       } else {
//         i++;
//       }
//     }
//   }

//   return result;
// }
// console.timeEnd();

// largestPrimeFactor(13195);

// console.log(largestPrimeFactor(3)); // should return 3.

// console.log(largestPrimeFactor(9)); // should return 5.

// console.log(largestPrimeFactor(7)); // should return 7.

// console.log(largestPrimeFactor(8)); // should return 2.

// console.log(largestPrimeFactor(13195)); // should return 29.

// console.log(largestPrimeFactor(600851475143)); // should return 6857
