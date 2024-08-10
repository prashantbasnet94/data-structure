/*
    Max Product Subarray:
        Find the subarray that has the largest product


*/


function kodaneMaxProduct(nums) {
    let
        currentMax = nums[0],
        globalMax = nums[0]

    for (let i = 0; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax * nums[i])
        globalMax = Math.max(globalMax, currentMax)
    }
    return globalMax
}


// above code doesn't handle -ve numbers

function kodanaeMaxProduct2(nums) {
    let
        currentMax = nums[0],
        currentMin = nums[0],
        globalMax = nums[0]

    for (let i = 0; i < nums.length; i++) {
        let
            tempMax = nums[i] * currentMax,
            tempMin = nums[i] * currentMin

        currentMax = Math.max(nums[i], tempMax, tempMin)
        currentMin = Math.min(nums[i], tempMax, tempMin)
        globalMax = Math.max(globalMax, currentMax
        )
    }

}










function maxSubArray(nums){
    let currentProduct = nums[0]
    let maxProduct = nums[0]


    for (let i = 1; i < nums.length;i++){
        currentProduct = Math.max(nums[i], nums[i] * currentProduct)
        maxProduct = Math.max(currentProduct, maxProduct)
    }
    return maxProduct
}

// here this piece of code does not handle -ve number for example
/*
      0   1   2
    [-2,  3, -4]


    cP  = -2
    mP  = -2

    cp = Math.max(3, 3 * -2) = 3
    mp = Math.max (-2, 3) = 3



    cp = Math.max(-4 , -4 * 4) = -4
    mp = Math.max(3, -4)  =3



    so now let's see how we can handle this situation of -ve number
    Unlike sum, where a negative number always reduces the sum,
    a negative number in a product can potentially increase the product if multiplied by another negative number.


    Positive numbers behavior:
        When dealing with only positive numbers, keeping track of the maximum product is sufficient. 
        Each new number either starts a new subarray or extends the existing one if it increases the product.

    Negative numbers introduce complexity:
        A negative number can turn a very small (negative) product into a very large (positive) product.
        Conversely, it can turn a very large (positive) product into a very small (negative) product.

    Why we need both max and min:

    The maximum product up to the current position might become the minimum product in the next step if multiplied by a negative number.
    The minimum product up to the current position might become the maximum product in the next step if multiplied by a negative number.
    
Let's look at an example: [-2, 3, -4]
Step 1: num = -2
maxProduct = -2
minProduct = -2

Step 2: num = 3
tempMax = max(3, -2 * 3) = 3
tempMin = min(3, -2 * 3) = -6
maxProduct = 3
minProduct = -6

Step 3: num = -4
tempMax = max(-4, 3 * -4, -6 * -4) = 24  // The min from previous step gives max here
tempMin = min(-4, 3 * -4, -6 * -4) = -12
maxProduct = 24
minProduct = -12



In this example, at step 3, the minimum product from step 2 (-6) becomes crucial in calculating the maximum product (24) when multiplied by the next negative number (-4).
By keeping track of both the maximum and minimum products at each step, we ensure that:

We don't miss the opportunity to flip a very negative product to a very positive one.
We're prepared for the next number, whether it's positive or negative.

This approach allows us to handle any combination of positive and negative numbers, ensuring we find the true maximum product subarray.
*/

function handleNegativeNum(nums){
    let maxProduct = nums[0]
    let minProduct = nums[0]
    let globalMax = nums[0]

    for(let i = 1; i < nums.length; i++){
        let tempMin = minProduct * nums[i]
        let tempMax = maxProduct * nums[i]

        minProduct = Math.min(nums[i], tempMin, tempMax)
        maxProduct = Math.max(nums[i], tempMin, tempMax )
        globalMax = Math.max(globalMax, minProduct, maxProduct)
    }
    return globalMax
}









function maxProductArray(nums){
    let minProduct = nums[0]
    let maxProduct = nums[0]
    let globalMax = nums[0]

    for(let i = 1; i < nums.length; i++){
        let tempMax = nums[i] * minProduct
        let tempMin = nums[i] * maxProduct

        minProduct = Math.min(nums[i], tempMax, tempMin)
        maxProduct = Math.max(nums[i], tempMax, tempMin)
        globalMax = Math.max(globalMax, minProduct, maxProduct)
    }
    return globalMax
}