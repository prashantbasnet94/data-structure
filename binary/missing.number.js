var missingNumber = function(nums) {
  /*
    nums = [3, 0, 1]
    output = 2

    since there are 3 numbers, so all numbers are in the range = [0, 1, 2, 3] 
    comparing [0, 1, 2, 3] with [3, 0, 1] we can see that 2 is missing
    return 2






    nums = [0,1]

    since there are 2 numbers, the range is [0, 1, 2]
    comparing [0, 1, 2] with [0,1] 
    return 2






  */


    for(let i = 0; i <= nums.length; i++){
        if(nums.indexOf(i) === -1){
            return i
        }
    }


};

console.log(missingNumber([3, 0, 1])) // 2
console.log(missingNumber([0,1])) // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])) // 8


function reducer(nums, currentValue){
    if(nums.indexOf(currentValue)=== - 1){
        return currentValue
    }
    return reducer(nums, currentValue + 1)
}

console.log(reducer([3, 0, 1], 0)) // 2
console.log(reducer([0,1], 0)) // 2
console.log(reducer([9,6,4,2,3,5,7,0,1], 0)) // 8


/*

    1. here we are iterating throguth the ranage of numbers from 0 to n
    2. we are checking if the current number is in the nums array
    so basically, we are implementing o(n^2) solution



    now let's see how we can implement o(n) solution

    XOR operation

    Xor operation is a bitwise operation that returns 1 if the bits are different and 0 if the bits are the same
    represented by the symbol ^


    Xor  = 2 ^ 3 = 1
    Xor = 2 ^ 2 = 0
    Xor = 3 ^ 3 = 0
    Xor = 3 ^ 2 ^ 3 = 


    Xor of same numbers is 0

    now looking that the 
    range = [3, 0, 1], compaing to [0, 1, 2, 3]
    
    Input = [3, 0, 1]
    Range = [0, 1, 2, 3]

    [3, 0, 1] ^ [0, 1, 2, 3]
    here 3 from input cancels out 3 from range
    0 from input cancels out 0 from range
    1 from input cancels out 1 from range
    2 is left
    thus is our answer
    
    


    Input = [0, 1]
    Range = [0, 1, 2]

    [0, 1] ^ [0, 1, 2]
    0 from input cancels out 0 from range
    1 from input cancels out 1 from range
    2 is left


    now, let's see how we can implmenet o(1) solution for space complexity

    O(1) = sum(Input) - sum(Range) = 2


*/

function missingNumber(nums){
    let result = 0
    for(let i = 0; i < nums.length; i++){
        // we are adding every value in the range
        // at the same time we are subtracting the value in the input
        // so we can find any missing number
        result += (i - nums[i])
    }
    return result 
}