/*
     r   c
    [10, 9, 2, 5, 3, 7, 101, 18]

dp  [1, 1, 1....., 1]


if(input[row] < input[col]){
    dp[col] = Math.max(dp[col], 1 + dp[row])
    max = Math.max(max, dp[col])
}




*/

function LIS(nums) {
    let dp = new Array(nums.length).fill(1), max = 1

    for (let col = 1; col < nums.length; col++) {
        for (let row = 0; row < col; row++) {
            if (nums[row] < nums[col]) {
                dp[col] = Math.max(dp[col], 1 + dp[row])
                max = Math.max(max, dp[col])
            }
        }
    }

    return max
}

console.log(LIS([10, 9, 2, 5, 3, 7, 101, 18]) === 4)
console.log(LIS([0, 1, 0, 3, 2, 3]) === 4)

console.log(LIS([7, 7, 7, 7, 7, 7, 7]) === 1)
console.log(LIS([100, 4, 200, 1, 3, 2]) === 4)




/*

    Logic:
        1. Setup a dp of same size as given array
        2. fill it with 1
        3. Have two pointer
            i. left and right
      starts @   0        1


      input[left] < input[right]{
        dp[right] = Math.max(dp[right], 1 + dp[left])
        max = Math.max(max, dp[right])
      }


*/


function revisionLIS(input) {
    const dp = new Array(input.length).fill(1)
    let max = 0
    for (let right = 1; right < input.length; i++) {
        for (let left = 0; left < right; left++) {
            if (dp[left] < dp[right]) {
                dp[right] = Math.max(dp[right], 1 + dp[left])
                max = Math.max(max, dp[right])
            }
        }
    }
    return max
}

function reviseLIS(nums) {
    /*
        Answer can be derived from comaparing each value to it's previous
        so we can break bigger problem into smaller problem

        i.e

            if(nums[left] < nums[right]){
                // then we can increment the LIS_COUNTER_SO_FAR by 1
                 LIS_COUNTER = LIS_COUNTER + 1


                 is this the complete logic?


```javascript
if (nums[left] < nums[right]) {
    LIS_COUNTER = LIS_COUNTER + 1;
}
```

Using this logic, let's walk through the example array `[4, 2, 5, 1, 3]`:

1. At index `left = 0` and index `right = 1`: `nums[left] = 4` and `nums[right] = 2`. Since `nums[left] < nums[right]` is false, we do not increment `LIS_COUNTER`.

2. At index `left = 0` and index `right = 2`: `nums[left] = 4` and `nums[right] = 5`. Since `nums[left] < nums[right]` is true, we increment `LIS_COUNTER` by 1.

3. At index `left = 0` and index `right = 3`: `nums[left] = 4` and `nums[right] = 1`. Since `nums[left] < nums[right]` is false, we do not increment `LIS_COUNTER`.

4. At index `left = 0` and index `right = 4`: `nums[left] = 4` and `nums[right] = 3`. Since `nums[left] < nums[right]` is false, we do not increment `LIS_COUNTER`.

5. At index `left = 1` and index `right = 2`: `nums[left] = 2` and `nums[right] = 5`. Since `nums[left] < nums[right]` is true, we increment `LIS_COUNTER` by 1.

6. At index `left = 1` and index `right = 3`: `nums[left] = 2` and `nums[right] = 1`. Since `nums[left] < nums[right]` is false, we do not increment `LIS_COUNTER`.

7. At index `left = 1` and index `right = 4`: `nums[left] = 2` and `nums[right] = 3`. Since `nums[left] < nums[right]` is true, we increment `LIS_COUNTER` by 1.

After iterating through the entire array, `LIS_COUNTER` would have a value of 3.
Which is not correct.





To find the length of the LIS, we need to consider the previous elements in the array and their contributions to the increasing subsequence
            how do we know this?
                we can have a dp array  that will give us the contribution to the increasing subsequence

            }

            enhancement we can do:

    */
}



/*


    we can say lic at every position is atleast 1

    if at any point element[left] < elment[right], we can say LIS @ right is atleast LIS @ left + 1

    if elenent @ right is greater than element @ left,
        right moves forward

    else
        we do nothing to
        we increment left by 1


    if @ any point left meets right
        we reset the loop
        left starts @ 0
        right starts where it was + 1

*/

function longestIncreasingSub(array) {
    let dp = new Array(array.length).fill(1)
    let max = 0
    for (let left = 0; left < array.length; left++){
        for (let right = left + 1; right < array.length; right++){
            if (array[ left ] < array[ right ]) {
                dp[ right ] = Math.max(dp[ right ], dp[ left ] + 1)
                max = Math.max(max, dp[right])
            }
        }
    }
    return max
}


function lcs(A, B, i, j, dp) {
    if (A[ i ] === undefined || B[ j ] === undefined) {
        return 0
    }
    if (A[ i ] === B[ j ]) {
        return 1 + lcs(A, B, i+1, j+1)
    }

    return Math.max(lcs(A, B, i + 1, j), lcs(A, B, i, j + 1))
}