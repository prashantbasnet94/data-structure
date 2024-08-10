const twoSum = (array, target) => {
    let startingPoint = 0,
        matchingPointer = startingPoint+1,
        maxPointer = array.length

    while(startingPoint < maxPointer){
        let firstValue = array[startingPoint],
            secondValue = array[matchingPointer]
        if(firstValue + secondValue === target){
            console.log(startingPoint, matchingPointer)
            return [startingPoint, matchingPointer]
        }
        if(matchingPointer === maxPointer){
            startingPoint ++
            matchingPointer = startingPoint+1
        }else{
            matchingPointer++
        }
       
    }
    return []
},
twoSum2 = (array, target) => {
    let myMap = {}
    for(let index = 0; index< array.length; index++){
        let 
            currChar = array[index],
            matchExist = myMap[currChar]

            if(matchExist >= 0){
                return [myMap[currChar],index]
            }else{
                let needMatchFor = target- currChar
                myMap[needMatchFor] = index
            }
    }
    return []
}

console.log(twoSum2([1,3,7,9,2], 11))




function twoSumUsingMoreSpace(nums, target){
    //iterate over the nums array
    // we will setup an obj to store the calcuatiion
    // if the current num is already in the obj 
    // we return the current index and 

    let mapobj = {}

    for(let i = 0; i < nums.length; i++){
        // if curentNumber is already in the obj we just return indices
        let currentNumber = nums[i]
        if(mapobj[currentNumber] >=0 ){
            return [i, mapobj[currentNumber]]
        }else{
            let numberLookingFrom = target - currentNumber
            mapobj[numberLookingFrom] = i
        }
    }
}




function twoSumSpaceOptimize(nums, target){
    /*
            1. we will use pointers
            2. leftPointerm and rightPointer to compare two numbers to target, 
                a. leftPointer will start from 0 and rightPointer from 1
                b both moves from left to right comparing different numbers in the integer array
            3. comparison
                a. if equal to target
                    i. we will return the [lefPointer, rightPointer]
                b. if not we will keep on moving.
                    i. rightPointer keeps on moving right every iteration
                    ii. if rightPointer reaches maxPointer meaning at the end of the array
                        x. leftPointer moves 1 right
                        y. rightPointer reset to leftPointer + 1
                    


    */

                let 
                leftPointer = 0,
                rightPointer = leftPointer + 1,
                maxPointer = nums.length;

                while(leftPointer < maxPointer){
                    let 
                    leftvalue = nums[leftPointer],
                    rightvalue = nums[rightPointer]

                    if(leftvalue + rightvalue === target){
                        return [leftPointer, rightPointer]
                    }

                    if(rightPointer === maxPointer){
                        leftPointer ++
                        rightPointer = leftPointer + 1
                    }
                    rightPointer++
                }
}