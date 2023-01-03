function close(arr, limit){
    let map = {}
    for(let i =0 ; i < arr.length - 1; i ++){

        if(map[limit - arr[i]] !== undefined){
            return [i, map[limit - arr[i]]]
        }
        map[arr[i]] = i
    }
    return []
}


// [1,2,3, 4,5] 
function pairsWithSpecificDiff(arr, k){
    let map = {}, result = []
    for(let x of arr){
        map[ x - k ] =  x
    }
    for(let y of arr){
        if(map[y] !== undefined){
            result.push([map[y], y])
        }
    }

    return result
}

function findPairsWithGivenDifference(arr, k) {
    if (k === 0)return []
          
     let map = {},
      answer = []
      
      for (let x of arr){
          map[x - k] = x
      }
      for (let y of arr){
        if(map[y] !== undefined){
          answer.push([map[y], y]) 
        }
      }           
   console.log(map)
      return answer
  }

  
console.log(pairsWithSpecificDiff(  [0,-1,-2,2,1], 1))
console.log(close(  [0,-1,-2,2,1], 1))
console.log('findPairsWithGivenDifference',findPairsWithGivenDifference(  [0,-1,-2,2,1], 1))
