/*
https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22504154#questions

Same as DFS in 2D arrays or Binary tree

             (1) 
          /    
       /        
    (0) ----- (3) -----(4)
             /   \        \   
            /     (5)      \   
          (2)              (6) ---- (7)
           |
          (8) 
[
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

*/

 

 

function traversalDFS(graph, result, vertex, seen){
 
    // once we are inside of our traversal.

    // here the base case is if vertex is already seen we want to stop of calll
    
    result.push(vertex)
    seen[vertex] = true
   

    /*
     now we want to explore as thoroughly down every single one of it's neightbors as much as we can
    let's say we are at 0, we explore 1 first, 1 doesnot have any additional neighbour vertices, we come back to 0
    then we explore 3,

    At this point we need to figure out what are 3 neighboiring vertices and how far down do we explore. With DFS we want to go as deep as possible.

    This is what we are going to do @ 0,
    i want all the connection 
    */
    let connections = graph[vertex]

    for (let i =0; i < connections.length; i++){
        let connection = connections[i]
        if(!seen[connection]){
            traversalDFS(graph, result, connection, seen)
        }
    }
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
  
  const traversalDFS2 = function(vertex, graph, values, seen) {
    values.push(vertex);
    seen[vertex] = true;
  
    const connections = graph[vertex];
    for(let i = 0; i < connections.length; i++) {
      const connection = connections[i];
  
      if(!seen[connection]) {
        traversalDFS2(connection, graph, values, seen);
      }
    }
  }
  
  const values = [];
//   traversalDFS2(0, adjacencyList, values, {})
// graphDFS2(adjacencyList, values,0, {})
  
  console.log(values);



  function graphDFS(vertex, result, seen, graph){
    result.push(vertex)
    seen[vertex] = true

    let connections = graph[vertex]
    for(let i = 0; i < connections.length; i++){
       if(!seen[connections[i]]){
        graphDFS(connections[i], result, seen, graph)
       }
    }
  }

  function graphDFS(vertex, result, seen, graph){
    result.push(vertex)
    seen[vertex] = true

    const connections = graph[vertex]
    for(let i = 0; i < connections.length; i++){
        if(!seen[connections[i]]){
          graphDFS(vertex, result, seen, graph)
        }
    }
}

const values2 = [];
//   traversalDFS2(0, adjacencyList, values, {})
// graphDFS2(0,values2,  {}, adjacencyList)
graphDFS(0, values2,  {}, adjacencyList)
  console.log({values2});