/*

                    ('abcde', 'ace')
                    ______|______
                   |            |
          ('bcde', 'ce')   ('abcde', 'ce')
             ______|______         |
            |            |        |
       ('cde', 'ce')   ('bcde', 'e')  ('bcde', '')
          ______|______   |
         |            |  |
    ('de', 'e')   ('cde', '')  ('cde', '')
         |            |
    ('e', 'e')    ('de', '')
         |
    ('', '')



To solve any longest .....  Subsequence problem, we can use recursion and memoization

let's implement a recursion function


    function recursion(i, j, A, B){
        // if any of the char is undefined return 0
        if(A[i] === undefined || B[j] === undefined){
            return 0
        }

        if(A[i] === B[j]){
            // if the char is equal, we can add 1 to the result and move to the next char
            return 1 + recursion(i + 1, j + 1, A, B)
        }else{
            // if the char is not equal, we can either move to the next char in A or B
            return Math.max(recursion(i + 1, j, A, B), recursion(i, j + 1, A, B))
        }
    }


    this can be optimized using memoization


    function recursion(i, j, A, B, dp){
        // if any of the char is undefined return 0
        if(A[i] === undefined || B[j] === undefined){
            return 0
        }
        if(A[i] === B[j]){
            if(dp[i][j]) return dp[i][j]
            // if the char is equal, we can add 1 to the result and move to the next char
            dp[i][j] = 1 + recursion(i + 1, j + 1, A, B)
            return dp[i][j]
        }else {
            //return Math.max(recursion(i + 1, j, A, B), recursion(i, j + 1, A, B))
            dp[i + 1][j] = recursion(i + 1, j, A, B)
            dp[i][j + 1] = recursion(i, j + 1, A, B)

            return Math.max(dp[i + 1][j], dp[i][j + 1])

        }


    }
*/

                                                                    // this value has to be checked if -1 then we check -1 in fucn
const dp = new Array(A.length).fill(-1).map(o => new Array(B.length).fill(undefined))
function lcs(i, j, A, B, dp) {
    if (A[ i ] !== undefined || B[ j ] !== undefined) {
        return 0
    }

// just fill up the last element with undefiend
    if (dp[ i ][ j ] !== undefined) {
        return dp[i][j]
    }

    if (A[ i ] === B[ j ]) {
        dp[ i ][ j ] = 1 + lcs(i + 1, j + 1, A, B, dp)
    } else {
        dp[i][j] = Math.max(lcs(i + 1, j, A, B, dp), lcs(i, j + 1, A, B, dp))
    }
    return dp[i][j]
}
