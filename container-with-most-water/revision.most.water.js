/*
    Area = height * base

*/

function bruteForceContainerWithMostWater (input){
    let maxArea = 0
    if(input.length < 2){
        return maxArea
    }
    for(let i = 0; i < input.length ; i++){

        for(let j = 0; j < input.length ; j++){
            // height = min(element1, element2)
            // base = j - i

            let
             height = Math.min(input[i], input[j]),
             base   =  j - i,
             curreArea = height * base
             maxArea = Math.max(maxArea, curreArea)
        }
    }
    return maxArea
}



console.log(bruteForceContainerWithMostWater([1,8,6,2,5,4,8,3,7]))


function optimizedMostWater(input){
    let maxArea = 0
    if(input.length === 0) return maxArea
    let leftPointer = 0, rightPointer = input.length -1 

    while(leftPointer < rightPointer){
        let 
         currentHeight = Math.min(input[leftPointer], input[rightPointer]),
         currentArea =  currentHeight * (rightPointer - leftPointer)

         maxArea = Math.max(maxArea, currentArea)

         if(input[leftPointer] <= input[rightPointer]){
            leftPointer++
         }else{
            rightPointer--
         }
    }
    return maxArea
}

console.log(optimizedMostWater([1,8,6,2,5,4,8,3,7]))
