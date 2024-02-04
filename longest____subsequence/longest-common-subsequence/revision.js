/*
     "abcde"
     "ace"

     ace
     return 3

                    "abcde" "ace"
                        |
                    1+ bcde ce      since b and c are not equal
                   /              1 \
             cde   ce                bcde e
             /                        /      \
          1 + de e                cde e     bcde ''
          /                      1   / \             0
       e  e                    de e   cde
        /                        / \       0
      1                      e e   de ''
                            1     0







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








                            */



function lcs(A, B) {
    return recursionLcs(0, 0, A, B)
}

function recursionLcs(i, j, A, B) {
    if (A[i] === undefined || B[j] === undefined) {
        return 0
    } else if (A[i] === B[j]) {
        return 1 + recursionLcs(i + 1, j + 1, A, B)
    } else {
        return Math.max(recursionLcs(i + 1, j, A, B), recursionLcs(i, j + 1, A, B))
    }
}

console.log(lcs('abcde', 'ace') === 3)
console.log(lcs('abc', 'abc') === 3)



function recursiveRevision(i, j, A, B) {
    if (A[i] === undefined || B[j] === undefined) {
        return 0
    } else if (A[i] === B[j]) {
        return 1 + recursiveRevision(i + 1, j + 1, A, B)
    } else {
        return Math.max(recursiveRevision(i + 1, j, A, B), recursiveRevision(i, j + 1, A, B))
    }
}

// now how to optimize using the dynamic programming


function lcsRevision(a, b) {
    const dp = new Array(a.length).fill(0).map(o => new Array(b.length).fill(0))

    /*
        0   1   2   3
     1  0   0   0   0
     2  0
     3  0
     4  0
    */


    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0
            }
        }
    }
}


function recursiveDp(i, j, A, B, dp) {

    if (A[i] === undefined || B[j]) {
        return 0
    } else if (A[i] === B[j]) {
        if (dp[i][j]) return dp[i][j]
        dp[i][j] = 1 + recursiveDp(i + 1, j + 1, A, B, dp)
        return dp[i][j]
    } else {
        dp[i + 1][j] = recursiveDp(i + 1, j, A, B, dp)
        dp[i][j + 1] = recursiveDp(i, j + 1, A, B, dp)
        return Math.max(dp[i + 1][j], dp[i][j + 1])
    }
}

function iterativeApproach(a, b) {

    /*
            0   1   2   3
            A   C   D   F
    0    A
    1    B
    2    C
    3    D              *



    */

    // a = ACDF, a.length = 4
    // b = ABCD, b.length = 4
    // at then end we need to return dp[a.length -1][b.length -1]
    const dp = new Array(a.length).fill(0).map(o => new Array(b.length).fill(0))


    for (let i = 1; i < a.length; i++) {
        for (let j = 1; j < b.length; j++) {
            // if matched diagonal + 1
            if (a[i] === b[j]) {
                // go to diagonal and add 1
                dp[i][j] = 1 + dp[i - 1][j - 1]
                // not matched max of (row -1 , col -1)
            } else {
                // take max of left and top
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    // gives us  size of longest common subsequence
    return dp[a.length - 1][b.length - 1]



    /*
     what is the longest common subsequence
     Let's trace back:
        1. Trace result with the last row and last col
            i.
    */
}