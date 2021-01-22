// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

const isAnagram = function(s, t) {
  const chars = {};
  
  s.split("").forEach(char => {
      if (!chars[char]) chars[char] = 0;
      chars[char] += 1;
  })
  
  t.split("").forEach(char => {
      if (!chars[char]) chars[char] = 0;
      chars[char] -= 1;
  });
  
  return Object.values(chars).every(val => val === 0);
};