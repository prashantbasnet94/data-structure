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













function bruteForce2(nums) {
    /*
              0  1   2  3   4  5  6  7   8 
            [-2, 1, -3, 4, -1, 2, 1, -5, 4]

    */
    let maxSum = 0
    for (let i = 0; i < nums.length; i++) {
        // comparing 1st element with all the others
        let currentSum = 0
        for (let j = 0; j < nums.length; j++) {
            if (j >= i) {
                currentSum += nums[j]
                maxSum = Math.max(currentSum, maxSum)
            }
        }
    }
    return maxSum
}



function bruteForce(nums) {
    let maxSum = nums[0]
    for(i = 0; i < nums.length; i++){
        let currentSum = 0
        for (let j = i; j < nums.length;j++){
            currentSum += nums[j]
            maxSum = Math.max(maxSum, currentSum) 
        }
    }
    return maxSum
} 
/*
multiple ways this can be solved using brute force 
but the point to be noted is how are you going to compare it in contiguous way?

the inner loop can be 
for( j = 0; j < nums.length; j++){
    if(j>=i){
        currentSum += nums[i]
        maxSum = Math.max(maxSum, currentSum)
    }
}


for(j = i; j< nums.length; j++){
    here also j only comparison continues to be contiguous

}

now let's see how we can optimize this

When we are dealing with 1D array, which is asking for max/min problem to solve
and solve it in contagious way.

We have few ways we can solve it:

Key Techniques:
a. Kadane's Algorithm:
Often the go-to for max/min subarray sum problems
O(n) time complexity, O(1) space


here we will use kodane's algo

*/

function kodandeMaxSubArray(nums){
    let currentSum = nums[0]
    let maxSum = nums[0]

    for(let i = 1; i < nums.length; i++){
        currentSum = Math.max(nums[i], nums[i] + currentSum)
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum
}

console.log(bruteForce([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(bruteForce([5,4,-1,7,8]))


console.log(kodandeMaxSubArray( [3, -2, 5, -1, 2, 6, -3, 1, 4, -2]))







function maxSubArray1(nums){
    // 
    
    /*
      0  1   2  3   4  5  6  7  8
    [-2, 1, -3, 4, -1, 2, 1, -5, 4]
        let leftPointer = 0
        let rightPoiner = lp+1



        -2 + 1 = -1
        -1 + -3 = -2
        -2 +  4 = 2 
   


        when the leftPointer slides vs when rightPointer slides?

        1.leftPointerSlided when the a new max is found?
         lp = 3
        rp = 3+1  =4
        max = 2 

       rp++



        2. rightpointer slides in each step
    */

        let currrentSum = nums[0] 
        let maxSum = nums[0]


        for(let i = 1; i< nums.length; i++){
            currrentSum = Math.max(nums[i], nums[i] + currrentSum)
            maxSum = Math.max(maxSum, currrentSum)
        }
        return maxSum
    }



    function maxSubArray2(nums){
        let currentSum = nums[0]
        let maxSum= nums[0]

        for(let i = 1; i < nums.length; i++){
            currentSum = Math.max(nums[i], nums[i] + currentSum)
            maxSum = Math.max(currentSum, maxSum)
        }
        return maxSum
    }


    