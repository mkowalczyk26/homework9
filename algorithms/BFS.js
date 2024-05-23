class BGraph {
    constructor() {
        this.adjacencyList = new Map();
    }
  
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }
  
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1); // For an undirected graph
    }
  
    bfs(startVertex, endVertex) {
        const queue = [startVertex];
        const visited = new Set();
        const previous = {};
        let found = false;
  
        visited.add(startVertex);
        previous[startVertex] = null;
  
        while (queue.length > 0 && !found) {
            const currentVertex = queue.shift();
                if (currentVertex === endVertex) {
                    found = true;
                } else {
                    for (let neighbor of this.adjacencyList.get(currentVertex)) {
                        if (!visited.has(neighbor)) {
                            visited.add(neighbor);
                            previous[neighbor] = currentVertex;
                            queue.push(neighbor);
                        }
                    }
                }
        }

        if (!found) {
            return null;
        }

        const path = [];
        let currentVertex = endVertex;
        while (currentVertex !== null) {
            path.unshift(currentVertex);
            currentVertex = previous[currentVertex];
        }

        return path;
    }
}

module.exports = BGraph;