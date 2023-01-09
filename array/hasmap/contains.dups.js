function containsDups(nums){
    const map = {}
    for(let value of nums){
        if(map[value] !== undefined){
            return true
        }
        map[value] = 1
    }
    return false
}


// trading time for space
function savingSpace(nums){
        nums.sort()

        for(let i = 1; i < nums.length; i++){
            if(nums[i] === nums[i - 1])return true
        }
        return false
}