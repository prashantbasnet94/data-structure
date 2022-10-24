/*
1. If any number is encounted then simply push it to stack
2. if any operator is encoutered then pop two elements out of stack and apply that operator and push the result back
3. Result is always the pop of the stack || top of the stack
*/

const evaluatePolishNotation = input => {
    let
        operators = ['*', '-', '+','/'],
        counter = 0,
        maxPointer = input.length - 1,
        stack = []

        while(counter <=maxPointer){
            const currentChar = input[counter]
            if(operators.includes(currentChar)){
                let 
                 rightOperand = stack.pop(),
                 leftOperand = stack.pop(),
                 result

                 switch(currentChar){
                    case '*':
                        result = leftOperand * rightOperand
                        break
                    case '-':
                        result = leftOperand - rightOperand
                        break
                    case '+':
                        result = leftOperand + rightOperand
                        break
                    case '/':
                        result = parseInt(leftOperand / rightOperand)
                        break
                 }
                 stack.push(result)
            }else{
                stack.push(parseInt(currentChar))
                console.log(stack)
            }
            counter++
        }
        return stack.pop()
}

console.log(evaluatePolishNotation(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))
console.log(evaluatePolishNotation( ["2","1","+","3","*"]))