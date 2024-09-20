class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
  }

  pop() {
    if (!this.data.length) {
      return null;
    }
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  toString() {
    return this.data;
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

module.exports = Stack;
