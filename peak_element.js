var findPeakElement = function (nums) {
  if (nums.length === 1) {
    return 0;
  } else if (nums.length === 2) {
    if (nums[0] > nums[1]) {
      return 0;
    } else {
      return 1;
    }
  }

  for (let i = 1; i < nums.length - 1; i++) {
    let prev = nums[i - 1];
    let next = nums[i + 1];
    let current = nums[i];
    if (current > prev && current > next) return i;
  }

  return nums.indexOf(Math.max(...nums));
};