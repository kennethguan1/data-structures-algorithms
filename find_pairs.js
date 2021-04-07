var findPairs = function (nums, k) {

  let count = 0
  let pairs = {}

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {

      let num1 = nums[i] <= nums[j] ? nums[i] : nums[j]
      let num2 = nums[i] <= nums[j] ? nums[j] : nums[i]

      if (num2 - num1 === k) {
        if (pairs[num1] === undefined) {
          pairs[num1] = num2
          count += 1

        }
      }
    }
  }

  return count
}