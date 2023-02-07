const   directions = [
    [-1, 0], //top
    [0, 1], //right
    [1, 0], //down
    [0, -1], //left
],
inbound = (value, max) => -1 < value && value < max,
result = []


function exist(matrix, word) {
    const seen = new Array(matrix.length).fill(0).map(o => new Array(matrix[0].length).fill(false))

    function dfs(row, col, i){
        if(i === word.length - 1)return true
        if(!inbound(row, matrix.length) || !inbound(col, matrix[0].length) || seen[row][col]
        // if char @ current does not match
        || word[i] !== matrix[row][col]){
            return false
        }
        seen[row][col] = true
        for(let dir of directions){
            let
             newrow = row + dir[0],
             newcol = col + dir[1]
            if(dfs(newrow, newcol, i + 1) === true)return true 
        }
        seen[row][col] = false
    }

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
           if(matrix[r][c] === word.charAt(0) && dfs(r, c, 0))return true
        }
    }
    return false
}

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"))