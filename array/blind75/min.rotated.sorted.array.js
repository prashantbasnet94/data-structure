/*

    Real world application of min rotated sorted array:

    How is it applied to our day to day life product?

    1. first question, why is rotated array even needed?
        let's answer this question first:
            
    Imaging you're incharge of the lunch menu in school cafeteria.
    You have board with seven slots, one for each day of the week:

    Monday: Pizza,
    Tuesday: Tacos,
    Wednesday: Burgers,
    Thurday: Pasta,
    Friday: Fish,
    Saturday: Chicken,
    Sunday: Vegeterian


    Instead of erasing and rewriting menu each day, you have a clever system.
    The boar is circular and can rotate.
    Each day, you rotate it one slot, so the current day's special is always on the top.

    1. Wednesday, your board might look like this:
        [Burgers, Thursday, Friday, Saturday, Sunday, MOnday, Tuesday]
    2. By Sunday:
        [Vegeterian, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday]



    The system has several benefits:
    1. YOu don't rewrite the entier menu each day
    2. Anyone can quickly see today's sepecial it's always at the top and the upcoming specials for the next day.
    3. If someone ask you what was served earlier in this week, you can easily check by looking at the bottom of the list.

    In computer terms, this rotated array structure allows for:
    1. Efficient updates (Just rotate, don't rewrite everything)
    2. Quick access to current and upcoming data
    3. Easy review of recent and past data. 

    The key idea is the information stays in order, but the starting point moves, creating a ROTATED effect. 

    This concept is useful in CS for managing cyclical data or when you need quick access to both recent past and near future information. 

now that i understand what is importance of rated array,now let's focus on  this problem min rotated sorted array.

The problem is asking us to find a minimum number in the array where the algorithm must run in O(LogN)
,meaning you can not even iterate through the array. 
        

So this is a clear hint, that you should do some sort of binary search which also has O(logN) time complexity


 0  1  2  3  4
[3, 4, 5, 1, 2]

1. Binary search can only happen if the array is sorted.
2. Here the array is sorted, , but the sorted order is disrupted at a pivot point due to rotation. 
    This is the key characteristic of the problem.
3. so we can conclude we need some valiration of Binary search algoritm


Let's see how binary search works to find a value

1. leftPointer @ 0, rightPointer @ nums.length
2. calculate the midPointer
    a. if value at midPointer is equal to the number we are looking for we return index
    b. if valueFound @ mid is smaller, than target, we bump up left towards right,
         where we can find bigger numbers
    c.


function BinarySearch(array, target) {
    let l = 0, r = array.length

    while (l <= r) {
        let mid = Math.floor((left + right) / 2)
        let valueFound = array[mid]

        if(valueFound === target){
            return mid
        }else if (valueFound > target) {
            // we need smaller value to be found next time
            r = mid - 1
        }else{
            l = mid + 1
        }
    }
}



now let's see how we can use this to solve our find min in roated sorted array.

At anytime if the array is roated, it is sorted in two ways:

        [4, 5, 6, 7, 0, 1, 2]
         ---left---  --right--

1. Here the challenge is to find the pivotal point, where the elements are not in increasing order
2. If the array is roated, left softed is always greater than right sorted
    a. Rotated means we take the larger value and put them in the left
3. SO how can we know if we are @ left sorted position?
    every value in the right sorted position is smaller than left sorted position.


    if  value[left] <= value[mid]
        we know the mid value is also the part of left sorted array.
        in this case to find smaller num we want to search right 
        so
        l = mid + 1
    else 
        r = mid - 1



*/




function searchRotatedArray(nums){
    let l = 0; r = nums.length
    let result = nums[0]
    if (nums[left] < nums[right]) return nums[left];

    while(l <= r){
        let mid = Math.floor((l + r ) / 2)    
        if(nums[l] <= nums[mid]){
            // we know we are still at left sorted position we want to find smaller value in right sorted position
            l = mid + 1
           result =  Math.min(result, nums[l])

        }else{
            r = mid -1
        }

    }
    return result
}


// now we need to acaually write a case where are inside a right sorted array

function searchRotatedArray2(nums){
 let l = 0, r=nums.length
let result = nums[0]

if (nums[left] < nums[right]) return nums[left];

 while(l <= r){
    

    let mid = Math.floor((l + r) / 2)

    if(nums[mid+1] < nums[mid]){
        return nums[mid+1]
    }
    if(nums[l] <=nums[mid]){
        // we are still in the left sorted array so go to right sorted array
        l = mid + 1
    }else{
        r = mid -1 
    }
 }
}



var findMin = function(nums) {
    let l = 0, r = nums.length - 1;  // Fix: r should be nums.length - 1

// Already sorted
if (nums[l] < nums[r]) {
    return nums[l];
}

while (l < r) {  // Fix: Changed to l < r to avoid unnecessary last iteration
    let mid = Math.floor((l + r) / 2);  // Fix: Renamed midValue to mid for clarity

    // Check for pivot point
    if (nums[mid] > nums[mid + 1]) {  // Fix: Changed condition to check mid > mid+1
        return nums[mid + 1];
    }

    // Decide which half to search
    if (nums[l] <= nums[mid]) {
        // Go for right sorted array
        l = mid + 1;
    } else {
        r = mid;  // Fix: Changed to mid instead of mid - 1
    }
}

return nums[l];  
};

function BinarySearch(array, target) {
    let l = 0, r = array.length

    while (l <= r) {
        let mid = Math.floor((left + right) / 2)
        let valueFound = array[mid]

        if(valueFound === target){
            return mid
        }else if (valueFound > target) {
            // we need smaller value to be found next time
            r = mid - 1
        }else{
            l = mid + 1
        }
    }
}



