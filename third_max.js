var thirdMax = function (nums) {
  let count = {}

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (!count[num]) count[num] = 1
  }
  
  nums = Object.keys(count);
  nums.sort((a, b) => b - a);
  
  if (nums.length < 3) {
    return nums[0];
  } else {
    return nums[2]
  }
  
};