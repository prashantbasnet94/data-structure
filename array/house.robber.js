/*

 nums = [1, 2, 3, 1]

 constaint: you cannot rob two adjacent houses at same night


 retun Math.max(1 + 3, 2 + 1)





// let go from brute force option

         0  1  2  3  4 .5 
 nums = [1, 2, 3, 1, 3, 4]
         i .   j

*/


function bruteForce(houses) {
    let maxProfit = 0
    for (let i = 0; i < houses.length - 2; i++) {
        let currentMoney = houses[i]
        for (let j = i + 2; j < houses.length; j++) {
            currentMoney += houses[j]
            j++
        }
        maxProfit = Math.max(maxProfit, currentMoney)
    }
    return maxProfit
}

console.log(bruteForce([1, 2, 3, 1]))
console.log(bruteForce([2, 7, 9, 3, 1]))



/*

         0  1  2  3 
 nums = [1, 2, 3, 1]
         i .   j


*/


/*
            [1, 2, 3, 1]
            [1, 2, 4, 3]

             0 . 1 . 2 . 3 . 4
            [2,  7,  11, 10  12]


function dynamicProgramming(houses) {
    const dp = []
    dp[0] = houses[0]
    dp[1] = houses[1]


    // based on the logic you can only proceed in sequence by skipping 1 house
    for (let i = 2; i < houses.length; i++) {
        dp[i] = dp[i-2] + houses[i]
    }
    console.log(dp)
    return Math.max(dp[houses.length -1], dp[houses.length -2])
}

         0 .1 .2 .3 
        [2, 1, 1, 2]
############################### Relation Derived ########################

         0 .1 .2 . 3  
dp:     [2  1 .1 . 2]


         0 .1   2   3   4    
        [2, 7,  9,  3,  1]
                @

        Math.max of                                                     
        @ position 2, we know we can only rob what was before the prev i.e 2  +  now

         0 .1  2  3   4    
        [2, 7,  9,  3,  1]
        [2, 7, 11,  @] .#
                    = {
                      Math.max(item + dp(n-2), item + dp(n -3))
                        Math.max(3 + 7 , 3 + 2) => 10
                    }
****************** note that, dp[ i-2] is always greater than dp[i -4] beaucase dp@ [i-2] = dp[i-4] + houses[i] ****************
****************** similarly , dp[ i-1] is always greater than dp[i -3] beaucase dp@ [i-1] = dp[i-3] + houses[i] ****************


                    dp[]        Math.max of                                     11,            7                               2
                     @ position 4, we know we can only rob what was before the prev , or before prev prev  , or before the prev prev prev +  now
                    10
                        = { .        item + dp[i - 2] , item + dp[i -3]
                            Math.max(1 + 11 , 1 + 7, 1+ 2) => 12
                        }

 */


function dynamicProgramming(houses) {

    if(houses.length === 0) return 0
    if(houses.length === 1) return houses[0]
    if(houses.length === 2) return houses[0] > houses[1] ? houses[0] : houses[1]


    const dp = []
    dp[0] = houses[0]
    dp[1] = houses[1]
    dp[2] = dp[0] + houses[2]


    for (let i = 3; i < houses.length; i++) {
        // you have to skip prev
        dp[i] = Math.max( houses[i] + dp[i -2], houses[i] + dp[i-3])
     }

     return Math.max(dp[houses.length -1], dp[houses.length -2])
}


console.log(dynamicProgramming([1, 2, 3, 1]))
console.log(dynamicProgramming([2, 7, 9, 3, 1]))
console.log(dynamicProgramming([2, 1, 1, 2]))



