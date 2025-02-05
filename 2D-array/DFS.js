/*
     Approach to implment DFS
    1. Keep track of
        i. Result
        ii. row and column counter we have tarversed, storing value is not a good idea as we can have dups elements

        
Two main things we need to learn:

1. We need to distinguish the direction



[        0  1  2  3  4 
   0:  [ 1, 2, 3, 4, 5 ]
   1:  [ 6, 7, 8, 9, 10]
   2:  [11, 12, 13, 14, 15]
   3:  [16, 17, 18, 19, 20]
]




DFS in 2D array is very similar to DFS in binary search.
In binary search we do DFS usally from root, whereas in 2D array you can technically start from any element inside of the structre, most of the time we are going to start from the top left corner
 i.e row = 0, col = 0


 DFS in Binary tree VS 2D array
---------------------------------
 Think back to DFS in binary search tree, at any given tree node, you could explore one of two directions 
 either the left child or the right child

Here at any given element in our 2D array, we can explore one of four directions up, down, left or right


So just like depth first search with a binary tree where you can explore it as far down one branch as you could being the left or right branch
Here, we want to explore as far in one of the four direction as we can until we either hit the outer wall  of the 2D array or going back to that element which we already 
explored

At that point then we are going to change direction.

[        0  1  2  3  4 
   0:  [ 1, 2, 3, 4, 5 ]
   1:  [ 6, 7, 8, 9, 10]
   2:  [11, 12, 13, 14, 15]
   3:  [16, 17, 18, 19, 20]
]
TraversedArray =[1]
     ********* No up, Go Right **********

    1. here we start from {row: 0, col: 0} we take 1. TraversedArray =[1]
    Here we are going to same pattern of direction. Choices are up, right, down , left or some combination of your choice.
    Most of the time we do up, right then down then left.

    2.  Here we try to go up, since there is a wall. 
        Next we try to go right, and here to proceed to 2, which is {row: 0, col: 1}
        TraversedArray =[1, 2]
    
    3. Here we are going up, right , down and left again. Since there is no up we go right again. col: col + 1,  {row: 0, col: 2}
     TraversedArray =[1, 2, 3]

    4. Here we are going up, right , down and left again. Since there is no up we go right again. col: col + 1,  {row: 0, col: 3}
     TraversedArray =[1, 2, 3, 4]

    5. Here we are going up, right , down and left again. Since there is no up we go right again. col: col + 1,  {row: 0, col: 4}
     TraversedArray =[1, 2, 3, 4, 5]


     ********* No up and No Right **********
     6. Here @ Array[0,4] i.e 5, when we try to go up there's nothing, again at right there is nothing so then we go down i.e @ (10), i.e row + 1,  {row: 1, col: 4}
        TraversedArray =[1, 2, 3, 4, 5, 10]

     7.  Here again, when we try to go up again we notice that we already got (5), we've explored that cell inside of this 2D array already. So no need to go back up,
        so then go right, but there;s a wall. then go down again i.e row +1, col :0 i.e { row: 2, col: 4}
        TraversedArray =[1, 2, 3, 4, 5, 10, 15]


                [     0  1  2  3  4 
                0:  [ 1, 2, 3, 4, 5 ]
                1:  [ 6, 7, 8, 9, 10]
                2:  [11, 12, 13, 14, *15] , * here
                3:  [16, 17, 18, 19, 20]
                ]


     8. Same as step 7, go up  => already explored, go right => wall, go down => i.e row +1, col: 0, so we are @ {row: 3, col: 4}
        TraversedArray =[1, 2, 3, 4, 5, 10, 15, 20]
            
    9. From (20) we have already gone up i.e 15, go right => hits wall, go down => hits wall, go left => (19) i.e col - 1
        TraversedArray =[1, 2, 3, 4, 5, 10, 15, 20, 19]
    
    10. @ (19), we go up => i.e row : row -1 , col: same i.e {row: 2, col:3 } now we are at (14)
        TraversedArray =[1, 2, 3, 4, 5, 10, 15, 20, 19, 14]

    11. (14) => (9), we go up from 14 to 9 
    TraversedArray =[1, 2, 3, 4, 5, 10, 15, 20, 19, 14, 9]

    12. Here at (9), if we go up, to (4) it already traversed, go right => already traversed, go  down => already traversed, go left => take (8)
        TraversedArray =[1, 2, 3, 4, 5, 10, 15, 20, 19, 14, 9, 8]
    
    13. Do the same, go up => already taken, go right => already taken, go down => (13), so insert that
        TraversedArray =[1, 2, 3, 4, 5, 10, 15, 20, 19, 14, 9, 8, 13]

    14. Do the same, go up => already taken, go right => already taken, go down => (18), so insert that
        TraversedArray =[1, 2, 3, 4, 5, 10, 15, 20, 19, 14, 9, 8, 13, 18]

    14. Do the same, go up => already taken, go right => already taken, go down => hit's the wall, so go left i.e (18) => (17)
        TraversedArray =[1, 2, 3, 4, 5, 10, 15, 20, 19, 14, 9, 8, 13, 18, 17]
    
    15. Repeat the process once again, 
                go up => (12)
          TraversedArray =[1, 2, 3, 4, 5, 10, 15, 20, 19, 14, 9, 8, 13, 18, 17, 12]

    16. Again, @12, go up => (7)
           TraversedArray =[1, 2, 3, 4, 5, 10, 15, 20, 19, 14, 9, 8, 13, 18, 17, 12, 7]


    17. At (7), go up => already travelled, go right => already travelled, go down => already travelled, go left => (6)
              TraversedArray =[1, 2, 3, 4, 5, 10, 15, 20, 19, 14, 9, 8, 13, 18, 17, 12, 7, 6]

    18. At (6), go up => already travelled, go right => already travelled, go down =>(11)
              TraversedArray =[1, 2, 3, 4, 5, 10, 15, 20, 19, 14, 9, 8, 13, 18, 17, 12, 7, 6, 11]

    19. At (11), go up => already travelled, go right => already travelled, go down =>(16)
              TraversedArray =[1, 2, 3, 4, 5, 10, 15, 20, 19, 14, 9, 8, 13, 18, 17, 12, 7, 6, 11, 16]


[        0  1  2  3  4 
   0:  [ 1, 2, 3, 4, 5 ]
   1:  [ 6, 7, 8, 9, 10]
   2:  [11, 12, 13, 14, 15]
   3:  [16, 17, 18, 19, 20]
]
[
    [ =>   =>  =>   =>  =>]
    [ \/   /\  \/   /\  \/]
    [ \/   /\  \/   /\  \/]
    [ \/   /\  \/   /\  \/]
    [ \/   /\  \/   /\  \/]

***** pattern of traversal ***********
]

So just like DFS in Binary tree, DFS in 2D array is also going to use recursive appraoch,
you can do it iterativelly, but you'll use a stack instead

*/
function inBound(item, min, max){
   return item > min && item < max
}
const DFSTraverse = (grid, result = [],row= 0, col= 0, travelled = {}) => {
   let 
    rowInRange = inBound(row,-1, grid.length),
    colInRange = inBound(col, -1, grid[0].length),
    alreadyTravelled = travelled[[row, col]] === true
    if(!rowInRange || !colInRange || alreadyTravelled){
        return
     }
    let 
         currVal = grid[row][col]
        
        
         if(grid.length ===0){
            return result
         }

         console.log(alreadyTravelled, {row, col},result)
         // go  up  row : row - 1
         if(rowInRange && colInRange && !alreadyTravelled){
            result.push(currVal)
            travelled[[row, col]] = true
            row =-1
            DFSTraverse(grid, result, row, col )
         }
         
         // go right col: col + 1
         if(rowInRange && colInRange && !alreadyTravelled){
            result.push(currVal)
            travelled[[row, col]] = true
            col =+1
            DFSTraverse(grid, result, row, col )
         }

         // go down row : row + 1
         if(rowInRange && colInRange && !alreadyTravelled){
            result.push(currVal)
            travelled[[row, col]] = true
            row =+1
            DFSTraverse(grid, result, row, col )
         }
         // go left col: col - 1
        if(rowInRange && colInRange && !alreadyTravelled){
            result.push(currVal)
            travelled[[row, col]] = true
            col =-1
            DFSTraverse(grid, result, row, col )
        }
        return result
}

let data = [     
     [ 1, 2, 3, 4, 5 ],
     [ 6, 7, 8, 9, 10],
     [11, 12, 13, 14, 15],
     [16, 17, 18, 19, 20],
 ]
 


 // ******************* Refactored **************************

 // we can move up, right, down and left
 const   = [
    [-1, 0], // up
    [0, 1], // right
    [1, 0], // down
    [0, -1] // left
 ]
 // now let's write traversal

 const traversalDFS = (matrix) => {
    // creating the same length and size array having a place holder with boolean intially false and as we travel the position in matric we will change false => true
    const seen = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false))

    // we also need an array that hold values we traversed
    const values = []

    /*
     now let's call our DFS func
        what are we passing? @1 => matrix, @ 2nd: row, 3rd: col, @4rth: seen, 5th: result : values
     */
     dfs(matrix, 0, 0, seen, values)
     return values

 }
 function inBound(item, min, max){
    return item > min && item < max
 }
 function dfs(matrix, row, col, seen, values){

    // our base case for this recusrive func do not actually need to return a value that we combine from all of our recursive calls together in order to form the final answer
    // the only thing that's important is that our base case is tell our code whether or not it needs to continue in it's recursive func call
    // if not it's needs to end and the condition in which it ends is going to depend on how we write this code.
    if(!inBound(row, -1 , matrix.length) || !inBound(col, -1, matrix[0].length) || seen[row][col]){
        return 
    }

    values.push(matrix[row][col])
    seen[row][col]  = true

    // now let's determin recursive function call in the four direction we can possibly traverse from this point
    // here we will leverage our direction array and we are going to iterratre through each direction in order to get the new cordinates to traverse in

    for(let i = 0; i < direction.length ; i++){
        const currDirection = direction[i]
        dfs(matrix, row + currDirection[0], col+ currDirection[1], seen, values)
    }
 }

 /*

Space Complexity:
    By default O(N) just because we need same size array as seen

Time Complexity:
    O(N), as we touch all the coordinates

 */
 
 console.log(traversalDFS(data))

 function learningDFS(matrix, row, col, seen, result){
   if(!inBound(row, -1, matrix.length) || !inBound(col, -1, matrix[0].length) || seen[row][col]){
      return
   }
   result.push(matrix[row][col])
   seen[row][col] = true
   
   for(let dir of direction){
      dfs(matrix, row + dir[0], col + dir[1], seen, result)
   }
 }



 function revisionTraversalDFS(array, seen,result,  row, col){

   if(!inBound(row, array.length)|| !inBound(col, array[0].length) || seen[row][col]){
      return
   }
   seen[row][col] = true
   result.push(array[row][col])

   for(let dir of direction){
      revisionTraversalDFS(array, seen,result, row + dir[0], col +dir[1])
   }
 }