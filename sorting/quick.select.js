const { array } = require('yargs')

function quickSelect(array, left, right, indexToFind) {
    if (left < right) {
        let partitionIndex = partition(array, left, right)
        if(partitionIndex === indexToFind){
            return array[ partitionIndex]
        }else if(partitionIndex < indexToFind){
           return quickSelect(array, left, partitionIndex -1, indexToFind)
        }else{
            return quickSelect(array, partitionIndex + 1, right, indexToFind)
        }
    }
}

function partition(array, left, right) {
    let 
        pivtalElement = array[right],
        finalRestingPositionOFPivtolElement = left

        for(let j = left; j < right; j++){
            if(array[j] < pivtalElement){
                swapPosition(array, finalRestingPositionOFPivtolElement, j)
                finalRestingPositionOFPivtolElement++
            }
        }
        swapPosition(array, finalRestingPositionOFPivtolElement, right)
        return finalRestingPositionOFPivtolElement
}

function swapPosition(array, positionOne, positionTwo){
    let temp = array[positionOne]
    array[positionOne] = array[positionTwo]
    array[positionTwo] = temp
}

function kthLargestElement(array, k){
    let findPositionAt = array.length - k
    quickSelect(array, 0, array.length -1, 1)
    // return array[findPositionAt]
    return array[findPositionAt] 
}

console.log(kthLargestElement([3,2,1,0], 1))