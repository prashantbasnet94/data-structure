/*

    basically camparing two values in an arrary

    [1, 7, 3, 4, 5, 6, 2]

    we need a left pointer and a right pointer and a tracker to track the increasing subsequence at every position
*/
function lis( A) {

    // to track the number of increasing subsequence
    let max = 0

    const dp = new Array(A.length).fill(1)
    for (let left = 0; left < A.length; left++) {
        for (let right = left + 1; right < A.length; right++) {
            if (A[ left ] < A[ right ]) {
                dp[ right ] = Math.max(dp[ right ], dp[ left ] + 1)
                max = Math.max(max, dp[ right ])
            }
        }
    }
    return max
}
