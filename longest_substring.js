function lengthOfLongestSubstring(s) {
  if (s.length <= 1) return s.length;
  let sub = '';
  let longestSub = '';
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!sub.includes(char)) {
      sub += char;
    } else {
      if (sub.length > longestSub.length) longestSub = sub;
      let idx = sub.indexOf(char);
      sub = sub.slice(idx + 1);
      sub += char;
    }
  }
  return longestSub.length > sub.length ? longestSub.length : sub.length;
}