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

 
/*
         0. 1. 2   3.  4
  arr = [4, 6, 10, 15, 16],  lim = 21
   result = [3,1 ]
*/

function getIndicesOfItemWeights(arr, limit){
     // in this question we know we need to deal with index so let's define a mapIndex

     let mapIndex = {}

     for( let i =0 ; i < arr.length; i++){
        // we know we need to store index
        // for eg: 6 =>  we know 6  needs 15 and we need 15's index
        // so whatever we are looking for needs, we need it's index 
        // mapIndex[arr[i]] = i
        // know we need to see if we already have we are looking for in map
        // if we have we just return in in condition of i > j

        if(mapIndex[limit - arr[i]] !== undefined){
            if(mapIndex[limit - arr[i]] > i){
                return [mapIndex[limit - arr[i]]]
            }else{
                return [i, mapIndex[limit - arr[i]]]
            }
        }

        mapIndex[arr[i]] = i

     }
}


console.log(getIndicesOfItemWeights([4, 6, 10, 15, 16],  21))