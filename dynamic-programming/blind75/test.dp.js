A = "abcdef"
B = "efg"


const dp = new Array(A.length).fill(0).map(o => new Array(B.length).fill(-1))
function lcs(i, j, A, B, dp){
    if (i > A.length || j > B.length) {
        return 0
    }
    if (dp[ i ][ j ]) {
        return dp[i][j]
    }
    if (A[ i ] === B[ j ]) {
        dp[ i ][ j ] = 1 + lcs(i + 1, j + 1, A, B, dp)
    } else {
        dp[i][j] = Math.max(lcs(i + 1, j, A, B), lcs(i, j+1, A, B))
    }
    return dp[i][j]

}