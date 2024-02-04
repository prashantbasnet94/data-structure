function longestCommonPrefix(input) {
    if (input.length === 0) return ''

    let smallestSubstring = input[0], answer = ''

    for (let i = 0; i < smallestSubstring.length; i++) {
        for (let j = 1; j < input.length; j++) {
            if (i >= input[j].length || smallestSubstring[i] !== input[j][i]) {
                return answer
            }

        }
        answer += smallestSubstring[i]
    }
}

function longestCommonPrefix2(input) {
    if (input.length === 0) return ''

    let
        answer = ''
    smallestSubString = input[0]

    for (let i = 0; i < smallestSubString.length; i++) {
        for (let j = 1; j < input.length; j++) {
            if (i >= input[j].length || smallestSubString[i] !== input[j][i]) {
                return answer
            }
        }
        answer += smallestSubString[i]
    }
}
function debug(input) {
    if (input.length === 0) return ''
    let answer = '', smallestsubstring = input[0]

    for (let i = 0; i < smallestsubstring.length; i++) {
        for (let j = 1; j < input.length; j++) {
            if (smallestsubstring[i] !== input[j][i] || input[j].length <= i) {
                return answer
            }
        }
        answer += smallestsubstring[i]
    }

}
console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix2(["flower", "flow", "flight"]))
console.log(debug(["flower", "flow", "flight"]))

/*

Longest Common Prefix:
        What is the longest common prefix that can be derived from given list of words

    1. From given list of strings pick 1 as a smallestsubstring, and assumeanswer = ""
    2. Iterate over the smallestsubstring and the list
        compare each char @ answer string with currentItemFromList[index] && make sure we are comapring at index that is inside the length of currentItemFromList
            i. false => return answer
            ii. answer += smallestsubstring[index]


*/


function lcPrefix(input) {
    let answer = "", smallestString = input[0]

    for (let i = 0; i < smallestString.length; i++) {
        for (let j = 1; j < input.length; j++) {
            if (smallestString[i] !== input[j][i] || input[j].length <= i) {
                return answer
            }
        }
        answer += smallestString[i]

    }
    return answer
}