var dominantIndex = function (nums) {

  if (nums.length === 1) return 0
  let copy = nums.slice()
  copy.sort((a, b) => b - a)

  if (copy[0] >= copy[1] * 2) {
    return nums.indexOf(copy[0]);
  } else {
    return -1;
  }

};