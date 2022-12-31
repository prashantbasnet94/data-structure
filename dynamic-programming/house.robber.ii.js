/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function (nums) {

    /*
        [ A, B, C, D, E, F]
                        A
                    
                    F        B
    
                    E        C
                        
                        D




     0  1. 2. 3
    [3, 2, 1 ,1]
     1  2  3  4  

dp =[3, 2, 4, 3]

    dp[3] = nums[3] + dp[lastIndex - 2]




     0  1. 2. 3  4   
    [3, 2, 1 ,1, 5]
     1  2  3  4  5

    */
    return Math.max(houseRobberI(nums.slice(1)), houseRobberI(nums.slice(0, nums.length - 1)))
    
};

function houseRobberI(nums){
    if (nums.length === 0) return 0
    if (nums.length < 3) return Math.max(...nums)

    const dp = []
    dp[0] = nums[0]
    dp[1] = nums[1]
    dp[2] = dp[0] + nums[2]


    for (let houses = 3; houses < nums.length; houses++) {
        dp[houses] = Math.max(dp[houses - 2] || 0, dp[houses - 3] || 0) + nums[houses]
    }
     return Math.max(dp[nums.length - 1 ], dp[nums.length - 2])

}


console.log('rob' ,rob([1,2,1,1]))
console.log('rob' ,rob([2,9,7,1]))