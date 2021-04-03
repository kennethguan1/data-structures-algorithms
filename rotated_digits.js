var rotatedDigits = function (N) {
  let invalid = "347";
  let valid = "2569";
  let count = 0;

  for (let i = 1; i <= N; i++) {
    num = i.toString().split("");
    if (num.some(n => invalid.includes(n))) continue;
    if (num.some(n => valid.includes(n))) count++;
  }
  
  return count;
};