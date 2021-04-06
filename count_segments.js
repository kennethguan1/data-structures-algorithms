var countSegments = function (s) {

  if (s.length === 0) return ""

  let count = 0

  s = s.split(" ")

  for (let i = 0; i < s.length; i++) {
    if (s[i].length > 0) count++
  }

  return count
  
};