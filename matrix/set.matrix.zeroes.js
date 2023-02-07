/*


│ 1 │ 1 │ 1 │
│ 1 │ 0 │ 1 │
│ 1 │ 1 │ 1 │


Logic:

1. do a sequential traversal 
    a. if you find a 0 do a dfs in it's row and col and convert it to 0

*/

// console.table([[1,1,1],[1,0,1],[1,1,1]])
setZeros([[1, 1, 1], [1, 0, 1], [1, 1, 1]])

const directions = [
    [0, 1], //right
    [1, 0], //down
    [0, -1], //left
    [-1, 0], //top
]

function setZeros2(matrix) {
    const
        seen = new Array(matrix.length).fill(0).map(o => new Array(matrix[0].length))


    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                dfs(matrix, i, j, seen)
            }
        }
    }

}

function inbound(value, max) {
    return -1 < value && value < max
}

function dfs(matrix, row, col, seen) {
    if (!inbound(row, matrix.length) || !inbound(col, matrix[0].length) || seen[row][col]) {
        return
    }
    matrix[row][col] = 0
    seen[row][col] = true
    for (let dir of [
        [0, 1], //right
    ]) {
        let [newdir, newcol] = dir
        dfs(matrix, row + newdir, col + newcol, seen)
    }


    console.table(matrix)


    for (let dir of [
        [0, -1], //left
    ]) {
        let [newdir, newcol] = dir

        dfs(matrix, row + newdir, col + newcol, seen)
    }


    for (let dir of [
        [-1, 0], //top
    ]) {
        let [newdir, newcol] = dir

        dfs(matrix, row + newdir, col + newcol, seen)
    }

    for (let dir of [
        [1, 0], //down
    ]) {
        let [newdir, newcol] = dir

        dfs(matrix, row + newdir, col + newcol, seen)
    }
}

function setZeros(matrix) {
    let
        firstRow = false
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                matrix[0][col] = 0
                if (row === 0) {
                    firstRow = true
                }
                matrix[row][0] = 0
            }
        }
    }
    // actually overwriting data

    for (let row = 1; row < matrix.length; row++) {
        for (let col = 1; col < matrix[0].length; col++) {
            if (matrix[0][col] === 0 || matrix[row][0] === 0) {
                matrix[row][col] = 0
            }
        }
    }
     // first [0][0] is 0, then set all the 1st cols to 0, as we treat that as col
     if (matrix[0][0] === 0) {
        // we can set every value in the first row  to 0
        for (let r = 0; r < matrix.length; r++) {
            // zero out first col of matrix
            matrix[r][0] = 0
        }
    }

    // if firstrow is 0, then set all the col in first row to be 0
    if (firstRow) {
        for (let c = 0; c < matrix[0].length; c++) {
            matrix[0][c] = 0
        }
    }
    return matrix
}

function test(matrix) {
    /*


        │ 1 │ 1 │ 1 │
        │ 1 │ 0 │ 1 │
        │ 1 │ 1 │ 1 │

        Logic:
        1. Track any cols to be made 0, by first col
        2. Track any rows to be made 0, by using first row
        3. Now first row and first col overlaps
        4. Let's declare a new var to track first row

        5. Scan and see where 0s are and if we find one, we set it's first col and fist row to 0
        6. On the second iteration, if any of the first col or first row is 0, we then set it\s value to 0
        
    */

    let firstRow = false, firstCol = false
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            if (matrix[r][c] === 0) {
                if (r === 0) {
                    firstRow = true
                }
                if (c === 0) {
                    firstCol = true
                }

                matrix[r][0] = 0
                matrix[0][c] = 0
            }
        }
    }


    // on the second iteration
    // go over first row and go over 

    for (let r = 1; r < matrix.length; r++) {
        for (let c = 1; c < matrix[0].length; c++) {
            if (matrix[r][0] === 0 || matrix[0][c] === 0) {
                matrix[r][c] = 0
            }
        }


        // two cases
        // i. first row
        // setting first row to 0 if needed

        // ii. rows and cols that are 0, turns it's respective rows and cols to 0
        // setting first col to 0 if needed
        if (firstCol) {
            for (let r = 0; r < matrix.length; r++) {
                matrix[r][0] = 0
            }
        }

        if (firstRow) {
            for (let c = 0; c < matrix[0].length; c++) {
                matrix[0][c] = 0
            }
        }
    }
    return matrix
}

console.table(setZeros([[1, 1, 1], [1, 0, 1], [1, 1, 1]]))
console.table(setZeros([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]))
