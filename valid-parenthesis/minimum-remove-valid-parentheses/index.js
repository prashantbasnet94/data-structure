/*
     Verify Constraints

     1. What do we return from our algorithm?
        return valid string with fewest brackets removed
    2.  Will there be spaces in the string?
        No
    3. Is a string contaning only lowercase characters valid?
        Yes
    

    Test Cases

    "" => ""
    "a)bc(d)" => abc(d)
    (ab(c)d => ab(c)d
            => (abc)d
    "))((" => ""

Logic:

1. Scan from left to right
    a. If we encounter '(' record it's index in the stack
    b. If we encounter ')' , pop out value of stack 
    c. When we reach the end of the string remove any char recorded at the index in the stack
*/
const validString = input => {
    let
        myStrings = input.split(''),
        stack = []

    myStrings.forEach((char, index) => {
        if(char === '('){
            stack.push(index)
        }else if(char === ')' && stack.length){
            stack.pop()
        }else if(char === ')'){
            myStrings[index] = ''
        }
    })
   for(index of stack){
    myStrings[index] = ""
   }
   return myStrings.join("")
},
fast = input => {
    let
        myStrings = input.split(''),
        stack = []

    myStrings.forEach((char, index) => {
        if(char === '('){
            stack.push(index)
        }else if(char === ')' && stack.length){
            stack.pop()
        }else if(char === ')'){
            myStrings[index] = ''
        }
    })
   for(index of stack){
    myStrings[index] = ""
   }
   return myStrings.join("")
},
refactored = input => {
    let
     myStrings = input.split(''),
     stack =[]

     myStrings.forEach((char, index) => {
        if(char=== '('){
            stack.push(index)
        }else if(char === ')' && stack.length){
            stack.pop()
        }else if(char === ')'){
            myStrings[index] =''
        }
     })

     while(stack.length){
        let index = stack.pop()
        myStrings[index] =''
     }

     return myStrings.join("")
}
// console.log(validString('abc(d'))
// console.log(validString("a)bc(d)"))
console.log(refactored("))(("))


