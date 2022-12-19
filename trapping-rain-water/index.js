/*

1. Do left or right sides of the graph count as walls ?  => no
2. Will there be negative integers? No



Test Cases: 

[0,1,0,2,1,0,1,3,2,1,2,1]
[] => 0
[1] => 0
[3,4,3] => 3 * 2
           height * base


Logic:

1. Find max height on the left and right hand side of any index
2. CurrentWater = Math.min(maxHeightLeft, maxHeightRight) - currentHeight
    a. If curentWater is -ve then skip to next height
    b. Add CurrentWater to total water i.e totalWater +=currentWater
3. At the end return totalWater

*/

const trapRainWater = input => {
    let totalWater = 0
    const
        leftPointerLimit = 0,
        rightPointerLimit = input.length - 1
    for(let i = 0; i < input.length; i++){
        let 
            maxLeftHeight = 0,
            maxRightHeight = 0,
            leftPointer = i,
            rightPointer = i 
             
          while(leftPointer >= 0){
            maxLeftHeight = Math.max(maxLeftHeight, input[leftPointer])
            leftPointer--
          }  
          while(rightPointer < input.length){
            maxRightHeight = Math.max(maxRightHeight, input[rightPointer])
            rightPointer++
          }

          const currentWater = Math.min(maxLeftHeight, maxRightHeight) - input[i]
          if(currentWater >= 0){
            totalWater+= currentWater
          }
    }
    return totalWater
},
trapWater2 = input => {
  let 
    leftPointer = 0,
    rightPointer = input.length -1,
    maxLeft = 0,
    maxRight =0,
    totalWater = 0
  

      //get the maxLeft and maxRight walls
      // currentHeight = smaller of value between(input[leftPointer, input[rightPointer]])
      // if the maxLeft is smaller than currentHeight then maxLeft = currentHeight
      // if the maxRight is smaller than currentHeight than maxRight = currentHeight
      
    while(leftPointer < rightPointer){
    
      //cond to calculate area using currentHeight
      let
        leftValue = input[leftPointer],
        rightValue = input[rightPointer]

      if(leftValue <= rightValue){
       const currentHeight = leftValue
        //either update the max value or calculate the area
        if(currentHeight < maxLeft){
          const area = maxLeft - currentHeight
          totalWater += area
        }else{
          maxLeft = Math.max(maxLeft, leftValue)
        }
      }else {
       const currentHeight = rightValue
        if(currentHeight < maxRight){
          const area = maxRight - currentHeight
          totalWater+= area
        }else{
          maxRight = Math.max(maxRight, rightValue)
        }
      }
    
      //calculate the area or move on?    
      if(leftValue <= rightValue){
        leftPointer++
      }else{
        rightPointer--
      }
    }

    return totalWater
},
/*
  question:
    1. Is there always going to be a solution ?  => return 0 if not
    2. Do we exclude the side axis wall in the solution? yes
    3. Will we have any -ve number in the array? No


    Logic:
  [4,2,0,3,2,5]

  1. In any particular height in order to calculate water, we need maxLeft and maxRight wall
    a. From which we can conclude we need three pointers working at once
    b. Formula we can derive is that: waterArea = Math.min(maxLeft, maxRight) - currentHeight
    c. maxLeft = maximum Height found in the left of currentHeight
    d. maxRight = maximum height found in the right of currentHeight
  */
trapWater3 = input => {
  let totalWater = 0
  for(let i = 0; i < input.length; i++){
    let 
      leftPointer  = i,
      rightPointer = i,
      currentHeight = input[i],
      maxLeft = 0,
      maxRight = 0

      while(leftPointer >= 0){
        maxLeft = Math.max(maxLeft, input[leftPointer])
        leftPointer--
      }

      while(rightPointer < input.length){
        maxRight = Math.max(maxRight, input[rightPointer])
        rightPointer++
      }

      // calculate water at any hiehgt
     let currentWater =  Math.min(maxLeft, maxRight) - currentHeight
     if(currentWater > 0){
      totalWater += currentWater
     }
  }
  return totalWater
},
 /* Math.min(maxLeft, maxRight) - currentHeight

    Using two pointer need to figure out how to use one of the pointer in currrentHeight
      1. CurrentHeight = Math.min(leftValue, rightValue)
        a. if currentHeight < maxLeft || currentHeight < maxRight then calculate waterArea = (maxL || maxR) - currentHeight and add that to totalWater
        b. else currentHight is greater than update the maxLeft or maxRight correpondily
  */
trapWater4 = input => {

  let 
    leftPointer = 0, 
    rightPointer = input.length -1,
    totalWater = 0,
    maxLeft = 0,
    maxRight = 0

    while(leftPointer < rightPointer){
      //our logic sits here
      // determine currentHight?

      let 
        leftValue = input[leftPointer],
        rightValue = input[rightPointer]

        if(leftValue <= rightValue){
          currentHeight = leftValue

          if(currentHeight > maxLeft){
            maxLeft = Math.max(maxLeft, currentHeight)
          }else{
            totalWater += maxLeft - currentHeight
          }
          leftPointer++
        }else{
          currentHeight = rightValue
          if(currentHeight > maxRight){
            maxRight = Math.max(maxRight, currentHeight)
          }else{
            totalWater+= maxRight - currentHeight
          }
          rightPointer--

        }
        
    } 
    return totalWater
}


console.log(trapWater4([4,2,0,3,2,5]))
console.log(trapWater4( [0,1,0,2,1,0,1,3,2,1,2,1]))

console.log('trapWater4',trapWater4([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]))
