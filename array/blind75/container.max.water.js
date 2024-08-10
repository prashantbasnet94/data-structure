/*

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.



conclusion:
    1. Some sort of sliding window technique is used here.
    2. to calculate the max area:
        i. a * (b -a)
        ii. where a and b are walls 
        iii. b - a, becuase a is smaller than b, water will overflow if we try to fill up b as well

*/





function maxWater(inputs){
    /*

        sliding window technique:
        1. we have two pointer to compare to walls
            a. when to move what pointers?
                i. smaller walls pointer gets moved
            


    */


                let l = 0, r = inputs.length -1
                let maxArea = Math.min(inputs[l], inputs[r]) * (r-l)

                while(l <= r){
                   let currentArea = Math.min(inputs[l], inputs[r])  * (r-l)
                   maxArea = Math.max(maxArea, currentArea)

                   if(inputs[l] - inputs[r] > 0){
                    r--
                   }else{
                    l++
                   }

                }
                return maxArea
}

function revisedMaxWater(heights){
    let maxArea = 0
    let l = 0
    let r = heights.length - 1

    while(l < r){
        let height = Math.min(heights[l], heights[r])
        let breadth = r - l
        
        maxArea = Math.max(maxArea, height * breadth)

        if(heights[l] < heights[r]){
            l++
        }else{
            r--
        }
    }
    return maxArea
}