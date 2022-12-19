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



function pairsWithSpecificDiff(arr, k){
    let map = {}, result = []
    for(let i = 0; i < arr.length - 1; i++){
        if(map[arr[i] -  k] !==undefined){
            result.push(arr[i], map[arr[i] - k])
        }
        map[ arr[i] - k ] = arr[i]
    }
    return result
}
console.log(pairsWithSpecificDiff(  [0,-1,-2,2,1], 1))