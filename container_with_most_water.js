// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
// Example 3:

// Input: height = [4,3,2,1,4]
// Output: 16
// Example 4:

// Input: height = [1,2,1]
// Output: 2
 

// Constraints:

// n == height.length
// 2 <= n <= 3 * 104
// 0 <= height[i] <= 3 * 104

var maxArea = function(height) {
    let maxVolume = 0   
    for (let idx1 = 0; idx1 < height.length; idx1++){
        for (let idx2 = idx1 + 1; idx2 < height.length; idx2++ ){  //setting idx2 to idx1 instead of 0 makes it n log(n) time rather than n^2
            let depth = Math.min(height[idx1], height[idx2])
            let width = idx2 - idx1
            let volume = depth * width
            maxVolume = Math.max(maxVolume, volume)
        }
    }
    return (maxVolume)
};