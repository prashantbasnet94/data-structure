/*


1   2   3   
D   E   4
C   F   5
B   A   6




  two searches we can do is BFS or DFS

BFS: 

   #  
#  #  #
   #

     #
   #  #
#  #  #  #
#  #  #  #
   #  #
    #


DFS:
RIGHT
DOWN
LEFT 
UP

    A   B   C   D   
    L           E
    K           F
    J   I   H   G
                

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

const directions = [
    //right
    [0, 1],
    //down
    [1, 0],
    //left
    [0, -1],
    //up
    [-1, 0]
]
function inRange(min, value, max) {
    return min < value && value < max
}
function dfs(row, col, board, seen, result, tweakDFS) {

    if (!inRange(-1, row, board.length) || !inRange(-1, col, board[0].length) || seen[row][col]) {
        return
    }
    seen[row][col] = true
    result.push(board[row][col])

    if(tweakDFS){
        dfs(row - 1, col, board, seen, result, tweakDFS)
    }
   
    
    for (let [rowDir, colDir] of directions) {
        // break the logic once you hit the top
        if(rowDir === -1 && colDir === 0 ){
            dfs(row + rowDir, col + colDir, board, seen, result, true)
        }
        dfs(row + rowDir, col + colDir, board, seen, result)
    }
    return result
}

function calcDFS() {
    const
        //   matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]],
        matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]],
        seen = new Array(matrix.length).fill(0).map(o => new Array(matrix[0].length).fill(false)),
        result = []
    dfs(0, 0, matrix, seen, result)
    console.table(matrix)
    return result
}

console.log(calcDFS())