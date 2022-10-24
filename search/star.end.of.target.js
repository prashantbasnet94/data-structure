/*

Verifying constraints:

1. Is there always value in an array?
    can be null
2. What do we return if no value is matched?
    -1


[1,2,2,2,4,5,5,5,5,6],5 => [5,8]
[1,2,3] ,2 => [1,1]
[1,2], 5 => [-1, -1]
[], 3 => [-1,-1]

*/

function startAndEndOfTargetLinear(sortedData, target){
  let left = 0, right = sortedData.length - 1
  
  while(left <= right){
    let mid = Math.floor((left + right) / 2),
    valueFound = sortedData[mid]
    if(valueFound === target){
      
         // return mid
        // find earliest and the furthest value
         // cover a step back and front till same value repeats 
         let start = mid, end = mid
          while(sortedData[start-1] ===  valueFound || sortedData[end+1] === valueFound){
            if(sortedData[start-1] === valueFound){
                start--
            } 
             if(sortedData[end+1] === valueFound){
                end++
            }
         }
        return [start, end]
    }else if(valueFound > target){
        //0,0
        right = mid - 1
    }else{
        // 6, 2
        left = mid + 1
    }
  }
  return [-1, -1]
}

console.log(startAndEndOfTargetLinear([1,2,2,3,3,4,5], 2))

function binarySearch(sortedData, target,left, right){
    while(left<=right){
        let mid = Math.floor((left+right)/2),
        valueFound = sortedData[mid]

        if(valueFound === target){
            return mid
        }else if(target > valueFound){
            left = mid + 1
        }else{
            right = mid -1
        }
    }
    return -1
}

function startAndEndBinarySearch(nums, target){

    let 
    firstPosition = binarySearch(nums, target, 0, nums.length -1),
   
    /*
    since we cannot achive O(logN) by implmenting linear search
    we need to implement binary search

       |=> found this value, i.e first position found = 1
    [1,2,2,3,3,4,5]
    [1], 2, [2,3,3,4,5]
    in order to find start and end position of number 2, we need to implment binary search
    so we binary search left and right hand side of currently found position 

    when we binary search left hand side, left = 0, and right pointer = mid -1 || firstPosition -1
    when we perform binary search on [1] => -1, if we return -1, we know start value is going to be the mid value
    when we perform binary search on [2,3,3,4,5] => 2 i.e from reference to origianl array, so we going to take this as endValue

    Case 2:
    [1,3,3,5,5,5,5,9], t = 5

    do binary search find a mid or firstPosition = 5 @ 3 index then
    1. Break given array into two part at position 3
    [1, 3, 3], 5, [5, 5, 5, 9]
    perform binary search on [1, 3, 3], we will get -1, which indicates 5 @ 3 was the start of the target
    perform binary search on [5, 5, 5, 9], we will get 5 @ 5 i.e  [5], 5, [5, 9]
                              4  5  6  7  , mid = 5  
     [5], 5, [5, 9] => we still have one more 5 at the right most array, so we need to make sure our binary search keep going until we seek -1,
     then we know we found the end, we still need to keep track of that last value of the target that we manage to find through binary search

     temp1 stores start of target found on left or mid, temp2 stores end of target found on right  or mid
     

    */
    startPosition = firstPosition,
    endPosition = firstPosition,
    temp1, temp2

    console.log(firstPosition)
    while(startPosition !== -1){
        temp1  = startPosition
        startPosition = binarySearch(nums, target, 0, startPosition -1)
    }
    startPosition = temp1
    while(endPosition !== -1){
        temp2 = endPosition
        endPosition = binarySearch(nums, target, endPosition+1, nums.length -1)
    }
    endPosition = temp2
    return [startPosition, endPosition]
}
console.log(startAndEndBinarySearch([1,2,2,3,3,4,5], 2))

