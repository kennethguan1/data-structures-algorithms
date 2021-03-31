var uniqueOccurrences = function (arr) {
  let counts = {}, countsCounts = {}

  arr.forEach(num => {
    if (!counts[num]) counts[num] = 0
    counts[num] += 1
  });

  let v = Object.values(counts);

  v.forEach(val => {
    if (!countsCounts[val]) countsCounts[val] = 0
    countsCounts[val] += 1
  });

  return Object.values(countsCounts).every(n => n === 1)
};