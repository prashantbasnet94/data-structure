
function canFinish(n, prerequisite){

  // we need inorder and adjacency list
  const inDegree = new Array(n).fill(0)
  const adjacencyList = new Array(n).fill(0).map(o => new Array(0))


  for (let i =0; i< prerequisite.length; i++){
    const pair = prerequisite[i]
    inDegree[pair[0]]++
    adjacencyList[pair[1]].push(pair[0])
  }

// next we need to start processing from vertex whose indegree value is 0
// let's scan our indegree array and store our data

//only hold indegree value of 0
const stack = []

for(let i = 0; i < inDegree.length; i++){
  if(inDegree[i] === 0){
    stack.push(i)
  }
}



// if by the end of our topological sort, we haven't touched every single vertex and processed it's value
// and removed it from graph, then we know there is cycle
// so we want to intitialize the count of how many vertex have we touched



let count = 0
while(stack.length > 0 ){
  const current = stack.pop()
  count++

  //give me the adjcency
  const adjacent = adjacencyList[current]
// we will remove this vertex from our graph &  
// remove the corresponding indegree value from whereever it's directing

for(let i = 0; i < adjacent.length; i++){
  const next = adjacent[i];
  inDegree[next]--
  if(inDegree[next] === 0){
    stack.push(next)
  }
}


//now we need to check the cycle
return count === n

// if couunt === n, then we processsed all of it, else there is a cycle. 
}














}



