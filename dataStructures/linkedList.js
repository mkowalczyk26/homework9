class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        }
}
  
  class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
  
    insert(value) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
            current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
  
    delete(value) {
        if (this.head === null) return false;
    
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return true;
        }
    
        let current = this.head;
        while (current.next !== null && current.next.value !== value) {
            current = current.next;
        }
    
        if (current.next === null) return false;
    
        current.next = current.next.next;
        this.size--;
        return true;
    }
  
    search(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
            return current;
            }
            current = current.next;
        }
        return null;
    }

}

module.exports = {SinglyLinkedList};