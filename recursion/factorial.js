/**
 * A function that computes a factorial
 * ex. 4! = 4 * 3 * 2 * 1
 */

function factorial (num) {
  if (num < 2) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Test cases
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
