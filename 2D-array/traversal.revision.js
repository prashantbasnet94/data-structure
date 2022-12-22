function inbound(value, min, max) {
    return value > min && value < max
}
const directions = [
    [-1, 0],//up
    [0, 1], //right
    [1, 0], //down
    [0, -1] //left
],
    data = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
    ]
function bfs(matrix) {
    // push the first [0,0] index into the queue
    //runs a while loop is queue size is greater than 0

    // takes out that pushed [0, 0] value and process it's surrounding in a ring shape order
    // up, right, down left


    let
        queue = [],
        result = [],
        seen = new Array(matrix.length).fill(0).map(o => new Array(matrix[0].length).fill(false))


    queue.push([0, 0])

    while (queue.length > 0) {
        let [row, col] = queue.shift()
        if (!inbound(row, -1, matrix.length) || !inbound(col, -1, matrix[0].length) || seen[row][col]) {
            continue
        }
        result.push(matrix[row][col])
        seen[row][col] = true
        // now travere to each direction in the nearby direction
        for (let dir of directions) {

            // in order to push this new rol and col, it should be in the bound i.e not out of range 
            queue.push([row + dir[0], col + dir[1]])
        }
    }
    return result
}





function dfs(matrix, row, col, seen, result) {
    if (!inbound(row, -1, matrix.length) || !inbound(col, -1, matrix[0].length) || seen[row][col]) {
        return
    }

    seen[row][col] = true
    result.push(matrix[row][col])

    for(let dir of directions){
        dfs(matrix, row + dir[0] , col + dir[1], seen, result)
    }
}

function myDfs(matrix){
    const
     result = [],
     seen = new Array(matrix.length).fill(0).map(o => new Array(matrix[0].length).fill(false))

    dfs(matrix, 0, 0, seen, result)
    return result
}
console.log('data ', data)

console.log(bfs(data))
console.log(myDfs(data))
