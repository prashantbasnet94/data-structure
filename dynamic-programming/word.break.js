/*

    1 2 3 4 5 6 7 8
    l e e t c o d e

    ['leet', 'code']

    Logic:
        1. Start from i = 0, and see
        2. dp[0] = true
        3. dp[1] = false
           dp[2] = false
           dp[3] = false
           dp[4] = false
           dp[5] = substring(@5 + dictionary word length) is present  && substring (1, 4) is also true
                   'code' is present && dp[1] is true
                                        = substring(1) is present in dictionary is given by dp[1]
           dp[7] = false
           dp[8] = false


*********** reverse order ************
    0 1 2 3 4 5 6 7
    l e e t c o d e
           @ pointer


           dp[8] = true
           dp[7] = false
           dp[6] = false
           dp[5] = false
           dp[4] = true
           dp[3] = false
           dp[2] = false
           dp[1] = false
           dp[0] = substring(0, 4) is present in dict &&  dp[4] should also be true






        pointer @ l

        i.e 1 + 4

*/

function bottomUp(s, wordDict) {
    const dp = []


    for (let index in s) {
        for (let word of wordDict) {
            // console.log('current position @ ', index, s[index], s.slice(index))
            if (wordDict.indexOf(s.substring(index, index + word.length)) > -1) {
                dp[index] = true
                console.log('is present', s.substring(index, index + word.length))
            }
        }
        dp[index] = dp[index] || false
    }
    console.table(dp)
}

// console.log(bottomUp("leetcode",  ["leet","code"]))


function topDown(s, wordDict) {
    const dp = []
    dp[s.length] = true

    /*
        0 1 2 3 4 5 6 7 8 9 10 11 12 13
        a p p l e p e n a p p  l  e

        dp [13] = true
        dp [12] = false
        dp [11] = false
        dp [10] = false
        dp [9] = false
        dp [8] = true
        dp [7] = false
        dp [6] = false
        dp [5] = substring(5, pen.length)
               = pen is a word in dic && dp[5 + pen.length] should also be a true
               = true && dp[8]
               = true
        dp [4] = false
        dp [3] = false
        dp [2] = false
        dp [1] = false
        dp [0] = substring(0, appple.length) is a word in dic && dp[0 + apple.length]
                = true && dp[5]
                = true
    */

    for (let index = s.length - 1; index >= 0; index--) {
        for (let word of wordDict) {

            // if the current word is comparable
            //  0 1 2 3 4 5 6 7
            //  a p p l e p e n
            // .            @ index , we cannot comare @ this case
            if (index + word.length <= s.length) {
                let formedWord = s.substring(index, index + word.length) > -1
                if (wordDict.indexOf(formedWord)) {
                    dp[index] = dp[index + word.length]
                }
            }
        }
        dp[index] = dp[index] || false
    }
    return dp[0]
}

console.log(topDown("leetcode", ["leet", "code"]))
console.log(topDown("applepenapple", ["apple", "pen"]))


/*
    leetcode, ['leet', 'code']

             0  1  2  3  4  5  6  7
        dp: [l, e, e, t, c, o, d, e]

        1. initialize a dp array with the size of given string
        2. either we need to start matching from either from left or right pointer
        3.  start from left {
            i. check two condition
                a. currentWord is smaller than totalLength: if the currentPointer + word.length <= string .length
                b. if the currentWord is in the array
                    ***** update dp[index] = true *****
                ### currentWord = substring(index, index + word.length)
        }

*/


function wordBreak2(s, breakArray) {
    const dp = new Array(s.length).fill(false)
    dp[s.length] = true

    for (let index = s.length - 1; 0 <= index; index--) {
        for (let word of breakArray) {
            // if the current forming word is less than the length of total word
            if (index + word.length < s.length) {
                if (breakArray.indexOf(s.substring(index, index + word.length)) > -1) {
                    dp[index] = dp[index + word.length]
                }
            }
        }
        dp[index] = dp[index]
    }
}


function wordBreak(string, words) {

    /*

    leetcode
    ['leet', 'code']


    */

    const dp = new Array(string.length).fill(false)
    for (let index in string) {
        for (let word of words) {
            // if substring of string exist in the words we update our dp
            const formedWord = string.substring(index - word.length, index)

            const previousSubStringIsAlsoThere = dp[index - word.length]
            if (previousSubStringIsAlsoThere && words.indexOf(formedWord) > -1) {
                dp[index] = true
            }
        }
    }
    return dp[0]
}

console.log(wordBreak('leetcode',  ['leet', 'code']))