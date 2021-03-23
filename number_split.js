var numSplits = function (s) {
  let count = 0;
  for (let i = 1; i < s.length; i++) {
    let sub1 = new Set(s.slice(0, i));
    let sub2 = new Set(s.slice(i));
    if (sub1.size === sub2.size) count += 1;
  }

  return count;
};