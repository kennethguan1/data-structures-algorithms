// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.
 

// Note: You may assume the string contains only lowercase English letters.

const firstUniqChar = function(s) {
  const hash = {};
  
  for (let i = 0; i < s.length; i++) {
    if (!hash[char]) hash[char] = 0;
    hash[char]++;
  }

  const unique = Object.keys(hash)[Object.values(hash).indexOf(1)];
  
  return s.split("").indexOf(unique);
};