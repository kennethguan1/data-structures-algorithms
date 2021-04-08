var rotateString = function (A, B) {

  if (A.length !== B.length) return false

  if (A.length === 0) return true

  for (let i = 0; i < A.length; i++) {
    A = A.slice(1) + A[0]
    if (A === B) return true
  }

  return false;
};