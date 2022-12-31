/*
    Longest Palindromic Subsequence:

    bbbab => 
            0   1   2   3   4
            b   b   b   a   b
     0  b   1   2   3 . 3 . 2 + (dp[1][3]) = 4
     1  b       1   2   2   3
     2  b           1   1   3 
     3  a               1   1
     4  b                   1

    for 'bb', row = 0, col = 1

    if(row = col -1 && input[row] === input[col]){
        // 2 char palindrome
    }

    // for single char => 1
    // for substring of size 2, then 2
                                                                                            character        
    // for substring of 2+ length if palindrome = for first and last char i.e 2 + remaining i.e recusion(row + 1, col -1)

    if(input[row] === input[col] && dp[row + 1][col -1] === 1)

 
      0   1   2   3   4
      b   b   b   a   b

      if(input[row] === input[col]){
        dp[row][col] = 2 + recursion(input, row -1, col -1, dp)
      }


      0   1   2   3  
      b   b   b   a   

      Math.max(recusion(input, i + 1, j,  dp), recusion(input, i , j-1, dp))




            b   b   b   a   b
┌─────────┬───┬───┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │ 3 │ 4 │
├─────────┼───┼───┼───┼───┼───┤
│    0    │ 1 │ 1 │ 2 │ 2 │ 2 │
│    1    │ 0 │ 1 │ 1 │ 1 │ 1 │
│    2    │ 0 │ 0 │ 1 │ 1 │ 1 │
│    3    │ 0 │ 0 │ 0 │ 1 │ 1 │
│    4    │ 0 │ 0 │ 0 │ 0 │ 1 │
└─────────┴───┴───┴───┴───┴───┘
*/



function lpsRecusive(input){
    return recursionLPS(input, 0 , input.length - 1)
}

function recursionLPS(input, row, col){
    
    // single char
    if(row === col){
        return 1
    }

    // substring of length 2 and are equal
    if(row === col -1 && input[row] === input[col]){
        return 2
    }

    if(input[row] === input[col]){
        return 2 + recursionLPS( input, row + 1, col -1)
    }

    // for all the non matching char
    return Math.max(recursionLPS(input, row +1 , col), recursionLPS(input, row, col -1))
}  

console.log(lpsRecusive('bbbab') === 4)
console.log(lpsRecusive('cbbd') === 2)
console.log(lpsRecusive('aabaaba'))


function iterativeApproach(input){

    let dp = new Array(input.length).fill(0).map( o => new Array(input.length).fill(0))

     for(let col = 1; col < input.length; col++){
        for(let row = 0; row < col; row++){
            // substring of length 2 and both are same
            if(row === col){
                dp[row][col] = 1
            }else if(row === col -1 && input[row] === input[col]){
                dp[row][col] = 2
            }else if(input[row] === input[col]){
                dp[row][col] = 2 + dp[row + 1][col -1]
            }else{
               dp[row][col]= Math.max(dp[row +1][col], dp[row][col -1])
            }

        }
    }
    return dp[0][input.length - 1]
}

console.log(iterativeApproach('bbbab') === 4)
console.log(iterativeApproach('cbbd') === 2)
console.log(iterativeApproach('aabaaba'))

