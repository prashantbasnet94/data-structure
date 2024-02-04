/*

 wordbreak problem:
    1. given a string leetcode as a string and a array  ['leet', 'code]


  2. "applepenapple", ["apple","pen"]

    "applepenapple" => segmented into a space-separated sequence =>  apple pen apple

    &&&&&&&& same word in the array can be reused multiple times in the segmentation.

    because apple pen apple all are in the array we return true



    0 1 2 3 4 5 6 7
    l e e t c o d e


*/



function wordBreak(seq, words) {
    const dp = new Array(seq.length+ 1).fill(false)
    dp [0] = true
    for (let index = 0; index < seq.length; index++){
            // l + substring() => leet , does this exist in the string?
        for (word of words) {
                const formedWord = seq.substring(index, index + word.length)
                if ( words.indexOf(formedWord) > -1  && index + word.length < seq.length) {
                    dp[index] = true
                }
            }
    }

    dp[seq.length]
}