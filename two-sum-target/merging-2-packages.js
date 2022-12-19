function twoSum(input, target){
    
    for(let i = 0; i < input.length; i ++){
        for(let j = i; j < input.length; j++){
            if(input[i] + input[j] === target){
                return [j , i]
            }
        }
    }
    return []
}

function twoPointerTwoSum(input, target){
    let leftPointer = 0, rightPointer = input.length - 1

    while(leftPointer < rightPointer){
        let sum = input[leftPointer] + input[rightPointer]
        if(sum > target){
            rightPointer--
        }else if(sum < target){
            leftPointer++
        }else{
            while(input[leftPointer] == input[leftPointer+1])leftPointer++
            return[rightPointer, leftPointer]
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

function getIndicesOfItemWeights(arr, limit){
    let map = {}


    for(let i = 0; i < arr.length; i++){
        if(map[limit - arr[i]] !== undefined){
            return [i, map[limit - arr[i]]]
        }
        map[arr[i]] = i
    }
    return []
}