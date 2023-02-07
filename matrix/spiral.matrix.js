
/*

Logic:
    1. Implement dfs with right => down => left => top order
    2. Problem with plain dfs with R => D => L => T is:



| 1  │ 2  │ 3  │ 4  │
| 5  │ 6  │ 7  │ 8  │
| 9 *│ 10 │ 11 │ 12 │
| 13 │ 14 │ 15 │ 16 │

[
   1,  2,  3,  4, 8, 12,
  16, 15, 14, 13, 9, 10,
  11,  7,  6,  5
]

From 9 it goest to 10 instead going up.


So we need to adjust our logic to go to the top if we are going to the top
i.e from 13 => 9  and from 9 => 5


so this mean we need to add a speical case when travering up
if we are traversing up, keep going up

dfs(matrix, seen , row, col , result, goUp = false){


if(goUp){
            dfs(matrix, seen, row - 1, col, result, true) 

}
  for (let dir of directions) {
        let [rowdir, coldir] = dir
    ------> adjusted if we are going up <-------
        if (rowdir === -1 && coldir === 0) {
            dfs(matrix, seen, row + rowdir, col + coldir, result, true) 
        }
        dfs(matrix, seen, row + rowdir, col + coldir, result)
    }
}

*/


function inbound(value, max) { return -1 < value && value < max }
const directions = [
    [0, 1], //right
    [1, 0],  //down
    [0, -1], //left
    [-1, 0]  //top
]
function dfs(matrix, seen, row, col, result, goup = false) {
    if (!inbound(row, matrix.length) || !inbound(col, matrix[0].length) || seen[row][col]) {
        return
    }
    seen[row][col] = true
    result.push(matrix[row][col])
    if(goup){
        dfs(matrix, seen, row - 1, col, result, true)
    }
    for (let dir of directions) {
        let [rowdir, coldir] = dir
        if (rowdir === -1 && coldir === 0) {
            dfs(matrix, seen, row + rowdir, col + coldir, result, true)
        }
        dfs(matrix, seen, row + rowdir, col + coldir, result)
    }
}

function main(matrix) {
    const
        seen = new Array(matrix.length).fill(0).map(o => new Array(matrix[0].length).fill(false)),
        result = []
    dfs(matrix, seen, 0, 0, result)
    return result
}
/*
console.table([[1,2,3],[4,5,6],[7,8,9]])
console.log(main([[1,2,3],[4,5,6],[7,8,9]]))

console.table([[1,2,3,4],[5,6,7,8],[9,10,11,12]])
console.log(main([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))

*/

console.table([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])
console.log(main([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]))



/*

from above we have result and seen matrix the same as given input matrix

space complexity => O(N)
Time complexity => o(N)

 ********************* Another way to do it ***********************
    using less memory




| 1  │ 2  │ 3  │ 4  │
| 5  │ 6  │ 7  │ 8  │
| 9  │ 10 │ 11 │ 12 │
| 13 │ 14 │ 15 │ 16 │

we want to use four pointer technique to keep track of
top, bottom, left and right 



top = 0, bottom => row of matrix i.e matrix.length, left = 0, right => col of matrix i.e matrix[0].length


 as we travese we update our pointer to point us in new untraversed matrix in the direction we want


    while(left < right && top < bottom){
        //collect value in top
        for(i = left; i < right; i++){
            result.push(matrix[top][i])
        }
        top +=1

        // collect value in right hand side
        for(i = top; i < bottom; i++){
            result.push(matrix[i][right -1])
        }
        right -=1

        if(!(left < right && top < bottom))break


        // now collect all the values in bottom to the left

        for(let i = right -1; i >= left; i--){
            result.push(matrix[bottom -1][i])
        }
        bottom -=1

        for(let i = bottom -1; i >= top; i--){
            result.push(matrix[i][left])
        }
        left +=1
    }
    return result
 */




function spiralOrder(matrix){

    let
     top    = 0,
     left   = 0,
     bottom = matrix.length,
     right  = matrix[0].length,
     result = []


     while(left < right && top < bottom){
        // collect values in top row
        for(let i = left; i < right; i++){
            result.push(matrix[top][i])
        }

        top +=1
        // now collect  all the right side of current matrix
        for(let i = top; i < bottom; i++ ){
            result.push(matrix[i][right - 1])
        }
        right -=1

        if(!(left < right && top < bottom))break

        //collect the bottom values
        for(let i = right -1 ; i >= left; i-- ){
            result.push(matrix[bottom -1][i])
        }

        bottom -=1
        // now collect the left side of the matrix
        for(let i = bottom -1; i >= top; i-- ){
            result.push(matrix[i][left])
        }
        left +=1
     }
     return result
}

console.table([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]))