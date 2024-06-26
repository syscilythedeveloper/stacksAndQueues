const util = require("util");
/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size == 0) throw new Error("Can't dequeue from an empty queue");

    if (this.first == this.last) {
      this.last = null;
    }
    let temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (!this.first) throw new Error("Queue is empty");
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    console.log(this.size == 0);
    return this.size == 0;
  }
}

module.exports = Queue;

let nums = new Queue();
nums.enqueue(1);

nums.enqueue(2);
nums.enqueue(3);
console.log(nums);
nums.enqueue(4);
nums.enqueue(5);
console.log(util.inspect(nums, { depth: null }));
