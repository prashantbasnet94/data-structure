/*

    nums    = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

    maxsub  = -2
    
    nums    = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
                   i
    maxSub  =  -1
    

    nums    = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
                       i
               -1  + - 3
    maxSub  =  -1 || -4
    Math.max(maxsub + item, item)

    nums    = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
                          i
               -4  + - 4
    maxsub =  0
           = Math.max(maxsub + item, item)
           = max(0, 4)
           = 4



    nums    = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
                              i
              4  + - 1
    maxsub =  3
           = Math.max(maxsub + item, item)
           = max(3, -1)
           = 3


    nums    = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
                                 i
               -4  + 2
    maxsub =            3 +2         2
           = Math.max(maxsub + item, item)
           = max(5, 2)
           = 5


    nums    = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
                                    i
              5  + 1
    maxsub =            6           1
           = Math.max(maxsub + item, item)
           = max(6, 1)
           = 6
*/


function maxSubArray(nums){
    let maxsub = nums[0], globalmaxsubs = nums[0]

    for(let i = 1; i < nums.length; i++){
        maxsub = Math.max(nums[i], maxsub + nums[i])
        globalmaxsubs = Math.max(globalmaxsubs, maxsub)
    }
    return globalmaxsubs
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([5,4,-1,7,8]))
 