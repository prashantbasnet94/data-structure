// function minimumBracker(text){
//     let unmatched = 0, answer = 0


//     for(let currentChar of text.split('')){
//         if(currentChar === '('){
//             unmatched +=1
//         }
//         if(currentChar === ')'){
//             unmatched -=1
//         }

//         if(unmatched < 0){
//             unmatched +=0
//             answer +=1
//         }

//     }
//     return unmatched + answer
// }




function getIndicesOfItemWeights(arr, limit) {
    // your code goes here
    
    let map = {}
    
    for(let index in arr){
      let
       currChar = arr[index],
       target = limit - currChar
       map[target] = index      
    }
    
    for( let x in arr){
      let currentChar = arr[x]
      if(map[currentChar] !== undefined){
        return [map[currentChar], x]
      }
    }
    return []
  }
  
  
  const test1 = [4, 6, 10, 15, 16]
  console.log(getIndicesOfItemWeights(test1, 21))


  function twoSum(arr, limit){
    let map = {}


    for(let i = 0; i < arr.length; i++){
        let currentChar = arr[i],
        target = limit-currentChar

        console.log('map[target] for target : ', target, ' is ', map[target])
        if(map[target] !== undefined){
            return [i, map[target]]
        }else{
            map[target] = i
        }
    }
    return []
  }

  console.log(twoSum(test1, 21))