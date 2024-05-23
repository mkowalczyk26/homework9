class MinMaxStack {

    constructor() {
        this.items = [];
        this.minStack = [];
        this.maxStack = [];
    }

    push(item) {
        // Push the item onto the main stack
        this.items.push(item);
    
        // Push the item onto the minStack if it's the new minimum
        if (this.minStack.length === 0 || item <= this.getMin()) {
            this.minStack.push(item);
        }
    
        // Push the item onto the maxStack if it's the new maximum
        if (this.maxStack.length === 0 || item >= this.getMax()) {
            this.maxStack.push(item);
        }
    }

    pop() {
        // Pop the top item from the main stack
        if (this.items.length === 0) {
            return null;
        }
        const poppedItem = this.items.pop();
    
        // Pop the item from the minStack if it matches the popped item
        if (poppedItem === this.getMin()) {
            this.minStack.pop();
        }
    
        // Pop the item from the maxStack if it matches the popped item
        if (poppedItem === this.getMax()) {
            this.maxStack.pop();
        }
    
        return poppedItem;
    }

    getMin() {
        // Return the minimum element
        if (this.minStack.length === 0) {
            return null;
        }
        return this.minStack[this.minStack.length - 1];
    }

    getMax() {
        // Return the maximum element
        if (this.maxStack.length === 0) {
            return null;
        }
        return this.maxStack[this.maxStack.length - 1];
    }
}

module.exports = MinMaxStack;