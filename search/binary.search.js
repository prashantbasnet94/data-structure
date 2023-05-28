/*
    sorted array enables certain things for us
    1. Binary search

[1,2,3,4,5,6,7], find position of element 5

Naive approach is to search linearly. Initalize a pointer on a left and scan through the array until we find the value, check one item at a time

Any search algorithm that lets you find something in an array, with your default language is probably leveraging linear search.
Worst case of is finding that element 7, time complexity is O(N)

Searching for thing is very common requirement when you use an application. Things like google search or any thing that require searching in it;s underlining fauture
cannot operate o(N) time

When we have a sorted array, we are able to binary search

In Binary Search, [1,2,3,4,5,6,7], find position of element 5

We define left pointer pointing at the start ,l =0 , right pointer pointing at the end of the array(r = 6) 
and then we have a mid pointer, m = (l+r) /2, round total value down everytime
i.e our mid = (0+6)/2 =3 i.e array[mid] = 4

since our array is soted, any value to the left of 4 is smaller and we can immediatly shift our left pointer to the right of our midvalue
if we want to find 5, we can throw array everything left to our new left pointer.
Now we reduces our search space in half entirely, and we do the same check
l = 4 i.e array[l] = 4, r =6 array[r] =7, mid = (4+6)/2 = 5 i.e array[mid] = 6
array[mid] i,e 6 > 5, so we don't need anything right of 6, since it is greater.
We need to reduce our search space to setting our right pointer one immedialty to the left of mid pointer i.e 6

again. 
l = 4, r = 4 , mid = 4
is this element we are looking for? 
yes

This is how we reduce our search time complexity to O(logN)

Everytime if we don't find the value we are looking for , we are reducing the search space in half
In worst case, we are searching for O(logN)


*/

function binarySearchLooping(array, target) {
    let
        left = 0,
        right = array.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2),
            valueFound = array[mid]
        if(valueFound === target){
            return mid
        }else if(valueFound > target){
            right = mid -1
        }else{
            left = mid +1
        }
    }
    return  -1
}
function binarySearchRecursive(sortedData, target, left = 0, right = sortedData.length - 1) {
    let
        mid = Math.floor((left + right) / 2)
    if (sortedData[mid] === target) {
        return mid
    } else if (sortedData[mid] < target) {
        return binarySearch(sortedData, target, mid + 1, right)
    } else {
        return binarySearch(sortedData, target, left, mid - 1)
    }
    //what to return if no value is found
    return -1

    // what if array has -ve numbers as well

}


console.log(binarySearchLinear([1, 2, 3, 4, 5, 6, 7], 5))