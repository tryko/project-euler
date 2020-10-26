/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

*/
function smallestMult(n) {
  // you need to create a list of the primes and check.
  const primes = [2];
  let primesCounter = { 2: 1 };

  for (let j = 2; j <= n; j++) {
    let isPrime = true;

    for (let i = 0; i < primes.length; i++) {
      if (j % primes[i] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(j);
      primesCounter[j] = 1;
    }
  }

  for (let k = 0; k < primes.length; k++) {
    let currPrime = primes[k];
    let multi = primes[k];
    while (multi * currPrime < n) {
      multi = multi * currPrime;
      primesCounter[primes[k]]++;
    }
  }

  const sum = primes.reduce((a, b) => {
    console.log(primesCounter[b], b);
    return a * b ** primesCounter[b];
  }, 1);
  console.log(primes);
  console.log(primesCounter);
  console.log(sum);
}

//   console.log(smallestMult(20)) //;

//   console.log(smallestMult(5)) // should return a number.

// console.log(smallestMult(5)); // should return 60.

// console.log(smallestMult(7)); // should return 420.

console.log(smallestMult(10)); // should return 2520.

// console.log(smallestMult(13)) // should return 360360.

// console.log(smallestMult(20)); // should return 232792560.
