function lcs(A, B){

    const dp = new Array(A.length).fill(0).map(o => new Array(B.length).fill(undefined))
    return recusion2(0, 0, A, B, dp)
}

function recusion(i , j, A, B){
   // base case
   if( A[i] === undefined || B[j] === undefined){
        return 0
   }

    if(A[i] === B[j]){
        return 1 + recusion(i + 1, j + 1, A, B)
    }else{
        return Math.max(recusion(i + 1, j , A, B) , recusion(i , j+ 1, A, B))
    }

}

console.log(lcs( "abcde",  "ace" ))
console.log(lcs( 'abc',  "abc" ))


// now using memoization:

function recusion2(i , j, A, B, dp){
    // base case
    if( A[i] === undefined || B[j] === undefined){
         return 0
    }
 
     if(A[i] === B[j]){
        if(dp[i][j]) return dp[i][j]
        dp[i][j]= 1 + recusion(i + 1, j + 1, A, B)
     }else{
        dp[i][j]=  Math.max(recusion2(i + 1, j , A, B, dp) , recusion2(i , j+ 1, A, B,dp))
     }
     return dp[i][j]
 
 }