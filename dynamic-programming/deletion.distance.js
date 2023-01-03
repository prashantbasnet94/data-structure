
/*

Test Cases:
 #1.

     A = 'Heat' , B = 'Hit'

     ea & i should be deleted  to get ht 

 #2.
        
     A = '', B = 'Hit'
    return 3

#3
    A = 'abcdef' , B = 'cde'
    return 3


#4
    A = 'test' , B = 'tt'
    return 2





Approach:
// we are trying on different combination so dynamic programming is one of the solution we can implement

*/

let count1= 0, count2 = 0
function deletionDistance(input1, input2){

    const dp = new Array(input1.length).fill(0).map(o => new Array(input2.length))
    // const dp = new Array(input1.length + 1).fill(0).map(o => new Array(input2.length + 1))

    let longestCommonSubsequence = recursion(0, 0, input1, input2)
    longestCommonSubsequence2 = dpUsingMemoization(0, 0, input1, input2, dp)

    return input1.length + input2.length - (2 * longestCommonSubsequence2)
}


function recursion(i, j, A, B){
    count1 +=1
    if(A[i] === undefined || B[j] === undefined){
        return 0
    }else if(A[i] === B[j]){
        return 1 + recursion(i + 1, j + 1, A, B)
    }else{
        return Math.max(recursion(i + 1, j , A, B), recursion(i, j + 1, A, B))       
    }
}

function dpUsingMemoization(i, j, A, B, dp){
    count2 +=1
    if(A[i] === undefined || B[j] === undefined){
        return 0
    }else if(A[i] === A[j]){
        if(dp[i][j])return dp[i][j]
        dp[i][j] = 1 + dpUsingMemoization(i + 1, j + 1, A, B, dp)
        return dp[i][j]
    }else{
        if(dp[i][j]) return dp[i][j]

        dp[i][j] = Math.max(dpUsingMemoization(i + 1, j , A, B, dp), dpUsingMemoization(i, j + 1, A, B, dp))
        return dp[i][j]
    }
}


console.log(deletionDistance('heat', 'hit'))

console.log('looped total times without memoziation', count1)
console.log('with memoization looped :', count2)
