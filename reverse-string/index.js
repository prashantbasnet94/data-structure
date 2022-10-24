/*
    reverse a given string

    1. With the help of stack
        Hello => {
            1.a create a stack 
                [
                    O
                    L
                    L
                    E
                    H
                ]
            1.b Now pop every character
                OLLEH        
        }
    2.     

*/
//  using extra memory
const reverseString = input => {
    let 
     stack = [],
     counter = 0,
     secondStack = []

    do{
        stack.push(input[counter])
        counter ++

    }while(counter  < input.length)
    counter = 0

    do{
        secondStack[counter] =  stack.pop()
        counter ++
    }while(counter  < input.length)
    return secondStack.join('')
}

/* 

    without using extra memory
    
    1. Create two pointers one
        1.a one from start
        1.b another from end
        1.c swap pointer value
*/
const reverseString2 = input => {
    let 
     startingPointer = 0,
     endPointer = input.length -1

     do {
        const temp = input[startingPointer]
        input[startingPointer] = input[endPointer]
        input[endPointer] = temp
        startingPointer++
        endPointer--
     }while(startingPointer <= endPointer)
   return input
}

const reverseString3 = input => {
    let 
        startingPointer = 0,
        endPointer = input.length - 1
     do{
        [input[endPointer], input[startingPointer]] = [input[startingPointer], input[endPointer]] 
        startingPointer++
        endPointer--
     }while(startingPointer <= endPointer)
     return input
}
console.log(reverseString3(["h","e","l","l","o"]))

/*
Conclusion: 
Inorder to change any placement use pointer
    1. onePointer to take  element from the beginnig (startingPointer or leftPointer)
    2. onePointer to take  element from the end (endPointer or rightPointer)
    Run a loop until two pointer meets
    3. now swap the position of first element by laste element i.e array[startingPointer] = array[endPointer]
    4. now swap the element of last element by first element  array[endPointer] =  tempStartingElememt ( since array[startingPointer] is already swapped by now we make a temp var to hold it)
    5. increase the pointer from left or start and decrease the pointer form right/end to make the loop end

 ways to swap elements
 [a,b] = [b,a]   
*/

