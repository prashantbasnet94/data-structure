/*
    Product of array  except self


    Logic:

        [1, 2, 3, 4]

        1. Build a product array as you iterate over given array
        [1, 2, 6, 24]

        2. Now again iterate over array 
        [24, 12, 8, 6]

        how did we get this?
        we took the max of the arrray and divide by element at that place




calculating the total product array for each position and then calculating the max in the array,
then iterating again and divingng the max by the current item in the position will this approach work? 

No, the approach will not work correctly. Dividing the maximum product by the current item at each position will not give the desired result.The reason is that when you divide by the current item, 
you are essentially excluding that item from the product calculation. However, there may be other elements in the array that are zero, and dividing by zero would result in incorrect values.
Additionally, finding the maximum product separately and then dividing by each item would not account for the possibility of multiple zero elements in the array, which would make the entire product zero.

To correctly calculate , the algorithm needs to calculate
    1. the prefix product (product of elements to the left)
    2. the suffix product (product of elements to the right) for each element
    3. then combine them.

The algorithm takes this approach, which runs in linear time complexity (O(n)) and fulfills the requirements of the problem.

*/

function productOfArrayExceptSelf(nums){
    if(nums.length === 0) return []
    const dp = new Array(nums.length)
    dp[0] = nums[0]
    let max = nums[0]
    // this will build the product array
    for(let i = 1; i < nums.length; i++){
        dp[i] = dp[i - 1] * nums[i];
        max = Math.max(max, dp[i]);
    }

    const result = new Array(nums.length)
    for(let index in nums){
        if(nums[index] === 0){
            result[index] = 0;
        }else{
            result[index] = max / nums[index]
        }
    }
    return result
}

console.log(productOfArrayExceptSelf([1, 2, 3, 4]))
