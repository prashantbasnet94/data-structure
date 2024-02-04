/*

Coin Change:

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.


Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0



two things we need to do at least
//loop for the amount of money
// loop for the coins



Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

for( coin of coins){
    // coin = 1
    for(let money of amount){
        // amount = 10
    }
}

for(let money in amount){
    for( coin of coins){

        dp[money] = Math.min(dp[money],  1 + dp[money - 1])
    }
}









Imagine you have a friend, and you ask them:
"Hey, if you had to pay 7 units with denominations 1, 2, and 5, what's the least number of coins you'd use?"



Day 1 - Your friend only remembers 1-unit coins:

    To pay 1 unit, they'd use 1 coin of 1 unit.
    To pay 2 unit, they'd use 2 coin of 1 unit
    To pay 3 unit, they'd use 3 coin of 1 unit
                    .
                    .
                    .
    To pay 7 unit, they'd use 7 coin of 1 unit




Your friend records this on a piece of paper:

        Amount	Coins Needed (just using 1s)
        1	1 coins
        2	2 coins
        3	3 coins
        4   4 coins
        5   5 coins
        7	7 coins




Day 2 - Your friend recalls the existence of the 2-unit coin:
Now, they think, "What if I use the 2-unit coin for each amount?"


    dp[each amount i,e i]




        Amount	Coins Needed (just using 1s)
        1	1 coins
        2	1 coins  ====> (1 + 0 )coins
        3	3, (2 + 1 ) = 2 coins   ====> (1 + 1 )coins
        4   4, (2 + 2) = 2 coins ====> (1 + 1 )coins
        5   5, ( 2 + 2 + 1) = 3 coins  ====> (1 + 2 )coins
        7	7, ( 2 + 2 + 2 + 1) = 4 coins ====> (1 + 3 )coins





Day 3 - Your friend recalls the 5-unit coin:

This time, they compare the results using the 5-unit coin against the previous best results.


    dp[each amount i,e i]




        Amount	Coins Needed (just using 1s)
        1	1
        2	1
        3	3, (2 + 1 ) = 3 coins
        4   4, (2 + 2) = 2 coins
        5   5, instead of using 3 coins, we will only use 1 coin of 5 units
        7	7, instead of using 4 coins, we will only use 2 coins of 5 units + 1 coin of 2 units




    What't the recurrence relation?

    For each amount, the way we are deriving the relation is:
        whatever is the minimum of either
            1. previous result i.e dp[i]
            2. current coin + best way of paying the rest of the amount
                i.e 1 +  dp[i - coin]



    dp[given amount] = Math.min(dp[given amount], 1 + dp[given amount - coin])




    So here we know:
        1. We need to iterate over the coins
        2. We need to iterate over the amounts



        for (i = 0; i <= amount; i++) {
            for(coin of coins){

            // and the only time we are going to update the dp[i] is when
            // the current coin is less than or equal to the amount

            if (coin <= i) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coin])
            }
        }
*/

function coinChangeRef(coins, totalAmount) {
    if(!coins || coins.length === 0) return -1
    const dp = new Array(totalAmount+ 1).fill(Infinity)
    dp[0] = 0
    for (let currentAmount = 1; currentAmount <= totalAmount, currentAmount ++){
        for (let coin of coins) {
            if (currentAmount - coin >= 0) {
                dp[currentAmount] = Math.min(dp[currentAmount], dp[currentAmount - coin] + 1)
            }
        }
    }

    return dp[totalAmount] === Infinity ? -1 : dp[totalAmount]
}