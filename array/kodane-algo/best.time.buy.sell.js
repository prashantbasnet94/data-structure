function kodaneAlgo(prices){
    let minBuy = prices[0], maxProfit = 0
    for(let i = 1; i < prices.length; i++ ){
        maxProfit = Math.max(maxProfit, prices[i] - minBuy)
        minBuy = Math.min(minBuy, prices[i])
    }
    return maxProfit
}

console.log(kodaneAlgo([7,1,5,3,6,4]))