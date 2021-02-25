// const Solution = function(nums) {
//   // nums is the array of numbers
//   this.nums = nums;
// };

// Solution.prototype.reset = function() {
//   // reset will recover the original array saved to instance variable
//   return this.nums;
// };

// Solution.prototype.shuffle = function() {
//   // save a copy of the nums array
//   const shuffled = this.nums.slice();
  
//   // iterate through the array
//   for (let i = 0; i < shuffled.length; i++) {
//     // get a random index using a random number generator multiplied by the array's length
//     const randIdx = Math.floor(Math.random() * shuffled.length);
//     // swap the current element with the random index to shuffle
//     [shuffled[i], shuffled[randIdx]] = [shuffled[randIdx], shuffled[i]];
//   }
  
//   // return the shuffled array
//   return shuffled;
// };

const decodeString = function(s) {
  const stack = [];
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "]") {
      stack.push(s[i]);
      continue;
    }

    let currChar = stack.pop();
    let currStr = "";

    while (currChar !== "[") {
      currStr = currChar + currStr;
      currChar = stack.pop();
    }
    
    let num = "";
    currChar = stack.pop();
    
    while (Number.isInteger(parseInt(currChar))) {
      num = currChar + num;
      currChar = stack.pop();
    }
    
    if (currChar !== undefined) stack.push(currChar);
    stack.push(currStr.repeat(parseInt(num)));
  }
  
  return stack.join("");
};