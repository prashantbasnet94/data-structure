/*

""
"[]"
"()}"
"{([])}"

Logic:

1. Last in First Out
2. When we encounter ])}, any bracket closing to right we need to pop something from stack and see if that's the equivalent to {([
    a. If we encounter ), we pop and see if the popped value is (
    b. }, should pop {
    c. ], should [
3. If stack is empty by the end, then it is valid
4. If anytime we don't get any desired popped up value, then return false
*/

const validParenthesis = input => {
    let stack = [],
        pointer = 0,
        condToPush = ['{', '[', '(']

    if (input.length < 2) {
        return false
    }
    while (pointer < input.length) {
        const currentChar = input[pointer]
        if (condToPush.includes(currentChar)) {
            stack.push(currentChar)
        } else {
            let poppedValued = stack.pop()
            if (currentChar === ')') {
                if (poppedValued !== '(') {
                    return false
                }
            } else if (currentChar === '}') {
                if (poppedValued !== '{') {
                    return false
                }
            } else if (currentChar === ']') {
                if (poppedValued !== '[') {
                    return false
                }
            }
        }
        pointer++
    }
    if(stack.length === 0){
        return true
    }else{
        return false
    }
},
refactored = input => {
    let stack = [],
        pointer = 0,
        parens = {
            '{': '}',
            '[': ']',
            '(': ')'
        }

    if (input.length < 2) {
        return false
    }
    while (pointer < input.length) {
        const currentChar = input[pointer]
        if (parens[currentChar]) {
            stack.push(currentChar)
        } else {
            let 
                leftBracket = stack.pop(),
                correctBracket = parens[leftBracket]

            if(correctBracket !== currentChar){
                return false
            }
        }
        pointer++
    }
    return stack.length === 0
}

console.log(refactored('(('))
console.log(refactored('[{()}]'))
