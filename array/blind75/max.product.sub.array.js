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