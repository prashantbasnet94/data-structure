/*  
         0 . 1   2   3
        [1,  2,  3,  4]


prefix  [1   2   6   24]
                 @
                 multiply current item i.e 3 * prefix [index -1]
                 prefix [index] = nums[index] * prefix[index -1]

    @ to find prefix @ any position take the previous prefix value and multiple by current nums item

postfix [             @]
        starts from end
                      postFix[index] = (postFix[index + 1] || 1) * nums[index]

        @ any position take afterwards postfix and multiply by current item.
        [24  24   12   4]


now using prefix and postfix, we can calculate output



output = [@       ]

starts from start

output[index] = prefix of the values that comes before it && postfix of the values that comes after it

output = [1* 24,  1 * 12, 2 * 4, 6 * 1]

*/

function productArray(nums) {
    const
        prefix = new Array(nums.length - 1),
        postfix = new Array(nums.length - 1)

    // nothing before index 0, so to neutralize
    prefix[0] = 1
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = nums[i] * prefix[i - 1]
    }
    // nothing after index nums.length - 1, so to neutralize 
    postfix[nums.length - 1] = nums[nums.length - 1]
    for (let i = nums.length - 2; i >= 0; i--) {
        postfix[i] = nums[i] * postfix[i + 1]
    }


    // to construct an output
    // @ a given position multply prev prefix position value and next postfix position value

    const output = new Array(nums.length - 1)
    console.table(prefix)
    console.table(postfix)


    for (let index = 0; index <= nums.length - 1; index++) {
        output[index] = (prefix[index - 1] || 1) * (postfix[index + 1] || 1)
    }

    return output
}
// productArray([1, 2, 3, 4])

/*
           0   1   2    3   4           
         [-1,  1,  0,  -3,  3]

prefix   [1    1   0 .  0   0]

postfix  [ 0    0    0  -9  3] 1



*/

function refactored(nums) {
    let
        prefix = [],
        postfix = []
 
    prefix [0] = 1
    // nothing before index 0, so to neutralize
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = nums[i] * (prefix[i - 1] )
    }
    postfix[nums.length] = 1
    for(let i = nums.length - 1; i > -1; i--){
        postfix[i] = nums[i] * postfix[i + 1]
    }
    console.table(prefix)


    const res = []

    for (let i = 1; i < nums.length -1; i++) {
        res[i] = prefix[i-1] * postfix[i+1];
    }
    res[0] = postfix[1];
    res[nums.length - 1] = prefix[nums.length - 2];

}


function refactoredFinal(nums) {
    let
        prefix = 1,
        res =[],
        postfix = 1
 
    // nothing before index 0, so to neutralize
    for (let i in nums) {
        res[i] = prefix
        prefix *= nums[i]
    }
    // console.table(res)
    // nothing after index nums.length - 1, so to neutralize 
     for (let i = nums.length - 1; i > -1; i--) {
        //      postfix * prefix
       res[i] = postfix * res[i]
       postfix *= nums[i]
    }
    console.table(res)

    return res 
}



refactored( [-1,1,0,-3,3])
console.log('-----')
refactoredFinal( [-1,1,0,-3,3])

