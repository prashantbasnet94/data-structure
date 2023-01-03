function longestCommonPrefix(input) {
    if(input.length === 0) return ''

    let smallestSubstring = input[0], answer = ''

    for(let i = 0; i < smallestSubstring.length; i++){
        for(let j = 1; j < input.length; j++){
            if ( i >= input[j].length || smallestSubstring[i] !== input[j][i]) {
                return answer
            }
           
        }
        answer += smallestSubstring[i]
    }
 }  

 function longestCommonPrefix2 ( input ) {
    if (input.length === 0) return ''

    let
        answer = ''
    smallestSubString = input[0]

    for (let i = 0; i < smallestSubString.length; i++) {
        for (let j = 1; j < input.length; j++) {
            if ( i >= input[j].length || smallestSubString[i] !== input[j][i]) {
                return answer
            }
        }
        answer += smallestSubString[i]
    }
}
function debug(input) {
    if(input.length === 0) return ''
    let answer = '', smallestsubstring = input[0]

    for(let i = 0; i< smallestsubstring.length; i++){
        for(let j = 1; j < input.length; j++){
            if(smallestsubstring[i] !== input[j][i] || i >= input[j].length){
                return answer
            }
        }
        answer += smallestsubstring[i]
    }
 
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix2(["flower", "flow", "flight"]))
console.log(debug(["flower", "flow", "flight"]))

