# 🌟 Data Structures in JavaScript

A lightweight JavaScript library that provides essential data structures such as **Stack**, **Queue**, **Linked List**, and **Tree (Arbre)**. This package simplifies the use of these data structures with clean APIs to help developers implement them in their projects effortlessly.

---

## 📦 Installation

You can install this package using npm or pnpm:

```bash
# Using npm
npm install data-structures-package

# Using pnpm
pnpm install data-structures-package
```

## 🚀 Usage

This package provides simple, intuitive APIs to work with common data structures like Stack, Queue, Linked List, and Tree.

```bash
# Stack
const { Stack } = require('data-structures-package');

const stack = new Stack();
stack.push(5);
stack.push(10);
console.log(stack.pop()); // Output: 10
console.log(stack.peek()); // Output: 5

```

```bash
# Queue
const { Queue } = require('data-structures-package');

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2


```

```bash
# Linked List

const { LinkedList } = require('data-structures-package');

const list = new LinkedList();
list.append(10);
list.append(20);
console.log(list.toArray()); // Output: [10, 20]
list.remove(10);
console.log(list.toArray()); // Output: [20]
list.append(10);
list.append(30);
console.log(list.display()); // Output : 20 -> 10 -> 30

```

```bash
# Tree (Arbre)

const { Tree } = require('data-structures-package');

const tree = new Tree(); // Root node
tree.addChild(2);
tree.addChild(3);
console.log(tree.inOrder()); // Output: [1, 2, 3]
```

## 🛠 API Reference

### Stack

- `push(value)`: Adds a value to the stack.
- `pop()`: Removes the top value from the stack and returns it. Returns `null` if the stack is empty.
- `peek()`: Returns the top value of the stack without removing it.
- `toString()`: Returns an array representation of the stack.
- `isEmpty()`: Returns `true` if the stack is empty, otherwise returns `false`.

### Queue

- `enqueue(value)`: Adds a value to the front of the queue.
- `dequeue()`: Removes the last value from the queue and returns it. Returns `null` if the queue is empty.
- `peek()`: Returns the last value in the queue without removing it.
- `isEmpty()`: Returns `true` if the queue is empty, otherwise returns `false`.

### LinkedList

- `append(value)`: Adds a value to the end of the linked list.
- `prepend(value)`: Adds a value to the beginning of the linked list.
- `find(value)`: Finds and returns the value and position of a node in the linked list. Returns `null` if the value is not found.
- `remove(value)`: Removes the node with the specified value from the list.
- `toArray()`: Converts the linked list into an array of nodes.
- `display()`: Returns a string representation of the linked list in the form `value1 -> value2 -> value3`.

### Tree (Binary Search Tree)

- `addChild(value)`: Adds a new node to the tree at the correct position based on its value.
- `preOrder()`: Traverses the tree in pre-order (node → left → right).
- `inOrder()`: Traverses the tree in in-order (left → node → right).
- `postOrder()`: Traverses the tree in post-order (left → right → node).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](../../issues/) if you want to contribute.

### Steps to Contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add a new feature'`.
4. Push to the branch: `git push origin feature-branch`.
5. Submit a pull request.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 👤 Author

**Ayyoub**

- GitHub: [@ay-ub](https://github.com/ay-ub)
- LinkedIn: [ayyoubhadjyoucef](https://www.linkedin.com/in/ayyoubhadjyoucef)

---

## 🌟 Show Your Support

If you like this project, feel free to give it a star ⭐ on [GitHub](https://github.com/ay-ub/data-structures-package)!  
You can also share this repository with others who might find it useful.

Thank you for your support! 🙌
