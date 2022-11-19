/*

In this question, we will be asked to figure out the distance from one element to another
Most of the time when we're looking for the distance, we are looking for the shortest distance.

This is a very common type of patten amongst our 2D array question

Given a 2D array containing -1 (walls) , 0 (gates) and Infinity (empty room)

Fill each empty room with the number of steps to the nearest gate


If it;s impossible to reach a gate, leave INF as the value. INF = 2147483647



1.
[
    [INF    -1    0     INF]
    [INF    INF  INF     -1]
    [INF    -1   INF     -1]
    [0      -1   INF    INF]
]

Here'
-1 => Walls, we cannot traverse through
0 => Gates

So we need to figure out from every INF which represents the value, how many steps it takes us in order to reach the nearset gate.


As a result

[
    [3      -1    0       1]
    [2       2    1      -1]
    [1      -1    2      -1]
    [0      -1    3       4]
]

2.

[
    [INF    -1    0     INF]
    [-1     INF  INF     -1]
    [INF    -1   INF     -1]
    [0      -1   INF    INF]
]


[
    [INF    -1    0       1]
    [-1     INF   1      -1]
    [1      -1   INF     -1]
    [0      -1   INF    INF]
]


[
    [INF    -1    0       1]
    [-1      2    1      -1]
    [1      -1    2      -1]
    [0      -1    3       4]
]

Breaking the problem into Sub Problem:

[
  [ INF,     -1,     0,      INF ],
  [ INF,     INF,    INF,    -1 ],
  [ INF,     -1,     INF,    -1 ],
  [ 0,       -1,     INF,    INF ]
]

[
  [ 3,     -1,     0,     1 ],
  [ 2,      2,     1,    -1 ],
  [ 1,     -1,     2,    -1 ],
  [ 0,     -1,     3,     4 ]
]


1. At every point we need to search the nearset gate


a. Identify where all the gates are 
b. Start travesing from the gate and at every level we proceed around we increase the distance unit by 1

*/

const direction = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1], //left
]

function findNearestGate(matrix){
    let queue = []
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[0].length; col++)
        
        if(matrix[row][col] === 0){
            queue.push([row, col])
        }
    }

    // now since we know all the position of gates let's traverse around from gate
    bfsFromGate(queue, matrix)
  return matrix
}

function bfsFromGate(queue, matrix){
    let size = queue.length,
    distance = 0

    while(queue.length > 0){
        if(size === 0){
            distance++
            size = queue.length
        }
        let [row, col] = queue.shift()
        size--
        for(let dir = 0; dir < direction.length; dir++){
            let currDir = direction[0],
            newRow = row + currDir[0],
            newCol = col + currDir[1]

            if(newRow < 0 || newRow >= matrix.length || newCol < 0 || newCol >=matrix[0].length){
                continue
            }
            
            if(matrix[newRow][newCol] === 2147483647){
                matrix[newRow][newCol] = distance
                queue.push([newRow, newCol])
            }
        }
    }
}





// ******** REFACTORED *********
 
/*

LET SAY * REPRESENT INFINITY
[      0       1      2       3    
  0  [ *,     -1,     0,      * ],
  1  [ *,     *,      *,     -1 ],
  2  [ *,     -1,     *,     -1 ],
  3  [ 0,     -1,     *,      * ]
  ]


  from sequential search we find out where all the gates are and pushed that in queue
  queue = [[0,2], [3, 0]]


  // now excuting bfs for the queue we have

we assume from distance = 0

1. shifts current queue i.e processing [0, 2], now queue = [[3, 0]]

    a. Going up => out of bound
    b. Going right => encounted *, since our distance is matrix [0, 2] i.e 0 and then we increment it to 1.
        i. replacing matrix[newRow][newCol] i.e * by 1
        ii. Pushing that [0, 3] coordinate to queue to process it's nearby elements


    [    0       1      2       3    
    0  [ *,     -1,     0,     (1)],
    1  [ *,     *,      *,     -1 ],
    2  [ *,     -1,     *,     -1 ],
    3  [ 0,     -1,     *,      * ]
    ]


    c. Going down => encountered another *, since our distance is 1,
    i. replacing matrix[newRow][newCol] = * by 1
    ii. Pushing that coordinate[1, 2] to queue to process it's nearby elements

    d. Since there's a wall @ left we can't do anything.
    queue = [ [3, 0], [0, 3], [1, 2]]
-------- End of processing first element in queue --------

    [    0       1      2       3    
    0  [ *,     -1,     0,     (1)],
    1  [ *,     *,     (1),    -1 ],
    2  [ *,     -1,     *,     -1 ],
    3  [ 0,     -1,     *,      * ]
    ]

Starting 2nd process, now processing [3, 0]


2. shifts current queue i.e processing  [3, 0], now queue = [[0, 3], [1, 2]]
        distance = 0 initally, then distance = 0 as matrix[3][0] = 0, increment to 1
    a. Going up to => *
        i replacing matrix[newRow][newCol] = * by 1
        ii. Pushing that [2, 0] coordinate to queue to process it's nearby elements, queue = [[0, 3], [1, 2],[2, 0] ]
    b. Going right => hit wall (-1)
    c. on left => out of bound
    d. on down => out of bound


    [    0       1      2       3    
    0  [ *,     -1,     0,      1 ],
    1  [ *,     *,      1,     -1 ],
    2  [ (1),   -1,     *,     -1 ],
    3  [ 0,     -1,     *,      * ]
    ]

        queue =  [[0, 3], [1, 2],[2, 0] ]
-------- End of processing 2nd element in queue --------




3. shifts current queue i.e processing  [ 0, 3] i.e 1, now queue = [[1, 2],[2, 0] ]
         distance = 1 as matrix[0][3] = 1, increment to 2
    a. Going up to => no where
    b. Going right => out of bound
    c. on left => gate
    d. on down => wall


    [    0       1      2       3    
    0  [ *,     -1,     0,      1 ],
    1  [ *,      *,     1,     -1 ],
    2  [ 1,     -1,     *,     -1 ],
    3  [ 0,     -1,     *,      * ]
    ]

        queue =  [[1, 2],[2, 0] ]
-------- End of processing  --------


4. shifts current queue i.e processing  [1, 2] i.e 1, now queue = [[2, 0] ]
    [    0       1      2       3    
    0  [ *,     -1,     0,      1 ],
    1  [ *,      *,    (1)     -1 ],
    2  [ 1,     -1,     2,     -1 ],
    3  [ 0,     -1,     *,      * ]
    ]

         distance = 1 as matrix[1][2] = 1, increment to 2
    a. Going up to => gate
    b. Going right => wall
    c. on left => *, 
        i. replace it's distance by 2
        ii. push that coordinate to queue for processing.i.e [1, 1]
    d. on down => *, 
        i. replace it's distance by 2
        ii. push that coordinate to queue for processing.i.e [2, 2]


    [    0       1      2       3    
    0  [ *,     -1,     0,      1 ],
    1  [ *,      2,     1,     -1 ],
    2  [ 1,     -1,     2,     -1 ],
    3  [ 0,     -1,     *,      * ]
    ]

        queue =  [[2, 0], [1, 1], [2, 2] ]
-------- End of processing --------


5. shifts current queue i.e processing  [2, 0], i.e 1, now queue = [ [1, 1], [2, 2] ]
    [    0       1      2       3    
    0  [ *,     -1,     0,      1 ],
    1  [ *,      *,     1      -1 ],
    2  [(1),    -1,     2,     -1 ],
    3  [ 0,     -1,     *,      * ]
    ]

         distance = 1 as matrix[2][0] = 1, increment to 2
    a. Going up to => *
        i. replace it's distance by 2
        ii. push that coordinate to queue for processing.i.e [1, 0], queue = [ [1, 1], [2, 2], [1, 0] ]
    b. Going right => wall
    c. on left => out of bound
    d. on down => gate


    [    0       1      2       3    
    0  [ *,     -1,     0,      1 ],
    1  [ 2,      2,     1,     -1 ],
    2  [ 1,     -1,     2,     -1 ],
    3  [ 0,     -1,     *,      * ]
    ]

        queue =  [ [1, 1], [2, 2], [1, 0] ]
-------- End of processing --------

6. shifts current queue i.e processing  [1, 1], i.e 1, now queue = [ [2, 2], [1, 0] ]
    [    0       1      2       3    
    0  [ *,     -1,     0,      1 ],
    1  [ 2,     (2),    1      -1 ],
    2  [ 1,     -1,     2,     -1 ],
    3  [ 0,     -1,     *,      * ]
    ]

         distance = 2 as matrix[1][1] = 2, increment to 3
    a. Going up to => wall
    b. Going right => 1, since current distance 3 > 1 , continue
    c. on left => 2, since current disatnce 3 > 2 continue
    d. on down => wall


    [    0       1      2       3    
    0  [ *,     -1,     0,      1 ],
    1  [ 2,      2,     1,     -1 ],
    2  [ 1,     -1,     2,     -1 ],
    3  [ 0,     -1,     *,      * ]
    ]

        queue =  [[2, 2], [1, 0] ]
-------- End of processing --------


7. shifts current queue i.e processing [2, 2], i.e 2, now queue = [[1, 0] ]
    [    0       1      2       3    
    0  [ *,     -1,     0,      1 ],
    1  [ 2,     (2),    1      -1 ],
    2  [ 1,     -1,    (2),    -1 ],
    3  [ 0,     -1,     *,      * ]
    ]

         distance = 2 as matrix[2][2] = 2, increment to 3
    a. Going up to => 1, since currentDistance 3 > 1, continue
    b. Going right => 1,  wall
    c. on left => 2, wall
    d. on down => *, 3 < *
       i. replace it's distance by 3
       ii. push that coordinate to queue for processing.i.e [3, 2], queue = [[1, 0],[3, 2] ]


    [    0       1      2       3    
    0  [ *,     -1,     0,      1 ],
    1  [ 2,     (2),    1      -1 ],
    2  [ 1,     -1,     2,     -1 ],
    3  [ 0,     -1,     3,      * ]
    ]


8. shifts current queue i.e processing [1, 0], i.e 2, now queue =queue = [,[3, 2] ]

    [    0       1      2       3    
    0  [ *,     -1,     0,      1 ],
    1  [ (2),    2,     1      -1 ],
    2  [ 1,     -1,     2,    -1 ],
    3  [ 0,     -1,     3,      * ]
    ]

         distance = 2 as matrix[1][0] = 2, increment to 3
    a. Going up to => *, since currentDistance 3 < *, 
      i. replace it's distance by 3
      ii. push that coordinate to queue for processing.i.e [0, 0], queue = [[3, 2], [0, 0] ]
    b. Going right => 2, current distance 3 > 2, continue
    c. on left => 2, wall
    d. on down => 1, current distance 3 > 1, continue
     

    [    0       1      2       3    
    0  [ 3,     -1,     0,      1 ],
    1  [ (2),    2,     1      -1 ],
    2  [ 1,     -1,     2,    -1 ],
    3  [ 0,     -1,     3,      * ]
    ]

        queue =  [[3, 2], [0, 0] ]
-------- End of processing --------


9. shifts current queue i.e processing [3, 2], i.e 3, now queue =queue = [[0, 0] ]

    [    0       1      2       3    
    0  [ 3,     -1,     0,     1 ],
    1  [ 2,      2,     1     -1 ],
    2  [ 1,     -1,     2,    -1 ],
    3  [ 0,     -1,    (3),    * ]
    ]

         distance = 3 as matrix[3][2] = 3, increment to 4
    a. Going up to => 2,  since current distance 3 > 2, continue
    b. Going right => *,
       i. replace it's distance by 4
      ii. push that coordinate to queue for processing.i.e [3, 3], queue = [ [0, 0], [3, 3] ]
    c. on left => 2, wall
    d. on down =>out of bound
     

   
    [    0       1      2       3    
    0  [ 3,     -1,     0,     1 ],
    1  [ 2,      2,     1     -1 ],
    2  [ 1,     -1,     2,    -1 ],
    3  [ 0,     -1,     3,     4 ]
    ]

        queue =  [ [0, 0], [3, 3] ]
-------- End of processing --------



10. shifts current queue i.e processing [0, 0], i.e 3, now queue =queue = [[3, 3] ]

    [    0       1      2       3    
    0  [ 3,     -1,     0,     1 ],
    1  [ 2,      2,     1     -1 ],
    2  [ 1,     -1,     2,    -1 ],
    3  [ 0,     -1,    (3),    4 ]
    ]

         distance = 3 as matrix[0][0] = 3, increment to 4
    a. Going up to => out of bound
    b. Going right => wall,
    c. on left =>  out of bound
    d. on down => 2 , since curernt distance 4 > 2, continue
     

   
    [    0       1      2       3    
    0  [ 3,     -1,     0,     1 ],
    1  [ 2,      2,     1     -1 ],
    2  [ 1,     -1,     2,    -1 ],
    3  [ 0,     -1,    (3),    4 ]
    ]

        queue =  [[3, 3] ]


11. shifts current queue i.e processing [3, 3], i.e 4, now queue =queue = []

    [    0       1      2       3    
    0  [ 3,     -1,     0,     1 ],
    1  [ 2,      2,     1     -1 ],
    2  [ 1,     -1,     2,    -1 ],
    3  [ 0,     -1,    (3),   (4) ]
    ]

         distance = 4 as matrix[3][3] = 4, increment to 5
    a. Going up to => wall
    b. Going right => our of bound,
    c. on left =>  2, since current distance 5 > 2, continue
    d. on down => out of bound
    
     

   

    [    0       1      2       3    
    0  [ 3,     -1,     0,     1 ],
    1  [ 2,      2,     1     -1 ],
    2  [ 1,     -1,     2,    -1 ],
    3  [ 0,     -1,    (3),    4 ]
    ]


        queue =  []
-------- End of processing --------
*/



function bfsSearch( matrix, queue){
    // starting form gate
    let distance = 0
    while(queue.length > 0){

        //takes first encountered gate
        let [row, col] = queue.shift()
        /*
         since matrix[row][col] is 0 for the gate 
         1 for nearby gate's neihbour
         Inf for unexplored position 
         
         we take that value to compare
        */
         distance = matrix[row][col]

         // if distance is 0, increaes it to 1
         // if distance of currentElement From gate is 1 increase to 2
         // so on and so forth
        distance++


        // now let's expore nearset vicinity of the elemnent that came out of queue
        for(let dir = 0; dir < direction.length; dir++){
            let currDir = direction[dir],
            newRow = row + currDir[0],
            newCol = col + currDir[1]

            // make sure coordinates are in bound and distace we calculated is less than what it already has
            if(newRow < 0 || newRow >= matrix.length || newCol < 0 || newCol >=matrix[0].length || distance > matrix[newRow][newCol]){
                continue
            }
            // if the current distance we have is less than the value present in the position we use that currentDistance and put that corrdinates for processing.
            if (matrix[newRow][newCol] > distance) {
                matrix[newRow][newCol] = distance;
                queue.push([newRow, newCol])
            }
        }
    }
}
function findNearestGateBFS(matrix){
    let queue = []

    //first find all gates i.e 0
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[0].length; col++){
            if(matrix[row][col] === 0) {
                queue.push([row, col])
            }
        }
    }
    // once i have all gates, start traversing bfs around that gate
    // bfs2(matrix, queue)
    bfsSearch(matrix, queue)
    // now since we know all the position of gates let's traverse around from gate
  
  return matrix
}

const testCase = [
    [ 2147483647, -1, 0, 2147483647 ],
    [ 2147483647, 2147483647, 2147483647, -1 ],
    [ 2147483647, -1, 2147483647, -1 ],
    [ 0, -1, 2147483647, 2147483647 ]
  ]

const INF = 2147483647;

const testMatrix = [
  [INF, -1, 0, INF],
  [INF, INF, INF, 0],
  [INF, -1, INF, -1],
  [0, -1, INF, INF]
];
//answer
[ 
    [ 3, -1, 0, 1 ],
    [ 2, 2, 1, 0 ],
    [ 1, -1, 2, -1 ],
    [ 0, -1, 3, 4 ]
 ]


// console.log(wallsAndGates(testMatrix))

function findNearestGateRefactored (matrix){
    let queue = []

    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[0].length; col++){
            if(matrix[row][col] === 0){
                queue.push([row, col])
            }
        }
    }
    refactoredBFS(matrix, queue)
    return matrix
}

function refactoredBFS(matrix, queue){
    let distance = 0

    while(queue.length > 0){
        let [row, col] = queue.shift()
        distance = matrix[row][col]
        distance++
    
        for(let dir = 0; dir < direction.length; dir++){
            let currDir = direction[dir],
            newRow = row + currDir[0],
            newCol = col + currDir[1]

            // if out of bound or currt distance > exiting than contine do nothing
            if(newRow < 0 || newRow >= matrix.length || newCol < 0 || newCol >= matrix[0].length || distance > matrix[newRow][newCol]) continue

            if(distance < matrix[newRow][newCol]){
                matrix[newRow][newCol] = distance
                queue.push([newRow, newCol])
            }
        }
    }
}

console.log(findNearestGateRefactored(testMatrix))
