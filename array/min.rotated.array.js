/*


        [11, 13, 14, 15]

        
        [3, 4, 5, 1, 2]
         i + 3    *
        [4, 5, 6, 7, 0, 1, 2]
         i + 4       *           


        [0, 1, 2, 3]
         *

        [0, 1, 2, 3, 4, 5]
         *
    
        [5, 0, 1, 2, 3, 4]
             

    
    
        @ at any time if the array is rotated, 
        it is sorted in two ways

        for eg:
        [4, 5, 6, 7, 0, 1, 2]
        --left----   ---right


    approach:

    1. Find the pivot, where the elements are not in increasing order
    
     [4, 5, 6, 7, 0, 1, 2]
      
    2. Use binary search in different way
         0  1  2  3  4   
        [3, 4, 5, 1, 2]
         l     m     r


         calculate the middle = floor((l + r) / 2)
                            = 2

        we also hold the result = 5

        now let's ask a question?
        do we search left or right next?
        where are we gonna find a value than smaller than 5.

    with the value 5, as a mid pointer are we currently in left or right sorted portion?


    if the array is rotated, left sorted is always greater than right sorted.
    Roated means: As we take the larger value and put them in the left


    So how can we know if we are @ left sorted portion?
        every value in right sorted portion is smaller than left sorted portion.


    value[mid]  >= value[left], we know mid value is also a part of left sorted portion
    in which case we want to search right.


    if(value[mid] < value[left]) we know it's a right portion

    so what we derive?


    if(nums[m]  >= nums[l]){
        // go right
    }else{
        // go left
    }

    if our middle pointer happens to be @ the right sorted array  => move to the left to find smaller value

    if our middle pointer happens to be @ the left sorted array => move to the right to find the smaller value




    what happens in sorted array?


    [3, 4, 5]
     l  m  r


result = 4,

now is value[left] < result ? return value[left]

     0  1  2 .3  4 
    [3, 4, 5, 1, 2]
     l     m     r

     result = 5

     if(value[mid] >= value[left]){
        // go right
         l = mid + 1 
         // l = 3
         // r = 4
         // mid = 
        
     }

*/


function searchInRotatedArrray(nums, target) {
    let
        res = nums[0],
        l = 0,
        r = nums.length - 1


    while (l <= r) {

        // if the array is already sorted
        if (nums[l] < nums[r]) {
            res = Math.min(res, nums[l])
            return
        }
        let mid = Math.floor((l + r) / 2)

        // we are @ the left sorted array
        if (nums[l] < nums[mid]) {
            // go right to find the smaler value @ left sorted array i.e right sorted array
            l = mid + 1
        } else {
            // we are @ the right sorted array, go left to find the left sorted array
            // go left
            r = mid - 1
        }
    }
    return res

}

function findMin(nums){
    let
     res = nums[0],
     l = 0,
     r = nums.length - 1


     while(l <= r){
        // if the array is sorted
        if(nums[l] < nums[r] ){
            return Math.min(res, nums[l])
        }

        let  mid = Math.floor((l + r) / 2)
        res = Math.min(res, nums[mid])

        // now where to go , left or right?

        if(nums[l] <= nums[mid]){
            // go right
            l = mid + 1
        }else{
            // go left
            r = mid - 1
        }
     }

     return res
}

console.log(findMin([3,4,5,1,2]) === 1)
console.log(findMin([4,5,6,7,0,1,2]) === 0)
console.log(findMin([11,13,15,17]) === 11)

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
