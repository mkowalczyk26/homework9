class Graph {

    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(vertex) { // adding new vertex to graph
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }
  
    addEdge(vertex1, vertex2) { // adding edge between two vertecies
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1); // For an undirected graph
    }
  
    dfs(start) { // depth first search
        const visited = new Set();
        const result = [];
    
        const dfsHelper = (vertex) => {
            if (!vertex) return;
            visited.add(vertex);
            result.push(vertex);
    
            this.adjacencyList.get(vertex).forEach((neighbor) => {
            if (!visited.has(neighbor)) {
                dfsHelper(neighbor);
            }
            });
        };
    
        dfsHelper(start);
        return result;
    }
  
    bfs(start) { // breadth first search
        const visited = new Set();
        const queue = [start];
        const result = [];
    
        visited.add(start);
    
        while (queue.length > 0) {
            const vertex = queue.shift();
            result.push(vertex);
    
            this.adjacencyList.get(vertex).forEach((neighbor) => {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
            });
        }
    
        return result;
    }
}

module.exports = Graph;