const { array } = require('yargs')

/*
    Insertion Sort

1. Not the most effiecient algo either
2. Fast and efficient when the list is already sorted
3. Perform wells in small datasets

Best explanation:
https://www.youtube.com/watch?v=i-SKeOcBwko
*/
const numbers = [ 99, 40, 7, 3, 1, 99, 298, 5, -1, 0]

function insertionSort(data){
    for(let i =0; i< data.length; i++){
        // if current element is smaller than first one => swap to the first element and unshift the array
        if(data[i] < data[0]){
            const fetchAndRemoveAtPosition = data.splice(i,1)[0]
            data.unshift(fetchAndRemoveAtPosition)
        }else{
            // find where the number should go
            for(let j = 1 ; j < i; j++){
                if(data[i] > data[j-1] && data[i] < data[j]){
                    array.splice(j,0, )
                }
            }
        }
    }
}
/*

At any stage during the process, algortihm devides initally given unsorted array into sorted(given by first element) and unsorted(rest of the element)
unsorted array => [sorted, ...unsorted]

[3,6,4] => [9]
[6,4] => [3,9]
[4] => [3,6,9]
[] => [3,4,6,9]



We divide the unsorted array into two subset
Initally, element @ index 0, will be part of sorted half beacuase if you have one element in the array it is sorted
and all the other elemet are part of unsorted subset

We go on picking the element on unsorted subset and insert them in the sorted subset where they belong
We keep on expanding the sorted subset until unsorted becomes empty

https://youtu.be/i-SKeOcBwko?t=243

[ 7, 2, 4, 1, 5, 3]
here we pick 2 as it is the first element in unsorted subset
store 2 in var value = 2, we created a hole in that particular position of two i.e [ 7,  , 4, 1, 5, 3]

now to insert 2, in the sorted subset. We shift all numbers greater than 2 in the sorted part by 1 position to the right
i.e  7 will travel to the right by 1 position  [  , 7, 4, 1, 5, 3] and the hole will go to positin 0, then we fill up value 2, in the hole
Now we are sorted till index 1 i.e [ 2, 7, 4, 1, 5, 3]

Once again, we pick 4, create hole in it;s position i.e [ 2, 7,  , 1, 5, 3]
value = 4, 
now to insert it in the sorted subset, all the value greater than 4 will shift to the right by 1 position i.e  7 goes further right 
and hole will go to the inital position of 7 i.e [ 2,  , 7, 1, 5, 3], then we fill up value 4, in the hole
Now we are sorted till index 2, i.e [ 2, 4, 7, 1, 5, 3]

same and same


*/
function actualInsertionSort(data){
    // we are sorted till index 0, so starting at i =1
    for(let i = 1; i < data.length; i++){
        // we pick the first value in unsorted subset
        let
         value = data[i],
         // we create a hole on that position
         hole  = i

         // hole can travel to the position 0 && hole should travel 
        //  element @ index hole-1 is greater than value we shift the element @ index [hole -1] to the hole, so our new index hole = hole -1 
         // we need to shift all the value greater then the value to be inserted to the right by 1
         while(hole > 0 && data[ hole -1] > value ){
            // inital hole is filled by greater value in sorted subset
            data[hole] = data[hole-1]
            // new hole is create at that greater value in sorted subset
            hole = hole -1
         }
         // final hole created in the sorted subset @ the right position will be filled with value picked from unsorted subset
         data[hole] = value
    }
    return data

}
function insert(data){
    for(let i = 1; i< data.length; i++){
        let value = data[i],
        hole = i

        while(hole > 0 && data[hole -1] > data[hole]){
            data[hole] = data[hole -1]
            hole = hole - 1
        }
        data[hole] = value
    }
    return data
}

console.log(insert(numbers))