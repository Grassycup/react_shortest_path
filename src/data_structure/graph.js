class Node {
  constructor(name, connections) {
    this.name = name;
    this.connections = connections ? connections : [];
  }
}

class Edge {
  constructor(start, end, weight, directed = true) {
    this.start = start;
    this.end = end;
    this.weight = weight;
    this.directed = directed;
  }
}

class Graph {
  constructor(nodes) {
    this.nodes = nodes;
  }
}


export default Graph;