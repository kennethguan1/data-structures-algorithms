var diagonalSum = function (mat) {
  let sum = 0;
  let last = mat.length - 1;
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i];
    if (i !== last - i) sum += mat[i][last - i];
  }
  return sum;
};