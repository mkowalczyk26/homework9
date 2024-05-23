const Stack = require('./dataStructures/stack');
const Queue = require('./dataStructures/queue');
const {BinaryTree} = require('./dataStructures/binaryTree');
const Graph = require('./dataStructures/graph');
const {SinglyLinkedList} = require('./dataStructures/linkedList');

const MinMaxStack = require('./algorithms/minMaxStack');
const {TreeNode, isBST} = require('./algorithms/binarySearchTree');
const {Dgraph, PriorityQueue} = require('./algorithms/dijkstraAlgorithm');
const Bgraph = require('./algorithms/BFS');
const {ListNode, hasCycle} = require('./algorithms/linkedListCycle');



// Data Structures


// example of stack usage
const stack = new Stack();

// adding items to stack
stack.push(1);
stack.push(2);
stack.push(3);

// stack functions
console.log('item in the top: ', stack.peek());
console.log('pop item: ', stack.pop());
console.log('item in the top now: ', stack.peek());
console.log();


// example of queue usage
const queue = new Queue();

// adding items to queue
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

// queue functions
console.log('first item: ', queue.peek());
console.log('dequeued item: ', queue.dequeue());
console.log("first item now: ", queue.peek());
console.log();


// example of binary tree
const tree = new BinaryTree();

// adding nodes into tree
tree.insert(15);
tree.insert(5);
tree.insert(20);

// binary tree functions
console.log('in-order: ', tree.inOrder());
console.log('pre-order: ', tree.preOrder());
console.log('post-order: ', tree.postOrder());
console.log('search for node: ', tree.search(5));
console.log();


// example of graph usage
const graph = new Graph();

// adding vertecies
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

// adding edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');

// graph functions
console.log('DFS: ', graph.dfs('A'));
console.log('BFS: ', graph.bfs('A'));
console.log();


// example of linked list usage
const list = new SinglyLinkedList();

// inserting values into list
list.insert(1);
list.insert(2);
list.insert(3);

// list functions
console.log('search for 3: ', list.search(3));
console.log('delete value 3: ', list.delete(3));
console.log('search for 3 again: ', list.search(3));
console.log();





// Algorythmic problems



// min/max Stack example usage
const minmax = new MinMaxStack();

// adding values to stack
minmax.push(1);
minmax.push(4);
minmax.push(3);
minmax.push(7);

// displaying values
console.log('max: ', minmax.getMax());
console.log('min: ', minmax.getMin());

// removing value
minmax.pop();

// displaying again
console.log('max: ', minmax.getMax());
console.log('min: ', minmax.getMin());
console.log();


// binary search tree
// creating new tree
const root = new TreeNode(10);
root.left = new TreeNode(7);
root.right = new TreeNode(20);

// checking if tree is BST
console.log('is it bst?: ', isBST(root));

// creating another tree
const root2 = new TreeNode(10);
root2.left = new TreeNode(20);
root.right = new TreeNode(7);

// checking if tree is BST
console.log('is it bst?: ', isBST(root));
console.log();


// graph algorithms

// dijkstra
const graph2 = new Dgraph();

// add vertices
graph2.addVertex('A');
graph2.addVertex('B');
graph2.addVertex('C');
graph2.addVertex('D');
graph2.addVertex('E');
graph2.addVertex('F');

// add edges with weights
graph2.addEdge('A', 'B', 4);
graph2.addEdge('A', 'C', 2);
graph2.addEdge('B', 'E', 2);
graph2.addEdge('C', 'D', 3);
graph2.addEdge('C', 'F', 1);
graph2.addEdge('D', 'E', 3);
graph2.addEdge('D', 'F', 2);
graph2.addEdge('E', 'F', 1);

// finding shortest path
const {path, distance} = graph2.shortestPath('A', 'E');
console.log(`path: ${path}, distance: ${distance}`);
console.log();


// BFS
const graph3 = new Bgraph();

// add vertices
graph3.addVertex('A');
graph3.addVertex('B');
graph3.addVertex('C');
graph3.addVertex('D');
graph3.addVertex('E');
graph3.addVertex('F');

// add edges with weights
graph3.addEdge('A', 'B');
graph3.addEdge('A', 'C');
graph3.addEdge('B', 'E');
graph3.addEdge('C', 'D');
graph3.addEdge('C', 'F');
graph3.addEdge('D', 'E');
graph3.addEdge('D', 'F');
graph3.addEdge('E', 'F');

// finding shortest path
const path2 = graph.bfs('A', 'D');
console.log(`path: ${path2}`);
console.log();


// linked list cycle

// creating nodes for list
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

// creating cycle in the list
node1.next = node2;
node2.next = node3;
node3.next = node1;

// checking the cycle
console.log('cycle? ', hasCycle(node1));


