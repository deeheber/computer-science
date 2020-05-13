class Queue {
  constructor () {
    this.queue = [];
  }

  // Add item to the back of the queue (right side)
  enqueue (item) {
    return this.queue.push(item);
  }

  // Remove the item at the front of the queue (left side)
  dequeue () {
    return this.queue.shift();
  }

  // Return the item at the front of the queue, but don't remove it
  peek () {
    if (this.length() > 0) {
      return this.queue[0];
    } else {
      return null;
    }
  }

  isEmpty () {
    return this.queue.length === 0;
  }

  get length () {
    return this.queue.length;
  }
}
