/*
    Two Sum:
    Given an array of integerse and an integer target, return indices of the two number such that they add up to the target


    nums = [2, 7, 11, 15], target = 9
    [0,1]



    Logic:
    1. use obj
    2. iterate over the nums array
        a. Check if the current num already exist in the map i.e map[nums[i]] >= 0, why not map[nums[i]] ? because 0 is considered falsy so make sure >= 0
            i. if exist return [i, map[nums[i]]]
            ii. if not then calculate and  store the {desiredNumber: index}

*/

function twoSum(nums, target){
    if(nums.length === 0){
        return []
    }
    let mymap = {}
    for(let index in nums){
        let
         currentNum = nums[index],
         desiredNum = target - currentNum
        // if takes only handles currentNum
        if(mymap[currentNum])
         if(mymap[currentNum] ){
            console.log(mymap[currentNum], 'returning ')
            return [mymap[currentNum], index]
         }
         //else deals with desiredNum
         mymap[desiredNum] = index
    }
}

console.log(twoSum([2, 7, 11, 15], 9))




