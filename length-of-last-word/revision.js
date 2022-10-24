const lengthOfLastWord = input => {
    const
        allWords = input.split(' ')
    allWordsLength = allWords.length
    return allWords[allWordsLength - 1].length
},
    lengthOfLastWord2 = input => {
        // have a pointer which checks for space
        // have another counterPointer while keeps track of length of substring
        //if space is discovered either return the current counterPointer or reset it for the next substring

        let
            leftPointer = 0,
            pointerLimit = input.length,
            count = 0
        do {
            const
                currentCharIsSpace = input[leftPointer] === ' ',
                currentCharIsNotSpace = !currentCharIsSpace
            if (currentCharIsNotSpace) {
                count++
                leftPointer++
            } else {
                while (input[leftPointer] === ' ' && leftPointer < pointerLimit) {
                    leftPointer++
                }

                if (leftPointer === pointerLimit) {
                    return count
                } else {
                    count = 0
                }
            }

        } while (leftPointer < pointerLimit)
        return count
    },

    //using index, need to trim string
    lengthOfLastWord3 = input =>{
        let
         trimmedInput = input.trim(),
         leftPointer = 0,
         maxPointer = trimmedInput.length - 1,
         count = 0

         while(leftPointer <= maxPointer){
            const currCharIsNotSpace = trimmedInput[leftPointer] !== ' '

            if(currCharIsNotSpace){
                count++
                leftPointer++
            }else{
                while(leftPointer < maxPointer && trimmedInput[leftPointer] === ' '){leftPointer++}
                if(leftPointer === maxPointer){
                    return count
                }else{
                    count = 0
                }
            }
         }
         return count

    }

// let testCase = 'hello world'
// let testCase = ' a'
let testCase = "   fly me   to   the moon  "


console.log(lengthOfLastWord3(testCase))
// console.log(lengthOfLastWord2(testCase))

