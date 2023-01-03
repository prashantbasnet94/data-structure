/*
    input = [2, 3, 1, 1, 4]
             0  1  1  1  1


    input = [2, 2, 2]
             0     2
             
    input = [1, 3, 3, 2, 4, 5]

    dp =    [         1  1  5] 
    dp =    [         2  1  5] 


    dp =    [      1  1  1  5] 
    dp =    [      2  2  1  5] 
    dp =    [      3  2  1  5]
    
    

    input = [1, 3, 3, 2, 0, 5]
    dp =    [t  t  t  t  t  *] 

    input = [1, 3, 3, 1, 0, 5]
    dp =    [            F  *] 


    input = [1, 3, 3, 0, 2, 5]
    dp =    [         t  t  *]
 
    a. if 0 is encountered, then we go futher back and see the value is atleast 2



    logic:

    Bottom up appraoch:
    use dp array with boolean value
    if 0 is encoounted go a step back and see if the value is more than 1
    go further down and count number of steps to cover up, if steps is not found set false as a value

    1. loop into the nums array 
        a. 
            destination = input.length - 1

            if(nums[index] + index === destination )return true

         0  1   2   3   4       
        [3, 2,  1,  0,  4]
                    @

    dp =[0  0   0   -1   1 ]

         0  1   2   3   4       
        [3, 2,  1,  0,  4]
                @

    dp =[0  0   0   -1  1 ]

*/
function canJump(nums) {

    const dp = new Array(nums.length)
    dp[nums.length - 1] = 1
    let credit = 0

    for (let index = nums.length - 2; index >= 0; index--) {
        // we we find +ve number 
        if (nums[index] > 0) {
            if (dp[index + 1] < 0) {
                // dp[index] = true if current nums is greater than previous stored
                dp[index] = dp[index + 1] + nums[index]
            } else {
                dp[index] = 1
            }
            // if we find 0 
        } else {
            dp[index] = 1
        }
    }
    console.table(dp)
    return dp[0] === 0
}

// console.log(canJump([3,2,1,0,4]))
// console.log(canJump([2,3,1,1,4]))


function bruteForce2(nums, index = 0) {
    if (index > nums.length - 1) return
    // if(nums.length - 1 === index)return true
    if (index + nums[index] === nums.length - 1) return true

    const element = nums[index]
    console.log(nums.length - 1, index, ' current element ', element)

    for (let i = 1; i < element; i++) {
        bruteForce(nums, index + i)
    }
    console.log('here')
}


/* 
                                        i
                                        [2, 3, 1, 1, 4]
                                        /                \       
                            [2, 3, 1, 1, 4]    [2, 3, 1, 1, 4]
                                i                     j      
                       /     |           \
        [2, 3, 1, 1, 4]  [2, 3, 1, 1, 4]  [2, 3, 1, 1, 4]  
               i                   i                   i





*/

let count = 0
function bruteForce(nums, index = 0) {  
    if(index > nums.length - 1) return true
    let element = nums[index]
     if(element + index === nums.length - 1){
        return true
    }
    for(let i = 1; i <= element; i++){
       return bruteForce(nums, index + i)
    }
    return false
}

function canJump2(nums) {
    const dp = []
 
    return bruteForce(nums, 0)
}

console.log(canJump2([2, 3, 1, 1, 4]))
 
console.log(canJump2([3, 2, 1, 0, 4]))

console.log(canJump2([1, 3, 3, 1, 0, 5]))


function greedyAppraoch(nums){
    let goal = nums.length - 1  
    // dp[nums.length -1 ] = true
    //working our way backwards
    for(let index = nums.length - 1; index >=0; index--){
        // if index + the max jump takes us to the post
        // we shif the goal post near
        if(index  + nums[index] >= goal ){
            goal = index
        }
    }

    // @ the end either goal will be @ position 0 or more
    return goal === 0 
}
console.log(greedyAppraoch([1, 3, 3, 1, 0, 5]))
