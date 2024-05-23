class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function hasCycle(head) {
    if (!head || !head.next) {
        return false; // No cycle if there are less than two nodes
    }

    let slow = head;
    let fast = head.next;

    // Move slow pointer by one step and fast pointer by two steps
    // If there's a cycle, they will eventually meet
    while (fast && fast.next) {
        if (slow === fast) {
            return true; // Cycle detected
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return false; // No cycle found
}

module.exports = {ListNode, hasCycle};