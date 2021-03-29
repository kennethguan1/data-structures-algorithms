var restoreString = function (s, indices) {
  let arr = new Array(s.length);
  for (let i = 0; i < indices.length; i++) {
    let idx = indices[i];
    arr[idx] = s[i];
  }

  return arr.join("");
};