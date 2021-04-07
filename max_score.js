var maxScore = function (s) {

  let max = 0

  for (let i = 1; i < s.length; i++) {

    let left = s.slice(0, i)
    let right = s.slice(i)

    left = left.split("").filter(x => x === '0')
    right = right.split("").filter(x => x === '1')

    let sum = left.length + right.length

    if (sum > max) max = sum
  }
  
  return max
}