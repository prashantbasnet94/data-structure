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
  
  console.log(traversalBFS2(adjacencyList));