/*

'Aba' => convert all to lower cases
'A,b:a' => remove all but alphanumeric,
'aba' => check for palindrome using pointers {

    // value of leftPinter !== value of rightPointer {
        //can delete max of 1 element
        'acba' => 'aba
        'abca' => 'aba'

        checkPalindromeAgain(string ) with the deletion of left value
        checkPalindromeAgain string with the deletion of right value
        (leftDeletion || rightDelection ) === palindome  ? true : false
    }

}

*/

const
 lowerCaseConverter = input => input.map( o => o.toLowerCase()),
 returnOnlyAlphanumeric = input =>{
    const 
     equivalentAsciCode = input.charCodeAt(),
     isNumber = equivalentAsciCode >=48 && equivalentAsciCode <= 57,
     isCapital = equivalentAsciCode >=65 && equivalentAsciCode <= 90,
     isSmall = equivalentAsciCode >=97 && equivalentAsciCode <=122
     return isCapital || isSmall || isNumber
 },
 palindromeChecker = input => {
    let 
     leftPointer = 0,
     rightPointer = input.length - 1
     
     do {
        if(input[leftPointer] !== input[rightPointer]){
            // can delete one element at max either from left or from right
            const
             deletionOnLeftMakesItPalindrome = checkTrimmedStringIsPalindrome(input, leftPointer + 1 , rightPointer),
             deletionOnRightMakesItPalindrome = checkTrimmedStringIsPalindrome(input, leftPointer, rightPointer - 1 )
             return deletionOnLeftMakesItPalindrome || deletionOnRightMakesItPalindrome
        }
        leftPointer ++
        rightPointer --
     }while(leftPointer <= rightPointer)
     return true
 },
 checkTrimmedStringIsPalindrome =(string, leftPointer, rightPointer ) => {
    do{
        if(string[leftPointer] !== string[rightPointer]){
            return false
        }
        leftPointer ++
        rightPointer--
    }while(leftPointer <= rightPointer)
    return true
 },
 mainFunction = input => {
    const 
        convertedLowerCaseInput = lowerCaseConverter(input.split('')),
        allAlphanumeric = convertedLowerCaseInput.filter(o => returnOnlyAlphanumeric(o))
        console.log(allAlphanumeric)
        return palindromeChecker(allAlphanumeric)
 }


 const checkIfValidPalindromeAfterDeletion =  input => {
    const transformedInput = input.replace(/[^A-Za-z0-9]/g,'').toLowerCase(),
    checkFurtherPalindrome = (string, left, right) => {
        while(left<=right){
            if(string[left] !== string[right]){
                return false
            }
            left++
            right--
        }
        return true
    },
    checkIfPalindrome = data => {
        let left = 0, right = data.length - 1
        while(left <= right){
            if(data[left] !== data[right]){
                const deleteLeft = checkFurtherPalindrome(data, left+1, right)
                const deleteRight = checkFurtherPalindrome(data, left, right-1)
                return deleteLeft || deleteRight
            }
            left++
            right--
        } 
        return true
    }
    return checkIfPalindrome(transformedInput)
 }


 const test1 = 'avdba',
 test2 = 'abca',
 test3 = "A man, a plan, a canal: Panama"
 console.log(checkIfValidPalindromeAfterDeletion(test1))
 console.log(checkIfValidPalindromeAfterDeletion(test2))

 console.log(checkIfValidPalindromeAfterDeletion(test3))
