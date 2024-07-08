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
 

function bruteForceApproach(prices){
    let maxProfit = 0

    for(let i = 0; i < prices.length; i++){
        let buyIn = prices[i]
        for(let j = i+1; j < prices.length; j++){
            let buyOut = prices[j]
            maxProfit = Math.max(maxProfit, buyOut - buyIn)
        }
    }
    return maxProfit
}

// you can optimize this solution using kodana algorithm

function kodaneAlog(nums){
    let
     currentSum =  0,
     maxSum = -Infinity

     for(let num of nums){
        currentSum = Math.max(num, currentSum + num)
        maxSum = Math.max(maxSum, currentSum)
     }
}



function usingKodaneAlgo(prices){
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

        for(let price of prices){
            buyIn = Math.min(buyIn, price)
            maxProfit = Math.max(maxProfit, price - buyIn)
        }
        return maxProfit
        
}