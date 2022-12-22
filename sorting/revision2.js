/*

                        [10, 2, 5, 1, 8] 
                         /              \
                     [10, 2]        [ 5, 1, 8]
                      /   \            /    \ 
                    [10]  [2]       [5]     [1, 8]
                                             /  \
                                            [1] [8]
    

                                            





function merge(left, right){
    let i = 0; j = 0, result = []

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j))
}
function mergeSort(array){
    if(array.length < 2) return array
    let
     middle = Math.floor( (0 + array.length) / 2),
     leftSide = array.slice(0, middle),
     rightSide = array.slice(middle)

     return merge(
        mergeSort(leftSide),
        mergeSort(rightSide)
     )

}
*/
 

function mergeSortPartition(input){
    if(input.length === 1) return input
    let
     middle = Math.floor(( 0 + input.length) / 2),
     left = input.slice(0, middle),
     rigtht = input.slice(middle)

    return mergeSort(
        mergeSortPartition(left),
        mergeSortPartition(rigtht)
    )
}
function mergeSort(left, right){
    let i = 0 , j = 0, result = []

    while(i < left.length && j < right.length ){
        if(left[i] < right[j]){
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j))
}


console.log('merge sort => ', [10, 2, 5, 1, 8], mergeSortPartition([10, 2, 5, 1, 8]))
