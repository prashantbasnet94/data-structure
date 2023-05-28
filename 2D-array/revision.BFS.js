const bfs = matrix => {

    // you need queue
    // you need seen 
    // you need result

    const 
        queue = [],
        result = [],
        seen = new Array(matrix.length).fill(0).map(o => new Array(matrix[0].length).fill(false)),
        inBound = (value, max) => -1 < value && value < max,
        directions = [
            [-1, 0], //up
            [0, 1], // right
            [1, 0], //down
            [0, -1], //left
        ]


        queue.push([0,0])

        while(queue.length > 0){
            const [row, col] = queue.shift()
            if(!inBound(row, matrix.length ) || !inBound(col, matrix[0].length) || seen[row][col]){
                continue
            }

            seen[row][col] = true
            result.push(matrix[row][col])
            // travel in all four direction and push it's neighbour into the queue
            for(let dir of directions){
                 queue.push([row + dir[0], col + dir[1]])
            }
        }
        return result
}

console.log(bfs( [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
]))
