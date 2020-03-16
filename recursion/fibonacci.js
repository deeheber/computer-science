/**
 * A function that computes the  fibonacci number
 * Add in the  prior two numbers together
 * ex. 1, 1, 2, 3, 5, 8, 13, 21 ...
 */

function fibonacci (n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Test cases
for (var i = 1; i <= 20; i++) {
  console.log(`${i}. ${fibonacci(i)}`);
}
