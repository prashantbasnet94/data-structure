/*
    Greedy method and dynamic prgamming solve the same problem

    Dijkstra's Algorithm is a greedy method algorithm, which is algorithm approach of solving an optimization probelm

   let's look at the question so that we get under which context we want to apply Dijkstra's algorithm

*********************** Question ********************************************************************
There are n network nodes labelled 1 to N.

Given a times array, containing edges represented by arrays [u, v, w] where u is the source node, v is the target node 
and w is the time take to travel from the source node to the target node

Send a signal from the node k, return how long it takes to receive the signal, return -1 if it's impossible.
******************************************************************************************************




given,

nodes from 1-N || vertices
edges that has direction and weight

now, let's break down this graph question, given what we know now

test case:

n = 5, nodes = 1, 2, 3, 4, 5
be aware it not starting from 0 

we have a times array, inside this array is going to be arrays that represents the edges which are relationship between these nodes
[u, v, w], u => source node, v => target node, w => weight to travel

times = [
    [1, 2, 9], [1, 4, 2], [2, 5, 1],
    [4, 2, 4], [4, 5, 6], [3, 2, 3], [5, 3, 7], [3, 1, 5]
]

                     5
         |-----------------------|
         V     9            3    |
        (1) ------> (2) <---| .  |
         | .     ^   |      |-- (3)     
         |2     /    |1     /->    
         |    /4     |    / 7 
         v  /        V  / 
        (4) ------> (5)  
                6


we want to send a signal from node K return how long it takes for all nodes to receive the signal return -1 if it's impossible

k value => node where signal is going to get sent from

if k = 1,
we need to figure out how much time it would take from this node (1),to traverse throgh out this entire graph and make sure that this signal 
touches all of these other nodes





Verify Constraints:

Can the graph be unconnected?
Yes, accout for an unconnected graph



Can the time be negative integers?
there can be a context where the weights can be -ve , but for this context time cannot be -ve



Test Cases:

1.
   (4) ----> (1) ----> (5)
        4          3 

        k = 4, return 7

2.
    n = 0, times = []
    return -1


3.
        2           3
    (1) ----> (3) -----> (6)
     |         |
     | 6       | 5
     |         | 
     v         v 
    (7)-----> (8) 
          2  
  
        k = 3, return -1 as 3 cannot reach 7
    
4.
        2           3
    (1) ----> (3) <----- (6)
     |         |    /-->   
     | 6       | 5 / 
     |         |  /  
     v         v /
    (7)-----> (8) 
          2  

    k = 7, return -1 as 7 cannot reach 1

5.
        2           3
    (1) ----> (3) <----- (6)
     |         |    /--   
     | 6       | 5 / 
     |         |  |  
     v         v  v
    (7)-----> (8) 
          2  
        k = 6, return -1 as 6 cannot reach 1 or 7


Disconnected Graph
6.
   (4)       (1) ----> (5)
                  3 

        k = 1, return -1


7.
   (4)       (1) ----> (5)
                  3 

        k = 1, return -1



        if we are looking for the shortest path, then there are two optimal algorithms that we automatically know are proabably going to be 
        the correct way to appraoch the problem

####################### point to be noted #############################

When you see a directed weighted graph and you are looking for the shortes path to all the nodes from any specific node,
you want to use these two algorithms that we are going to learn.



But what if were to just coer this question and think about it from the traversal standpoint what's it going to be?


What is a better solution?
This kind of question is a optimization question, 
we are looking for either a minimum value or a maximum value.

The idea is that we are tying to write an optimal solution that gives us an optimal time.
Opmital in this can is minimum because we are tying to figure out shortest path


Dijkstra Algorithm:
-------------------

Dijkstra algo can only be applied to graphs that are directed and weighted.
It aims to help you figure out, what is the shortest distance between some node of your choice to every other node

Greedy method is an algorithmic paradigm, meaning it's a way that we tackle probelms that is very simple.
it only applies when we are working with optimization problem

Optimization problems are problems where you are looking for max possible value or min possible value

and that's all greedy method aims to help you solve, and is the simplest, most intuitive way 



Greey algorithm explantion:
We are hiking on a trail, we come to a form , left which take 4 hrs and right which take 1 hour.

           4 hour 
         /
        /
 Here -
        \
         \
         1 hour

        We take 1 hour obviously


we take the right path, that's all greedy algorithm does, 
it just says that if i have to make a decision betwen all my options, i want to pick the one that most logically gets me to my optimal solution


Minimum Optimization => shorstest path => take the short way 

Maximum Optimization => longest path => takes the longest way



What about the limitation?


         6
    > A ----> C ---
 4 /        ^       \4
 /         /         V   
(S)       /3         E  
 \ 2     /           ^
  \     /            | 10  
     > B --------- > D
            5

        Starting from (S) => End node (E), in most efficient and low costing path we possibly could. 
        IF we apply greedy method, we make the decision at every node that we choose to walk


    1. Starting from S, we choose going to A i.e cost 4 or to B i.e cost 2.
        2 is cheaper so we go to B

        Our total weight so far is 2, and now we are @ B

    2. @ B we can either go to C ie cost 3 or go to D i.e cost 5
        3 is lesser so going to C
        path = S => B => C
        weight = 2 + 3 = 5
    
    3. @ C, we don;t have option so we move to E
       path = s => B => C => E
       weight = 5 + 4 = 9


       when looking at the path that we took, is it the lowest costing path it took to reach here?
       We have 2 extra path as alternative i.e

       S => A => C => E i.e 4 + 6 + 4 = 14
       S => B => D => E i.e 2 + 5 + 10 = 17

       yes it was


       ############################# However ###########################################

       The limit to greedy method is that this only works in some contexts. It does not work all the time



*********************** Question ********************************************************************
There are n network nodes labelled 1 to N.

Given a times array, containing edges represented by arrays [u, v, w] where u is the source node, v is the target node 
and w is the time take to travel from the source node to the target node

Send a signal from the node k, return how long it takes to receive the signal, return -1 if it's impossible.
******************************************************************************************************

n = 5

*/

const times = [
    [1, 2, 9], [1, 4, 2], [2, 5, 1],
    [4, 2, 4], [4, 5, 6], [3, 2, 3], [5, 3, 7], [3, 1, 5]
]

function totalTimeNeeded(n, times, k){
    // building an  adjacentList
    let adjacentList = new Array(n+1).fill(0).map(o => []),
    map = {},
    //  pq = new maxPriorityQueue(),

    dijkstraMatrix = new Array(n+1).fill(Infinity)
    dijkstraMatrix[k] = 0
    dijkstraMatrix[0] = 0
    for(let value of times) {
        //[1, 2, 9]
        const 
            index = value[0],
            destination =  value[1],
            key = index.toString() + '-'+destination
            map[key] = value[2]
        adjacentList[index].push(destination)
    }

    return dijkstra(k, dijkstraMatrix, adjacentList, map, {}, 0)
    // return {adjacentList, map, dijkstraMatrix}
}
/*

  adjacentList: [ [], [ 2, 4 ], [ 5 ], [ 2, 1 ], [ 2, 5 ], [ 3 ] ]

  map: {
    '1-2': 9,
    '1-4': 2,
    '2-5': 1,
    '4-2': 4,
    '4-5': 6,
    '3-2': 3,
    '5-3': 7,
    '3-1': 5
  }

  dijkstraMatrix: [ 0, 0, Infinity, Infinity, Infinity, Infinity ]
}


*/

/*
Detail explanation:

1  can go tos  [ 2, 4 ]
now looking @  1-2
updating value  Infinity =>  9
now looking @  1-4
updating value  Infinity =>  2
updated matrix  [ 0, 0, 9, Infinity, 2, Infinity ]
next looking at value  2  @ index  4
updating seen { '1': true }


4  can go tos  [ 2, 5 ]
now looking @  4-2
updating value  9 =>  6
now looking @  4-5
updating value  Infinity =>  8
updated matrix  [ 0, 0, 6, Infinity, 2, 8 ]
next looking at value  6  @ index  2
updating seen { '1': true, '4': true }


2  can go tos  [ 5 ]
now looking @  2-5
updating value  8 =>  7
updated matrix  [ 0, 0, 6, Infinity, 2, 7 ]
next looking at value  7  @ index  5
updating seen { '1': true, '2': true, '4': true }


5  can go tos  [ 3 ]
now looking @  5-3
updating value  Infinity =>  14
updated matrix  [ 0, 0, 6, 14, 2, 7 ]
next looking at value  14  @ index  3
updating seen { '1': true, '2': true, '4': true, '5': true }


3  can go tos  [ 2, 1 ]
now looking @  3-2
cannot update 
now looking @  3-1
cannot update 
updated matrix  [ 0, 0, 6, 14, 2, 7 ]
next looking at value  Infinity  @ index  -1
updating seen { '1': true, '2': true, '3': true, '4': true, '5': true }


[ 0, 0, 6, 14, 2, 7 ]
*/
function dijkstra(k, matrix, adajcentList, map, seen){

    if(Object.keys(seen).length >= matrix.length || k === -1) return 
    let 
        index = k,
        destinations = adajcentList[index]
        for( let destination of destinations){
            let key = index.toString() + '-' + destination
            if(matrix[destination] > map[key] + matrix[index] ){
                matrix[destination] = map[key]+ + matrix[index]
            }
        }
        seen[index] = true
     let mincans = matrix.filter(o => o !==0 && !seen[matrix.indexOf(o)])
     dijkstra(matrix.indexOf(Math.min(...mincans)), matrix, adajcentList, map, seen)
     let maxTimeNeeded = Math.max(...matrix)
    return maxTimeNeeded === Infinity ? -1 : maxTimeNeeded
}



 class minPriorityQueue{
    constructor(comparator = (a, b) => a < b){
        this._heap =[]
        this.comparator =  comparator
    }
    _compare(a, b){
        return this.comparator(this._heap[a] , this._heap[b])
    }
    _parentIndex(index) {
        return Math.floor((index -1)/2)
    }
    _leftChildIndex(index){
        return index * 2 + 1
    }
    _rightChildIndex(index){
        return index * 2 + 2
    }
    _swap(i, j){
        let temp = this._heap[i]
        this._heap[i] = this._heap[j]
        this._heap[j] = temp
        //or  
    }
    _shift_up(){
        let nodeIndex = this.size() -1

        while(nodeIndex > 0 && this._compare(nodeIndex, this._parentIndex(nodeIndex))){
            this._swap(nodeIndex, this._parentIndex(nodeIndex))
            nodeIndex = this._parentIndex(nodeIndex)
        }
    }
    _shift_down(){
        let nodeIndex = 0

        while(
            // check if left || right exist
        this._leftChildIndex(nodeIndex) < this.size() && this._compare(this._leftChildIndex(nodeIndex),nodeIndex) 
        || this._rightChildIndex(nodeIndex) < this.size() && this._compare(this._rightChildIndex(nodeIndex) ,nodeIndex ) ){
            let greatestChild = this._rightChildIndex(nodeIndex) && this._compare(this._rightChildIndex(nodeIndex), this._leftChildIndex(nodeIndex))
                                ? this._rightChildIndex(nodeIndex) : this._leftChildIndex(nodeIndex)
            this._swap(nodeIndex, greatestChild)
            nodeIndex = greatestChild
        }
    }
    size(){
        return this._heap.length
    }

    peek(){
        return this._heap[0]
    }
    push(value){
    this._heap.push(value)
    this._shift_up()
    return this.size()
    }
    pop(){
        this._swap(0, this.size()-1)
        let value = this._heap.pop()
        this._shift_down()
        return value
    }
    isEmpty(){
        return this.size() === 0
    }
}

/* let pq = new maxPriorityQueue()
// pq.push(9)
// pq.push(15)
// pq.push(10)
// pq.push(4)
// pq.push(5)
// pq.push(6)
pq.push(7)
*/ 

 //https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22505068#questions


 // ***************************** REFACTORED **************************



 class PriorityQueue{
    constructor(comparator = (a, b) => a > b){
      // next thing we want to implment is the array that is going to hold the values inside of the heap structure that represent priority queue
      //_ represent private 
      this._heap = []
      this._comparator = comparator
    }
  
    size(){
      return this._heap.length
    }
    peek(){
      this._heap[0]
    }
    _parent(index){
      return Math.floor((index -1)/2)
    }
    _leftChild(index){
      return 2 * index + 1
    }
    _rightChild(index){
      return 2 * index + 2
    }
    _swap(i, j){
      let temp = this._heap[i]
      this._heap[i] = this._heap[j]
      this._heap[j] = temp
    }
    _compare(i, j) {
      return this._comparator(this._heap[i], this._heap[j]);
    }
  
    _shiftUp() {
      let nodeIndex = this.size() - 1 
      // as soon as our node index is equal to root, we know we cant swap
      // and also acutal node value is greater than the parent
      while(nodeIndex >0  && this._compare(nodeIndex, this._parent(nodeIndex))){
        this._swap(nodeIndex, this._parent(nodeIndex))
        nodeIndex = this._parent(nodeIndex)
      }
  }
  
  _shiftDown(){
   let nodeIndex = 0
   // as long as one of the child exist we step in while loop
   while(
    this._leftChild(nodeIndex) < this.size() && this._compare(this._leftChild(nodeIndex), nodeIndex) ||
    this._rightChild(nodeIndex) < this.size() && this._compare(this._rightChild(nodeIndex), nodeIndex)
   ){
     // if a right child exist, left child must exist but if the left value exist we don't know if the right value exist as well
     // if right child exist we check if it is greater than left child, if at any point that fails we know left is greater
    const greaterNodeIndx = this._rightChild(nodeIndex) < this.size() && 
    this._compare(this._rightChild(nodeIndex), this._leftChild(nodeIndex)) ? this._rightChild(nodeIndex) : this._leftChild(nodeIndex)
    this._swap(greaterNodeIndx, nodeIndex)
    nodeIndex = greaterNodeIndx
   }
  }
  
    push(newValue) {  
      this._heap.push(newValue)
      this._shiftUp()
      return this.size()
    }
    pop(){
      
      if(this.size() > 1){
        this._swap(0, this.size() -1)
      }
      const poppedVlaue = this._heap.pop()
      this._shiftDown()
      return poppedVlaue
    }
    isEmpty(){
      return this.size() === 0
    }
  }


  /*

############ Explanation #############

our initial heap is  [ 0 ]
popping heap  0  updated heap []
destination of current vertex and its weight  [ [ 1, 9 ], [ 3, 2 ] ]
current neightbour  1  && edge weight to :  9
updating distance @  1 Infinity => 9
pushing  1  into heap
new distances  [ 0, 9, Infinity, Infinity, Infinity ]
my new heap  [ 1 ]
current neightbour  3  && edge weight to :  2
updating distance @  3 Infinity => 2
pushing  3  into heap
new distances  [ 0, 9, Infinity, 2, Infinity ]
my new heap  [ 3, 1 ]


popping heap  3  updated heap [ 1 ]
destination of current vertex and its weight  [ [ 1, 4 ], [ 4, 6 ] ]
current neightbour  1  && edge weight to :  4
updating distance @  1 9 => 6
pushing  1  into heap
new distances  [ 0, 6, Infinity, 2, Infinity ]
my new heap  [ 1, 1 ]
current neightbour  4  && edge weight to :  6
updating distance @  4 Infinity => 8
pushing  4  into heap
new distances  [ 0, 6, Infinity, 2, 8 ]
my new heap  [ 1, 1, 4 ]


popping heap  1  updated heap [ 1, 4 ]
destination of current vertex and its weight  [ [ 4, 1 ] ]
current neightbour  4  && edge weight to :  1
updating distance @  4 8 => 7
pushing  4  into heap
new distances  [ 0, 6, Infinity, 2, 7 ]
my new heap  [ 1, 4, 4 ]


popping heap  1  updated heap [ 4, 4 ]
destination of current vertex and its weight  [ [ 4, 1 ] ]
current neightbour  4  && edge weight to :  1


popping heap  4  updated heap [ 4 ]
destination of current vertex and its weight  [ [ 2, 7 ] ]
current neightbour  2  && edge weight to :  7
updating distance @  2 Infinity => 14
pushing  2  into heap
new distances  [ 0, 6, 14, 2, 7 ]
my new heap  [ 4, 2 ]


popping heap  4  updated heap [ 2 ]
destination of current vertex and its weight  [ [ 2, 7 ] ]
current neightbour  2  && edge weight to :  7


popping heap  2  updated heap []
destination of current vertex and its weight  [ [ 1, 3 ], [ 0, 5 ] ]
current neightbour  1  && edge weight to :  3
current neightbour  0  && edge weight to :  5


end processing while loop, our distances  [ 0, 6, 14, 2, 7 ]

  */

 function networkTimeDelay(times, N, k){
    // first thing we wanna do is initaize the distance array i.e dijkstra algro distance array
    let distances = new Array(N).fill(Infinity)

    //let initiaze our adjacencyList
    let adjacencyList = distances.map(o => [])

    /* 
     make sure the value of k node in distances array as 0
     also actual values start from 1, whereas index start from 0

     so, keep in mind any place where we reference id, we want to substract 1
    */
    distances [k -1] = 0

    /*
     we also need a priority qeue
     values that we're comparig as we fill them in is going to be distances value
     and we always want the smallest one
     so we are going to be leveraging this distance array to tell us the actual value that's associated with the vertex as we pass them into the priority queue

     with that said, the comparaitve fucntion that we have is going to reference a and b
     and we want to leverage distance at a and compare and figure out if it is lesser than distance at b
    */ 
    const minHeap = new PriorityQueue((a, b) => distances[a] < distances[b])

    // through this heap, we can pick the lest weighted  value from this array whenver we need to process the next value
    //initailizing heap
    minHeap.push(k-1)


    for(let value of times){
        let
         souce = value[0],
         target = value[1],
         weight = value[2]
         // all id has to be substracted -1 as node indenifier start from 1 in question and 0 as index
        adjacencyList[souce - 1].push([target -1 , weight])
    }

    // here we need to start working with heap as long as value inside the heap

    while(!minHeap.isEmpty()){
        const
         currentVertex = minHeap.pop(),
         adjacent = adjacencyList[currentVertex]
         // we need to compare the weight of our current neighbour against the weight of our currentVertex plus the edge to that neighbour
        // here adjacent gives us te array of all of our neighbours
        for(let i = 0; i < adjacent.length; i++){
            // insdie of our adjacency list each value is an array itself, where 0 => neighbour vertex, 1 represent the edge weight
            const
             neighbouringVertex = adjacent[i][0],
             weight = adjacent[i][1]
            // now we need to check if the current distances up to our current vertext
            // as long as this current weight of our vertex + the new weight of the edge to that value is less than distancess of what's already been stored at this vertex
            // then we want to update the value
            if(distances[currentVertex] + weight < distances[neighbouringVertex]){
                distances[neighbouringVertex] = distances[currentVertex] + weight
                minHeap.push(neighbouringVertex)
            }
        }
     }

    const answer = Math.max(...distances)
     return answer === Infinity ? -1 : answer
 }

 networkTimeDelay(times, 5, 1)



 //************************************* reattempt */

 function networkTimeDelay2(times, N, k){
    let 
        distances = new Array(N).fill(Infinity),
        adjcentList = distances.map(o => [])

    for(let value of times){
        let 
          source = value[0],
          target = value[1],
          weight = value[2]
          adjcentList[source -1].push([target-1, weight])
    }
    distances[k -1] = 0
    // will be a min heap based on distance[vertex]
    let heap = new minPriorityQueue((a, b) => distances[a] < distances[b])
    heap.push(k-1)

    while(!heap.isEmpty()){
        let
             currentVertex = heap.pop(),
             adjacent = adjcentList[currentVertex]

             // now let's go over neighbouring vertexes
        for(let target of adjacent){
            let
                 neighbouringVertex = target[0],
                 edgesWeight = target[1]
    
            if(distances[neighbouringVertex] > distances[currentVertex] + edgesWeight){
                distances[neighbouringVertex] = distances [currentVertex] + edgesWeight
                heap.push(neighbouringVertex)
            }
        }
    }

    let answer = Math.max(...distances)
    return answer === Infinity ? -1 : answer
 }
 console.log('networkTimeDelay2(times, 5,1 )', networkTimeDelay2(times, 5,1 ))