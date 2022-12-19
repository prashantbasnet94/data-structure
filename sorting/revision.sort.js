/*

Bubble sort, Insertion Sort and Selection sort has time complexity of o(N^2) and space complexity of O(1)
Thus, they are bad in time complexity than Merge sort and quick sort.
Merge and quick sort uses divide and conqueur technique using recursion.
Thus brings down the time complexity from O(N^2) => N LogN, N to compare each elements and logN using divide and conqueur technique


Following the algorithm for these sorts:
*/

/*
     Bubble Sort:
        Has two pointers and compare two values which ever is greater is bubbled up all the way to the end
*/

function bubbleSort(data){
    for(let i = 0; i < data.length; i++){
        for(let j = 0; j < data.length; j++){
            if(data[j] > data[i]){
                let temp = data[i]
                data[i] = data[j]
                data[j] = temp
            }
        }
    }
    return data
}

console.log('Bubble sort => ', [10, 2, 5, 1, 8], bubbleSort([10, 2, 5, 1, 8]))

/*
    Insertion Sort:
    Insertion sort splits unsorted array => [sorted, ...unsorted] list
    And perform the sort by picking up a vlaue from unsorted list to sorted list until unsorted array is empty
*/

function insertionSort(data){
    for(let i = 1; i < data.length; i++){
        let
         value = data[i],
         hole = i
         while(hole > 0 && data[hole-1] > value){
            data[hole] = data[hole -1]
            hole = hole -1 
         }
         data[hole] = value    
    }
    return data
}
console.log('insertion sort => ', [10, 2, 5, 1, 8], insertionSort([10, 2, 5, 1, 8]))


/*
    Selection sort:
    Scans the array and find the smallest value in the array, swaps it with the first element

*/


function selectionSort(data){
    // scan for the smallest element

    for(let i = 0; i < data.length; i++){
        let min = i
        for(let j = i + 1; j< data.length; j++){
            if(data[j] < data[min])min = j
        }
        let temp = data[i]
        data[i] = data[min]
        data[min] = temp
    }
    return data
}

console.log('selection sort => ', [10, 2, 5, 1, 8], selectionSort([10, 2, 5, 1, 8]))


/*
Merge Sort:
Merge sort usese divide and conqueur techinque. So it' big o is O(NlogN), space compelxity is N/2, where N is total number of elements of array

*/

//  [1, 3, 13], [2, 4]
function merge(left, right){
    let
     i = 0,
     j = 0,
     result = []

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }
    }
    // @worst case, result array will store half and remaning will store the half i.e 2 * n/2 => n
    let remaining = [].concat(left.slice(i)).concat(right.slice(j))
    return result.concat(remaining)
}

function mergeSort(data){
    if(data.length ===1){
        return data
    }
    let
     middle = Math.floor(data.length / 2),
     left =  data.slice(0, middle),
     right = data.slice(middle)
     return merge(
        mergeSort(left),
        mergeSort(right)
     )
}
console.log('merge sort => ', [10, 2, 5, 1, 8], mergeSort([10, 2, 5, 1, 8]))


/*
    Quick sort:
    also uses divide and conquer technique


*/

class Sort{
    /*
        3 main functions are need 
            i. Partition from pivot, 
            ii. Swap 
            ii. sorting itself that calls partition
    */

     _swap(array, i, j){
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
     }

     // smaller than pivot to the left and larger to the right of pivot
     _partition(array, left, right){
        let
         pivot = array[right],
         restingPointOfPivot = left

         for(let i = left; i < right; i++){
            if(array[i] < pivot){
                this._swap(array, i, restingPointOfPivot)
                restingPointOfPivot++
            }
         }

         this._swap(array, restingPointOfPivot, right)
         return restingPointOfPivot
     }
     _quickSort(array, left, right){
        if(left < right){
            let pivotIndex = this._partition(array, left, right)
            this._quickSort(array, left, pivotIndex -1 )
            this._quickSort(array, pivotIndex + 1, right)
        }
     }
     sort(array){
        this._quickSort(array, 0, array.length -1 )
        return array
     }    
}
let sort = new Sort()
console.log('quick sort => ', [10, 2, 5, 1, 8], sort.sort([10, 2, 5, 1, 8]))
