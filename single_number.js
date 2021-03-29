var singleNumber = function (nums) {
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!count[num]) count[num] = 0;
    count[num] += 1;
  }

  return Object.keys(count).filter(key => count[key] === 1);
};