class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}
  
  class BinaryTree {

    constructor() {
      this.root = null;
    }
  
    insert(value) { //inserting values into the tree
      const newNode = new TreeNode(value);
  
      if (this.root === null) {
        this.root = newNode;
        return;
      }
  
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return;
          }
          current = current.right;
        }
      }
    }
  
    search(value) { // searching for specific node
      let current = this.root;
      while (current !== null) {
        if (value === current.value) {
          return current;
        }
        current = value < current.value ? current.left : current.right;
      }
      return null;
    }
  
    inOrder(node = this.root, result = []) { // in-order traversal
      if (node !== null) {
        this.inOrder(node.left, result);
        result.push(node.value);
        this.inOrder(node.right, result);
      }
      return result;
    }
  
    preOrder(node = this.root, result = []) { // pre-order traversal
      if (node !== null) {
        result.push(node.value);
        this.preOrder(node.left, result);
        this.preOrder(node.right, result);
      }
      return result;
    }
  
    postOrder(node = this.root, result = []) { // post-order traversal
      if (node !== null) {
        this.postOrder(node.left, result);
        this.postOrder(node.right, result);
        result.push(node.value);
      }
      return result;
    }
}

module.exports = {BinaryTree};