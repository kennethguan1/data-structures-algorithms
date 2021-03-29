var containsDuplicate = function (nums) {
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!count[num]) count[num] = 0;
    count[num] += 1;
    if (count[num] > 1) return true;
  }

  return false;
};