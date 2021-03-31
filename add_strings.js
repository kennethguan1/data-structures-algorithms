var addStrings = function (num1, num2) {
  let newNum = [];
  let extra = 0;

  num1 = num1.split("").reverse();
  num2 = num2.split("").reverse();

  for (let i = 0; i < num1.length || i < num2.length; i++) {
    let ele1 = num1[i] === undefined ? 0 : parseInt(num1[i]);

    let ele2 = num2[i] === undefined ? 0 : parseInt(num2[i]);

    let sum = ele1 + ele2 + extra;

    if (sum > 9) {
      newNum.push(sum % 10);
      extra = Math.floor(sum / 10);
    } else {
      newNum.push(sum);
      extra = 0;
    }
  }

  if (extra) newNum.push(extra);

  return newNum.reverse().map(n => n.toString()).join("");
};