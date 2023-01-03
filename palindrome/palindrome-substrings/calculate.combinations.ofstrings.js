/*




*/

function combinations(input){
    const result = []
    for(let i = 0; i < input.length; i++){
        for(let j = i+1; j < input.length; j++){
            result.push(input.slice(i,j))
        }
    }
    return result
}

console.log(combinations('dogs'))