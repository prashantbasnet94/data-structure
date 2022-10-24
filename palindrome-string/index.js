/*
    Take two pointers i.e startingPointer(leftPointer) and endPointer(rightPointer)
     if value of two pointer is equal move ahead
     when start > end, then we stop the search

    skip all non alphanumeric char

    Rule:
    1. Convert into lower case string
    2. fliter all non alphanumeric char
    3. check for palindorme

    
     
*/

const
 convert = input => {
    let result = []
 
    for(let char = 0; char < input.length; char++) {
        result += input[char].toLowerCase()
     }
    return result
 },
 isAlphanumeric = char => {
    const isAlphanumeric = char.charCodeAt()
    return (isAlphanumeric >= 97 && isAlphanumeric <= 122) || (isAlphanumeric >= 48 && isAlphanumeric <= 57)
 },
 checkPalindome = word => {
   let 
    left = 0,
    right = word.length -1
    do{
        if(word[left] !== word[right]) return false
        left ++
        right --
    }while(left < right)
    return true
 },
 isPalindrome = input => {
   const
    converted = convert(input),
    filtered = converted.split('').filter(c => isAlphanumeric(c))
    return checkPalindome(filtered)
}

console.log(isPalindrome('"A man, a plan, a canal: Panama"'))
 