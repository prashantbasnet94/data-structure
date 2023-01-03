function removeAdjacentDups(input){
    // using stack to solve the probelm

    // mississipi
    let
     stack = [],
     counter = 0,
     maxCounter = input.length -1

     while(counter <= maxCounter){
        let 
        currentValue = input[counter],
        stackTop = stack[stack.length - 1]
        if(stack.length === 0){
            stack.push(input[counter])
        }else if(currentValue !== stackTop){
            stack.push(currentValue)
        }else{
            stack.pop()
        }

        counter++
     }
     return stack.join('')
}

console.log(removeAdjacentDups('mississipi'))

/*
Remove K dups:

abcd, k = 2 => abcd

deeedbbcccbdaa, k = 3, => {
    deeedbbcccbdaa => ddbbcccbdbaa
    ddbbcccbdbaa => ddbbbdaa
    ddbbbdaa => dddaa
    dddaa => aa
}

*/

function removeKDups(input, k){
    // we will utilize stacks

    let stacks = [], counter = 0, maxCounter = input.length -1

    while(counter <= maxCounter){
        let currentChar = input[counter],
        stackTop = stacks[stacks.length - 1]

        if(stacks.length === 0 || currentChar !== stackTop[0]){
            stacks.push([currentChar, 1])
        }else{
           stackTop[1] ++

            if(stackTop[1] === k){
                stacks.pop()
            }
        }
        counter++
    }
         let result = ''
        for(let index in stacks){
            const element =  stacks[index]
            result +=element[0].repeat(element[1])
        }
        return result
}

console.log(removeKDups("deeedbbcccbdaa", 3))
console.log( removeKDups("pbbcggttciiippooaais",2))