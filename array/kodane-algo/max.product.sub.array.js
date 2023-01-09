/*

    [2, 3, -2, 4]
     
    maxproduct = 2
    globalmax = 2

    maxproduct = Math.max(item, maxProduct * item)
    global  = Math.max(global, maxproduct)

    [2, 3, -2, 4]
        i
    

    maxproduct = (3, 3 *2) = 6
    globalmax = 2, 6 = 6



    [2, 3, -2, 4]
            i

    maxproduct = (-2, 6 * -2) = -2
    globalmax = (-2, 6) = 6

    [2, 3, -2, 4]
               i

    maxproduct = (4, -2 * 4) = 4
    globalmax = (4, 6) = 6



#2.
    [-2, 3, -4]
     
    maxproduct = -2
    globalmax = -2

    maxproduct = Math.max(item, maxProduct * item)
    global  = Math.max(global, maxproduct)


    [-2, 3, -4]
         i

    maxproduct =  (3, -2 * 3) = 3
    globalmax = (3, -2) = 3



    [-2, 3, -4]
             i

    maxproduct =  (3, -4 * 3) = 3
    globalmax = (3, 3) = 3



    [-2, 3, -4]


    min = -2
    max = -2
    global = -2 

    {
                 i
            [-2, 3, -4]

        min = min(3, -2 * 3) = -6
        max = max(3, -2 * 3) = 3
        global = max(-2, 3) = 3
        
        

                                                    i
                                            [-2, 3, -4]

                                        min = min(-4, -6 * -4) = 24
                                        max = max(-4, 3 * -4) = -4
                                        global = max(3, -4) = 3


        ^^^^^^^^^^^^^^ Changed ^^^^^^^^^^^^^^



                     i
            [-2, 3, -4]

        min = min(-4, -6 * -4 , 3 * -4) = -12
        max = max(-4, -6 * -4, 3 * -4) = 24
        global = max(3, 24) = 24
    }

*/


function maxproduct2(nums){
    let maxproduct = nums[0], globalmax = nums[0]
    
    for(let i = 1; i < nums.length; i++){
        maxproduct = Math.max(nums[i], nums[i] * maxproduct)
        globalmax = Math.max(globalmax,  maxproduct)
    }
    return globalmax
}

function maxproduct(nums) {

    // we need to account for two -ve number situation
    let
        maxproduct = nums[0],
        minproduct = nums[0]
    globalmax = nums[0]

    for (let i = 1; i < nums.length; i++) {
        let
            tempMax = nums[i] * maxproduct,
            tempMin = nums[i] * minproduct

        minproduct = Math.min(nums[i], tempMin,  tempMax)
        maxproduct = Math.max(nums[i], tempMin,  tempMax)

        globalmax = Math.max(globalmax, maxproduct)
    }
    return globalmax
}

// console.log(maxproduct( [2,3,-2,4]) === 6)
// console.log(maxproduct(  [-2,0,-1]) ===  0)
console.log(maxproduct2([-2, 3, -4]))
