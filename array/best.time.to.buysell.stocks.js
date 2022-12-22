function bruteForce(prices) {
    let maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        let priceIn = prices[i]
        for (let j = i + 1; j < prices.length; j++) {
            let priceOut = prices[j]
            maxProfit = Math.max(maxProfit, priceOut - priceIn)
        }
    }
    return maxProfit
}

function linearApproach(prices) {

    /*
sliding window technique
    */

    let
        leftPointer = 0, //buy
        rightPointer = 1, //sell
        maxProfit = 0

    while (rightPointer < prices.length) {
        //if profitable than buy
        let currentPofit = 0
        if (prices[rightPointer] < prices[leftPointer]) {
            currentPofit = prices[rightPointer] - prices[leftPointer]
            maxProfit = Math.max(maxProfit, currentPofit)
        } else {
            // if not a profitable transaction
            // wait till the lowest day
            // if we find the lowest price day than we buy @ that day
            leftPointer = r
        }

        rightPointer++
    }
}

/*
 finds the max sum of sub array
function kodaneAlgo(input){
    let maxSum = input[0], currentSum = input[0]
    for(let i = 1; i < input.length; i++){
        maxSum = Math.max(maxSum, currentSum)
        currentSum = Math.max(input[i], currentSum + input[i])
    }
}

//twisitng kodane Algo to suit this solution

*/

function kodaneAlgo(input){
    let profit = 0, buyIn = input[0]

    for(let i = 1; i < input.length; i++){
        buyIn = Math.min(buyIn, input[i])
        profit = Math.max(profit, input[i] - buyIn)
    }
    return profit
}

console.log('kodaneAlgo ',kodaneAlgo([7,1,5,3,6,4]))
console.log('kodaneAlgo ',kodaneAlgo([7,6,4,3,1]))


/*
 using dynamic programming


    function dynamicProgramming(input){
        let
         dp = [],
         max = input[0]
         dp[0] = input[0]
         for(let i = 1; i < input.length; i++){
            dp[i] = Math.max(input[i], input[i] + dp[i -1])
            max = Math.max(max, dp[i])
         }
         return max
    }

     [7, 1, 5, 3, 6, 4]
 dp:     7  
min:     1

 dp:     7  7  7    7   7    
min:     1  1

 */


    function dynamicProgramming(input){
        let
         dp =[],
         min = input[0]
        dp[0] = 0

        for(let i = 1; i < input.length; i++){
            // whatever is greater is stored in dp using min discoved so far
            //[ 0, 0, 4, 4, 5, 5 ]
            dp[i] = Math.max(dp[i -1], input[i] - min)

            // min updates if we find a value less than 
            min = Math.min(min, input[i])
        }

        return dp[input.length-1]
    }




console.log('maxProfit ',dynamicProgramming([7,1,5,3,6,4]))
console.log('maxProfit ',dynamicProgramming([7,6,4,3,1]))