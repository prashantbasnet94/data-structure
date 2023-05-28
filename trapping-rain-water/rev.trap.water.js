/*

1. To find size of water can be stored in the current position, we need to find maxHeightLeft and maxHeightRight of the currentPoistion
    a. currentPosition
    b. maxHeightLeft
    c. maxHeightRight


    how can maxHeightLeft || maxHeightRight be calculated @ a given position?
    
    for(i = 0; i < waters.length; i++){
        let leftPointer = i, rightPointer = i, maxHeightLeft = 0 , maxHeightRight = 0, currentWater = 0

        while( -1 < leftPointer){
            maxHeightLeft = Math.max(maxHeightLeft, waters[leftPointer])
            leftPointer--
        }

          while( rightPointer < waters.length){
            maxHeightLeft = Math.max(maxHeightLeft, waters[rightPointer])
            rightPointer++
        }

        currentWater = Math.max(maxHeightLeft, maxHeightRight) - water[i]
        if(currentWater > 0 ){
            totalWater =+currentWater
        }
    }
    return totalWater

*/