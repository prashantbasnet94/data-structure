/*
Contains Dups:
    Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



    Logic:
        1. store in map and if found again, then we will return true



*/



function constainsDups(nums){
    let map = {}

    for(let num of nums){
        if(map[num]){
            return true
        }
        map[num] = true
    }
    return false
}












function bruteForce(nums){
    for(i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                return true
            }
        }
    }
    return false
}







function dupsDetector(nums){
    let map = {}
    for(let index = 0; index < nums.length; index++){
        // if number is dup, return true
        // else go on adding to map
        if(map[nums[index]]){
            return true
        }
        map[nums[index]] = true
    }
    return false
}

console.log('----> brute')
console.log(bruteForce([1,2,3,1]))
console.log(bruteForce([1,1,1,3,3,4,3,2,4,2]))






