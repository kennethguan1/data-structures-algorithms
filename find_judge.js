var findJudge = function (N, trust) {

  let judge

  for (let i = 1; i <= N; i++) {
    if (!trust.some(p => p[0] === i)) judge = i
  }

  for (let i = 1; i <= N; i++) {
    if (i !== judge) {
      if (!trust.some(p => p[0] === i && p[1] === judge)) return -1
    }
  }

  return judge;
};