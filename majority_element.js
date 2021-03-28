var majorityElement = function (nums) {
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    let ele = nums[i];
    if (!count[ele]) count[ele] = 0;
    count[ele] += 1;

    if (count[ele] > nums.length / 2) return ele;
  }
};