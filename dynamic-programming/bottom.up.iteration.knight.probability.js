/*

Insights:
K value is the main thing that drives the recursion as we substract k-1 and pass it donw, so the level of recursion depends on k


Here in bottom up approach we want to figure out if we can utilize the k value differently.

Top down => you are starting from the max k value and going down to k = 0

Bottom up => starting from k =0 and going to k = value of k given

Here, how do i build layer by layer, so that i get all of the steps that i need for one level of k before i move up to the next level.

Because once i have all of the values i need for k = 0, then it's easy for me to build k = 1
Once i have all the values for k = 1 and k = 0.
I can use wheater one layer or two layer to build k = 2
and can i use k=0, k =1, and k = 2 to build k = 3?


The idea is just you are constantly trying to figure out if you can encode the entire level before moving up to the next level

And the reason why that works is because we know that k is the main driver of the recursion.

We know now k is impactful, what do we acutally need to modify the DP to store instead so that we can implment iterative solution.

The way our recursive solution works is that we say, i want the probability of us staying on the board from k = [2, 2] of all of the possible paths that it could take, 
we don't know what those path value probabilities are, so let's calculate them.




    0      1       2       3       4       5   

0           B              C 

1   A                               D

2                  *            

3   H                               E

4           G               F

5



1. So we take k = [2,2], and calcuate what are the 8 direction it can move it?
2. Now, let's step down and decresase the step count, we go back to one of those step where it could reach k =[2,2 ] i.e *
3. What is the probabilti that we stay on the board, if we take 2 more steps starting from C, we don't know what those are
4. let's calculate all of the different steps we can take from C, and let's calculate those as well.
5. We take those steps and we decrease the k again, we are @ [2, 4], we have one more step to take.
6. How many different proabailities is there we stay on the grid and you essentially just keep tunneling down 
   for evert one of those values that could exist and then bring those answers back up. and that gives us the probability for one of these steps
7. We then do it for all of the remaining steps, and we bring all those answers together so that we get an overall probability for k with bottom up.



Instead, with bottom up,
What we are saying is, i want to generate everything i need for this level of k = 0 first, then when i go to the next k, can i leverage what i've stored in that previous 
grid in order to build the answer and then i move up again and then i move up again

And the idea is that we want to completely fill this grid out before we move on to the next grid

So what we are saying is that what do i need to fill this grid in order to be considered completed and to help me move on to the next stage? 
This is where we need to think about it.

if we want to guarentte in terms of the values that we can fill in the very first grid. So the very first grid is going to probabablu be k = 0
what can we guarentte when k = 0?

we know that knightP @ somepoint when k = 0 is 1

when is the only time when we have k = 0, and r,c are filled?

if we reframe the question, we can see if when we start for the very first time and palce our knight on the board, we have taken no steps yet.

The only time there is knight on  the board when k= 0 is only when r= 2 and c =2, at starting position.
There is no possible way when k = 0 for us to place the knight anywhere evel on the board.

So when we know that we can do is fill out some type of DP grid.

1. k = 0

    0      1       2       3       4       5   

0   0      0       0       0       0       0 

1   0      0       0       0       0 .     0

2   0      0       1       0       0       0

3   0      0       0       0       0       0

4   0      0       0       0       0       0

5 . 0      0       0        0      0       0 



next, when we start on the top left corner. i.e [0, 0]
let think how many different grid cells can reach this? if we are moving like a night,
there only two position that can reach [0, 0] i.e [2, 1] and [1, 2]
every other grid cells cannot possibly reach this spot in one move.

if that's the case, then we refer back to our previous grid cell and say  what;t the probability that we have knight in [2, 1] and [1, 2].
There is 0 probability. So this means we fill 0 @ [0, 0]

for position [0, 1], what are the proability then? we have 1/8 because only 1 in eight direction can land at @[0, 1]


2. k = 1

    0      1       2       3       4       5   

0   0      1/8     0       1/8     0       0 

1   1/8    0       0       0       1/8     0

2   0      0       1/8     0       0       0

3   1/8    0       0       0       1/8     0

4   0      1/8     0       1/8       0       0

5   0      0       0        0      0       0 


3. k = 2
    a. what are the chances our knight can reach @[0, 0].
        We know knight can only reach @[0, 0] from [ 1,2 ] or [2, 1]
        if we look into our prev iteration, what we see is these values are 0

    b. What are the chances our knight can reach @[0 1]?
        we know [1, 3], [2, 2], [2, 0] can only reach @[0, 1] 
        if we look into our prev iteration , we have 0 in all of them, so we know it's 0 

    c. let's look @[3,3 ]
        only B and E has probabilites out of all 8 directions
        so we take 1/8 and 1/8

        The chances of us reaching B or E is also 1/8. So we divide them further


        (1/8) / 8 = 1/64
        (1/8) / 8 = 1/64

        adding them 2/64 => 1 /32

    0      1       2       3       4        5   

0   0      0

1                  A                B

2          G                                H

3                        1/32

4          E                                F     

5                  C                D                     


Building up to the final chessboard, where every grid contains the probability we could reach that spot from the previous given board states
This is how you build from the bottom up to that final chessboard.


From here then, we add all of the values inside the gird together to give us the overall probability that we stay on this chessboard by moving thorgh k equals 3 steps

*/




const directions = [
    [2,  -1],
    [2,   1],
    [-2, -1],
    [-2,  1],
    [1,   2],
    [1,  -2],
    [-1, -2],
    [-1,  2]
]

function probability(N, k, r, c){
    const dp = new Array(k+1).fill(0).map( o => new Array(N).map( x => new Array(N).fill(0)))

    // @ k = 0, our probability is 1
    dp[0][r][c] = 1
    for(let step = 1; step <= k; step++){
        for(let row = 0; row < N; row++){
            for(let col = 0; col < N; col++){

                // now we need to go in alll the direction that are avaibale from this position
                // if any of the eight direction are valid in the previous DP, then we want to add them after dividing by 8

                for(let dir of directions){
                    // now we are going to calculate the previous row and the prev column value from our current position that we could reach for this given diretion.
                    const 
                        prevRow = row + dir[0],
                        prevCol = col + dir[1]

                        // now check to see if those values of our previous row and previous col are in the boundaries of our chessboard, 
                        // and only if it;s within, we calculate our dp value

                        if(prevRow > -1 && prevRow < N && prevCol > -1 && prevCol < N){
                            dp[step][row][col] += (dp[step-1][prevRow][prevCol])/8
                        }
                }
            }
        }
    }

    let res = 0
    // scanning and adding final value stored in grid at final level of k
    for(let i = 0; i< N; i ++){
        for(let j =0; j < N; j++){
            res +=dp[k][i][j]
        }
    }
}

/*
Time Compelxity:
K * N * N * 8
k * N^2


Space Complexity:
N^2 * K


Optimization:

Here we can improve the space complexity.

Here our Dp, we don;t need this entire array containing multiple grids. we only need 2 grids.
One to reference previous value and one to caluclate our new probability

const 
    prevDp = new Array(N).fill(0).map(o => new Array(N).fill(0)),
    currDp = new Array(N).fill(0).map(o => new Array(N).fill(0))


*/


function optimiztedP(N, k, r, c){
    const 
    prevDp = new Array(N).fill(0).map(o => new Array(N).fill(0)),
    currDp = new Array(N).fill(0).map(o => new Array(N).fill(0))

    prevDp[r][c] =1
    for(let step = 1; step <=k; step++){
        for(let row = 0; row < N; row++){
            for(let col = 0; col < N; col++){
                for(let dir of directions){
                    let 
                        prevRow = row + dir[0],
                        prevCol = col + dir[1]

                    if(prevRow < N && prevRow > -1 && prevCol < N && prevCol > -1){
                        currDp[row][col] += prevCol[prevRow][prevCol]
                    }
                }
            }
        }
        prevDp = currDp
        currDp = new Array(N).fill(0).map(o => new Array(N).fill(0))
    }

    let res = 0

    for( let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            res +=prevDp[i][j]
        }
    }
    return res
}


/*

Time Complexity:
K * N^2

Space Complexity:
O(N^2)
*/