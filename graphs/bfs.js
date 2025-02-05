/*

Breadth First Search:
1. We need to initalize queue and result.
2. Scan with the first element and traverse through  neighbouring element


             (1) 
          /    | 
       /       | 
    (0) ----- (3) -----(4)
             /           \   
            /             \   
          (2)             (5)  

          [ 
            [ 1, 3 ],
            [ 0, 3 ],
            [ 3 ], 
            [ 2, 1, 0, 4 ],
            [ 3, 5 ], 
            [ 4 ] 
            ]
*/

class graph {
    constructor(){
        this.totalVertex = 0
        this.vertices = []
    }

    addVertex(vertex){
        this.totalVertex += 1
        this.vertices[vertex] = []
    }

    addEdges(vertex1, vertext2){
        this.vertices[vertex1].push(vertext2)
        this.vertices[vertext2].push(vertex1)
    }
}

let myGraph = new graph()

myGraph.addVertex(0)
myGraph.addVertex(1)
myGraph.addVertex(2)
myGraph.addVertex(3)
myGraph.addVertex(5)
myGraph.addVertex(4)


myGraph.addEdges(0, 1)
myGraph.addEdges(2, 3)
myGraph.addEdges(1, 3)
myGraph.addEdges(0, 3)
myGraph.addEdges(3, 4)
myGraph.addEdges(4, 5)




const testCase = 
[ 
  [ 1, 3 ],
  [ 0, 3 ],
  [ 3 ], 
  [ 2, 1, 0, 4 ],
  [ 3, 5 ], 
  [ 4 ] 
  ]
function traversalBFS(graph){
    const queue = [0], values = [], seen = {}

    while(queue.length > 0){
        const vertex = queue.shift()
        values.push(vertex)
        seen[vertex] = true

        const connections = graph[vertex]
        for(let i = 0; i < connections.length ; i++){
            const conn = connections[i]
            if(!seen[conn]){
                queue.push(conn)
            }
        }
    }
    return values
}



const adjacencyList = [
    [1, 3],
    [0],
    [3, 8],
    [0, 2, 4, 5],
    [3, 6],
    [3],
    [4, 7],
    [6],
    [2]
  ];
  
  const traversalBFS2 = function(graph) {
    const seen = {};
    const queue = [0];
    const values = [];
  
    while(queue.length) {
      const vertex = queue.shift();
      
      values.push(vertex);
      seen[vertex] = true;
  
      const connections = graph[vertex];
      for(let i = 0; i < connections.length; i++) {
        const connection = connections[i];
        if(!seen[connection]) {
          queue.push(connection);
        }
      }
    }
  
    return values;
  }
console.log(traversalBFS(adjacencyList))
  


  class NewGraph{
    constructor(){
      this.vertices = []
      this.totalVetex = 0
    }
    addVertex(vertex){
      this.totalVetex +=1
      this.vertices[vertex] = []
    }

    addEdges(vertex1, vertex2){
      this.vertices[vertex1].push(vertex2)
      this.vertices[vertex2].push(vertex1)
    }
  }


  const myNewGraph = new NewGraph()

myNewGraph.addVertex(0)
myNewGraph.addVertex(1)
myNewGraph.addVertex(2)
myNewGraph.addVertex(3)
myNewGraph.addVertex(5)
myNewGraph.addVertex(4)


myNewGraph.addEdges(0, 1)
myNewGraph.addEdges(2, 3)
myNewGraph.addEdges(1, 3)
myNewGraph.addEdges(0, 3)
myNewGraph.addEdges(3, 4)
myNewGraph.addEdges(4, 5)



function graphBFSTraversal(graph){
  let result = [], seen = {}, queues = [0]

  while (queues.length > 0) {
    const vertex = queues.shift()
    result.push(vertex)
    seen[vertex] = true

    const conns = graph[vertex]

    for (let i = 0; i < conns.length; i++) {
      if (!seen[conns[i]]) {
        queues.push(conns[i])
      }
    }
  }
  return result
}


function graphBFS(){
  let queue = [], result = [], seen = {}
  queue.push(0)
  while(queue.length > 0){
      let vertex = queue.shift()
      seen[vertex] = true
      result.push(vertex)
      // [3, 2]
      const connections =  graph[vertex]
      for(let i = 0; i < connections.length; i++){
          if(!seen[connections[i]]){
              queue.push(connections[i])
          }
      }
  }
  return result
}

console.log(graphBFSTraversal(myNewGraph.vertices))
console.log(traversalBFS(myNewGraph.vertices))