/*

1.There are total of n courses to take, labeled from 0 to n-1

2. Some courses have prerequistie courses. This is expressed as a pair i.e [1, 0] which indicates you must take course 0 before taking course 1

3. Given the total number of courses and an array of prerequisite pairs, return if it is possible to finish all courses.



As we can see, this question doesn't explicitly tells us this is a graph question. We have to look at it and 
figure out if there is a graph structure here.


let look at a example:

let n = 6, 6 courses: 0, 1, 2, 3, 4, 5

before we take course 1 we have to take 0
before we take course 2 we have to take 1

Here this is expressing a realtionship betwen these two courses or vertices

So combined with the given courses, this can be expressed as vortexes and a directed edge

if we were to see course (1) needing courses zero as a pre-requiste, then this is very similar to the subordinate question we looked at

(0) is required to be take before we can traverse to (1), thus express it as directed graph



as described on 3:

prerequisite = [
    [1, 0],
    [2, 1],
    [2, 5],
    [0, 3],
    [4, 3],
    [3, 5],
    [4, 5]
]

what we want to do is build this out using this example of (0) and (1)

 [1, 0],
 [2, 1] :
                0
                  \
                    1
                      \
                       2

 [1, 0],
 [2, 1], 
 [2, 5]:

                0
                  \
                    1    5
                      \ /
                       2


 [1, 0],
 [2, 1], 
 [2, 5],
 [0, 3]:

               3 
                \
                 0
                  \
                    1    5
                      \ /
                       2




 [1, 0],
 [2, 1], 
 [2, 5],
 [0, 3]
 [4, 3]:

               3 ----> 4
                \
                 0
                  \
                    1    5
                      \ /
                       2



 [1, 0],
 [2, 1], 
 [2, 5],
 [0, 3],
 [4, 3],
 [3, 5],
 [4, 5]:

                  3 ----> 4
                 / ^     ^
                v   \    |   
                 0   \   |
                  \   \  |
                   v   \ |
                    1   5
                      \ /
                       v 
                       2



So what the question is saying is?

Based on this graph, do we know wheater or not we can finish all of the courses.

we know we cannot finish the courses if we have some kind of cycle.
why is this?
If there is a cycle, it's impossible for us to take the courses.

if 0 is pre-requisite of 1 and if 1 is prereqsite of 0 then we cannot complete any of the courses.





                  3 ----> 4
                 / ^     ^
                v   \    |   
                 0   \   |
                  \   \  |
                   v   \ |
                    1   5
                      \ /
                       v 
                       2
In this exmple there is no cycle, but let's look at example where there is cycle


                  3 ----> 4
                 / ^     ^
                v   \    |   
                 0   \   |
                  \   \  |
                   v   \ |
                    1   5
                     \  ^
                      v |
                       2

if you start from 0, 0 => 1 => 2 => 5 => 3 => 0
hence a cycle, we return false



Verify constraits:

1. Can we have courses unconnected to other courses?
yes, account for seperate course chains.



(0) <--- (3)
  \
   \
    V
    (1) ----> (2)
    fig i

    (4) ----> (7)
       ^      /
        \    /
         \  v
         (5) 
    fig ii

Two seperate parts of this graph and they are not connected
We have to check and make sure no cycle in either side of this graph

here fig i is good whereas problem in fig ii


Test case:
---------

1.
                  3 ----> 4
                 / ^     ^
                v   \    |   
                 0   \   |
                  \   \  |
                   v   \ |
                    1   5
                      \ /
                       v 
                       2


2.
(0) <--- (3)
  \
   \
    V
    (1) ----> (2)

    (4) ----> (7)
       ^      /
        \    /
         \  v
         (5) 






Here we want to figure out how many vertices there are so we can get our value for N



When you hear that there's some type of relationship betwen pairs of something inside of a question
it's most likely that they're defining the relationship betwen two vertices becuase that relationship 
is dictated as an edge.

In this particular case, the fact that it;s a prerequisite relationship tells us that it's a directed edge.

relationship between pairs of something => relation between vertices


let's think about how the flow of event can help us solve our problem?

1 => 2 => 3

if a cycle existed in any of the structure i.e

1 => 2 => 3
^         |
|_________| 

let's say 3 was dependent on 1
what you will notice now is, there is no place we can start in which we can finish this traversal

Similary if we move the cycle between 2 and 3

1 => 2 => 3
     ^    |
     |____| 

It;s the same thing, if we were to start from 1, we're still stuck in the loop
    
****************************************  Logic **********************************************************
so we know automatically that if we are stuck in some kind of a cycle, this will break our logic and stops
us from being able to finish the courses.
**********************************************************************************************************

So how do we actually incorporate this into solving the problem in a logical step by step solution?





##############    Building an adjacency list ##############




prerequisite = [
    [1, 0],
    [2, 1],
    [2, 5],
    [0, 3],
    [4, 3],
    [3, 5],
    [4, 5]
]

indices = courses, values = pre-requisite
value 3 must be take before taking course index 0
0: [3]
1: [0]
2: [1, 5]
3: [5]
4: [3, 5]
5: []

similary,
indices = courses , values = direction that can be travelled

0:[1]
1:[2]
2:[]
3:[0, 4]
4:[]
5:[2, 3, 4]

Now we have our adjacency list, this will make it easier for us to incoporate how we can solve the acutal coding part 
First, let's figure our the rest of the problem, i.e identifying wheather or not a cycle exists inside the graph


when we are looking for a cycle, the easiest way is to start from some node and perform a traversal
while perfoming the traversal, if we ever make it back to a node that we've seen before, then automatically we know we have a cycle.


For unconnected graphs:

 A => B

 C => D => E

 For this two separate graph entities,
 if we were to pick a starting node A, and becuase it's node connected we can traverse A => B and not know that there's the remainder of this graph

For this reason, what we need to do is perfom this traversal on every single node becuase we have no idea which nodes are connected or not
connected to which other nodes there are

In order to be absolutely certain that we have covered every single node and path, we must perform this full traversal on every single node.

So for this reason, we are performing either DFS or BFS full traversal on every single node and figuring out wheater or not we ever make it back to our starting node
if we do => we have cycle, thus cannot complete course

That is a brute force solution













*/

function buildAdjacency(n, prereqsite){
  let adjacencyList = new Array(n).fill(0).map( o => [])
  
  for( let courses of prereqsite){
    adjacencyList[courses[1]].push(courses[0])
  }
 
  return bfs(adjacencyList, n)
}

const coursesprelist = [
  [1, 0],
  [2, 1],
  [2, 5],
  [0, 3],
  [4, 3],
  [3, 5],
  [4, 5],
]
function bfs(matrix, n){
  let queue = [0], seen ={}

  while(queue.length > 0){
    let vertex = queue.shift()

    if(seen[vertex]){
      return false
    }
    let directions = matrix[vertex]
    for(let course = 0; course < directions.length; course ++){
      //here each direction is the courses that vertex course can take next
      queue.push(directions[course])
    }
  }
  return true
}
function bfsrefactored(matrix, n) {

  // we loop over every single vertex in the graph
  for (let vertex = 0; vertex < n; vertex++) {
    // inside of every vertex we are perfoming BFS
    let queue = [], seen = {}
    // here we want to fill in our queue with inital values
    //we push in all of the adajcentList array values on current vertex into the queue so that we can kick off BFS
    for( let i =0; i< matrix[vertex]; i++){
      queue.push(matrix[vertex][i])
    }

    while (queue.length > 0) {
      // when we instantiate our BFS, we get the value of the currentVertex that our queue is currently operating on
      let currValue = queue.shift()
      seen[currValue] = true        
      /* at this point, we need to check if we are on cycle 
      i.e the currentValue in the Q is equal to the vertex that we are operating on as a while
      if it is we return false,
      */
      if(currValue === vertex) return false
      // else just get the next course list from our adjacency list for this current course
      let directions = matrix[currValue]
      for (let course = 0; course < directions.length; course++) {
        //here each direction is the courses that vertex course can take next
        let nextCourse = directions[course]
        if(!seen[nextCourse]){
          queue.push(directions[course])
        }
      }
    }
    return true
  }
}
console.log(buildAdjacency(6, coursesprelist))

/*

  Space and Time Compelxity:


  Space Complexity:
-------------------------
 O(N) =>  initaling adjacency list
 O(N) => adjacency nest array with values

 O(N) => for queue
 O(N) => for seen object

 
 O(N) + O(N) + O(N) + O(N) => O(4N) => O(N)


after
 O(N) =>  initaling adjacency list
 and then inside each array, 
 in the worst case scenario, with that nested graph, where every node is pointing to every other node that's also N
 thus O(N^2)


And for the queue
O(N^2) + O(N) + O(N)
O(N^2)




 Time complexity: 
-------------------
O(N) => initailing adjacency list
O(P) => P = size of prerequiste list
O(N) => outer for loop to loop through each vertex
  since this queue szie will be equal to N again, where N => number of coursees
  O(N) => for loop for next courses for current vertex to push into queue
  
  O(N) => while loop
    O(N) => nested for loop inside while
    what about  for next courses ?
    in worst case, adjacetList can be the size of N, this O(N)

  thus 3 nested loop for size N =  N(first for loop) + nested (for and while loop) + nested for loop inside while loop
                                = N^3

  hence O(P) + O(N^3)
*/


/*
 Implementing topological sort:
prerequisite = [
    [1, 0],
    [2, 1],
    [2, 5],
    [0, 3],
    [4, 3],
    [3, 5],
    [4, 5]
]
here,
 0 is dierctting to 1, so increase indegree of 1 by 1
 1 => 2, so increase indegree value of 2 by 1
 5 => 2, so increase indegree value of 2 by 1 
 3 => 0, so increase indegree value of 0 by 1 

 pattern course[0, 1]
 course [1] => course [0], increase indegree value of course[0] by 1


 [ 
    [ 1 ],
    [ 2 ],
    [], 
    [ 0, 4 ],
    [],
    [ 2, 3, 4 ] 
  ] 

  [ 1,
    1,
    2,
    1,
    2,
    0 
  ]
 */

function topologicalSort(n, prereqsite){
  const 
    adjacencyList = new Array(n).fill(0).map( o => []), 
    indegrees = new Array(n).fill(0)
  for(let course of prereqsite){
    adjacencyList[course[1]].push(course[0])
    indegrees[course[0]] += 1
  }

  let stack = [], count =0

  for( let index in indegrees){
    if(indegrees[index] === 0){
      stack.push(index)
    }
  }

  while(stack.length > 0){
    let currentIndex = stack.pop()
    count++
    let nextCourses = adjacencyList[currentIndex]
    for(let nextCourse of nextCourses){
      indegrees[nextCourse] --
      if(indegrees[nextCourse] === 0 )stack.push(nextCourse)
    }
  }
  return count === n
  // decreementDegree(indegrees, adjacencyList)

  // now we want to scan through indegree array and see which index has indegree value of 0
}

function decreementDegree (indegree, adajcentList, seen){
  for(let index in indegrees){
    if( indegrees[index] !== 0) continue

    let directingNodes = adjacencyList[index]

    for( let node of directingNodes){
      indegrees[node] -=1
    }
    decreementDegree(indegree, adajcentList)
  }
}
topologicalSort(6, coursesprelist)





