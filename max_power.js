var maxPower = function (s) {
  let max = 1
  let count = 1

  for (let i = 1; i < s.length; i++) {

    let char = s[i]
    let prev = s[i - 1]

    if (char === prev) {
      if (max < count) max = count
      count++
    } else {
      if (max < count) max = count
      count = 1
    }
  }

  return max
};