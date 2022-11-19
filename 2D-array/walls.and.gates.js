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
    distance = 1

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

function refactorfindNearestGate(matrix){
    let queue = []
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[0].length; col++){
            if(matrix[row][col] === 0) {
                queue.push([row, col])
                refactorbfsFromGate(matrix, queue)
            }
        }
    }

    // now since we know all the position of gates let's traverse around from gate
  
  return matrix
}

function refactorbfsFromGate( matrix, queue){
    let distance = 0

    while(queue.length > 0){
        let [row, col] = queue.shift()
        distance = matrix[row][col]
        distance++

        console.log('distance after ',distance)
        for(let dir = 0; dir < direction.length; dir++){
            let currDir = direction[0],
            newRow = row + currDir[0],
            newCol = col + currDir[1]

            if(newRow < 0 || newRow >= matrix.length || newCol < 0 || newCol >=matrix[0].length || distance > matrix[newRow][newCol]){
                continue
            }
            if(distance < matrix[newRow][newCol]){
                matrix[newRow][newCol] = distance
                queue.push([newRow, newCol])
            }
        }
    }
}
const testCase = [
    [ 2147483647, -1, 0, 2147483647 ],
    [ 2147483647, 2147483647, 2147483647, -1 ],
    [ 2147483647, -1, 2147483647, -1 ],
    [ 0, -1, 2147483647, 2147483647 ]
  ]

console.log(refactorfindNearestGate(testCase))

