// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// Example:

// Input: 38
// Output: 2 
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
//              Since 2 has only one digit, return it.


var addDigits = function(num) {
  let digits = [];
  
  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  
  let sum = 0;
  
  for (let i = 0; i < digits.length; i++) {
    sum += digits[i];
  }
  
  if (sum >= 10) {
    return addDigits(sum);
  } else {
    return sum;
  }
};