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

// ******** REFACTORED *********
const direction = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1], //left
]
function findNearestGate(matrix){
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[0].length; col++){
            if(matrix[row][col] === 0) {
               dfs(matrix, row, col, 0)
            }
        }
    }

    // now since we know all the position of gates let's traverse around from gate
  
  return matrix
}

function dfs(matrix, row, col, currentStep) {
    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || currentStep > matrix[row][col]) return
    matrix[row][col] = currentStep
    for (let i = 0; i < direction.length; i++) {
        const dir = direction[i]
        dfs(matrix, row + dir[0], col + dir[1], currentStep + 1)
    }
}
const testCase = [
    [ 2147483647, -1, 0, 2147483647 ],
    [ 2147483647, 2147483647, 2147483647, -1 ],
    [ 2147483647, -1, 2147483647, -1 ],
    [ 0, -1, 2147483647, 2147483647 ]
  ]

console.log(refactorfindNearestGate(testCase))

