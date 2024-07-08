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