/*
    1. Stack will helps us solve it.
        a. If stack is empty then push it
        b. If currChar !== stack.top then not similar then push it
        c. If currChar === stack.top then pop and move forward
*/

const removeAdjacentDups = input => {
    let 
        counter = 0,
        maxPointer = input.length - 1,
        stack = []

    while(counter <= maxPointer){
        const
         currChar = input[counter],
         stackTop = stack[stack.length - 1]

        if(stack.length === 0){
            stack.push(currChar)
        }else if(currChar !== stackTop){
            stack.push(currChar)
        }else {
            stack.pop()
        }
        counter++
    }
    return stack.join('')
}
console.log(removeAdjacentDups('mississippi'))