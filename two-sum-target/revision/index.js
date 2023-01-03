
// [ 1, -1, 2, -2, 3, -3], target is 4
// return me results array that adds up to the given target

function twoSum(input, target){
    let map ={},
    leftPointer = 0, 
    rightPointer = input.length - 1,
    sortedInput = input.sort((a,b) => a-b),
    result = []
     //  0 . 1  2 . 3 .4   5
    // [ 1, -1, 2, -2, 3, -3], target is 4
    // [ -3, -2, -1, 1, 2, 3,], target is 4



//sortedInput[leftPointer] + sortedInput[rightPointer === target]

    while(leftPointer < rightPointer){
        let sum = sortedInput[leftPointer] + sortedInput[rightPointer]
        if(sum > target){
            rightPointer++
        }else if(sum < target){
            leftPointer++
        }else{
            // if are equal
            result.push([sortedInput[leftPointer], sortedInput[rightPointer]])
            leftPointer++
            rightPointer--
            
        }

    }
    return result
}


console.log(twoSum([1,3,7,9,2], 11))
console.log(twoSum([3,2,4], 6))


console.log(twoSum([ 1, -1, 2, -2, 3, -3], 4))


// ************************ Mergin Two Pacages ****************************
// using map obj
function merginTwoPacages(input, target){
    let map  ={},result = []
    for( let i = 0; i < input.length; i++){
        if(map[input[i]] !== undefined){
            result.push([map[input[i]], i])
        }else{
            let targetToFind = target - input[i]
            map[targetToFind] = i
        }
    }
    
    return result
}

console.log('merginTwoPacages',merginTwoPacages([4, 6, 10, 15, 16],  21))

function rewritingMergingTwoPackages(input, limit){
    let indexMap = {}

    // since we are dealing with index

    // if we receive 6, we do  limit - 6 i.e 15, if limit = 21
    // we look for the index of 15, so we know we need to store index

    // for(let i = 0; i < input.length; i++){
    //     indexMap[input[i]] = i    
    // }

    // also, if the target we are looking for already exist we know we can return 
     for(let i = 0; i < input.length; i++){
        if(indexMap[limit - input[i]] !== undefined){
            if(indexMap[limit - input[i]] > i){
                return [indexMap[limit - input[i]], i]
            }else{
                return [i, indexMap[limit - input[i]]]
            }
        }
        indexMap[input[i]] = i    
    }
    return []
}





console.log([4, 6, 10, 15, 16], 21, 'rewritingMergingTwoPackages',rewritingMergingTwoPackages([4, 6, 10, 15, 16], 21))
console.log([4,4,1], 5, 'rewritingMergingTwoPackages',rewritingMergingTwoPackages([4,4,1], 5))


// **************************** pairs with specific difference **********************

function pairswithspecificdifference(input, k){
/* 
   let leftPointer = 0, rightPointer = input.length - 1, map ={}, sortedInput = input.sort((a,b) => a-b), result = []

    while(leftPointer < rightPointer){
        difference = sortedInput[leftPointer] - sortedInput[rightPointer]
        console.log(sortedInput[leftPtoiner], sortedInput[rightPointer])
        if(difference > k){
            rightPointer --
        }else if(difference < k){
            leftPointer++
        }else{
            result.push([sortedInput[leftPointer] - sortedInput[rightPointer] ])
            leftPointer++
            rightPointer--
        }
    }
    return result
******************************************************************
    Here the two pointer technique does not work becuase,
******************************************************************    
                     0 . 1 .2 .3  4     
    sortedInput = [ -2, -1, 0, 1, 2]
    leftPointer = 0 i.e -2
    rightPointer =  4 i.e 2
 
    -----> difference = -2 - (2) => -4

    leftPointer ++ , as difference < k
    
    leftPointer = 1 i.e -1
    rightPointer =  4 i.e 2

    ----> difference = -1 - (2) => -3


    leftPointer ++ , as difference < k
    
    leftPointer = 2 i.e 0
    rightPointer =  4 i.e 2
    
    ----> difference = 0 - (2) => -2

                     0 . 1 .2 .3  4     
    sortedInput = [ -2, -1, 0, 1, 2]
                                  l
                                  r
    as you can see, we did not make sense as our leftPointer and rightPointer override


    so we need to avoid two pointer technique
******************************************************************

    another technique is map


    */

    let
     map = {},
     result = []

    //  for(let i = 0; i < input.length; i++){
    //     if(map[input[i]] !== undefined){
    //         //return it
    //         result.push([
    //             map[input[i]],
    //             input[i]
    //         ])
    //     }else{
    //         let target = input[i] - k
    //         map[target] = target
    //     }

    //  }
    //  return result

    // inorder to find multiple possible values that satisfies x - y = k , we implement two for loops seperately
    // **************************************************************************************************************
    

    // we are dealing with value, so we need to store the target in map

    for(let x of input){
        map[x-k] = x
    }

    for(let y of input){
        if(map[y] !== undefined){
            result.push([map[y], y])
        }
    }

    return result
}

console.log('pairs with specific diff',pairswithspecificdifference([0, -1, -2, 2, 1], k = 1))
 