/*

Brute force:
 Hard because we don't really know how many nested for loops we can have? 
 we don;t have limit to how many numbers we can have, we can use again and again



Recursively:
we can do it 
// nums = [1,2,3], target = 4

we can probably start with 1 and go down kind of bottom up apprach.
Unless we do memoization that not efficient



Iterative Apporach:

Using a dp array

    dp = [0, 0 , 0, 0, 0]
          0  1 . 2  3 .4 


          only 1 way to form a target of 0, index here represents the target,

          check with every single numbers given and look back in our dp array, if our number is less than the target we are checking right now

          just look back and substract the number we are checking with our dp array
          and see if we can add up whatever number we had there to the number are given and comparing

    dp = [1, 0 , 0, 0, 0]
          0  1 . 2  3 .4 


          // nums = [1,2,3], target = 4

1.  we construct an dp array up to the index of target


    dp = [0, 0 , 0, 0, 0]
          0  1 . 2  3 .4 


2. we know for target of 0, there just 1 way

    dp = [1, 0 , 0, 0, 0]
          0  1 . 2  3 .4 

  // nums = [1,2,3], target = 4        
3. now for 1 in our nums array,    1 is less than or equal to the target 1 i.e 1 index

dp[1] = dp[index - num]
dp[1] = 1

    dp = [1, 1 , 0, 0, 0]
          0  1 . 2  3 .4 

          nums 2 and 3 are greater than target we are checking  i.e index 1, so we skip

4. now with target 2, i.e index 2

    i. we start with 1 in our nums array, we move 1 back in our dp array i.e 1
        dp[2] = 1
    ii. we move to two in our nums array, we travel 2 step back in our dp array
        dp[2] += dp[2 -2]
             =  prev dp[2] + dp[0]
             = 1 + 1
             = 2
    iii. 3 is greater than our current target so we skip
    

        dp = [1, 1 , 2, 0, 0]
              0  1 . 2  3 .4 
    
******************************** the problem is like min cost for climbing staris *********************************

5. now target is 3, we start with 1 in our nums array

    move 1 step back and add it
    dp[3] = 2

    with num = 2, move 2 step back and add that as well
    dp[3] = 2 + dp[3 - 2]
          = 2 + dp[1] 
          = 2 + 1
          = 3

    with 3, we move back 3 step 

    dp[3] = 3 + dp[3-3]
          = 3 + 1
          = 4


        dp = [1, 1 , 2, 4, 0]
              0  1 . 2  3 .4 


6. Now target is 4, we start with num = 1

 i. move 1 step back and add it
    dp[4] =  4

ii. we num = 2, move 2 step back and add that as well   

    dp[4] = 4 + dp [4-2]
          = 4 + 2
          = 6

iii. num = 3, move 3 step back and add that as well
    dp[4]= 4 + dp[4-3]
        = 6 + 1
        = 7

        dp = [1, 1 , 2, 4, 7]
              0  1 . 2  3 .4 



*/


function combinationSum(nums, target){
    const dp = {0 : 1}

    for(let total = 1; total <= target; total++){
        for(let num of nums){
            if(total <= num){
                dp[total] += dp[total - num]
            }
        }
    }
    return dp[target]
}


// nums = [1,2,3], target = 4
function combinationSumIv(nums, target){
    // only 1 way we can add up to 0
    const dp =  {0: 1}

    //go through every sum we are trying to computer from 1 to target
    // return total num of cobination for target value happens to be
    for(let total = 1; total <= target; total++ ){

        // initally there is 0 ways that add up to this total
        dp[total]  = 0 


        // we know that might not be the case
        // let figure it out

        // now lets look at the sub problem
        for( let givenNumber of nums){
            // we want how many different ways we can do this? dp[total - givenNumber] 
            dp[total - givenNumber] 
        }



        
    }



}