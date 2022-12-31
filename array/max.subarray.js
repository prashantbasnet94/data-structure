var maxSubArray2 = function(nums){

    if(nums.length == 1) return nums[0]
    if(nums.length == 0) return 0

    const dp = new Array(nums.length).fill(0).map(o => new Array(nums.length).fill(0))
    let maxSubArray = nums[0]

    for(let i = 0; i < nums.length ; i++){
        dp[i][i]= nums[i]
        maxSubArray = Math.max(maxSubArray, dp[i][i])

    }

/*
             0.  1.   2   3.  4    
            [5,  4,  -1,  7,  8]
      0  5   5   9    8   15  23 
      1  4       4    3    10  18
      2 -1           -1    6   14 
      3  7                 7   15
      4  8                     8

 */

    for(let col = 1; col < nums.length; col++){
        for(let row = 0; row < col; row++){
          // for 2 digit subarray


          if(row === col -1){
              dp[row][col] = nums[row] + nums[col]
          }else{
              dp[row][col] = dp[row][col - 1] + nums[col]
          }
           maxSubArray = Math.max(maxSubArray, dp[row][col])
        }
    }
    console.table(dp)
    return maxSubArray
}


// console.log(maxSubArray([5,4,-1,7,8]))



//kodanes algorithm

var maxSubArray = function(nums){
    let currentMax = nums[0], maxGlobal = nums[0]
//[5,4,-1,7,8]
    for(let i = 1; i < nums.length; i++){
        currentMax = Math.max(nums[i], nums[i] + currentMax )
        maxGlobal = Math.max(maxGlobal, currentMax)
        console.log(currentMax, maxGlobal)
    }
return maxGlobal
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
