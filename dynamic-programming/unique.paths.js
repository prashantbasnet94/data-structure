/*

    Logic:
        1. right and all the way down
        2. go down and all the way right
        3. one down and one right and further down





        0   1   2   3   4   5   6   
    0   *   R   R   R   R   R   D
    1   D                       D
    2   D   R   R   R   R   R   #


        0   1   2   3   4   5   6   
    0   *   R   
    1   D                 
    2   

    @ any point i can either take right or down
    @*, total ways we can get to the destination # is R + D i.e ways [Right + Down ]


    constructing the ways from botom up approach:


        0   1   2   3   4   5   6   
    0   *                       1
    1                           1             
    2   1   1   1   1   1   1   #

2.


        0   1   2   3   4   5   6   
    0   *                  2+1  1
    1                  1+2  2   1             
    2   1   1   1   1   1   1   #


        0   1   2   3   4   5   6   
    0   *   21 15  10   6   3   1
    1   7   6   5   4   3   2   1             
    2   1   1   1   1   1   1   #

    @ any give position total ways to get down is ways from (Down + Right)

        0   1   2   3   4   5   6   
    0   28  21 15  10   6   3   1
    1   7   6   5   4   3   2   1             
    2   1   1   1   1   1   1   #

    Thus total 28 ways
*/

const
    directions = [[0, 1], [1, 0]]

function uniquePaths(m, n) {

    
    const
     seen = new Array(m).fill(0).map(o => new Array(n).fill(false)),
     ways = new Array(m).fill(0).map(o => new Array(n).fill(1)),
     myDirs = [[0, -1], [-1, 0]]


//        1    5   
    // ways[row][col] =  ways[2][5] + ways[1][6]


    const queue = [[m - 2 , n - 2]]
    while(queue.length > 0){
        let [row, col] = queue.shift()
        console.table(ways)

        
        if(!inBound(row, m) || !inBound(col, n) || seen[row][col]){
            continue
        }

        if(inBound(row + 1 , m) && inBound(col + 1, n)){
            ways[row][col] = ways[row + 1 ][col] + ways[row][col + 1]
        }
        seen[row][col] = true
        for(let dir of myDirs){
            queue.push([row + dir[0], col + dir[1]])
        }
    }

    console.table(ways)








    // let result = 0
    // dfs(m, n, 0, 0, seen)
    // console.table(seen)

    return ways[0][0]
}
function inBound(value, max) {
    return value > -1 && value < max
}
function dfs(m, n, i, j, seen) {
    if (!inBound(i, m) || !inBound(j, n) || seen[i][j]) {
        return
    }
    seen[i][j] = true

    if (i === m - 1 && j === n - 1) {
        console.table(seen)
    }

    for (let dir of directions) {
        const [row, col] = dir
        dfs(m, n, i + row, j + col, seen)
    }
}

function bfs(m, n, i = 0 , j = 0) {
    const
        queue = [],
        seen = new Array(m).fill(0).map(o => new Array(n).fill(false))
    queue.push([i, j])

    while (queue.length > 0) {
        let [row, col] = queue.shift()
        if (!inBound(row, m) || !inBound(col, n) || seen[row][col]) {
            continue
        }

        
        if(row === m - 1 && col === n - 1){
        }

        seen[row][col] = true
        for (let dir of directions) {
            queue.push([row + dir[0], col + dir[1]])
        }
    }
    console.table(seen)
}

// console.log(uniquePaths(3, 7))
// console.log(uniquePaths(3, 2))

// bfs(3, 7, 2, 2)
// bfs(3, 7, 1, 2)

function uniquePathsRefactored(m, n){
    // bottom row
    let row = new Array(n).fill(1)

    /*

        0   1   2   3   4   5   6   
    0   *                       1
    1                       $   1             
    2   1   1   1   1   1   1   #

    $ is the position we need to start

    */
    // go in sequential order
    for(let i =0; i < m - 1; i++){
        const newRow = new Array(n).fill(1)
        // to avoid edge case avoiding out of bound

        for(let j = n -2; j >=0; j--){
            //         rightValue       downValue
            newRow[j] = newRow[j + 1] + row[j]
        }
        row = newRow
    }
    return row[0]
}

console.log(uniquePathsRefactored(3, 7))
 
console.log(uniquePaths(3, 7))