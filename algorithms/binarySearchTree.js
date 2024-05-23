class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function isBST(node, min = -Infinity, max = Infinity) {
    // An empty tree is a BST
    if (node === null) {
      return true;
    }
  
    // The current node's value must be within the min and max range
    if (node.value <= min || node.value >= max) {
      return false;
    }
  
    // Recursively check the left subtree with updated max value
    // Recursively check the right subtree with updated min value
    return isBST(node.left, min, node.value) && isBST(node.right, node.value, max);
}

module.exports = {TreeNode, isBST};