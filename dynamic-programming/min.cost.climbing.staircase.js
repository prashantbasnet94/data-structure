/*
Recurrence Relation:

minCost(i) = cost[i] + Math.min(minCost(i-1), minCost(i-2))
minCost(0) = cost[0]
minCost(1) = cost[1]
i < 0 = return 0








            0    1  2   3   4
    cost = [20  15  30  5]


    minCost to reach @ 4 = minCost of(2, 3)

                            minCost(n)
                        /               \
                    minCost(n-1)        minCost(n-2)

                    do we want both of them?
                    we want the min between these two values

                    what is minCost(index = 2)?







                                 minCost(n)
                        /                        \
                Min(minCost(n-1)                minCost(n-2))           + cost(n)
                  /             \                     /       \
        Min(minCost(n-2), minCost(n-3))  + cost(n - 1)       (minCost(n-3), minCost(n-4))  + cost(n-2)            


        Note that,
        minCost of reaching these steps includes the cost of the step iteself.

        recurrence realtion Math.min(minCost(n-1), minCost(n - 2)) + cost(n)
*/

const cost = [20, 15, 30, 5],
minCostClimbingStairs = (cost) => {

    // here we want to call minCost function on n, n being the length of cost array
    let n = cost.length
    
    // return final solution
    // we also need to think about what the final solution is truly represented as
    return Math.min(minCost(n-1, cost), minCost(n-2, cost))
},
minCost = (i, cost) => {
    if(i < 0) return 0
    if(i === 0 || i ===1 )return cost[i]

    return cost[i] + Math.min(minCost(i -1, cost), minCost(i -2 , cost))
}


/*
Time Complexity:

At minCostClimbingStairs we have 2 recursive call

The defination of the recusive function by nature calls itself twice
So that means we have base 2 i.e  T: 2()

This is going to call continually, twice on both sides until N reaches 0
So this means that it's doubling for every single value of N, which is equivalent to 2^N, which is a horrendous exponential time


T: 2^N

Space complexity:
The call stack only contains calls of a single branch down to the bottom of our binary tree at worst so while there are still 2^N calls being made,
 the callstack will only ever be as large as N in size (which is the path that walks the maximum height of the tree 
    when we take every single step available to the top)!


This is where we move on to the next step.
----------------------------------------

Steps:
1. Create recurrence relation
2. Create initial recursive function
Now
3. Utilize memoization so that we don't do repetitive work

In order for us to figure out what work is getting repeated we need to walk through the state based tree.

Easiest way to figure out what needs to be memeoized is to draw and observe the state based tree
 N = 10

                  10
               / .       \
              9 .         8
            / . \        / . \    
           8    7       7 .  6
          / \  / \ .   / \   / \ 
         7  6 .6 5 .   6  5  5  4
        /..........similarly........
        
        We notice that we end up calculating alot of these values over and over again
We are constantly, repeatedly recalculating the same values just in different branches of the tree
So we want to memoize these values, meaning that if we calculate any branch 1 time, then we want to memoize these values.








*/

//********** After memoization **************/

let count = 0, count2 = 0
const
minCostClimbingStairs2 = (cost) => {

    // here we want to call minCost function on n, n being the length of cost array
    let n = cost.length
    
    // store memoization
    const memory = []
    // return final solution
    // we also need to think about what the final solution is truly represented as
    return Math.min(minCost2(n-1, cost, memory), minCost2(n-2, cost, memory))
},
minCost2 = (i, cost, memory) => {

    if(i < 0) return 0
    if(i === 0 || i ===1 )return cost[i]

    if(memory[i]) return memory[i]
    memory[i] = cost[i] + Math.min(minCost(i -1, cost), minCost(i -2 , cost))
    return memory[i]
}






/*

    Bottom up Approach

    Unlike approaching from N => N -1 && N-2 => and so forth and so on

    we go N(0) && N(1) => N(2)

    from base case to up i.e bottom up solution

*/


function minCostClimbingStairsBottomUp(cost){
    const
         dp = [],
         n = cost.length

    // here want to go bottom up
    for(let i = 0; i < n; i++){
        if(i < 2) {
            dp[i] = cost[i]
        }else{
            dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2])
        }
    }
    // what we don;t have is the value outside our cost array, which is the final step we're looking for
    //[20, 15, 30,  5]
    // 0 .  1 . 2 . 3   4  
    // here vlaue @ 4 is what we are looking for.
    // and vlaue @ 4 is the math.min between last two values we have
    return Math.min(dp[n-1], dp[n-2])
}

/*
    Time Complexity:
    T: O(N)

    Space COmplexity:
    T: O(N)


    Is there a way we can further optimize our solution?

    If you look at our for loop,
    the only value we leverage  in the dp is the last two values we calculated.


                          minCost(4)
                         /        |       
                        /         |  
                minCost(3)        |
                |       \         |  
                |        \        |  
                |        minCost(2)
                |      /       \           
                |    /           \
                minCost(1) . minCost(0)

if we look at the tree, we never go back more than 2 steps

@minCost(3) => we go back @ minCost(2) && @ minCost(1), but never minCost(0)
@minCost(4) => we go back @ minCost(3) && @ minCost(2), but never minCost(1)


*/


function minCostClimbingStairsBottomUpOptimization(cost){
    let
         stepOneBack =null,
         stepTwoBack =null,
         n = cost.length

    // here want to go bottom up
    for(let i = 0; i < n; i++){

        if( i  === 0){
            stepOneBack = cost[0]
        }else if( i === 1){
            stepTwoBack = cost[1]
        }

        if( i % 2 === 0){
            stepOneBack =   cost[i] + Math.min(stepOneBack,stepTwoBack)
        }else if( i > 2 && i % 2 != 0){
            stepTwoBack = cost[i] + Math.min(stepOneBack,stepTwoBack)
        }
        
    }
    // what we don;t have is the value outside our cost array, which is the final step we're looking for
    //[20, 15, 30,  5]
    // 0 .  1 . 2 . 3   4  
    // here vlaue @ 4 is what we are looking for.
    // and vlaue @ 4 is the math.min between last two values we have
    return Math.min(stepOneBack, stepTwoBack)
}





function refactoredMinCostClimbingStairsBottomUpOptimization(cost){
    let
         stepOneBack =cost[0],
         stepTwoBack =cost[1],
         n = cost.length

    // here want to go bottom up
    for(let i = 2; i < n; i++){
 
        let currentValue = cost[i] + Math.min(stepOneBack, stepTwoBack)
        stepOneBack = stepTwoBack
        stepTwoBack = currentValue
        
    }
    return Math.min(stepOneBack, stepTwoBack)
}
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))
console.log('count', count)

console.log(minCostClimbingStairs2([1,100,1,1,1,100,1,1,100,1]))
console.log('count2', count2)

console.log(refactoredMinCostClimbingStairsBottomUpOptimization(cost))


/*
Keys:
 There are so many steps to dynamic programming

1. First one begins with identifying the recurrence relation formula that you can then use to build the recurvice function
2. From the recurisve funciton, you want to build it top down and determine if there is an optimization using memoization that can help you
3. Once you see that full top down solution, it's easy for you to extrapolate out the bottom up solution


Beacuase you know that if you are going top down, there's definetly a way to go bottom up as long as you analyze the correct base cases

4. Once you figure out bottom of tree is and derive it iteratively.
5. Then you look at your memoize and see if you have wasted usage of space inside of your scalling dp
    i. if there is you reduce it to the parts that you only need and youre  able to bring down to at least to the next level of space complexity




*/