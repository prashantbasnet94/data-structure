/*
    Maximum Subarray:
        Given an interger array nums, find the subarray with the largest sum, and return it's sum


        1. Hint:
            Since it's maximum sum with sub array i.e contiguous we can use kodane algo
*/


function maxSubArray(nums) {
    let
        currentSum = nums[0],
        maxSum = nums[0]

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i])
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum
}