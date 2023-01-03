/*
Bracket Match
A string of brackets is considered correctly matched if every opening bracket in the string can be paired up with a later closing bracket, and vice versa. For instance, “(())()” is correctly matched, whereas “)(“ and “((” aren’t. For instance, “((” could become correctly matched by adding two closing brackets at the end, so you’d return 2.

Given a string that consists of brackets, write a function bracketMatch that takes a bracket string as an input and returns the minimum number of brackets you’d need to add to the input in order to make it correctly matched.

Explain the correctness of your code, and analyze its time and space complexities.

Examples:

input:  text = “(()”
output: 1

input:  text = “(())”
output: 0

input:  text = “())(”
output: 2
Constraints:

[time limit] 5000ms

[input] string text

1 ≤ text.length ≤ 5000
[output] integer

*/

function bracketMatch(input) {
    let
        stack = [],
        array = input.split(''),
        unmatched = 0

    for (let char of input) {
        if (char === '(') {
            stack.push('(')
        } else {
            if (stack.length > 0) {
                stack.pop()
            } else {
                unmatched += 1
            }
        }
    }
    return stack.length + unmatched
}

const test1 = '(()', test2 = '(())', test3 ='())('
console.log(bracketMatch(test1) === 1)
console.log(bracketMatch(test2) === 0)
console.log(bracketMatch(test3) === 2)

// improving space complxity since we don;t need to store ( or ) in stack

function optimizedBracketMatch(input){
    let unmatched = 0, answer = 0

    for(let value of input.split('')){
        if(value === '('){
            unmatched +=1
        }else{
            unmatched -=1
        }

        // for cases like ))()
        if(unmatched < 0){
            unmatched +=1
            answer +=1
        }
    }

    return answer + unmatched
}

console.log(optimizedBracketMatch(test1) === 1)
console.log(optimizedBracketMatch(test2) === 0)
console.log(optimizedBracketMatch(test3) === 2)

 