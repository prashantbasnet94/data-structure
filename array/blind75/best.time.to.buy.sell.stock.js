/*
    Best time to buy and sell stock:

    [7, 1, 5, 3, 6, 4] => price
     0  1  2  3  4  5 => day
    return 5
            buy on day 1 and sell on day 4
            
            


    1 way to solve this is kodane algorithm



    i. Buy @ min(Infintiy, 7) = 7
       sell @ 7 max(-Infintiy, 7) = 7
       profit = 0   
       
    ii. Buy @ min(7, 1) = 1
        sell @ 7 max(7, 1) = 7



*/


function bruteForceApproach(prices) {
    let maxProfit = 0

    for (let i = 0; i < prices.length; i++) {
        let buyIn = prices[i]
        for (let j = i + 1; j < prices.length; j++) {
            let buyOut = prices[j]
            maxProfit = Math.max(maxProfit, buyOut - buyIn)
        }
    }
    return maxProfit
}

// you can optimize this solution using kodana algorithm

function kodaneAlog(nums) {
    let
        currentSum = 0,
        maxSum = -Infinity

    for (let num of nums) {
        currentSum = Math.max(num, currentSum + num)
        maxSum = Math.max(maxSum, currentSum)
    }
}



function usingKodaneAlgo(prices) {
    /*
     inorder to calculate the profit you need only two things
        i.  Buy  @
        ii. Sell @

        sell @ is given when we move through array, buy we need to keep track of the buy @
    */

    let
        buyIn = prices[0],
        //since if no profit return 0
        maxProfit = 0

    for (let price of prices) {
        buyIn = Math.min(buyIn, price)
        maxProfit = Math.max(maxProfit, price - buyIn)
    }
    return maxProfit

}





function timeToBuyAndSell(prices) {
    // buy 1 day
    // sell other day

    // iterate over prices
    // have obj to calculate when they should sell


    /*
         1  2  3  4  5  6  day
         0  1  2  3  4  5  index 

        [7, 1, 5, 3, 6, 4] price
        
        1. buy @ 7 1st data, iterate over the array
            a. we find we won't make any profit

        2. buy @ 1, 2nd day, iterate 
            a. 3rd day prices goes to 5
                profit = 5-1 = 4
            b. 4th day, price @ 3
                profit = 3 -1 = 2
            c. 5th day, price @ 6
                profit = 6 -1 = 5
            d. 6th day, price @4
                profit = 4 -1 = 3


        --------- here we  see a pattern ------
        1. we need to iterate over the prices
        2. a price need to be compared to another price
        3. we need to calculate profit on every time we updates these values


        Obvious way to solve this problem:
        brute force where we run two loops and calculate prices on each iterattion


    */

    let maxProfit = 0
    for (i = 0; i < prices.length; i++) {
        // we need to buy first and sell later
        let buyingAt = prices[i]
        for (j = i + 1; j < prices.length; j++) {
            let sellingAt = prices[j]
            // profit is caluclate from sell - buy
            let currentProfit = sellingAt - buyingAt
            maxProfit = Math.max(maxProfit, currentProfit)

        }
    }
    return maxProfit

}


function maxProfitOptimize2(prices){
    
    let maxProfit = 0
    // we need to compare two prices 
    // update any time currentProfit is max then maxProfit

    // we start by checking to buy at 1st day
    let buyIn = prices[0]
    for (let i =0; i< prices.length; i++){
    
        // we check to see if we can buy at lowest anyother days:
        buyIn = Math.min(buyIn, prices[i])

        // calculate the profit if we sell that day
        let currentProfit = prices[i] - buyIn
        maxProfit = Math.max(maxProfit, currentProfit)
    }
    return maxProfit
}

function optimizedVersion(prices){
    let buyIn = prices[0]
    let maxProfit = 0

    for(let price of prices){
        buyIn = Math.min(buyIn, price)
        maxProfit = Math.max(maxProfit, price - buyIn)
    }
    return maxProfit
}

function maxProfitOptimize(prices){
    let maxProfit = 0
    // we check from buying at first day
    let buyIn = prices[0]
    
    for (let i =0; i< prices.length; i++){
        // we need to compare two prices 
        // update any time currentProfit is max then maxProfit
       // if we find a day where we can buy low, we buy
       buyIn = Math.min(buyIn, prices[i])
       let currentProfit = prices[i] - buyIn
       // if we find a day where we can find a max profit we then update the maxProfit. 
       maxProfit = Math.max(maxProfit, currentProfit)
    }

}
console.log(timeToBuyAndSell([7, 1, 5, 3, 6, 4]))