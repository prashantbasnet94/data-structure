
/*
    1. Solve it with the help of stack
    2. Since k is dynamic, we keep track of number of char repition in stack
        a. If stack === [], then push currentChar
        b. if currChar !== stack.top then push CurrentChar with count 1
        c. If currentChar === Stack.top then increment the count of currentChar in Stack by 1
        d. If any of char in stack has count of 3 then pop it out and move forward
*/


const removeKDups = (input, k ) => {
    let 
        stack = [],
        counter = 0,
        maxPointer = input.length - 1

    while(counter <= maxPointer){
        let   
            currChar = input[counter],
            currentStackTop = stack[stack.length - 1],
            currentStackTopChar = currentStackTop && currentStackTop.length > 0 ? currentStackTop[0] : null,
            currentStackTopCount = currentStackTopChar ? currentStackTop[1] : null
        
            if(stack.length === 0 || currChar !== currentStackTopChar){
                stack.push([currChar, 1])
            }else{
                currentStackTopCount++
                currentStackTop = [currentStackTopChar, currentStackTopCount]
                stack[stack.length - 1 ] = currentStackTop
                if(currentStackTopCount === k){
                    stack.pop()
                }
            }
            counter++
    }
    return stack.map( x => {
        let result= x[0] 
        for(let a = 1; a < x[1]; a++){
            result +=result
        }
        return result
    }).join('')
},
removeKDups2 = (input, k ) => {
    let 
        stack = [],
        counter = 0,
        maxPointer = input.length - 1

    while(counter <= maxPointer){
        let   
            currChar = input[counter],
            currentStackTop = stack[stack.length - 1]
        
            if(stack.length === 0 || currChar !== currentStackTop.first){
                const pair = {
                    first: currChar,
                    second: 1
                }
                stack.push(pair)
            }else{
                stack[stack.length - 1].second++
            }
            const count = stack[stack.length - 1].second
            if(count === k){
                stack.pop()
            }
            counter++
    }
    let newStr = ''
    for (const index in stack) {
        newStr += (stack[index].first).repeat(stack[index].second)
    }
      return newStr
},
removeKDups3 = (input, k ) => {
    let 
        stack = [],
        counter = 0,
        maxPointer = input.length - 1

    while(counter <= maxPointer){
        let   
            currChar = input[counter],
            currentStackTop = stack[stack.length - 1]
        
            if(stack.length === 0 || currChar !== currentStackTop[0]){
                stack.push([currChar, 1])
            }else{
                stack[stack.length - 1][1]++
            }

            const count = stack[stack.length - 1][1]
            if(count === k){
                    stack.pop()
            }
            counter++
    }
    let newStr = ''
    for (const index in stack) {
         newStr += (stack[index][0]).repeat(stack[index][1])
    }
      return newStr
},
removeKDups4 = (input, k) => {
    let 
        stack = [],
        counter = 0,
        maxPointer = input.length - 1

        while(counter <= maxPointer){
            const 
                currChar = input[counter],
                stackTop = stack[stack.length - 1]

            if(stack.length === 0 || currChar !== stackTop[0]){
                stack.push([currChar, 1])
            }else{
                stack[stack.length - 1][1] ++
                if(stackTop[1] === k){
                    stack.pop()
                }
            }           
            counter++
        }

        let result = ''
        for(let index in stack){
            const element =  stack[index]
            result +=element[0].repeat(element[1])
        }
        return result
}


console.log(removeKDups4("deeedbbcccbdaa", 3))
console.log(removeKDups4("pbbcggttciiippooaais",2))