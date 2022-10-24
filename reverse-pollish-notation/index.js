/*
convert infix (2+3) * 3 
to post fix(Reverse pollish notation) [2,3,'+',3,'*']

Rules:
if any operator is encoutered then pop two operands out and apply that operator and push it back to the stack.
Answer is alway the top of the stack at the end of the post fix notation

*/

const resolvePostFix = tokens => {
    let
        i = 0,
        operator = ['+', '-', '*', '/'],
        ignore = ['(', '['],
        stack = []
    do {
        let
            currentChar = tokens[i],
            ifCurrnetCharIsOpeningBracket = ignore.indexOf(currentChar) > 0,
            ifCurrentCharIsNotOpeningBracket = !ifCurrnetCharIsOpeningBracket

        if (ifCurrentCharIsNotOpeningBracket) {
            const onlyNum = typeof parseInt(currentChar) === 'number' && !operator.includes(currentChar)
            if (onlyNum) {
                stack.push(currentChar)
            }
            let result
            if (operator.includes(currentChar)) {
                let
                    previousChar = stack.pop(),
                    prevPreviousChar = stack.pop()
                switch (currentChar) {
                    case '*':
                        result = previousChar * prevPreviousChar
                        break
                    case '+':
                        result = previousChar + prevPreviousChar
                        break
                    case '-':
                        result = previousChar - prevPreviousChar
                        break
                    case '/':
                        result = previousChar / prevPreviousChar
                        break
                }
                stack.push(result)
            }
        }
        i++
    } while (i < tokens.length)

    return stack.pop()
},
    resolvePostFix2 = tokens => {
        let
            i = 0,
            operator = ['+', '-', '*', '/'],
            stack = []
        do {
            const currentChar = tokens[i]
            if (operator.includes(currentChar)) {
                let
                    rightOperand = stack.pop(),
                    leftOperand = stack.pop()

                switch (currentChar) {
                    case '*':
                        stack.push( leftOperand * rightOperand )
                        break
                    case '+':
                        stack.push(leftOperand + rightOperand)
                        break
                    case '-':
                        stack.push(leftOperand - rightOperand)
                        break
                    case '/':
                        stack.push(parseInt(leftOperand / rightOperand))
                        break
                }
            }else{
                stack.push(parseInt(currentChar))
            }
            i++
        } while (i < tokens.length)
        return stack.pop()
    }

console.log(resolvePostFix(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))