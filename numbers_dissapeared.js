var findDisappearedNumbers = function (nums) {
  if (nums.length === 0) return [];
  let missing = [];
  
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) missing.push(i);
  }

  return missing;
};