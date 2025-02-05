/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let prefix = [nums[0]]
    for(let i = 1 ; i < nums.length; i++){
        prefix[i] = prefix[i - 1] * nums[i]
    }

      
    let suffix = []
    
    suffix[nums.length-1] = 1
    for(let i = nums.length -1; i>=0; i--){
        suffix[i] = nums[i] * suffix[i]
    }
    console.log({prefix, suffix})

    let result = []
    for(let i = 0; i< nums.length; i++){
        result[i] = prefix[i] * suffix[i]
    }

    return result
};

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,1,0,-3,3]))