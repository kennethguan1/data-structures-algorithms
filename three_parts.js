var canThreePartsEqualSum = function (A) {
  if (A.length < 3) return false;
  let sum = A.reduce((a, b) => a + b);
  if (sum % 3 !== 0) return false;

  let t = sum / 3;
  let cur = 0;
  let count = 0;
  for (const a of A) {
    cur += a;
    if (cur === t) {
      count++;
      cur = 0;
    }
    if (count > 3) {
      if (t === 0) {
        count--;
      } else {
        return false;
      }
    }
  }
  return count === 3;
};