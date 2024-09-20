class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  toString() {
    return this.value;
  }
}
class Tree {
  constructor() {
    this.root = null;
  }
  addChild(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (current) {
        if (value < current.value) {
          if (!current.left) {
            current.left = node;
            return;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = node;
            return;
          }
          current = current.right;
        }
      }
    }
  }

  preOrder(node = this.root) {
    if (node) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  inOrder(node = this.root) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  postOrder(node = this.root) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }
}

module.exports = Tree;
