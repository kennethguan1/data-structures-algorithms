var processQueries = function (queries, m) {
  let P = [], res = [];
  for (let i = 1; i <= m; i++) {
    P.push(i);
  }
  for (let i = 0; i < queries.length; i++) {
    let q = queries[i];
    let idx = P.indexOf(q);
    res.push(idx);
    P = [P[idx], ...P.slice(0, idx), ...P.slice(idx + 1)];
  }
  return res;
};