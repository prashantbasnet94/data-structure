/*
https://www.youtube.com/watch?v=CE2b_-XfVDk


 0  1    2  3   4   5   6   
[3, 4,  -1, 0,  6,  2,  3]


intialize a dp such that each placeholder is 1, because 
for 

[7] we need to return 1


         0  1   2   3   4   5   6   
        [3, 4, -1,  0,  6,  2,  3]
dp = .  [1  1   1   1   1   1   1]


we then intialize our loop to go throuh the array


for(let col =1; col < input.length ; col++){
    for(let row = 0; row < col; col++){
         if input[row] < input[col]{
            dp[row] = Math.max(dp[row], dp[col] +1)
         }

    }
}
Here, more detail explanation

         0  1   2   3   4   5   6   
        [3, 4, -1,  0,  6,  2,  3]
dp = .  [1  1   1   1   1   1   1]
         r  c


         
col = 1
row = 0

since our col is starting from 1, we want to compare right value to the left value

         if input[row] < input[col]{
            dp[col] = Math.max(dp[col], dp[row] +1)
         }


      dp[0]  dp[1] 
    if( 3  <  4 ){
        dp[1] = Math.max(dp[1], dp[0] + 1)
    }


         0  1   2   3   4   5   6   
        [3, 4, -1,  0,  6,  2,  3]
dp = .  [1  2   1   1   1   1   1]

*/

//bottom up approach
function longestIncreasingSub(input) {

    // initaliztion our dp memoization
    let dp = new Array(input.length).fill(1), max = 0

    // initailizing our dp with 1
    for (let i = 0; i < input.length; i++) {
        dp[i] = 1
    }


    for (let col = 1; col < input.length; col++) {
        for (let row = 0; row < col; row++) {
            
            if (input[row] < input[col]) {
                dp[col] = Math.max(dp[col], dp[row] + 1)
                max = Math.max(max, dp[col])
            }
        }
    }

 return max

}


console.log(longestIncreasingSub([10,9,2,5,3,7,101,18])=== 4)
console.log(longestIncreasingSub([0,1,0,3,2,3])=== 4)

console.log(longestIncreasingSub([7,7,7,7,7,7,7]) === 1)
