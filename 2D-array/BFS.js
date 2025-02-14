/*
[        0  1  2  3  4 
   0:  [ 1, 2, 3, 4, 5 ]
   1:  [ 6, 7, 8, 9, 10]
   2:  [11, 12, 13, 14, 15]
   3:  [16, 17, 18, 19, 20]
]

How to traverse in BFS ?

Pick some center point i.e (13) or you pick whatever starting point,
the main idea is that you are expanding out in the one ring like patten in one immediate coordinate worth of distance

Here we are exploring with BFS in a similar way with binary search tree as level by level, except here the levels are the immediate vicinity in an outrward expanding ring
from whatever our stating element is

[        0  1  2  3  4 
   0:  [ 1, 2, 3, 4, 5 ]
   1:  [ 6, 7, 8, 9, 10]
   2:  [11, 12, 13, 14, 15]
   3:  [16, 17, 18, 19, 20]
]


Here let start @ 13 i.e {row: 2, col: 2}
    Rules: Travel Up, right, down and left in an order to create ring like strucutre

    Here TraversedArray = [13], queue = [13]
    
Take out 13 from the queue and start processing it.

1. Travel up i.e (13) => 8 , TraversedArray = [13, 8], since we haven't seen it add it to the queue as well i.e queue =[8]
2. Travel right i.e (13) => 14 , TraversedArray = [13, 8, 14],  queue =[8, 14]
3. Travel down i.e (13) => 18 , TraversedArray = [13, 8, 14, 18], queue =[8, 14, 18,]
4. Travel left i.e (13) => 12 , TraversedArray = [13, 8, 14, 18, 12], queue =[8, 14, 18, 12]
------------ One ring around (13) is complete ---------------------

Here we have finished with (13), we want to take the next value of our queue  i.e (8) and process it in order up right, down left
 TraversedArray = [13, 8, 14, 18, 12], queue =[ 14, 18, 12]

5. Let shift our pointer center up, i,e (13) => 8
6. Again, making the ring pattern, go up (8) => (3),  TraversedArray = [13, 8, 14, 18, 12, 3], queue =[ 14, 18, 12, 3]
7. Go right (8) => (9),  TraversedArray = [13, 8, 14, 18, 12, 3, 9], queue =[ 14, 18, 12, 3, 9]
8. Go Down (8) => (13),  already seen so skip it
9. Go Left (8) => (7), [13, 8, 14, 18, 12, 3, 9, 7], queue =[ 14, 18, 12, 3, 9, 7]
------------ One ring around (8) is complete ---------------------

Here we have finished with (8, we want to take the next value of our queue  i.e (14) and process it in order up right, down left
     TraversedArray = [13, 8, 14, 18, 12, 3, 9, 7], queue =[18, 12, 3, 9, 7]

     our next value form queue is (14)


10. Again, making the ring pattern, go up (14) => (9),  TraversedArray = [13, 8, 14, 18, 12, 3, 9, 7], no chnage as we already seen 9 , queue =[ 18, 12, 3, 9, 7]
11. Go right (14) => (15),  TraversedArray = [13, 8, 14, 18, 12, 3, 9, 7 , 15], queue =[ 18, 12, 3, 9, 7, 15]
12. Go down (14) => (19),  TraversedArray = [13, 8, 14, 18, 12, 3, 9, 7 , 15, 19],  queue =[ 18, 12, 3, 9, 7, 15, 19]
13. Go left (14) => (13),  13 is already travelled so skip
------------ One ring around (14) is complete ---------------------

Once again we are done with (14), we want to take the next value of our queue i.e (18) and process it in order up right, down left
     TraversedArray = [13, 8, 14, 18, 12, 3, 9, 7], queue =[ 12, 3, 9, 7, 15, 19]

14. Again, making the ring pattern, go up (18) => (13),  already travelled
15.  Go right (18) => (19),  already travelled
16.  Go down (18) => wall,  hit's the wall nothing to traverse
17.  Go left (18) => (17),  TraversedArray = [13, 8, 14, 18, 12, 3, 9, 7 , 15, 19, 17],  queue =[ 12, 3, 9, 7, 15, 19, 17]



[        0  1  2  3  4 
   0:  [ 1, 2, 3, 4, 5 ]
   1:  [ 6, 7, 8, 9, 10]
   2:  [11, 12, 13, 14, 15]
   3:  [16, 17, 18, 19, 20]
]

------------ One ring around (14) is complete ---------------------
Similarly, we take next value from our queue = 12, our new queue = [3, 9, 7, 15, 19, 17]

18. Again, making the ring patten, go up (12) => (7), already travelled
19. going right (12) => (14), already travelled
20 going down (12) => (17), already travelled
21 going left (12) => (11), TraversedArray = [13, 8, 14, 18, 12, 3, 9, 7 , 15, 19, 17, 11], queue = [3, 9, 7, 15, 19, 17, 11]


Next we take another value from our queue i.e 3, our new queue = [9, 7, 15, 19, 17, 11]

22. go up ,  (3) => out of bound, 
23. go right (3) => (4) TraversedArray = [13, 8, 14, 18, 12, 3, 9, 7 , 15, 19, 17, 11, 4], queue = [9, 7, 15, 19, 17, 11, 4]
24. go down , already travelled
25. go left (3) => (2) TraversedArray = [13, 8, 14, 18, 12, 3, 9, 7 , 15, 19, 17, 11, 4, 2], queue = [9, 7, 15, 19, 17, 11, 4, 2]

Next we take another value from our queue i.e 9, our new queue = [ 7, 15, 19, 17, 11, 4, 2]
26. go up ,  (9) => (4) already travelled 
27. go right (9) => (10) TraversedArray = [13, 8, 14, 18, 12, 3, 9, 7 , 15, 19, 17, 11, 4, 2, 10], queue = [7, 15, 19, 17, 11, 4, 2, 10]
28. go down , already travelled
29. go left (9) => (8)  already travelled

Now moving on to the next queue, i.e (7), queue = [15, 19, 17, 11, 4, 2, 10, 6]
30. go up (7) => (2), already travelled
31. go right (7) => (8) already travelled
32. go donw (7) => (12) already travelled
33. go left (7) => (6),TraversedArray = [13, 8, 14, 18, 12, 3, 9, 7 , 15, 19, 17, 11, 4, 2, 10, 6], queue = [ 15, 19, 17, 11, 4, 2, 10, 6]



[        0  1  2  3  4 
   0:  [ 1, 2, 3, 4, 5 ]
   1:  [ 6, 7, 8, 9, 10]
   2:  [11, 12, 13, 14, 15]
   3:  [16, 17, 18, 19, 20]
]


Now moving on to the next queue i.e (15)
34. go up (15) => (10), already travelled
35. go right (15) => out of bound already travelled
36. go donw (15) => (20) TraversedArray = [13, 8, 14, 18, 12, 3, 9, 7 , 15, 19, 17, 11, 4, 2, 10, 6, 20], queue = [19, 17, 11, 4, 2, 10, 6, 20] 
37. go left (15) => (14), already travelled


Now moving on to the next queue i.e (19)
all direction are already travelled from (19), so moving on to next value in queue i.e (17),  queue = [11, 4, 2, 10, 6, 20] 

Now moving on to the next queue i.e (17)
38. go up (17) => (12), already travelled
39. go right (17) => (18), already travelled
40. go donw (17) => out of bound
41. go left (17) => (16) TraversedArray = [13, 8, 14, 18, 12, 3, 9, 7 , 15, 19, 17, 11, 4, 2, 10, 6, 20, 16], queue = [11, 4, 2, 10, 6, 20, 16] 


Now moving on to the next queeu i.e (11), queue = [ 4, 2, 10, 6, 20] 
all direction are already travelled from (11), so moving on to next value in queue i.e (4),  queue = [ 2, 10, 6, 20, 16] 

[        0  1  2  3  4 
   0:  [ 1, 2, 3, 4, 5 ]
   1:  [ 6, 7, 8, 9, 10]
   2:  [11, 12, 13, 14, 15]
   3:  [16, 17, 18, 19, 20]
]

42. go up (4) => out of bound
43. go right (4) => (5),TraversedArray = [13, 8, 14, 18, 12, 3, 9, 7 , 15, 19, 17, 11, 4, 2, 10, 6, 20, 16,5], queue = [ 2, 10, 6, 20, 16,5] 
44. go donw (4) => (9), already travelled
45. go left (4) => (3), already travelled



Now moving on to the next queeu i.e (2), queue = [  10, 6, 20, 16, 5] 

46. go up (2) => out of bound
47. go right (2) => (3), already travelled
48. go donw (2) => (7), already travelled
49. go left (2) => (1), TraversedArray = [13, 8, 14, 18, 12, 3, 9, 7 , 15, 19, 17, 11, 4, 2, 10, 6, 20, 16, 5, 1], queue = [ 2, 10, 6, 20, 16, 5, 1] 


Here' we will end up cycling through the rest of our queue.
We always discover in diamond shape

[
    [   *   ]
    [*     * ]
    [   *  ]
]

[
    [      *       ]
    [   *  *  *    ]
    [ *  *   *  *  ]
    [   *  *  *    ]
    [      *       ]

]


[        0  1  2  3  4 
   0:  [ 1, 2, 3, 4, 5 ]
   1:  [ 6, 7, 8, 9, 10]
   2:  [11, 12, 13, 14, 15]
   3:  [16, 17, 18, 19, 20]
]

*/
const direction = [
    [-1, 0], // up
    [0, 1],  // right
    [1, 0], // down
    [0, -1] // left
],
    data = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
    ],
    inBound = (value, min, max) => value > min && value < max
const traversalBFS = (matrix) => {
    let
        seen = new Array(matrix.length).fill(0).map(o => new Array(matrix[0].length).fill(false)),
        queue = [], result = []
    queue.push([0, 0])

    while (queue.length > 0) {
        let [row, col] = queue && queue.shift(),
            tempRow = row, tempCol = col
        if (!seen[row][col]) {
            result.push(matrix[row][col])
        }
        for (let i = 0; i < direction.length; i++) {
            let currDir = direction[i]
            row += currDir[0]
            col += currDir[1]
            if (inBound(row, -1, matrix.length) && inBound(col, -1, matrix[0].length) && !seen[row][col]) {
                queue.push([row, col])
            }
            row = tempRow
            col = tempCol
        }
        seen[row][col] = true
    }
    return result

},
    learnedBFS = (matrix) => {
        let
            seen = new Array(matrix.length).fill(0).map(o => new Array(matrix[0].length).fill(false)),
            queue = [], result = []
        queue.push([0, 0])

        while (queue.length > 0) {
            const
                currPosition = queue.shift(),
                [row, col] = currPosition

            if (!inBound(row, -1, matrix.length) || !inBound(col, -1, matrix[0].length) || seen[row][col]) {
                continue
            }
            seen[row][col] = true
            result.push(matrix[row][col])
            // done processing
            // now just push up right down left immidate vicinities coordinates into queue

            for (let i = 0; i < direction.length; i++) {
                const currDir = direction[i]
                queue.push([row + currDir[0], col + currDir[1]])
            }
        }

        return result

    },
    refactoredBFS = (matrix) => {
        let
            seen = new Array(matrix.length).fill(0).map(o => new Array(matrix[0].length).fill(false)),
            queue = [], result = []
        queue.push([0, 0])

        while (queue.length > 0) {
            let [row, col] = queue.shift()
            if (!inBound(row, -1, matrix.length) || !inBound(col, -1, matrix[0].length) || seen[row][col]) {
                continue
            }
            seen[row][col] = true
            result.push(matrix[row][col])

            for (let i = 0; i < direction.length; i++) {
                let currDir = direction[i]
                queue.push([row + currDir[0], col + currDir[1]])
            }
        }
        return result

    }
console.log(traversalBFS(data))
console.log(learnedBFS(data))
console.log(refactoredBFS(data))

function learningBFS(matrix) {
    const
        queue = [], result = [],
        seen = new Array(matrix.length).fill(0).map(o => new Array(matrix[0].length).fill(false))
    queue.push([0, 0])
    while (queue.length > 0) {
        // if value is out of bound or seen is true we continue i.e skip

        let [row, col] = queue.shift()
        if (!inBound(row, -1, matrix.length) || !inBound(col, -1, matrix[0].length) || seen[row][col]) {
            continue
        }

        seen[row][col] = true
        result.push(matrix[row][col])
        for (let dir of direction) {
            queue.push([row + dir[0], col + dir[1]])
        }
    }
    return result
}

// console.log('learningBFS', learningBFS(data))

function bfs(row, col, board, word, at) {
    const
        queue = [],
        directions = [
            [-1, 0], //top
            [0, 1], //right
            [1, 0], //down
            [0, -1], //left
        ],
        inbound = (value, max) => -1 < value && value < max,
        result = [],
        seen = new Array(board.length).fill(0).map(o => new Array(board[0].length).fill(false))

    queue.push([row, col])
    while (queue.length > 0) {

        let [row, col] = queue.shift()
        if (!inbound(row, board.length) || !inbound(col, board[0].length) || seen[row][col]) {
            continue
        }
        seen[row][col] = true
        result.push(board[row][col])
        for (let dir of directions) {
            let
                [newrow, newcol] = dir,
                rowdir = row + newrow,
                coldir = col + newcol

            console.log( board[newrow])
            if (at < word.length && board[newrow] &&  board[newrow][newcol] === word.charAt(at + 1)) {
                queue.push([rowdir, coldir])
            }
        }
        at += 1
    }
    return result
}




const directions = [
    [-1, 0] //top
    [0, 1], //right
    [1, 0], //down 
    [0, -1], //left
]
function BFSrevise(array){
    let result = []
    let queue = []
    let seen = new Array(array.length).fill(0).map( o  => new Array(array[0].length).fill(false))
    const inbound = (x, max) = -1 < x && x < max

    
    queue.push([0, 0])

    while(queue.length > 0 ){
        let [row, col] = queue.shift()
        if(!inbound(row, array.length) || !inbound(col, array[0].length) || seen[row][col]){
            continue
        }
        seen[row][col] = true
        result.push(array[row][col])
        for(let [newRow, newCol] of directions){
            let newRowDir = row + newRow
            let newColDir = col + newCol
            if(inbound(newRowDir, array.length) && inbound(newColDir, array[0].length)){
                queue.push([newRowDir, newColDir])
            }
        }
    }
    return result
}