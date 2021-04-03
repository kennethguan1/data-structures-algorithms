var isSubsequence = function (s, t) {
  t = t.split("").reverse();
  s = s.split("");

  while (s.length) {
    let char = s.pop();
    let idx = t.indexOf(char);
    if (idx === -1) return false;
    t = t.slice(idx + 1);
  }
  return s.length === 0;
};