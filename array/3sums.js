/*
      0 .1 .2  3 . 4 . 5    
    [-1, 0, 1, 2, -1, -4]
    [-4, -1, -1, 0, 1, 2]
     l    
    l
    r
    i



*/



function threeSum(nums){
    nums.sort((a, b) =>  a - b)
    let result = []


    for(let i = 0; i < nums.length; i++){
        let l = i + 1, r = nums.length - 1
    
         while(l < r){
            const sum = nums[l] + nums[r] + nums[i]

            if(sum < 0){
                l++
            }else if( 0 < sum){
                r--
            }else{
                result.push([nums[i], nums[l], nums[r]])
                
                while(nums[i] === nums[i + 1])i++
                while(nums[l] === nums[l + 1])l++
                while(nums[r] === nums[r - 1])r--

                l++
                r--
            }
         }

    }
    return result
}

console.log('threeSum ',threeSum( [-1,0,1,2,-1,-4]))