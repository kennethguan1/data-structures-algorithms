const countPrimes = (n) => {

  let arr = new Array(n).fill(true)

  for (let i = 2; i * i < n; i++) {

    if (arr[i] === true) {

      for (let j = 2; j * i < n; j++) {
        arr[j * i] = false
      }
    }
  }

  let primeCount = 0

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] === true) {
      primeCount++
    }
  }

  return primeCount

}