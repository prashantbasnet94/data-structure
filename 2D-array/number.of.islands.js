/*
    Given a 2D array containing only 1's (land) and O's (water). Count the number of islands.
    An islands is land connected horizontally or vertically.

    Test Cases
    1.
        [
            [1  1   1   1   0],
            [1  1   0   1   0],
            [1  1   0   0   1],
            [0  0   0   1   1]
        ]

        How many islands inside of this 2D array?

            1   1   1   1
            1   1
            1   1

                            1
                        1   1

        therefore 2 islands.


                1   0
                0   1

        This is not an island since it is not horizontally or verticall but diagonally


    2. 
        [
            [0  1   0   1   0]
            [1  0   1   0   1]
            [0  1   1   1   0]
            [1  0   1   0   1]
        ]


                    1
                1   1   1
                    1

        [
            [0  (1)   0   (1)   0]
            [(1)  0   1   0   (1)]
            [0  1   1   1   0]
            [(1)  0   1   0   (1)]
        ]
        Total 7 islands

    Question:

    Are the edges of 2D array water?
    Yes, everything outside of 2D array is water.

    Continue Test case:
    3. [] => 0
    4. [[],[]] => 0
    5.[
        [1  1   1]
        [1  1   1]
        [1  1   1]
    ] => 1

    How to approach?

    1. Do i need to travese this array?
     if yes where do i start traversing?

    2.  Unlike binary tree, we are not given the root value. 
        Most of the time we want to start from top left corner

    3. Does the order in which i traverse these elements matter?

    4. How do i ensure that i am not double counting the same one values that have already been accounted for in my island
     for example:

        [
            [1  1   1   1   0],
            [1  1   0   1   0],
            [1  1   0   0   1],
            [0  0   0   1   1]
        ]

        we count array[0][0] as an 1 island, when we move to array[0][1]. How do i ensure we count that element as a part of 1 island we already accounted for 
        and not count that as second island

        This is where we are going to have to work on our critical thinking and abstract thinking.
       [
            [A  B   C   D   0],
            [E  F   0   1   0],
            [G  H   0   0   1],
            [0  0   0   1   1]
        ]
*/



function countIsland(matrix){
    // since DFS goes from col 0-5 and row 0- 5, there is simply no connection to check if any land is in the vicinity of current island so ignoring DFS
    // BFS  = [A, B, E, C, F, G, D, 0, H]
}
function inBound(value, min, max){
    return value > min && value < max
}
const direction = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1], //left

],
data = [
        [1,  1,   1,   1,   0],
        [1,  1,   0,   1,   0],
        [1,  1,   0,   0,   1],
        [0,  0,   0,   1,   1]
    ],
data2 =[
      // 0      1      2      3     4  
        ['A',  'B',   'C',   'D',  0],  // 0
        ['E',  'F',    0,     1,   0],  // 1
        ['G',  'H',    0,     0,   1],  // 2
        [0,     0,     0,     1,   1]   // 3
    ]


/*

An island is connected 
(0, 0) => (0, 1) => (0, 2) => (0, 3) => (0, 4)
 |          |         |         |          |  
 v          v         v         v          v
(1, 0) => (1, 1) => (1, 2) => (1, 3) => (1, 4)
 |          |         |         |          |  
 v          v         v         v          v
(2, 0)  => (2, 1) => (2, 2) => (2, 3) => (2, 4)
 |          |         |         |          |  
 v          v         v         v          v
 (3, 0) => (3, 1) => (3, 2) => (3, 3) => (3, 4)
 

*/

function traversalBFS (matrix) {
        let 
        queue = [],
        result = [],
        seen = new Array(matrix.length).fill(0).map( o => new Array(matrix[0].length).fill(false))

        queue.push([0, 0])

        while(queue.length > 0){
            let [row, col] = queue.shift()
            console.log(row, col)
            if(!inBound(row, -1, matrix.length) || !inBound(col, -1, matrix[0].length) || seen[row][col]){
                continue
            }
            seen[row][col] = true
            result.push(matrix[row][col])
            
            for(let i = 0; i < direction.length ; i++){
                let currDir = direction[i]
                queue.push([row + currDir[0], col+ currDir[1]])
            }
        }
        return result
}



/*

Approach:

1. We need a counter to keep track of number of island
2. On the way to traversal we can only encounter two element i.e either 0 or 1
    i. When we encounter 0, it does not impact on our counter
    ii. When we encounter 1: there are 2 possibilites for 1
        a. Could be a new island, if it is we want  to increase the count by 1.
        b. It is land that is part of the old island we have a;ready explored before, here we don't want to increase our counter of island

We can encounter water or land, 
if land : {
            1: old island already accounted for
            1: new island
        }


Now let's think about the order to explore the elemnents. We have BFS and DFs and as well as sequential order.
The reason why the sequential order is important is because sometimes the order of BFS or DFS as the exploration pattern for the elements in a 2D array is not going to
actaully get you to the correct answer. 
Sometimes BFS or DFS is a part of solving the sub problem, not the main traversal pattern.

The sequential order ends up being the main pattern.
The way you can identity this is,
1. If the first condition is that you want to touch every single element the order in which you touch them does not matter,
     you just want to touch all of them. 

Other benefit we get from Sequential order is, unlike BFS or DFS. We don't take up any additional space to implement sequentail order

IN BFS or DFS, the space consumption is o(N), whereas in sequential it's just nested for loop 

For { // outer array
    For{
        // inner array
    }
}

Sequentail Order:
Time Complexity = O(N)
Space complexity = O(1)

This is why, you wanna tackle it from the angle of thinking:
Does sequential order work for me and breadth for search and depth for search be part of my optimization solution for some kind of inner sub problem.

Here we will do the same

Use sequential order first and combine it with what we know about how we process every single element as we encounter it
The way we each element is going to be based off these three cases we've explored:
We can encounter water or land, 
if land : {
            1: old island already accounted for
            1: new island
        }
        

So to begin:
[       0    1    2    3    4  
    0   [1,  1,   1,   1,   0],
    1   [1,  1,   0,   1,   0],
    2   [1,  1,   0,   0,   1],
    3   [0,  0,   0,   1,   1]
]

We start from top left corner and take this first value.

We know it;s the first value we are taking and we see that it is 1.
Because it's the first value and it's 1, we know we've never seen any other land before.
Therefore this must be a unique island

Here we can increment our counter by 1, counter = 1

But what happens when we move on to the next element in our sequential order i.e  [0][1] = 1

we notice that we encounter a one, but we want to distinguish that this is an old one, meaning it;s part of an island we've just accounted for 

How do we do that?
This brings us to our next subproblem, which is where we need to be able to clasify 
the difference between land that's part of a new island or land that's part of an old island.

We instantiate some kind of Data structure  to keep track of seen islands i.e seen array 

let's say we instantiate an DS to keep track of explored islands.
But how do we make sure that we get every single one of these lands that is in this island?
-------------------------------------------------------------------------------------------
Here one can notice that we can do is value forward from Array[0][0] i.e 1,
we want to scan through elements unitl we get every single element until all of the perimeter is water
meaning
From Array[0][0] i.e 1, I want to navigate to each adjacent value and continue navigating to thier adjacent values until the entire perimeter is water
And i only want to account for Up, Right, Down and Left

I don;t want to account for any of these diagonals because diagonal is technially part of a new island


This sounds remarkably similar to BFS or DFS search. Which coincide with how an island is defined, by 1s that are connected to other 1s immdediately adjacent.

So what we can say is:

The moment that we discover a new island, we want to use BFS or DFS and traverse through this island and 
accumulate thier values inside of SEEN data structure 

But here this SEEN scaling data structer might be a little excessive.

Let's go back to what we analyzed:
If we think back, we know that the behaviour of an old island is exact same as far as our logic is concerned,
 is same as water, i.e it doesnot impact the counter. We can ignore it


So what we can do is take that portion where we traverse from the value and implment BFS or DFS, flip the land(1) as water(0).
We can even flip current Array[0][0]  = 1 to 0 as well

The main idea is that by traversing using BFS or DFS, from the moment we take the new island, we switch all of these values and it's adjacent neighbour values
until it's permiter is water to 0

[       0    1    2    3    4  
    0   [1,  1,   1,   1,   0],
    1   [1,  1,   0,   1,   0],
    2   [1,  1,   0,   0,   1],
    3   [0,  0,   0,   1,   1]
]

[       0    1    2    3    4  
    0   [0,  0,   0,   0,   0],
    1   [0,  0,   0,   0,   0],
    2   [0,  0,   0,   0,   1],
    3   [0,  0,   0,   1,   1]
]

And now as we traverse through our sequential order, we're never going to count for them again. Meaning we are not going to double count these islands

So here, when we encounter 1 @ {row: 2, col: 4}, we see it as a new land.

We know that our logic has already swapped any potential lands that we could double count over to water (0)
So then we can increment our count by 1 once again i.e count = 2

Again do the same thing, using DFS or BFS scan through it;s adjacent one allies and their one allies and then swap those with 0
[       0    1    2    3    4  
    0   [0,  0,   0,   0,   0],
    1   [0,  0,   0,   0,   0],
    2   [0,  0,   0,   0,   0],
    3   [0,  0,   0,   0,   0]
]


[
      // 0      1      2      3     4  
        ['A',  'B',   'C',   'D',  0],  // 0
        ['E',  'F',    0,     1,   0],  // 1
        ['G',  'H',    0,     0,   1],  // 2
        [0,     0,     0,     1,   1]   // 3
    ]
   BFS  = [A, B, E, C, F, G, D, 0, H]

*/

function bfs(matrix, row, col){
    let queue = [[row, col]]

    while(queue.length > 0){
        let [row, col] = queue.shift()
        if(!inBound(row, -1, matrix.length) || !inBound(col, -1, matrix[0].length) || matrix[row][col] === 0){
            continue
        }
       if(matrix[row][col] === 1){
        matrix[row][col] = 0
       }

        for(let a = 0; a< direction.length; a++){
            let currDir = direction[a]
            queue.push([row+ currDir[0], col + currDir[1]])
        }

    }
}

function countIsland(matrix){

    // implmenting sequential order traversal
    let count = 0;
    for(let row =0; row< matrix.length; row ++){
        for(let col = 0; col < matrix[0].length; col++){
            let currElement = matrix[row][col]
            // first element 
            if(currElement === 1 ){
                count++
                // now let's implment BFS to solve sub problem i.e find all adjacent alies of 1 as 1 then switch that to 0
                bfs(matrix, row, col)
            }
        }
    }
    return count
}



// *********************************     Right Solution *****************************************
function numberofIslands (matrix){
    if(matrix.length === 0) return 0

    /*
     first thing we are doing is sequential order search through the matrix
     when we encouter 1 for the first time, we do BFS from that position and convert any attached 1 to 0
     Cause we only want to count this entire island once
     let keeps track of number of islands we encouter
    */

     let islandCount = 0

     // now doing sequential search
     for( let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[0].length; col++){
            if(matrix[row][col] === 1){
                islandCount++
                matrix[row][col] = 0

                // now let's perform the bfs 
                let queue = []
                queue.push([row, col])
                mybfs(matrix, queue)
            }
        }
     }
     return islandCount
}
function mybfs(matrix, queue){
    while(queue.length > 0){    
        const [row, col] = queue.shift()
        //if we are going outside of our matric, we don;t want to add that coodinates to queue
        // if coordinate exist and the value is 1, flip it to 0
        
        for(let dir = 0; dir < direction.length ; dir++){
            let 
                currDir = direction[dir],
                nextRow = row + currDir[0],
                nextCol = col + currDir[1]

            if(nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length ){
                continue
            }
            if(matrix[nextRow][nextCol] === 1){
                queue.push([nextRow, nextCol])
                matrix[nextRow][nextCol] = 0
            }
        }
    }
}
const data3 = [
    [0, 0, 1],
    [1, 0, 0],
    [0, 1, 1]
]
// console.log(numberofIslands(data))
// console.log(numberofIslands(data3))


/*
https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/23771664#questions

    Space and Time Complexity

    Time Complexity:
    Two main drivers determining how many iteration we are going to make?
    Double for loop => sequential loop => design to touch every single element once i.e O(N)

    What about inside BFS inisde nested for loop? 
    We perform our sequential search until we come across 1.
    The moment we encounter 1, we perfom BFS from this 1 to any connected alies 1
    how many times do we touch these connected 1s?
    we only touch them 1, once we touch them we flip the 1 => 0 and never search them ever again

    SO in worst case we touch all the elements, i.e O(N)

    SO grouping O(N + N) => O(2N) => O(N)

    why is this case even though we are nesting bfs inside for loop inside another for loop 

    Think about the logic vs actual code,  here logic will dictate what the algo run time will be.

    BFS atmost touch all of the elements at once, when combining all of the possible BFS we make together.

    This combination of all of the different BFS can only happen through the sequential search starting those BFS in first place.

        let R = > Row and C => col,
         we can say O(R * C), where R * C => N

         Time Complexity : O(R * C)
         Space Complexity : O(Max(R , C))


    Going further, let's analyze space complexity:
    ----------------------------------------------
    let's see what the max size of queue can  be while doing BFS

    This BFS is going to only happen , when we encouter 1 in the grid.
    Here the worst case is when the entire grid is all one and we go through all the elements at once in our BFS 

[       0    1    2    3    4  
    0   [1,  1,   1,   1,   0],
    1   [1,  1,   0,   1,   0],
    2   [1,  1,   0,   0,   1],
    3   [0,  0,   0,   1,   1]
]

    1. We have Array[0][0] in our queue, shifitng our queue and push have top, right, down , left, since at [0][0], top and left are out of bound we push right and down
         queue = [[0, 1], [1,0]]
        
[       0    1    2    3    4  
    0   [O,  Q1,   1,  1,   1],
    1   [Q2,  1,   1,  1,   1],
    2   [1,  1,   1,   1,   1],
    3   [1,  1,   1,   1,   1]
]

    2. Again we shift our array @ right at [0, 1], then push it's right [0, 2], since up, left and down are already processed
         queue = [[1,0], [1,1], [0, 2]]

[       0    1    2    3    4  
    0   [0,  0,   Q2,  1,   1],
    1   [Q1,  Q3,  1,  1,   1],
    2   [1,  1,   1,   1,   1],
    3   [1,  1,   1,   1,   1]
]

    3. Again we shift our @ [1,0] , top, left, right is already explored, only pushing down i.e [2, 0]
         queue = [[1,1], [0, 2], [2, 0]]
    
[       0    1    2    3    4  
    0   [0,  0,   Q1,   1,   1],
    1   [0,  Q2,   1,   1,   1],
    2   [Q3,  1,   1,   1,   1],
    3   [1,  1,   1,   1,   1]
]

    4.Again we shift our @ [1,1], top, left is already explore, now pusing right and down, [1, 2] and [2,2]
         queue = [[0, 2], [2, 0]]
[       0    1    2    3    4  
    0   [0,  0,   0,  Q3,   1],
    1   [0,  Q1,  Q4,  1,   1],
    2   [Q2,  1,  1,   1,   1],
    3   [1,  1,   1,   1,   1]
]

5.
[       0    1    2    3    4  
    0   [0,  0,   0,  Q2   1],
    1   [0,  0,  Q3  1,   1],
    2   [Q1,  Q4,  1,   1,   1],
    3   [1,  1,   1,   1,   1]
]

6.

[       0    1    2    3    4  
    0   [0,  0,   0,  Q1   1],
    1   [0,  0,  Q2  1,   1],
    2   [0,  Q3,  1,   1,   1],
    3   [Q4,  1,   1,   1,   1]
]

********** This point on Q size is max => 5 **********

7.

[       0    1    2    3    4  
    0   [0,  0,   0,   0   Q4],
    1   [0,  0,   Q1  Q5,   1],
    2   [0,  Q2,  1,   1,   1],
    3   [Q3,  1,  1,   1,   1]
]
**********  Q size is still max => 5 **********

8.

[       0    1    2    3    4  
    0   [0,  0,   0,   0   Q3],
    1   [0,  0,   0  Q4,   1],
    2   [0,  Q1,  Q5,   1,   1],
    3   [Q2,  1,  1,   1,   1]
]

**********  Q size is still max => 5 **********

8.

[       0    1    2    3    4  
    0   [0,  0,   0,   0   Q2],
    1   [0,  0,   0  Q3,   1],
    2   [0,  0,  Q4,   1,   1],
    3   [Q1,  Q5,  1,   1,   1]
]


********** This point on Q size start decreasing **********
9.

[       0    1    2    3    4  
    0   [0,  0,   0,   0   Q1],
    1   [0,  0,   0   Q2,   1],
    2   [0,  0,  Q3,   1,   1],
    3   [0,  Q4,  1,   1,   1]
]


So what you notice here is:
Queue space complexity => worst case => 5 i.e Max(row, col) or the diagonal of the grid

This is always not going to be tha case,
if you have really wide by shallow grid i.e
[
    [ - - - - - - - - - - - - - - - - -]
    [ - - - - - - - - - - - - - - - - -]
]

Here queue can be diagonal of it i.e 2

This mean we are always contrainted in how many elements that we can add to the queue based on farthest width section
This is also not going to be the same case with other BFS solution because in other solutin you might not implment 
1. Sequential Order
2. Nor the logic of fliping these islands so you don't touch them

This space complexity is really specific to this solution
This is also why if you choose DFS instead of BFS, that would also be valid.


IN DFS:
------

The logic that constrains how many elements the BFS touches is same as the logic that constraints our DFS
Time complexity : O (R * C)
SpaceComplexity is also O (R * C)

What about Space complexity?

We are using call stack with our recurisve DFS, what this means in the worst case, you end up holding the enitre grid. 
Beacuse every single level is waitign for every other call to finish in all the possible directions down the furthest path they could go


i.e starting from Array[0, 0], it might wait for the last element in the gird that you can dfs.
So SpaceComplexity is also (M * N)
Recursive call 

    Why is BFS better than DFS in this case, when it comes to space complexity?
    THis is why BFS is better.
*/



/* 
******************************************* Revision ****************************************************************
    [
        [1  1   1   0   0]
        [1  1   0   0   0]
        [1  1   0   0   0]
        [0  0   1   1   1]
        [0  0   1   1   1]
    ]

    When traversing we can either get a land 1 or water 0

    if it's a water,  0 => does nothing to our count
    if land 1, then {
        first => can be a new island
        second => can be part of already explored island
    }

    so inorder to remove confusion with already discovered land lets convert disoverd land into 0, so it does not disturb our count


*/

function breadFirstSearchAndConvertTo0(queue, matrix){

    while(queue.length > 0){
        let [row, col] = queue.shift()

        // exporling direction around

        for(let dir = 0; dir < direction.length; dir++){
            let currDir = direction[dir],
            newRow = row + currDir[0],
            newCol = col + currDir[1]

            if(newRow < 0 || newRow >= matrix.length || newCol < 0 || newCol >= matrix[0].length ){
                continue
            }
           if(matrix[newRow][newCol] === 1){
            matrix[newRow][newCol] = 0
            queue.push([newRow, newCol])
           }
            
        }
    }
}

function islandCount(matrix){
    let exploreIsland = 0
    // let go through sequentail order and discover parts of lands around them

    for( let row = 0; row < matrix.length ; row++){
        for(let col = 0; col < matrix[0].length; col ++){
            console.log(matrix[row][col])
            if(matrix[row][col] === 1){
                // since it's a land, let's discover land around 
                exploreIsland ++
                matrix[row][col] = 0

                // now let's explore connect lands and also convert them to 0 so that we don't increase our counter when we discover them
                // using BFS 

                let queue = [[row, col]]
                // breadFirstSearchAndConvertTo0(queue, matrix)
                mybfs(matrix, queue)
            }
        }
    }

    return exploreIsland
}
console.log(data)
console.log('islandCount(data)', islandCount(data))