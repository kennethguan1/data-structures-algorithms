var rotate = function (nums, k) {
  k = k % nums.length

  for (let i = 0; i < k; i++) {
    let ele = nums.pop();
    nums.unshift(ele);
  }

  return nums
};