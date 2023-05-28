/*
     r   c
    [10, 9, 2, 5, 3, 7, 101, 18]

dp  [1, 1, 1....., 1]


if(input[row] < input[col]){
    dp[col] = Math.max(dp[col], 1 + dp[row])
    max = Math.max(max, dp[col])
}




*/

function LIS (nums){
    let dp = new Array(nums.length).fill(1), max = 1

    for(let col = 1; col < nums.length; col++){
        for(let row = 0; row < col; row++){
            if(nums[row] < nums[col]){
                dp[col] = Math.max(dp[col], 1 + dp[row])
                max = Math.max(max, dp[col])
            }
        }
    }
 
    return max
}

console.log(LIS([10,9,2,5,3,7,101,18])=== 4)
console.log(LIS([0,1,0,3,2,3])=== 4)

console.log(LIS([7,7,7,7,7,7,7]) === 1 )
console.log(LIS([100,4,200,1,3,2]) === 4)