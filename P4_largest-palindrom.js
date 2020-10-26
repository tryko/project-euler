/*
Project Euler: Problem 4: Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.

*/

function largestPalindromeProduct(n) {
  return true;
}

// solutin with 11 as multiple of palindrom
function isPalindrome(x) {
  var n = 0;
  var m = x;

  while (x > 0) {
    n = n * 10 + (x % 10);
    x = (x / 10) | 0;
  }
  return n === m;
}
function compareNumbers(a, b) {
  return a.num - b.num;
}
console.time();

function getLargetsElevenMulti(n) {
  for (let i = n; i > n / 2; i--) {
    if (i % 11 === 0) return i;
  }
}

function solution(n) {
  const elevenMulti = getLargetsElevenMulti(n);
  console.log(elevenMulti);
  var r = 0;
  for (var p = elevenMulti; p > n / 2; p -= 11) {
    if (r) break;
    for (var q = n; q > n / 2; q--) {
      var t = p * q;

      if (r < t && isPalindrome(t)) {
        r = t;
        break;
      }
    }
  }
  console.log(r);
}

function getListOfPalindroms(n) {
  let largestPali = 0;
  let k = 0;
  let d = 0;
  for (let i = n; i > 100; i--) {
    for (let j = n; j > 100; j--) {
      if (largestPali < i * j && isPalindrome(i * j)) {
        largestPali = i * j;
        k = i;
        d = j;
      }
    }
  }
  // const endRes = palindroms.sort(compareNumbers).filter((p, i) => i % 2 === 0);

  console.log(k, d, largestPali);
}
console.timeEnd();

// console.log(solution());
// largestPalindromeProduct(3);
solution(1000000);
