/*

O(nlogn) uses divide and conquer
Quick sort uses pivoting techniques to break main list into smaller list
and smaller list uses pivoting technique until they are sorted 


Picks one pivot value, then arrange rest of the list element either to it's left if smalller or to the right if larger
Finally we will have list with pivot position somewhere in the middle
Everything to the left and right still needs to get sorted

From there, using divide and conquer we then split the list using another pivot in the sublist
then arrage the rest of the list element either to it's left if smaller or to the right if larger

How do we pick pivot point?
It's random. Depends on the situation

Quick sort is really really useful. It's space complexity is really good i.e log(n), whereas merge sort has o(n).
It's worst case is o(n^2), when pivot is smallest or the largest number in the list
Time compexity on average is (nlog(n))

It's the fastest algo on average, just be mindful on worst
if you cannot gaurente if pivot is going to be good,  then avoid quick sort

To implement to quick sort
    1. Pick a pivot point
    2. Instantiate two pointers(i, j) in the starting position,
     i is going to be a pointer that keeps track of where the final resting point of pivot point should be 
     j is going to scan through the array and compare the element[j] with the pivot to figure out if it's greater or lesser than the pivot 
    3. If the element[j] < pivotElement, then swap element at i and j, then increment both pointer as j is already compared and i holds a position bigger than last

https://www.youtube.com/watch?v=COk73cpQbFQ
*/


function quickSort(data) {
    //select a pivot point
    let pivotElement = data[data.length -1]
    // keeps track of final resting point of pivot element
    let i =0
    // scans throgh the array and compare each elements with pivot
    for(let j =0; j< data.length; j++){
        if(data[j] < pivotElement){
            //       [i]                             [j]
            //swap finalPivotRestingPosition and currentDataIndex
            let temp = data[i]
            data[i] = data[j]
            data[j] = temp
            i++
        }
    }       
    //                             (right)                  (i)
    // once scan is done then swap pivot to it's final resting position element
    let temp = data[i]
    data[i] = pivotElement
    data[data.length] = temp

    return quickSort(data.slice(i))
}
// ******************** REFACTORING ********************************
https://youtu.be/COk73cpQbFQ?t=913
function partition(array, left, right){
    let 
        pivotElement = array[right],
        //partitionIndex
        restingPointOfPivot = left

        for(let j = left; j< right;j++){
            if(array[j] < pivotElement){
                // swap i and j elemnt position
                swapPosition(array, restingPointOfPivot, j)
                restingPointOfPivot++
            }
        }
        //swap final i and pivot position
        swapPosition(array, restingPointOfPivot, right)
        return restingPointOfPivot
}
function swapPosition(array, restingPointOfPivot, j) {
    let temp = array[restingPointOfPivot]
    array[restingPointOfPivot] = array[j]
    array[j] = temp
}
function finalQuickSort(array, left, right){
    if(left < right){
        const partitionIndex = partition(array, left, right)
        finalQuickSort(array, left, partitionIndex -1 )
        finalQuickSort(array, partitionIndex+1, right)
    }
}

function myQuickSort(array, k){
    const indexToFind = array.length - k
    finalQuickSort(array, 0, array.length -1)
    return array
    return array[indexToFind]
}

console.log(myQuickSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0], 1))




/*
1. What's the base case? 
2. What's the recursive case?
*/


// ********** Revision ********


class QuickSortAlgo{
    partition(array, left, right){
        let
         pivot = array[right],
         restingPoint = left
         // [3, 9, 2, 12, 4], left = 0; right = 5
         // array = [values less than pivot, pivot, values greater than pivot]
         // current pivot = 4
         for(let i = left; i < right; i++){
            // if current values is less than pivot move it to the left
            if(array[i] < pivot){
                this.swap(array, i, restingPoint)
                restingPoint++
            }
         }
         this.swap(array, right, restingPoint)
         return restingPoint
    }
    swap(array, left, right){
        let temp = array[left]
        array[left] = array[right]
        array[right] = temp
    }
    quickSort(array, left, right){
        if(left < right){
            let partitionIndex = this.partition(array, left, right)
            this.quickSort(array, left, partitionIndex-1)
            this.quickSort(array, partitionIndex + 1, right)
        }
    }
    main(array){
        this.quickSort(array, 0, array.length -1 )
        return array
    }
}
let quickySort = new QuickSortAlgo()
console.log(quickySort.main([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]))