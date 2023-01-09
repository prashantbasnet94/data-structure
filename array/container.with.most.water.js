
/*

    [1, 8, 6, 2, 5, 4, 8, 3, 7]
     l                       r

     h = 1 - 7 = 1
     b = 7
     a = -42



    breadth = distance between index
    heaight = Math.min(value1, value2)
    maxWater = height * breadth

    1. Have two pointers starting from front and end, two pointers moves inward and calculate the area during os
    2. Also which pointer moves when?
        here the smaller value has less impact so smaller value moves

     0 .1 .2  3  4 .5  5  6 .7   
    [1, 8, 6, 2, 5, 4, 8, 3, 7]
        l                    r

     h = 8 - 7 = 1
     b = 6
     a = 6
*/


function maxWater(nums){
    let
     maxArea = 0,
     l = 0,
     r = nums.length - 1


     while(l < r){
        let
         height = Math.min(nums[l] , nums[r]),
         breadth = r - l

        maxArea = Math.max(maxArea, height * breadth)        
        if(nums[l] < nums[r]){
            l++
        }else{
            r--
        }
     }
    return maxArea
}
console.log(maxWater([1,8,6,2,5,4,8,3,7]) == 49)
console.log(maxWater( [1,1]) === 1)
