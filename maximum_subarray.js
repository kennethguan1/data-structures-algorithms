// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [0]
// Output: 0
// Example 4:

// Input: nums = [-1]
// Output: -1
// Example 5:

// Input: nums = [-100000]
// Output: -100000

const maxSubArray = function(nums) {
  let currSum = nums[0];
  let max = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    if (currSum < 0) {
      currSum = 0;
    }
    
    currSum += nums[i];
    
    if (currSum > max) {
      max = currSum;
    }
  }
      
  return max;
};