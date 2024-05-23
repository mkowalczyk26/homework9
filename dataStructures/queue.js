class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      // Add an item to the back of the queue
      this.items.push(item);
    }
  
    dequeue() {
      // Remove and return the front item from the queue. If the queue is empty, return null.
      if (this.items.length !== 0) {
        return this.items.shift();
      }
      return null;
    }
  
    peek() {
      // Return the front item from the queue without removing it. If the queue is empty, return null.
      if (this.items.length !== 0) {
        return this.items[0];
      }
      return null;
    }
}

module.exports = Queue;