/*

     0  1  2  3  4  5 
    [7, 1, 5, 3, 6, 4]

dp =[]



*/



function maxProfit(prices){
    const dp = new Array(prices.length - 1), minBuy = prices[0]
    dp[0] = 0
    for(let index = 1; index < prices.length; index++){
        dp[index]  = Math.max(dp[index - 1], prices[index] - minBuy)
        minBuy = Math.max(minBuy, prices[index])
    }
    return dp[prices.length - 1]
}