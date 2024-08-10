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












function bruteForceApproach(nums) {
    let output = []
    for (let i = 0; i < nums.length; i++) {
        // calculating product for i
        let product = 1
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                product *= nums[j]
            }
        }
        output[i] = product
    }
    return output
}
console.log(bruteForceApproach([-1,1,0,-3,3]))

/*
this brute froce approach has a time complexity of O(N*N), which does not meet the requirement of O(N)

What's the problem?
Main problem is redundant calculation. For each element in the output array, it recalculated the product of all the other elements,
 even though some of the product could have been reused from previous calculations. 



 Brainstorming?

 To optimize the solutions in O(N), we need to find a way to avaoid the redundant calculations and resue the itermediate results as much as possible. 

Oneway to calulate the product of array @ i, without i = prefix(i) * postfix(i)


1. Calculate Left Products:
    Traverse the product from left to right and compte the product of all elements to the left of each element
    prefix[i] = nums[i -1] * prefix[i-1]
2. Calculate Right Products:
    Traverse the array from right to left, compute the product of all elements to the right of each element. 
    postfix[i] = nums[i + 1] * prefix[i+1]

3. Combine Left and Right Products
    By multiplying left[i] * right[i]


*/

function optimize(nums){
    let prefix = []
    // becuase there is prefix to 0,
    prefix[0] =1
    for(let i =1; i<nums.length;i++){
        prefix[i] = nums[i-1] * prefix[i-1]
    }

    let postfix = []
    // no elemnets to the rtight of the last element so it is 1
    //calculation start from n-2, to account for this n-1 i.e 1
    postfix[nums.length-1] = 1
    for(let i = nums.length -2; i >=0;i--){
        postfix[i] = nums[i+1] * postfix[i+1]
    }

    let output = []
    for (i =0; i< nums.length; i++){
        output[i] = prefix[i] * postfix[i]
    }
    return output
}

console.log(optimize([1,2,3,4]))
console.log(optimize([-1,1,0,-3,3]))


function optimize2(nums){
    let prefix = []
    let postfix = []
    let len = nums.length

    //there is no prefix to 0, so
    prefix[0]  = 1
    
    //@ postfix , no element to the right of last element so 1
    // array is valid from 0 to n-1
    postfix[len - 1]  = 1


    //calculating prefix
    for (let i = 1; i < len; i++){
        prefix[i] = nums[i - 1] * prefix [i -1]
    }

    // calculating postfix
    //also to account for n-1, which is last element to the right
    for(let i = len -2; i>=0; i--){
        postfix[i] = nums[i+1] * postfix[i + 1]
    }

    let finalResult = []

    for(let i = 0; i < len; i++){
        finalResult[i] = prefix[i] * postfix[i]
    }

    return finalResult
}


// to furhter optimze this with only result array

function optimize(nums){
    let productLHS = 1
    let result = []

    for(let i = 0; i < nums.length; i++){
        result[i] = productLHS 
        productLHS *=nums[i]
    }

    let productRHS = 1
    for(let i = nums.length -1; i >=0; i--){
        result[i] *= productRHS 
        productRHS *=nums[i]
    }
    return result
}