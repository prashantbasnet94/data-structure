/*

    Dyanmic programming when to implement?

    Mostly on optimization problems, what does that mean?
    Either find min or max out of the all possible solutions.

    Steps:
        1. Find the recurrence relation
        2. Build a function out of the recurrecene realtion
        3. Once you draw inital recursive func, let's impre the compleixty i.e 
            a. Utilize memoization so that we don't do repetitive work
*/

function minCostClimbingStairs(cost){
    if(cost.length === 0) return 0
    let n = cost.length
    return Math.min(minCost(n-1, cost), minCost(n-2, cost))
}

function minCost(i, cost){
    if(i < 0) return 0
    if(i === 0 || i === 1) return cost[i]
    return cost[i] + Math.min(minCost(i -1 , cost), minCost(i-2, cost))
}

const cost = [20, 15, 30, 5]
console.log(minCostClimbingStairs(cost))

/*

Time Complexity: O(N!)
              N
           /    \ 
          N-1    N-2
        /  \       /   \    
       N-2 N-3    N-3   N-4
       
       n!

Space Complexity: O(N!)

Actual Answer:

Time Complexity:
 Every Branch goes down in 2 direction. So For N , 2 cal 2 recusrive case and for that 2 we call anotehr 2 more for each and so on. 
Thus, T = 2^N

Space Complexity:
Branch starting for N can only travel it's base leaf i.e equivalent to the hight of the tree

S: O(H), h => height of the tree


Here, this time complexity is horendous.
Thus needs improvements.

In the above figure you can see N2 being called twice, N3 = twice and so on as we draw out our state based tree.

Let's foucs on memoization
*/


function minCost2(i, cost, tree){
    if(i < 0) return 0
    if(i === 1 || i === 0) return cost[i]

    // return cost[i] + Math.min(minCost2(i - 1, cost), minCost2(i - 2, cost))

    if(tree[i]) return tree[i]
    tree[i] = cost[i] + Math.min(minCost2(i -1, cost, tree), minCost2(i -2, cost, tree))
    return tree[i]
    
    // if(stateBasedTree[i-1]){
    //     console.log('retreiving out of statebased tree for  i -1 ', i-1)
    //     return stateBasedTree[i-1]
    // }else{
    //     stateBasedTree[i-1] = minCost2(i-1, cost, stateBasedTree)
    // }
    // if(stateBasedTree[i -2]){
    //     return stateBasedTree[i-2]
    // }else{
    //     stateBasedTree[i-2] = minCost2(i-2, cost, stateBasedTree)
    // }
   
    // return cost[i] + Math.min(stateBasedTree[i-1], stateBasedTree[i-2])

}
function minCostClimbingStairs2(input){
    if(input.length === 0) return 0

    let n = input.length, result = []
    return Math.min(minCost2(n-1, cost,  result), minCost2(n-2, cost, result))
}
console.log(minCostClimbingStairs2(cost))



/*
Probailit of knight travelling staying on the chessboard with k moves?

Why is this a dynamic programming?
Because at each step i.e each sub problem we calculate the same way then add it up to find the final answer.


*/


function knightStayingOnBoard(N, k , r,c ){

    return knightProbability(N, k, r, c)
}

const directions =[
    [2,  -1],
    [2,   1],
    [-2, -1],
    [-2,  1],
    [1,   2],
    [1,  -2],
    [-1, -2],
    [-1,  2]
]
function knightProbability(n, k, r, c){

    if(r <= 0 || r > n || c <= 0 || c > n ) return 0
    if(k === 0) return 1

    let response = 0
    for(let dir of directions){
        response += (knightProbability(n, k-1, r + dir[0], c + dir[1]))/8
    }
    return response
}

console.log(knightStayingOnBoard(6, 2, 2, 2))

/*
Time complexity:
    it moves down in eight possible steps for every k,
     8 ^ K

Space Complexity:
Same as time complexity.



Now let's improve it with memoization
*/

function knightOnBoardProb2(n, k , r, c){

    // k+1 because, our array is index from 0 but our steps are not
    // we also need 2D array inside that level
    // when k = 3, we have 1 position
    // when k =2 , knight can move to any 8 direction from prev k @ 3
    // when k =1, we can end up anywhere in the board, but we want to record probablity of it
    let dp = new Array(k+1).fill(false).map(
        o => new Array(n).fill(false).map(o => new Array(undefined))
        )
     
     return recurisve(n, k, r,c, dp)
}

function recurisve(n, k , r, c , dp){
    if(r < 0 || r >= n || c < 0 || c >= n) return 0
    if(k === 0) return 1

     if(dp[k][r][c] !== undefined){
        return dp[k][r][c]
    }

    let response = 0
    for(let dir of directions){
        response += (recurisve(n, k-1, r + dir[0], c + dir[1], dp)) / 8
    }
    dp[k][r][c] =response
    return dp[k][r][c]
    
}
console.log(knightOnBoardProb2(6, 2, 2, 2))