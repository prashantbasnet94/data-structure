function twoSum(input, target){
    if(input.length === 0) return null

    for(let i =0 ; i < input.length; i++){
        for(let j =i; j < input.length; j++){
            if(input[i] + input[j] === target){
                return [i, j]
            }
        }
    }
    return null
}

console.log(twoSum([1, 3, 7, 9, 4, 8], 12))

/*
    Since we are using two for loops, how can this be optimized further?

    i.  Can be optimized using two pointers
    ii. Trading space complexity with time complexity
*/

function twoSumTwoPointer(input, target){
    if(input.length === 0) return null

    let 
        initalPointer = 0,
        matchingPointer = initalPointer + 1,
        maxPointer = input.length 


    while(initalPointer < maxPointer){
        if(input[initalPointer] + input[matchingPointer] === target){
            return [initalPointer, matchingPointer]
        } 
        if(matchingPointer === maxPointer){
            initalPointer +=1
            matchingPointer = initalPointer + 1
        }
        matchingPointer +=1
    }
}
console.log(twoSumTwoPointer([1, 3, 7, 9, 4, 8], 12))
 


function twoSumSpaceUtilization(input, target) {
    if (input.length === 0) {
        return null
    }
    let myMap = {}
    for (let i = 0; i < input.length; i++) {
        let
            currChar = input[i], // 1
            charToFind = target - currChar // 9

        // if i find currentChar in myMap, then return map found index and currentIndex
        // else insert charToFind from currentChar 
        if (myMap[currChar] !== undefined) {
            return [myMap[currChar], i]
        } else {
            myMap[charToFind] = i
        }

    }
    return myMap
}

console.log(twoSumSpaceUtilization([1, 3, 7, 9, 4, 8], 12))

// using pointer technique to solve

function twoSum2 (input, target){
    let
     sortedInput = input.sort((a, b) => a-b),
     result = [],
     leftPointer = 0,
     rightPointer = input.length - 1

     while(leftPointer < rightPointer){
        let sum = sortedInput[leftPointer] + sortedInput[rightPointer]

        if(sum < target){
            leftPointer++
        }else if(sum > target){
            rightPointer++
        }else{
            result.push([sortedInput[leftPointer], sortedInput[rightPointer]])
            while(sortedInput[leftPointer] === sortedInput[leftPointer + 1]) leftPointer++
            while(sortedInput[rightPointer] === sortedInput[rightPointer - 1]) rightPointer--


            leftPointer++
            rightPointer--
        }
     }

     return result

}

console.log('twoSum2 : ',twoSum2([1, 3, 7, 9, 4, 8], 12))

// [0,-1,-2,2,1], 1
function findPairs(arr, k){

    if (k === 0)return []
        
    let map = {},
     answer = []
     // map : {
     //   y: x
     //}
     for (let x of arr){
         map[x - k] = x
     }
     for (let y of arr){
        if(map[y] !== undefined){
          answer.push([map[y], y]) 
        }
      }   
     return answer
}

console.log(findPairs(
    [0,-1,-2,2,1], 1))


    function findPairs2(arr, k){
        if(k ===0){
            return []
        }
        let map = {}, answer = []
        for(let x of arr){
            map[x-k] = x
        }

        for(let y of arr){
            if(map[y] !==undefined){
                result.push([map[y], y])
            }
        }
        return result
    }



    function findPairs3(arr, k){
        if(k === 0){
            return []
        }

        let map = {}, answer = []

        for( let x of arr){
            map[x-k] = x
        }
        for(let y of arr){
            if(map[y] !==  undefined){
                result.push([ map[y] , y])
            }
        }
    }



    /*



      static int[] getIndicesOfItemWeights(int[] arr, int limit) {
    // your code goes here
    HashMap<Integer,Integer> map = new HashMap<>();
    for(int i = 0;i < arr.length;i++){
      if(map.containsKey(limit-arr[i])){
        return new int[]{i,map.get(limit-arr[i])};
      }
      map.put(arr[i],i);
    }
    return new int[2];
  }

  public static void main(String[] args) {
      
  }


  */