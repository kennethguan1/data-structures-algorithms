var findTheDistanceValue = function (arr1, arr2, d) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    let n1 = arr1[i];
    if (arr2.every(n2 => Math.abs(n1 - n2) > d)) count += 1;
  }
  return count;
};