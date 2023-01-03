/*
    
Questions to ask:
1.  Are all of the elements positive ? or can be negative too! => Only +ve
2.  Are there any duplicates in the array? => no
3.  Will there always be a solution?  => no
    ([1,2], 5) 
    [], 2
4. What do we return if there's no solution? => null
    Just return null?

5.  Can there be multple pairs add up to the target value? => no
    [1,2,9], 11
    [1,2,9,4,7], 11

6. Write out some test cases?
    [], 2 => null
    [1,10], 11 => 0,1
    [1,3,7,9,2], 11 => [2,3]
    [1,3,7,9,2], 25 =>  null
    [5], 5 => null
    [1,6],7 =>[0,1] 
 
 
 
 --------------------------------------------------------------
 Figure out a solution without code: logic to solve it:

 [1,3,7,9,2], 11 => [2,3]

 try brute force, matching one element to all other elements

 p1 + p2 
 1 + 3
 1 + 7
 1 + 9
 1 + 2 

 3 + 7  => 11

###########--------Two--------##########

Use a pointer:
Pointer moves from left to right:
 [1,3,7,9,2], 11 => [2,3]

 pointer = 1
 target = 11
 number to find = 11 -1 => 10 =>this pointer scan all the other numbers
 
 Rules:

 1. Consider two pointer, one starting from left and another starting from firstPointer + 1
   a. Check the value of twoPointer adds up to target
    i. If it matches the target then return the postion of two Pointers 
    ii. IF it does not match then second pointer moves one step further away from first pointer

    b. If no match is found then startingPointer move a step further then preivous position and secondPointer starts from firstPointer + 1
        i. Repeat the same process
 */

        // [1,3,7,9,2], 11 => [3, 4]
const twoSumTarget = (array, target) => {
    for(let i = 0; i < array.length; i++){
        const numberToFind = target - array[i]
        for( let j = i+1; j < array.length; j++){
            if(numberToFind === array[j])
            return [i,j]
        }
    }
    return null
}, twoSumTarget2 = (array, target) => {
    let 
        startingPointer = 0,
        matchFinderPointer = startingPointer + 1,
        maxPointer = array.length - 1

    while(startingPointer < maxPointer ){
        let 
            firstValue = array[startingPointer],
            secondValue = array[matchFinderPointer]
        if( firstValue + secondValue === target){
            return [startingPointer, matchFinderPointer]
        }    
        if(matchFinderPointer === maxPointer){
            startingPointer++
            matchFinderPointer = startingPointer + 1
        }else{
            matchFinderPointer++
        }      
    }
    return null
},
 // [1,3,7,9,2], 11 => [3, 4]
twoSumTarget3 =(input, target) => {
    // iterate over the input
    // store target number to find in map and index of element that generated it
    //if the targetNumber is encountered than anywhere in the loop return currrent index and value from map of that number
    let map = {}
    for (let i = 0; i < input.length; i++) {

      const 
        currentChar = input[i],
        currentMapValIndex = map[currentChar]
       
        // if currentChar === any value in map then bingo!
        if(currentMapValIndex >= 0){
            const indexInMap = map[currentChar]
            return [indexInMap, i]
        }else{
            numberToFind = target - currentChar
            map[numberToFind] = i
        }
    }
    return null
},
// [1,3,7,9,2], 11 => [3, 4]
twoSumTarget4 =(input, target) => {
   /*
   Rules:
   1. Create a key value pair to store numberToFind and index of the number that generated it
   2. iterate over the array
    a. If currentChar exist in the map then wola! return indexs of [numberThatGeneratedIt, currentIndex]
    b. else
        i.Calculate number to find = target - currChar
        ii. push {numberToFindFromCurrnetChar: indexOf Current Char} into the map
   */

    let myMap = {}
    for( let i = 0; i < input.length; i++){
    console.log(myMap)

        const
            currentChar = input[i]
        if( myMap[currentChar] !== undefined ){
            return [myMap[currentChar], i]
        }else{
            const numberToFind = target - currentChar
            myMap[numberToFind] = i
        }
    }
    return null
}
console.log('twoSumTarget4',twoSumTarget4([1,3,7,9,2], 11))
console.log('twoSumTarget4',twoSumTarget4([3,2,4], 6))

