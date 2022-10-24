/* implementation problem
 find the lenghth  of the last word

 1. Reverse the string and find the length of the first word
 2. Start iterating form the end of the string and find the length of the first word
 3. Start iterating from the first

*/

const
 lengthOfLastWord = incomingString => {
    let 
     lengthOfString = incomingString.length ,
     count = 0,
     startingPointer = 0
     while( startingPointer < lengthOfString) {
         const currentCharIsNotSpace = incomingString[startingPointer] !== ' '
         if(currentCharIsNotSpace){
             count++
             startingPointer++
         }else{
             // if the current char is space
            while(
                 //pointerIsInLimit
                 (startingPointer < lengthOfString) 
                 //isCurrentCharSpace
                 && (incomingString[startingPointer] === ' ' )){startingPointer++}
            if(startingPointer === lengthOfString) {
                return count
            }else{
                 count = 0
             }
         }
     }
     return 'length of current string is : ' + count
 },
 lengthOfLastWord2 = incomingString => {
    const
     arrayOfSubString = incomingString.split(' ')
     return 'length of current string is : '  + arrayOfSubString[arrayOfSubString.length -1].length
 } 

let testCase = 'hello world'

console.log(lengthOfLastWord(testCase))
console.log(lengthOfLastWord2(testCase))


/*

-------------------# 1-------------------
 1. measure the length of incoming string
 2. setup a counter to measure the length of substring
 3. setup a pointer starting from begining to track the progress in the string
 4. run a while loop if the startingPoitner is less than the lengthofstring
    4.a check if the current char is space or not
    4.b if the current char is not space
        4.b.1 increase the counter by 1
        4.b.2 increase the startingPointer by 1 as well
    4.c if the current char is space
        4.c.1 run another while loop until (startingPointer is still in the limit) and (char with not space is reached )
            4.c.1.a increment the statingPointer by 1 
        4.c.2 check if the startingPinter is at the end
            4.c.2.a return count 
        4.c.3 if not at the end then reset the counter for next word    
    
-------------------# 2 -------------------
'hello world' ====> split()
1. split the incoming string by space
2. find the last item from the splittd array
3. find the length of the last  item
*/