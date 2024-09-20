class Queue {
  constructor(params) {
    this.data = [];
  }

  enqueue(value) {
    this.data.unshift(value);
  }

  dequeue() {
    if (!this.data.length) {
      return null;
    }
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    return this.data.length === 0;
  }
}
