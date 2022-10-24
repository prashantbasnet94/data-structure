/*
 Selection Sort:

 One of the simpler possible ways to sort the list
 Algorithm works by scanning the list of items for the smallest element and then swapping the element with first position

 Time Complexity: O(N^2)
 Space Complexity: O(1)

*/

function selectionSort(data){
   
    for (let i =0; i< data.length; i++){
        let 
        min = i
        for( let j = i+1; j< data.length; j++){
            if(data[min] > data[j]){
                min = j
            }
        }
        let temp = data[i]
        data[i] = data[min]
        data[min] = temp
    }
    return data
}
const numbers = [8, 5, 4, 9, 2, 0 ,-1]
console.log(selectionSort(numbers))