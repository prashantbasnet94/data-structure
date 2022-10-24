const
isAlphanumeric = s => {
    /*
        A => 65
        Z => 90

        0 => 48
        9 => 57

        a => 97
        z => 122
    */
    const 
    asciCode = s.charCodeAt(),
    isCapital = asciCode >= 65 && asciCode <=90,
    isSmall = asciCode >= 97 && asciCode <=122,
    isNumeric = asciCode >= 48 && asciCode <=57
    return  isCapital || isSmall || isNumeric
},
checkPalindomeAgain = (s, start, end) => {
    do{
        if(s[start] !== s[end])return false
        start++
        end --
    }while(start <= end)
    return true
},
checkPalindrome = s => {
    let 
        leftPointer = 0,
        rightPointer = s.length - 1
    do {
        if(
            s[leftPointer] !== s[rightPointer]
        ){
            const
            // either delete start and check rest i.e s[s+1....e]
             deleteStart = '',
             // or delete end and check rest  i.e s[s....e-1]
             deleteEnd = ''
            // if( )
            return checkPalindomeAgain(s, leftPointer+1, rightPointer) || checkPalindomeAgain(s, leftPointer, rightPointer -1)
        }
        leftPointer++
        rightPointer--
    }  while(leftPointer <= rightPointer) 
    return true
},
isPalindrome = s => {
       const 
  toLowerCase = s.toLowerCase(),
     filterOutAlphaNumeric = toLowerCase.split('').filter(isAlphanumeric)
     return checkPalindrome(filterOutAlphaNumeric)
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('Abab'))
console.log(isPalindrome('Abab'))


