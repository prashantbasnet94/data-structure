/*
    Two Sum:
    Given an array of integerse and an integer target, return indices of the two number such that they add up to the target


    nums = [2, 7, 11, 15], target = 9
    [0,1]



    Logic:
    1. Take the current number, calculate the desired number that matches with the target
        a. Check if this desired number already exist in the list
            i. if exist return [[].indexOf(desiredNum), currentIndex]
            ii. if not then store the {currentNumber: index}

*/

function twoSum(nums, target){
    if(nums.length === 0){
        return []
    }
    let map = {}
    for(let index in nums){
        let
         currentNum = nums[index],
         desiredNum = target - currentNum
        // if takes only handles currentNum
         if(map[currentNum] >= 0){
            return [map[currentNum], index]
         }
         //else deals with desiredNum
         map[desiredNum] = index
    }
}