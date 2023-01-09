/*
     l  r
    [7, 1, 5, 3, 6, 4]

    l => buy
    r => sell

    if @ any point left pointer < rightPointer it's a dip and we buy it

    @ any day either have a profitable transaction 
        if profitable we count the profit
    or loss
        we try to move our left pointer = rightpointer


        |
        |
        |   *
        |                   *
        |           *           
        |                       *
        |               *   
        |
        |       *   
        |______________________________
          l .   r



    
        |
        |
        |   *
        |                   *
        |           *           
        |                       *
        |               *   
        |
        |       *   
        |______________________________
                l  r




            
        |
        |
        |   *
        |                   *
        |           *           
        |                       *
        |               *   
        |
        |       *   
        |______________________________
                l       r





            
        |
        |   *
        |                   *
        |           *           
        |                       *
        |               *   
        |
        |       *   
        |______________________________
                l           r

********* Max profit found *********






                
        |   *
        |                   *
        |           *           
        |                       *
        |               *   
        |
        |       *   
        |______________________________
                l                r
*/

function slidingWindow(prices){
    let l = 0, r = l + 1, maxProfit = 0

    while(r < prices.length){
        //either profitable trans
        if(prices[r] > prices[l]){
            maxProfit = Math.max(maxProfit, prices[r] - prices[l])
        }else{
        // loss trans
            l = r
        }
        r++
    }
    return maxProfit
}