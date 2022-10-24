/*


Buble sort bubble up the largest number one at a time to the end.
In bubble sort two bubble pointers are used and whichever pointer hold larger value is then bubbled all the way to the end
and the cycle repeats 

1. One of the simplest sorting algorithm but also the least efficient

Time Complexity = O (n^2)
Space Complexisty = O(1)

*/

const numbers = [ 99, 40, 7, 3, 1, 99, 298, 5, -1, 0]

function bubbleSort(data){
    for(let i =0 ; i < data.length; i++){
        for( let j = i+1; j< data.length; j++){
            if(data[i] > data[j]){
                // temp = 40, 7
                //[ 99, 40] => [40,90]
                 // [40,90,7,3] => [7,90,40,3]
                let temp = data[j]
                data[j] = data[i]
                data[i] = temp
            }
        }
    }
    return data
}
console.log(bubbleSort(numbers))