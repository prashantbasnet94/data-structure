function rr(cost, top){
    //base case?
    if(top === 0)return cost[0]
    if(top === 1)return cost[1]
    if(top < 0)return Math.min(cost[0], cost[1])
    // recurence case?
    return Math.min(rr(cost, top -1) + cost[top-1] , rr(cost, top -2) + cost[top-2])
}


return rr(cost, cost.length)


function iterativeAppraoch (cost){
    let dp = []
    dp[0] = 0
    dp[1] = cost[1]
    dp[2] = Math.min(dp[1] , cost[2])


    /*
                      

                     
             0    1    2    3               
    cost =  [10, 15, 20 , 30] # 
                       @    
            [10   15  min(10, 15 ) +cost[2] 
                     = 10 + 20 = 30 
    dp =    [10, 15, 30 , @]
                         = Math.min(15, 30) + cost[ 30]
                         = 15 + 30 
                         = 45


    */
    for(let stair = 3; stair <= cost.length; stair++){
        dp[stair] = Math.min(dp[stair -1], [dp[stair -2]] ) + cost[stair]
    }
}