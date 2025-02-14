function bfs(graph) {
  const queue = [];
  const results = []
  seen = []

  queue.push(0);

  while (0 < queue.length) {
    const vertex = queue.shift();
    values.push(vertex)
    seen[vertex]
    const connections = graph[vertex];

    for (let connection of connections) {
      queue.push(connection);
    }
  }
}



function dfs(graph, vertex, seen){
    seen[vertex] = true
    results.push(vertex)
    const connections = graph[vertex]

    for(let connection of connections){
        if(!seen[connection]){
            this.dfs(graph, connection, seen)
        }
    }
}