/*
1.
    nums = [4,5,6,7,0,1,2], target = 1

     0 .1 .2  3 .4 .5 .6    
    [4, 5, 6, 7, 0, 1, 2],
     l        m        r


     m = 3

        if(nums[mid] === target){
            return mid
        }
       if(nums[mid] >= nums[left]){
        // go right
       }else {
        // go left
       }



    if(nums[mid] >= nums[left]){
        l = m + 1

     0 .1 .2  3 .4 .5 .6    
    [4, 5, 6, 7, 0, 1, 2],
                 l     r
    }




     0 .1 .2  3 .4 .5 .6    
    [4, 5, 6, 7, 0, 1, 2], target = 1
     l        m        r

     // if mid value is greater than target than go left
            7          1            4       1 
     if(nums[mid] >= target &&  nums[l] >= target){
        // go right
        
     0 .1 .2  3 .4 .5 .6    
    [4, 5, 6, 7, 0, 1, 2], target = 1
                 l     r

     }else{
        //go left
     }


2.
     0 .1 .2  3 .4 .5 .6    
    [4, 5, 6, 7, 0, 1, 2], target = 6
     l        m        r

    // if mid value is greater than target than go left
            7          6           4       6 
     if(nums[mid] >= target &&  nums[l] >= target){
        // go right
        
     0 .1 .2  3 .4 .5 .6    
    [4, 5, 6, 7, 0, 1, 2], target = 6
     l     r

     }else{
        //go left
     }



  if(nums[mid] >= target &&  nums[l] >= target){
    
    mid = 1

     0 .1 .2  3 .4 .5 .6    
    [4, 5, 6, 7, 0, 1, 2], target = 6
     l     r

        5               6        4          6
     if(nums[mid] >= target &&  nums[l] >= target){
 



*/

function searchRotatedRefactored(nums, target) {
    let
        l = 0,
        r = nums.length - 1

    while (l <= r) {
        let mid = Math.floor((l + r) / 2)

        if (target === nums[mid]) return mid
        // we are @ left sorted array
        if (nums[l] <= nums[mid]) {
            /*
                            6          7 => false     
                        if target is gerater than mid go right
                        if(target > nums[mid]){
                            l = mid + 1
                        if target is less than left of left sorted array go right
                        }else  if (target < nums[l]) {
                            go right
                            l = mid + 1
                        }
            */
            if (target > nums[mid] || target < nums[l]) {
                // go right
                l = mid + 1
            } else {
                // less than the middle and greater than the left
                // means somewhere in the middle of left sorted array

                r = mid - 1
            }

        } else {
            /*
                         we are @ the right sorted array
                        if(target < nums[mid]){
                            // go left
                            r = mid - 1
                            // if target is less than right most value in the right sorted arrray we need to left as well
                        }else if(target > nums[r]){
                            // go left
                            r = mid - 1
                        }
            */

            if (target < nums[mid] || target > nums[r]) {
                // go left
                r = mid - 1
            } else {
                // go right
                // if the target is greater than mid value and less than the right 
                l = mid + 1
            }
        }
        return -1
    }
}

function searchInRotatedArrray(nums, target) {
    let
        res = nums[0],
        l = 0,
        r = nums.length - 1


    while (l <= r) {

        let mid = Math.floor((l + r) / 2)


        if (nums[l] < nums[mid]) {

            /*        
                we are @ the left sorted array
                either go left or go right   
            
                       r = mid - 1
                       l = mid + 1

                       so when to go left or right?

                        target is less then mid value then go left

                        then when do we go right?
                        if our target is greater than mid we go right
                        and also, 
                        if our target is greater than nums[left], we know it's not in left sorted but in right sorted

            */

            if (nums[mid] < target || target > nums[left]) {
                l = mid + 1
            } else {
                // go left
                r = mid - 1
            }
        } else {
            /*
                we are @ the right sorted array
                gp left or go right
            
                        r = mid - 1
                        l = mid + 1
                
                     target is less then mid value then go left
                     target is greater than nums[r] , then go left
            */
           if(target < nums[mid] ||  nums[r] < target){
                r = mid - 1 
           }else{
                l = mid + 1
           }
        }
    }
    return res

}



var search = function (nums, target) {
    let l = 0, r = nums.length - 1

    while (l <= r) {
        let mid = Math.floor((l + r) / 2)

        if(nums[mid] === target)return mid
        // find out where we are
        if (nums[l] <= nums[mid]) {
            // left sorted array

            // either go left or right

            // if target is greater than mid go right
            // target is less than first element of left sorted array, go to right sorted array

            if (nums[mid] < target ||  target < nums[l]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        } else {
            // right sorted array
            // if target is less than mid value go left
            // target is greater than right most value in right sorted array go left
            if(  target < nums[mid] ||   nums[r] < target ){
                r = mid - 1
            }else{
                l = mid + 1
            }
        }
    }
    return -1
};



function searchInArray(nums, target){

        let l = 0; r = nums.length -1
        while(l < r){
            let mid = Math.floor((l + r) / 2)

            if(nums[mid] === target){
                return mid
            }
            //now if our mid value is less than left Pointer value we are in the left sorted array
            if(nums[l] <= nums[mid]){
            // We're in the left half
            // But we can't just do normal binary search
            // We need to check if the target is within this left sorted portion

               if( nums[l] < target || target < nums[mid] ){
               // if the target is within the left sorted array
               // we can scope down to left sorted array so we bring r closer
               r = mid -1
               }else{
                // the target is in right hand side 
                l  = mid + 1 
               }
            }else{
                // we are in the right half
                // we do nomary binary search
                // if the target is within right sorted portion
                if( nums[mid] < target || target < nums[r] ){
                    l = mid + 1
                }else{
                    // we know target is in left sorted portion
                    r = mid -1
                }
            }
        }
        return -1
}


function searchInRotatedSearchArray(nums, target){
    let l = 0, r = nums.length -1


    while(l <= r){
        let mid = Math.floor((l + r) / 2)

        if(nums[l] <= nums[mid]){
            // we know we are in the left soted array
            // all the elements in the left sorted array is greater than right sorted array 
            // sorted meanns there are heavier number on the left hand side


            // here we we in the left sorted array
            // we cannot do a normal binary search so we do is,  we need to see if the target is within the bound of 
            // left sorted  array

            if(nums[l] < target || target < nums[mid]){

            }else{
                // we go search right sorted array
                l = mid + 1
            }
        }else{
            // we are on the right sorted array

            // similary we cannot do the normaly binary search,
            // so first check if the target is within the right sorted array
            if(nums[mind] < target || target < nums[r]){\


            }else{
                // we need to go to left sorted array
                r = mid -1
            }
        }
    }
}







function searchInRotatedSearchArray(nums, target){
    let l = 0, r = nums.length -1


    while(l <= r){
        let mid = Math.floor((l + r) / 2)

        if(nums[mid] === target) return mid
        if(nums[l] <= nums[mid]){
            // we know we are in the left soted array
            // all the elements in the left sorted array is greater than right sorted array 
            // sorted meanns there are heavier number on the left hand side


            // here we we in the left sorted array
            // we cannot do a normal binary search so we do is,  we need to see if the target is within the bound of 
            // left sorted  array

            if (nums[l] <= target && target < nums[mid]) {
                r = mid -1
            }else{
                // we go search right sorted array
                l = mid + 1
            }
        }else{
            // we are on the right sorted array

            // similary we cannot do the normaly binary search,
            // so first check if the target is within the right sorted array
            if(nums[mid] < target && target <= nums[r]){

            l = mid + 1
            }else{
                // we need to go to left sorted array
                r = mid -1
            }
        }
    }

    return -1
}


function seven(nums){
    let l = 0; r = nums.length -1

    while( l <= r){
        let mid = Math.floor((l + r)/2 )

        if(nums[mid +1 ] < nums[mid]){
            return nums[mid + 1]
        }

        if(nums[l] <= nums[mid]){
            // we are left sorted array
            l = mid + 1
        }else{
            //we are at right sorted array
            r = mid -1
        }
    }
}