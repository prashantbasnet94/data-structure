/*
implementaion problem
    1. Find the smallest string
    2. Iterate over the entire items with the current char present in the smallest substring

*/
const
    longestCommonPrefix = input => {
        if (input.length === 0) return ''
        let
            answer = ''
        smallestSubString = input.sort((a, b) => a.length - b.length)[0]

        for (let i = 0; i < smallestSubString.length; i++) {
            for (let j = 0; j < input.length; j++) {
                if (smallestSubString[i] !== input[j][i]) {
                    return answer
                }
            }
            answer += smallestSubString[i]
        }
    },
    longestCommonPrefix2 = input => {
        if (input.length === 0) return ''

        let
            answer = ''
        smallestSubString = input[0]

        for (let i = 0; i < smallestSubString.length; i++) {
            for (let j = 1; j < input.length; j++) {
                if ( i >= input[j].length || ismallestSubString[i] !== input[j][i]) {
                    return answer
                }
            }
            answer += smallestSubString[i]
        }
    }

console.log(longestCommonPrefix(["flower", "flow", "flight"]))