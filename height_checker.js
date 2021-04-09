var heightChecker = function (heights) {

  let copy = heights.slice();

  heights.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== copy[i]) count++;
  }
  
  return count;
};