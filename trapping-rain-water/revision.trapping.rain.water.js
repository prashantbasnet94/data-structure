/*
[0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]

 |   
 |               |   
 |       |       |          |
 |__|____|__|____|__|____|__|_______
    1  2 3  4  5 6  7  8 9  10  
    
               | 
        |1   1 | 1  1  1|   
    | 1 |  | 1 |  | 1 | |
    
     1 + 1 + 2 + 1 + 2 + 1 => 8


Logic:

1. At any point, we need maxLeftHeight and maxRightHeight, we take min(maxLeftHeight, maxRightHeight)
2. Once we know min height on left and right, we reduce currentHeight to find the water that can be collected at currentPoisition
3. If currentWater @ currentPosition > 0, add it to the total water collection 

*/



function bruteForce(input){
    let totalWater = 0

    if(input.length < 2) return totalWater

    for(let i = 0; i < input.length; i++){
        let leftPointer = i , rightPointer = i, maxL = 0, maxR = 0, currentWater = 0

        while(leftPointer > -1){
            maxL = Math.max(input[leftPointer],maxL )
            leftPointer --
        }

        while(rightPointer < input.length){
            maxR = Math.max(input[rightPointer], maxR)
            rightPointer++
        }

        //once i know left and right max value i can calculate currentWaterLevel that can be stored in currentPosition
        currentWater = Math.min(maxL, maxR) - input[i]

        if(currentWater > 0){
            totalWater +=currentWater
        }
    }
    return totalWater
}

console.log(bruteForce([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]))
/*

That is the brute force way of finding leftMax and rightMax
is there any optimal way than this?


Time complexity:
O(N ^ 2), for loop N * while loop N times

Space COmplexity:
O(1)


Can we trade space with time?
let see

is there any optmization here to reduce the while loop inside for loop?

we used two pointers technique in cointainer with the most water. We then moved those pointers inward and each time calculating out formula

Here, what's the difference?
Here what we did was we already declared the two pointers but instead of moving them inward we moved them outward.

How can we move them inward?


we need to conditionally move these pointers, we have to think about the reasoning of moving one over another.
Now, once we move the pointer we are in some new iteration of solution.


Also in the brute force, 

we had 3 pointer, i , left and rightPointer, 

if we only use 2 pointer then we need one of the pointer to take care of i or be i replacement.

Also,

Here we cannot just use these two pointers and single handedly figure out, the water stored without actualling knowing what in between those two pointers

    |
|   | 
|___|__|
l      r


What we can do is keep track of the max value we have seen so far while travling inwards from both direction.
We also need to determine that what do we do with those maxL and maxR value?
How do we know which direction to move?
may be smaller of the the walls to move!

    currentWater = Math.min(maxL, maxR) - input[i]

    we use the smaller value as the current hiehgt i.e i







*/
function opimizedSolution(input){
    let 
        leftPointer = 0,
        rightPointer = input.length -1,
        totalWater = 0,
        maxLeft = 0,
        maxRight = 0

        while(leftPointer < rightPointer){
            //check if currentwater is greater than maxL
                // i.  if greater than replace current maxL
                // ii. if smaller than calculate the currentWater

            // do the same for maxL and maxR

            // water = Math.min(maxL, maxR) - currentHeight i.e input[index]
            // if left pointer is smaller, use left pointer as current index replacement    
            if(input[leftPointer]  <  input[rightPointer]){
                let currentWater = input[leftPointer] 

                if(currentWater > maxLeft){
                    maxLeft = Math.max(maxLeft, currentWater)
                }else{
                    totalWater += maxLeft - currentWater
                }
                leftPointer++
            }else{
                let currentHeight = input[rightPointer]

                if(currentHeight > maxRight){
                    maxRight = Math.max(maxRight, currentHeight)
                }else{
                    totalWater += maxRight - currentHeight
                }
                rightPointer--
            }
        }
        return totalWater
}

console.log(opimizedSolution([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]))


function bruteForceMaxWater(input){
    // at any point i need maxL and maxR
    let totalWater = 0
    if(input.length < 2){
        return 0
    }
    for(let index in input){
        let
         leftPointer = index,
         rightPointer = index,
         maxLeft = 0,
         maxRight = 0

         while(leftPointer > -1){
            maxLeft = Math.max(maxLeft, input[leftPointer])
            leftPointer--
         }

         while(rightPointer < input.length){
            maxRight = Math.max(maxRight, input[rightPointer])
            rightPointer++
         }

         let
          currentHeight = input[index],
          currentWater = Math.min(maxLeft, maxRight) - currentHeight

          if(currentWater > 0){
            totalWater += currentWater
          }
    }
    return totalWater
}
console.log(bruteForceMaxWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]))
