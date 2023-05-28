const
 inBound =(value, max) => -1 < value && value < max,
 direction = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
 ], result =[]
function dfs(matrix, seen, row, col){
    //base case?
    if(!inBound(row, matrix.length) || !inBound(col, matrix[0].length) || seen[row][col]){
        return
    }

    seen[row][col] = true
    result.push(matrix[row][col])
    // else travel in four direction
    for(const [newRow, newCol] of direction){
        dfs(matrix, seen, row + newRow, col + newCol)
    }

}
function callDfs(matrix){
    const seen = new Array(matrix.length).fill(0).map(o => new Array(matrix[0].length).fill(false))
    dfs(matrix, seen, 0, 0)
     return result 
}
console.log(callDfs( [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
]))