var pivotIndex = function (nums) {

  for (let i = 0; i < nums.length; i++) {

    let left = nums.slice(0, i)
    let right = nums.slice(i + 1)
    let leftSum, rightSum

    if (left.length === 0) {
      leftSum = 0;
    } else {
      leftSum = left.length === 1 ? left[0] : left.reduce((a, b) => a + b);
    }

    if (right.length === 0) {
      rightSum = 0;
    } else {
      rightSum = right.length === 1 ? right[0] : right.reduce((a, b) => a + b);
    }

    if (leftSum === rightSum) return i;
  }
  
  return -1;
};