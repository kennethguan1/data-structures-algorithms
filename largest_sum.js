var largestSumAfterKNegations = function (A, K) {

  if (A.length === 0) return 0
  A.sort((a, b) => a - b)

  while (K > 0) {
    A[0] = -A[0]
    A.sort((a, b) => a - b)
    K--

  }

  if (A.length === 1) return A[0]
  
  return A.reduce((a, b) => a + b)
};