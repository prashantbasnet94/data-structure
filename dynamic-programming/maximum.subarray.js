const { array } = require('yargs')

function maximumSubArray(input) {

}

function recusion(input, i, j) {
    let sum = 0
    for (let i = 0; i < j; i++) {
        sum += input[i]
    }
    if (input[i] == input[j]) {
        recusion(input, i--, j++)
    } else if (input[i] > input[j]) {
        recusion(input,)
    }
}


/*
      0   1   2   3    4   5   6    7   8          
    [-2,  1, -3,  4,  -1,  2,  1,  -5,  4]
      i 
          j
          
          


    max = -2


    sum = input[i] = -2
    max = Math.max(max, sum)

        or

it can be the sum of prev max + current item

sum +=input[j]

max = Math.max(max, sum)




*/
function bruteForce(input) {
    let max = input[0]

    for (let i = 0; i < input.length; i++) {
        let sum = input[i]
        max = Math.max(max,  sum)
        for (let j = i+1; j < input.length; j++) {
            sum += input[j]
            max = Math.max(sum , max)
        }

    }
    return max
}

function kodaneAlgo(input){
    let maxSum = input[0], sum = input[0]

    for(let i = 1; i < input.length; i++){
        sum = Math.max(input[i] , sum + input[i])
        maxSum = Math.max(maxSum, sum)
    }
    return maxSum
}

console.log('bruteforce', bruteForce([-2,1,-3,4,-1,2,1,-5,4]) ===6)
console.log('bruteforce', bruteForce( [5,4,-1,7,8]) === 23)

console.log('kodaneAlgo', kodaneAlgo([-2,1,-3,4,-1,2,1,-5,4]) ===6)
console.log('kodaneAlgo', kodaneAlgo( [5,4,-1,7,8]) === 23)



/*
 now let's use divide and conqueur instead
https://www.youtube.com/watch?v=Eo2wQIPSwrw

                      Array
                    /       \   
Left side mid inclusive      Ride side of array without mid   


*/ 
 

function divideAndConqueur(input){
    return findMax(input, 0 , input.length -1)
}
function findCrossingSum(input, mid){
    let leftMaxSum = 0,  leftSum = 0

    for( let i = mid; i >= 0; i--){
        leftSum +=input[i]
        leftMaxSum = Math.max(leftMaxSum, leftSum)
    }

    let rightSum = 0, rightMaxSum = 0

    for(let i = mid + 1; i < input.length ; i++){
        rightSum += input[i]
        rightMaxSum = Math.max(rightMaxSum, rightSum)
    }
    return leftMaxSum + rightMaxSum
}

function findMax(input, left, right){
    if(left === right){
        return input[left]
    }

    
    let mid = Math.floor((left + right)/2)
     let
     leftSum = findMax(input, left, mid),//Recursively check left side for max sum
     rightSum = findMax(input, mid + 1, right),//recursively check right side for max sum
     crossingSum = findCrossingSum(input,  mid) //Find max sum that includes left and right side
     return Math.max(leftSum,crossingSum, rightSum)    //return whichever is largest

}
    
console.log('maxSubArray', divideAndConqueur([-2,1,-3,4,-1,2,1,-5,4]) )
console.log('maxSubArray', divideAndConqueur( [5,4,-1,7,8]))



/*

Dynamic Programming


calculate all posibilities and do not calculate again if you already travel that path

   0    1    2     3     4      5       6        7      8    
[ -2    1   -3     4    -1      2       1       -5      4]

dp:
[-2     ]

@ index 1: Math.max( 1 , 1 + -2) => 1
[-2     1 ]


@ index 2, Math.max(-3, previousMax + currentItem) => previousMax + currentItem => -2
              @
[-2     1     -2]


@ index 3, Math.max(4, -2 + 4) =>  4
[-2     1     -2    4]

@ index 4, Math.max(-1, 4 -1) =>  3
[-2     1     -2    4   3]

@ index 5, Math.max(2, 3 + 2) =>  5
[-2     1     -2    4    3   5]

@ index 6, Math.max(1, 5 + 1) =>  5
[-2     1     -2    4    3   5    6]

@ index 7, Math.max(-5, 6-5) =>  1
[-2     1     -2    4    3   5    6     1]

@ index 7, Math.max(4,1 + 4 ) =>  5
[-2     1     -2    4    3   5    6     1   5]
                                  #
                                 Max

*/


function dynamicProgramming(input){
    let
     dp = [],
     max = input[0]
     dp[0] = input[0]
     for(let i = 1; i < input.length; i++){
        dp[i] = Math.max(input[i], input[i] + dp[i -1])
        max = Math.max(max, dp[i])
     }
     return max
}

console.log('dynamicProgramming', dynamicProgramming([-2,1,-3,4,-1,2,1,-5,4]) )
console.log('dynamicProgramming', dynamicProgramming( [5,4,-1,7,8]))
