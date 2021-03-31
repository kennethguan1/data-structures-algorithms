var removeDuplicates = function (S) {
  let duplicates = false;

  for (let i = 0; i < S.length - 1; i++) {
    if (S[i] === S[i + 1]) {
      duplicates = true
    }
  }

  if (!duplicates) return S;

  for (let i = 0; i < S.length - 1; i++) {
    if (S[i] === S[i + 1]) {
      return removeDuplicates(S.slice(0, i) + S.slice(i + 1))
    }
  }
};