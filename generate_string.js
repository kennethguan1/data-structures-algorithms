var generateTheString = function (n) {
  let str = "";

  if (n % 2 === 1) {
    for (let i = 0; i < n; i++) {
      str += "a";
    }
  } else {
    str += "a";
    for (let i = 0; i < n - 1; i++) {
      str += "b";
    }
  }

  return str;
};