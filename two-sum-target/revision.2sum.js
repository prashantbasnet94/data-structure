const twoSum = (array, target) => {
    let startingPoint = 0,
        matchingPointer = startingPoint+1,
        maxPointer = array.length

    while(startingPoint < maxPointer){
        let firstValue = array[startingPoint],
            secondValue = array[matchingPointer]
        if(firstValue + secondValue === target){
            console.log(startingPoint, matchingPointer)
            return [startingPoint, matchingPointer]
        }
        if(matchingPointer === maxPointer){
            startingPoint ++
            matchingPointer = startingPoint+1
        }else{
            matchingPointer++
        }
       
    }
    return []
},
twoSum2 = (array, target) => {
    let myMap = {}
    for(let index = 0; index< array.length; index++){
        let 
            currChar = array[index],
            matchExist = myMap[currChar]

            if(matchExist >= 0){
                return [myMap[currChar],index]
            }else{
                let needMatchFor = target- currChar
                myMap[needMatchFor] = index
            }
    }
    return []
}

console.log(twoSum2([1,3,7,9,2], 11))