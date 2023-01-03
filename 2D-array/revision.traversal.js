
const directions = [
    [0, 1],// right
    [1, 0], // down
    [0, -1],// left
    [-1, 0]// up
]

function spiralCopy(inputMatrix) {
    // your code goes here

    const seen = new Array(inputMatrix.length)
        .fill(false)
        .map(o => new Array(inputMatrix[0].length).fill(false)),
        result = []



    dfs(inputMatrix, 0, 0, seen, result)
    return result
}



function inBound(index, leftBoundry, rightBoundry) {
    return index < rightBoundry && index > leftBoundry
}
function dfs(matrix, row, col, seen, output) {
    if (!inBound(row, -1, matrix.length) || !inBound(col, -1, matrix[0].length || seen[row][col])) {
        return
    }

    output.push(matrix[row][col])
    seen[row][col] = true
    for (let dir of directions) {
        dfs(matrix, row + dir[1], col + dir[1], seen, output)
    }
}


const test1 = [[1, 2, 3, 4, 5],
[6, 7, 8, 9, 10],
[11, 12, 13, 14, 15],
[16, 17, 18, 19, 20]]


//[1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]
console.log(spiralCopy(test1))


/*
 
 
                         [[1,    2,   3,  4,   5], --- length of this array is 5
                         [6,    7,   8,  9,   10],
                         [11,  12,  13,  14,  15],
                         [16,  17,  18,  19,  20] ]
 
 
 
      0   1   2   3   4   
   0  1@  2   3   4   5*       
   
   1                  6
   
   2                  7
   
   3  12  11  10   9   8#
      @
   
   
   
  [0, 0]  -> [ 0,  1] -> [0, 2] -> [0, 3] -> [0, 4]
  
  if no right then go bottom
  
  
  
 5 @ [0, 4] we don't have anything to go right so go down
 
 [0,4] -> [1, 4] -> [2, 4] -> [3, 4]
  
  
  once it reaches 8, we cannot go right or down, so then we go left
  
  
  we go left
 8# @ [3, 4] -> [3, 3] -> [3, 2] -> [3,1] -> [3, 0]
 
 // cannot go right => already traversed
 // cannot go down => out of bound
 // cannot go left => also out of bound
 
 
 // now we go up
 [3, 0] -> [2, 0] -> [1, 0]
 
 
 // i need to go right => bottom => right => up
 
 
 
 
 
 
*/