/*
two sum can be solved using hash map

point to be noted:

don't use
i. if(maps[nums[index]]){

}

this is false as index could be 0

*/

function twoSum(nums, target){
    let map = {}
    for(let index = 0 ; index < nums.length; index++){
        // if numtofind is found in map return 
        if(map[nums[index]] !== undefined){
            return [ map[nums[index]], index]
        }
        // add to map
        const numToFind = target - nums[index]
        map[numToFind] = index
    }
    return []

}
console.log(twoSum([2,7,11,15],  9))