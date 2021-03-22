var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) return null;
  let max = Math.max(...nums);
  let idx = nums.indexOf(max);
  let left = nums.slice(0, idx);
  let right = nums.slice(idx + 1);
  let root = new TreeNode(max);

  root.left = constructMaximumBinaryTree(left);
  root.right = constructMaximumBinaryTree(right);

  return root;
};