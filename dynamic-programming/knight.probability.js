/*
On a given n * n chessboard, a knight piece will start at the r-th row and c-th column. The knight will attemp to make k moves

A night can move in 8 possible ways. Each move will chose on of these 8 at random. The knight contines moving until it finishes k moves or it moves off the 
chessboard. Return the probability that the knight is on the chessboard after it finishes moving.


n = 6, r = 2, c = 2

    0      1       2       3       4       5   

0           B              C 

1   A                               D

2                  *            

3   H                               E

4           G               F

5



Here,

A. If knight moves to position A, 

    0      1       2       3       4       5   

0                  0       

1   *                               

2                  0            

3         0                         

4           

5

there are 3 possible steps it stays in the chessboard and 5 possible steps it moves off the chessboard
so if we are calculating probability, this means that there is a 3/8 chance it will stay on board @ step 2
if we convert this to decimal place, this is 0.375

We keep track of that value, we now need to explore other paths as well

B. If knight moves to position B, 

    0      1       2       3       4       5   

0          *            

1                   0              

2    0              0                       

3                              

4           

5

we have 3/8 chances of staying on board whereas 5/8 chances of going off board. So our probability is 0.375


C. If knight moves to position C, 

    0      1       2       3       4       5   

0                          *            

1          0                               0                      

2                  0               0      

3                              

4           

5

we have 4/8 chances of staying on board whereas 4/8 chances of going off board. So our probability is 0.5



D. If knight moves to position D, 

    0      1       2       3       4       5   

0                  0                  

1                                   *            

2                  0

3                          0                0                      

4           

5

we have 4/8 chances of staying on board whereas 4/8 chances of going off board. So our probability is 0.5



E. If knight moves to position E, 

    0      1       2       3       4       5   

0                                    

1                          0                0                    

2                  0

3                                  *

4                   0

5                           0               0

we have 6/8 chances of staying on board whereas 2/8 chances of going off board. So our probability is 0.75


F. If knight moves to position F, 

    0      1       2       3       4       5   

0                                    

1                          

2                  

3          0                                0                      

4                           *

5          0                                0    

we have 4/8 chances of staying on board whereas 4/8 chances of going off board. So our probability is 0.5

G. If knight moves to position G, 

    0      1       2       3       4       5   

0                                    

1                          

2   0              0

3                          0               

4          *

5                          0

we have 4/8 chances of staying on board whereas 4/8 chances of going off board. So our probability is 0.5


H. If knight moves to position H, 

    0      1       2       3       4       5   

0                                    

1           0                     

2                   0

3    *              

4                    0   

5            0              

we have 4/8 chances of staying on board whereas 4/8 chances of going off board. So our probability is 0.5




Here are the probability:

0.375 
0.375
0.5
0.5
0.5
0.5
0.5
0.75

what is the chance that our knight will walk in any of these paths?
All even, 1 in 8 chance any
after adding up we end up getting 0.53125 as the final answer to return




Verify Constrains:

How many decimals do we round to?
Don;t round


Write out some test cases?


1. N = 6, k = 3, r = 2, c = 2

    0      1       2       3       4       5   

0           B              C 

1   A                               D

2                  *            

3   H                               E

4           G               F

5



2. 
    N = 0, k = 2, r = 5, c = 5
    return 0


3. 
    N = 2, k = 3, r = 1, c = 1
    
          k  
    ---|---
    ---|---

    here, knight will obvious go off board in any steps
    return 0


3. 
    N = 2, k = 0, r = 1, c = 1
    
          k  
    ---|---
    ---|---

    here, knight will not move, so probability that knight stays on the board is 1
    return 1








########### Finding Recurrence Relation ########

    0      1       2       3       4       5   

0           B              C 

1   A                               D

2                  *            

3   H                               E

4           G               F

5


Here, * => A i.e 
                                            F[4,3]
                                   E[3, 4]  /
                            D[1, 4] |     /    
                                \   |   /
                                 [2, 2]------ G[4, 1]
                                /  /| \
                        A[1, 0]   / |  \ 
                           B[0, 1]  |   H[3, 0]
                                 C[0, 3]         



                                 The relation is 

                                                       | c + 1
                                            | r + 2 ---| c - 1  
                                            |
                                            |          | c + 1     
                                            | r - 2 ---| c - 1    
                                 [r, c] ----|
                                            |          | r + 1 
                                            | c - 2 ---| r - 1 
                                            |
                                            |          | r + 1 
                                            | c + 2 ---| r - 1



                                                       | 2 + 1
                                            | 2 + 2 ---| 2 - 1  
                                            |
                                            |          | 2 + 1     
                                            | 2 - 2 ---| 2 - 1    
                                 [2, 2] ----|
                                            |          | 2 + 1 
                                            | 2 - 2 ---| 2 - 1 
                                            |
                                            |          | 2 + 1 
                                            | 2 + 2 ---| 2 - 1
                            






    0      1       2       3       4       5   

0           B              C 

1   A                               D

2                  *            

3   H                               E

4           G               F

5




                                                   | 3   [4, 3]                               
                                            | 4 ---| 1   [4, 1]
                                            |
                                            |      | 3   [0, 3]
                                            | 0 ---| 1   [0, 1]
                                 [2, 2] ----|
                                            |      | 3   [3, 0]
                                            | 0 ---| 1   [1, 0]
                                            |
                                            |      | 3   [3, 1]  
                                            | 4 ---| 1   [1, 4]
                            

                                    
                            


The recurrence relation:
                                    +        +           +        +  
                                row _ 2, col _ 1  && row _ 1, col _ 2





                                                          | 3 + 1  [6, 4]  => GOES OUT
                                            | R: 4 + 2 ---| 3 - 1  [6, 2]  => GOES OUT
                                            |
                                            |             | 3 + 1  [2, 4]  => STAYS IN
                                            | R: 4 - 2 ---| 3 - 1  [2, 2]  => STAYS IN
                                 [4, 3] ----|   
                                            |             | 4 + 1  [5, 1]  => STAYS IN
                                            | C: 3 - 2 ---| 4 - 1  [3, 1] => STAYS IN
                                            |
                                            |             | 4 + 1  [5, 5] => STAYS IN
                                            | C: 3 + 2 ---| 4 - 1  [3, 5] => STAYS IN
                             
























                        
*/

function knightProbabilityInChessboard( n, k, r, c){
    // if( r < 2 && c < 2) return 0
    if(k === 0) return 1
    console.log('intially @ 2, 2 we have possibilites of going to ', allPossibleSteps(r, c))

    return recusiveKnightSteps( n, k, allPossibleSteps(r, c),[])
}
function allPossibleSteps(row, col){
       /*
                                    +        +           +        +  
                                row _ 2, col _ 1  && row _ 1, col _ 2
       
       

        let 
            firstStep  = [row - 2, col - 1],
            secondStep = [row - 2, col + 1],
            thirdStep  = [row + 2, col - 1 ],
            fourthStep = [row + 2, col + 1],

            fifthStep  = [row + 1, col - 2],
            sixthStep  = [row - 1, col - 2],
            sevenStep  = [row + 1, col + 2],
            eightStep  = [row - 1, col + 2]


            i = 1 , j = 2

            row + i , col - j
            row + i , col + j 
            row - i , col - j
            row - i , col + j
            


            i = 2 , j = 1

            row + i , col - j
            row + i , col + j 
            row - i , col - j
            row - i , col + j
  */
    let j = 2, steps= []
    for(let i =1 ; i <= 2; i ++){
        steps.push([row + i, col - j])
        steps.push([row + i, col + j ])
        steps.push([row - i, col + j])
        steps.push([row - i, col - j])
        j--
    }
    return steps
}

function recusiveKnightSteps(n, k, allPossibleStepsInitially, probabilitiesOnBoad =[]){

    if(allPossibleStepsInitially.length === 0 || k === 0) return 
    let 
        dp = [],
        [nextRow, nextCol] = allPossibleStepsInitially.pop(),
        nextPossibleStepsFromHere = allPossibleSteps(nextRow, nextCol),
        nextPossibleStepsOnBoard = nextPossibleStepsFromHere.filter(o => {
                let
                    [row, col] = o,
                    wall = n - 1
                return row < wall && row > -1 && col < wall && col > -1

        }),
        probabilityOnboard = nextPossibleStepsOnBoard.length / 8
        allPossibleStepsInitially.push(...nextPossibleStepsFromHere)
        console.log('@ ',[nextRow, nextCol], ' next Possible Steps OnBoard ', nextPossibleStepsOnBoard, ' thus, probability on board:  ', probabilityOnboard)
        console.log('@ ',[nextRow, nextCol], ' we can further go to ', nextPossibleStepsFromHere)
        console.log('@ ',[nextRow, nextCol], ' updating allPossibleSteps to ', allPossibleStepsInitially)

    probabilitiesOnBoad.push(probabilityOnboard)
    k = k - 1
    recusiveKnightSteps(n, k , allPossibleStepsInitially, probabilitiesOnBoad)
    return probabilitiesOnBoad.reduce((acc, item) => acc = acc+ item, 0) / 8
}

console.log(knightProbabilityInChessboard(6, 2, 2, 2))





//*********  refactoring *****************

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

function recusiveKnightSteps2( n, k, r, c){

    if(r < 0 || r >= n || c < 0 || c >= n) return 0
    // 
    if( k === 0) return 1

    // now i need to expand on all possible direction
    let possibilites = 0
    // here remember we are calculating the overall probability based on what gets retured from every direction that we take
    // we know this value is going to be divided by 8
    // so we want to accumulate these values together
    for(let dir of directions ){
        // we then want to take our possibilites calculated and modify it
        // so we want to add it by what we get back from the recursive call from this direction
        // here we divide by 8 becaues it's one of the eighth possibilities that we could have taken
        possibilites += (recusiveKnightSteps2(n, k-1, r + dir[0], c + dir[1]))/8
    }
    return possibilites
}

console.log(recusiveKnightSteps2(6, 2, 2, 2))



//********* final refactoring *****************

 let test =0, test2 = 0
function refactoredKnightP(N, k, r, c ){
    // 1st thing we want to define is the boundry
    // if we are within our boundry if not return 0
    // base case
    if(r < 0 || r >= N || c < 0 || c >= N) return 0
    
    if(k === 0) return 1

    /*
        now going to the meat of the function
    
        Here, we are calculating the overall probability based on what gets return from direction that we take
        and we know this value is going to be divided by eight
    */
   let response = 0 

   for(let dir of directions){

        response += (refactoredKnightP(N, k -1 , r + dir[0], c + dir[1])) / 8
   }
   return response
}
 
/*
Time Complexity:
We are going to loop over eight different directions to perform eight differnt recursive calls
We are then going to perform k different levels of these recursive calls expanding by 8 differnt direciton.
Thus our performance is 8^k, which is really large exponential time performance.


As for the space, the stack is going to be eeuall this size
8^k



*/
console.log('6, 2, 2, 2',refactoredKnightP(6, 2, 2, 2))



// ########################## OPTIMIZITNG BIG O ######################

function knightOnBoardProb(n, k, r, c, dp = {}){
    if(r < 0 || r >= n || c < 0 || c >=n) return 0
    if(k===0) return 1

    let response = 0 
    for(let dir of directions){
        let
         nextRow =  r + dir[0],
         nextCol =  c + dir[1]
         if(dp[nextRow + '-' + nextCol]) {
            response += dp[nextRow + '-' + nextCol]
        }else{
            dp[nextRow + '-' + nextCol] =(knightOnBoardProb(n, k-1,nextRow, nextCol, dp)) / 8
            response += dp[nextRow + '-' + nextCol]
        }

    }
    return response
}


function knightProbability(){
    // main thing is to realize here we needed to initalize an array of 2D array
    // the array is going to hold the 2D array state at any given step of K
    let dp = new Array(k+1).fill(0).map( o => new Array(N).fill(0).map( o => new Array(N).fill(undefined)))
    return recursive(n, k, r, c, dp)
}

  /*
     when k === 3, we need to caluclate the probability of the other steps @ k = 2
     from k = 2, different steps probability we need to figure out what are the probabilities of those two steps by combining them with all of the probability @ k =1
     of all the different steps that we cloud have reached when k was equal to 2
     once we go top down, we figure out all the probabilities, we come back up, we add all those values together, and we also make sure not to duplicate any of the value
   
     The main thing here is to realize that crux of the calculation is dependent on k
     
         0      1       2       3       4       5   

        0           B              C 

        1   A                               D

        2                  *            

        3   H                               E

        4           G               F

        5

     K is what dictates that there are overlapping steps because if you fall in the same place on the board but your k value is different, you can't guarentee the probability is 
     going to be the same. Because if you have 5 remaining steps from  F versus 1 remaining step, the probability of you being on chessboard is vastly differnt calculation
   
     */

function recursive(n, k, r, c, dp ){
    if(r < 0 || r >= n || c < 0 || c >=n) return 0
    if(k===0) return 1

    if(dp [k][r][c] !== undefined) return dp[k][r][c]
    let response = 0
    for(let dir of directions){
        response += (knightOnBoardProb(n, k-1, r + dir[0], c + dir[1], dp)) / 8
    }
   dp[k][r][c] = response
   return dp[k][r][c]
}

/*
    Time Complexity:
    We are iterating over k different steps, @ every step how many recursive call can we make?
    How many values can we fill for that given step?

    in worst case, where we have a lot of steps, you can imagine that we propagate a bunch of steps down and we end up filling every single value
    in the 2D grid becuause every value might be able to be reached

    if that;s the case, then there are n^2 different values we can fill for that grid.

    At the same time, we need to multiply it by k becuase every single step down is represented by a brand new grid

    Space complexity:
    Going to be the same as time complexity i.e O(N^2 * k),because that's the size of our dp
    
*/
console.log(knightOnBoardProb(6, 2, 2, 2))
