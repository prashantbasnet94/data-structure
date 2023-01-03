/*

1.

coins = [1,2,5], amount = 11

    1 + 1 + 1 + 1 .... = 11
    2 + 2 + 2 + 2 + 2 + 1 = 11
    5 + 5 + 1 = 11


    we take the fewest number of coins 

    so our answer is 3 in this case

2.

coins = [2] and amount = 3
return -1


3. coins = [1], amount = 0
return 0

finding the recurrence realtion:


coins = [1,2,5], amount = 11

    dp = [11, 11, .... 11]
        dp[0] = 0
        dp[1] = {
            // only for coin 1, amount = 1, coin = 1 , amount - coin is >= 0
            dp[1] = min(11, 1 + dp[1 - 1] )
        },
        dp[2] ={                                                    2       1
               2 - 1 = 1  >= 0 true dp[2] = Math.min(dp[2], 1 + dp[amount - coin])
               2 - 2 = 0  >= 0 true
               2 - 5 = -3 >= 0 false

        }

*/

function coinChange(coins, total){
    let dp = new Array(total + 1).fill(total)
    dp[0] = 0

    for( let amount = 1; amount <=total ; amount++ ){
        for(let coin of coins){
            if( amount - coin >= 0){
                 dp[amount] = Math.min(dp[amount], 1 + dp[amount - coin])
            }
        }
    }
    return dp[total] === total ? -1 : dp[total]
}
console.log(coinChange([1,2,5], 7))

/*


coins = [1,2,5], amount = 11

        Min(dp[row -  1][col], 1 )
        Either inherits from top or go  back the number of steps the coin is and grab that

        0   1   2   3   4   5   6   7   8   9   10
        0   1   2   3   4   5   6   7   8   9   10  11
  0  1  0   1   2   3   4   5   6   7   8   9   10  11   
  1  2  0   1   A    
  2  5  0


  @ A = Math.min(dp[0][2], 1 + dp[1][2-2])
      = Math.min(2, 1 +0 )
      = 1


        0   1   2   3   4   5   6   7   8   9   10
        0   1   2   3   4   5   6   7   8   9   10  11
  0  1  0   1   2   3   4   5   6   7   8   9   10  11   
  1  2  0   1   1   2   2   3   3   4   4   5   5   6 
  2  5  0   1   1   2   2   1   2   2   3   3   3   3






*/

function coinChange2(coins, total){

    let dp = new Array(total + 1 ).fill(total) 
    dp[0] =0

    /* 
     0 .1  2  
    [1, 2 ,5]

dp  [9  9  9  9 ... 9] of length 9 + 1, as index starts from 0


        0   1   2   3   4   5   6   7   8   9   
 0   1  0   1   2   3   4   5   6   7   8   9
 1   2  0   1   1   2   2   3   3   4   4   5
 2   5  0   1   1   2   2   0   2   2   3   3

 so the logic?


    */

        // start from each row
        for(let row = 0; row < coins.length; row++ ){
            // covers every col on that row
            for(let col = 1; col <=  total; col++){
                // if current amount can be paid by currentCoin || in each row calculate using respective coin
                if(coins[row] <= col){
                    // col is the amount 
                    // dp[amount - currentCoin] + 1 is less than what is already stored?
                    // amount - trace back the value stored in coin
                    // if amount - 2 , then go back 2 times in dp and grab that value + 1
                    dp[col] = Math.min(1 + dp[col - coins[row]], dp[col])
                  
                }
            }          
        }
return dp[total]
}

console.log(coinChange2([1,2 ,5], 9))
