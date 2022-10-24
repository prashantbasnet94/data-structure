

/*
    Logic: 
    1. Loop through the string
        a. longestSubString = ''
        b. Check if any of the incoming char is in the longestSubString
            i. If not found throw it in there
            ii. Else then keep track of current Logest Substring and build a new longest substring
*/

const
    lengthOfLongestSubstring = input => {
        let
            longestLength = 0,
            substring = [],
            subStringArray = []
        for (let i = 0; i < input.length; i++) {
            if (substring.indexOf(input[i]) > -1) {
                subStringArray.push(substring.join(''))
                substring = []
            } else {
                substring.push(input[i])
            }
        }
        subStringArray.push(substring.join(''))
        return subStringArray.map(o => o.length).sort((a, b) => b - a)[0]
    },
    /*
    'abca' => abc 
    'abcabcdef' => abcdef
    'pwwkew' => wke || kew
    */
    lengthOfLongestSubstring2 = input => {
        if (input.length < 2) {
            return input.length
        }
        let
            longest = 0,
            substring = 0

        for (let left = 0; left < input.length; left++) {
            let seenChars = {}, currentLength = 0
            for (let right = left; right < input.length; right++) {
                const currentChar = input[right]
                if(!seenChars[currentChar]){
                    currentLength++
                    seenChars[currentChar] = true
                    longest = Math.max(longest, currentLength)
                }else{
                    break
                }
            }
        }
        return longest
    },
    lengthOfLongestSubstring3 = input => {
        if(input.length < 2){
            return input.length
        }
        let longest = 0
        for(let left = 0; left <input.length; left++){
            let hasSeen={}, currentSubStringLength = 0

            //left and right pointer starting at the same place
            //left remaains same, but right travels to discover the substring
                // if not seen char discovers then add it 
                // else move the left pointer one step 

                for( let right = left; right < input.length; right++){
                    if(hasSeen[input[right]]){
                        break
                    }else{
                        hasSeen[input[right]]=true
                        currentSubStringLength++
                    }
                }
                longest = Math.max(longest, currentSubStringLength)
        }
        return longest
    },

/*
'abccabcdef' => abcdef
        Logic: use sliding window technic
        1. Use hash map to take reference and reduce complexity i.e Seen
        2. have a left and right pointer starting from 0
            a. Right pointer travels right to discover new chars
            b. Left pointer travels only when the prevSeenChar index is greater than currert left index
             b.i left = prevSeenChar + 1
        3. record data in seen hash map i.e seen[currentChar] = right
        4. longest = Math.max(longest, right - left + 1)
            i. Here 1 changing index to length
            ii. right - left gives the substring we are looking at
 */

    lengthOfLongestSubstring4 =input => {
        let 
         seenChar = {},
         longest = 0,
         left = 0

         for(let right =0; right <  input.length; right++){
            const 
                currentChar = input[right],
                prevSeenChar = seenChar[currentChar] // this is either number or undefined
                // either left sitting at or inbetween left and right
                if(prevSeenChar >= left){
                    left = prevSeenChar + 1
                }
                seenChar[currentChar] = right
                longest = Math.max(longest, right - left +1)
         }
         return longest

    }

// console.log(lengthOfLongestSubstring4('abcabcbb'))
console.log(lengthOfLongestSubstring4('bbbbb'))
// console.log(lengthOfLongestSubstring4('pwwkew'))