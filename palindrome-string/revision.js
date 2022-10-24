/*
1. Convert into lower case
2. Remove alphanumeric chars
3. Palindrome Alogrithm with pointers
*/

const
    convertInputToLowerCase = input => input.map(o => o.toLowerCase()),
    returnOnlyAlphanumeric = charInput => {
        const 
            asciValueOfCurrentChar = charInput.charCodeAt(),
            codeIsNumeric = asciValueOfCurrentChar >= 48 && asciValueOfCurrentChar <= 57,
            codeIsCapital = asciValueOfCurrentChar >=65 && asciValueOfCurrentChar <=90,
            codeIsSmall = asciValueOfCurrentChar >=97 && asciValueOfCurrentChar <= 122
        return codeIsNumeric || codeIsCapital || codeIsSmall
    },
    palindromeChecker = input => {
        let 
            leftPointer = 0,
            rightPointer = input.length - 1
        do {
            if (input[leftPointer] !== input[rightPointer]) {
                return false
            }
            leftPointer++
            rightPointer--

            }while(leftPointer <=rightPointer)
        return true
    },
    mainFunction = input  => {
        const 
            allLowerCases = convertInputToLowerCase(input.split('')),
            filterInAlphaNumeric = allLowerCases.filter( o => returnOnlyAlphanumeric(o))
            return palindromeChecker(filterInAlphaNumeric)
    }
    

    const 
        test1 = 'aba',
        test2 = 'abcd',
        test3 = "A man, a plan, a canal: Panama"
    // console.log(test1, mainFunction(test1))
    // console.log(test2, mainFunction(test2))
    // console.log(test3, mainFunction(test3))

    const testMyPalindrome = input => {
        const 
        transformedInput = input.replace(/[^A-Za-z0-9]/g,"").toLowerCase(),
            // cleanse = string => {
            //     let buildString =''
            //     for(let i =0; i< string.length; i++){
            //         const 
            //         code = string[i].charCodeAt()
            //         isLowerCaseLetter = code >=97 && code <= 122,
            //         isNumeric = code >=48 && code <=57

            //         if( isLowerCaseLetter  || isNumeric){
            //             buildString+= string[i]
            //         }
            //     }
            //     return buildString
            // },
            checkIfPalindrome = data => {
                let left = 0, right = data.length-1
                while(left <= right){
                    if(data[left] != data[right]){
                        return false
                    }
                    left ++
                    right --
                }
                return true
            }
            return checkIfPalindrome(transformedInput)

        /*

        Test cases:

        'race car' => racecar true
        " " => true
        'aba' => true
        'abc cba' => true

        Logic:
        1. Trim the space, random char and space from the string i.e cleanse it
        2. One the clean data, run a while loop and set two pointer, one starting from start and another starting from the end till two pointers meet each other
            a. If anytime the value is not equal return false
            b. Else move on
        3. Return true at the end
        */


    }

    const testMyPalindrome2 = input => {
        const 
            lowerCaseInput = input.toLowerCase(),
            cleanse = string => {
                let buildString =''
                for(let i =0; i< string.length; i++){
                    const 
                    code = string[i].charCodeAt()
                    isLowerCaseLetter = code >=97 && code <= 122,
                    isNumeric = code >=48 && code <=57

                    if( isLowerCaseLetter  || isNumeric){
                        buildString+= string[i]
                    }
                }
                return buildString
            },
            transformedInput = cleanse(lowerCaseInput),
            checkAfterDeletion = (string, left,right) => {
                while(left<=right){
                    if(string[left] != string[right]){
                        return false
                    }
                    left--
                    right++
                }
                return true
            }
            checkIfPalindrome = data => {
                let left = 0, right = data.length-1
                while(left <= right){
                    if(data[left] != data[right]){
                       const 
                        deleteLeftPointer = checkAfterDeletion(input, left+1, right),
                        deleteRightPointer = checkAfterDeletion(input, left, right -1)
                        return deleteLeftPointer || deleteRightPointer
                    
                    }
                    left ++
                    right --
                }
                return true
            }
            return checkIfPalindrome(transformedInput)

        /*

        Test cases:

        'race car' => racecar true
        " " => true
        'aba' => true
        'abc cba' => true

        Logic:
        1. Trim the space, random char and space from the string i.e cleanse it
        2. One the clean data, run a while loop and set two pointer, one starting from start and another starting from the end till two pointers meet each other
            a. If anytime the value is not equal return false
            b. Else move on
        3. Return true at the end
        */


    }
    console.log(testMyPalindrome(test1))
    console.log(testMyPalindrome(test2))

    console.log(testMyPalindrome(test3))
