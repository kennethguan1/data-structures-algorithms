var numTeams = function (rating) {
  let teams = 0;

  for (let i = 0; i < rating.length - 2; i++) {
    let a = rating[i];

    for (let j = i + 1; j < rating.length - 1; j++) {
      let b = rating[j];

      for (let k = j + 1; k < rating.length; k++) {
        let c = rating[k];

        if ((a < b && b < c) || (a > b && b > c)) {
          teams += 1;
        };
      }
    }
  }

  return teams;
};