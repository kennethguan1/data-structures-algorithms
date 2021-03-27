var increasingTriplet = function (nums) {
  if (nums.length < 3) return false;

  for (let i = 2; i < nums.length; i++) {
    let first = nums[i - 2];
    let second = nums[i - 1];
    let third = nums[i];

    if (first < second && second < third) return true;
  }

  return false;
};