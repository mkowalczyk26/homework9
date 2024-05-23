class Stack {
    constructor() {
      // Create stack
      this.items = []; 
    }

    push(item) {
      // Push an item onto the stack
      this.items.push(item);
    }

    pop() {
      // Remove and return the top item from the stack
      if (this.items.length != 0) {
        return this.items.pop();
      }
      return null;
    }

    peek() {
      // Return the top item from the stack without removing it. If the stack is empty, return null.
      if (this.items.length != 0) {
        return this.items[this.items.length - 1];
      }
      return null;
    }
}

module.exports = Stack;