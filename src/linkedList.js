class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  toString() {
    return this.value;
  }
}

class LinkedList {
  head = null;
  length = 0;
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  find(value) {
    let current = this.head;
    let position = 1;
    while (current) {
      if (current.value === value) {
        return { value: current.value, position };
      }
      current = current.next;
      position++;
    }
    return null;
  }

  remove(value) {
    if (!this.head) {
      return;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  toArray() {
    const nodes = [];
    let current = this.head;
    while (current) {
      nodes.push(current);
      current = current.next;
    }
    return nodes;
  }

  display() {
    return this.toArray()
      .map((node) => node.toString())
      .join(" -> ");
  }
}

module.exports = LinkedList;
