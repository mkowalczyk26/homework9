class Dgraph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2, weight) {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.adjacencyList.get(vertex1).push({ node: vertex2, weight });
        this.adjacencyList.get(vertex2).push({ node: vertex1, weight });
    }

    dijkstra(startVertex) {
        const distances = {};
        const visited = {};
        const previous = {};
        const queue = new PriorityQueue();
    
        // Initialize distances
        for (let vertex of this.adjacencyList.keys()) {
            distances[vertex] = vertex === startVertex ? 0 : Infinity;
            queue.enqueue(vertex, distances[vertex]);
            previous[vertex] = null;
        }
    
        // Main loop
        while (!queue.isEmpty()) {
            const currentVertex = queue.dequeue().val;
            visited[currentVertex] = true;
    
            for (let neighbor of this.adjacencyList.get(currentVertex)) {
            if (!visited[neighbor.node]) {
                const newDistance = distances[currentVertex] + neighbor.weight;
                if (newDistance < distances[neighbor.node]) {
                distances[neighbor.node] = newDistance;
                previous[neighbor.node] = currentVertex;
                queue.enqueue(neighbor.node, newDistance);
                }
            }
            }
        }
    
        return { distances, previous };
    }
  
    shortestPath(startVertex, endVertex) {
        const { distances, previous } = this.dijkstra(startVertex);
        const path = [];
        let currentVertex = endVertex;
        while (currentVertex !== null) {
            path.unshift(currentVertex);
            currentVertex = previous[currentVertex];
        }

        return { path, distance: distances[endVertex] };

        }
}
  
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }

    isEmpty() {
        return this.values.length === 0;
    }
}

module.exports = {Dgraph, PriorityQueue};