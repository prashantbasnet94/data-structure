/*

    1. bbbab
        retrun bbbb

    2. aaa
       return aaa
    
    3. abc
        a
    
    4. abaccdaa
        3

    

https://www.youtube.com/watch?v=_nCsPn7_OgI


                0   1   2   3   4   5
                a   g   b   d   b   a
        0 a
        1 g  
        2 b  
        3 d
        4 b
        5 a


   1. for any string of length 1, what is the longest palindromic subsequemce i can have?
    

                0   1   2   3   4   5
                a   g   b   d   b   a
        0 a     1
        1 g         1    
        2 b             1
        3 d                 1    
        4 b                     1
        5 a                         1


    2.   for any string of length 2, what is the longest palindromic subsequce i can have?

                0   1   2   3   4   5
                a   g   b   d   b   a
                _____


    since these two char are not same,
    @dp[0][1] we will put Math.max(either a or g)
        0 .  1                  0       0           1      1 
    dp[row][col] = Math.max(dp[row][col - 1], dp[row + 1][col])

    i.e Math.max(1, 1)
    thus @[0][1] = 1

                0   1   2   3   4   5
                a   g   b   d   b   a
        0 a     1   1
        1 g         1    
        2 b             1
        3 d                 1    
        4 b                     1
        5 a                         1


                0   1   2   3   4   5
                a   g   b   d   b   a
                    _____

    @[1][2]
    sincn it not the same
    @[1][2] = Math.max(g, b) = 1


                0   1   2   3   4   5
                a   g   b   d   b   a
        0 a     1   1
        1 g         1   1 
        2 b             1   
        3 d                 1    
        4 b                     1
        5 a                         1


        similary,
    


                0   1   2   3   4   5
                a   g   b   d   b   a
        0 a     1   1
        1 g         1   1 
        2 b             1   1
        3 d                 1   1 
        4 b                     1   1
        5 a                         1





3.        let see for length 3
    a.
                0   1   2   3   4   5
                a   g   b   d   b   a
                _________

            Math.max(ag , gb)
            Math.ma(dp[0][1] , [1][2]) 
            Math.max(1, 1) = 1
            ddp[0, 2] = 1

                0   1   2   3   4   5
                a   g   b   d   b   a
        0 a     1   1   1
        1 g         1   1   
        2 b             1   1
        3 d                 1   1 
        4 b                     1   1
        5 a                         1


b.
                0   1   2   3   4   5
                a   g   b   d   b   a
                     _________

            Math.max(gb , bd)
            Math.ma(dp[1][2] , [2][3]) 
            Math.max(1, 1) = 1
            ddp[1, 3] = 1

                0   1   2   3   4   5
                a   g   b   d   b   a
        0 a     1   1   1
        1 g         1   1   1
        2 b             1   1
        3 d                 1   1 
        4 b                     1   1
        5 a                         1


c.
                0   1   2   3   4   5
                a   g   b   d   b   a
                        _________

            here, input[row] === input[col],
            thus 2 + longest palindromic subsequce @ d i.e dp[3][3]

            ddp[2, 4] = 3

                0   1   2   3   4   5
                a   g   b   d   b   a
        0 a     1   1   1
        1 g         1   1   1
        2 b             1   1   3
        3 d                 1   1 
        4 b                     1   1
        5 a                         1


d. 

                0   1   2   3   4   5
                a   g   b   d   b   a
                            _________

        since b !== a
        it's Math.max([3][4] , dp[4][5])


                0   1   2   3   4   5
                a   g   b   d   b   a
        0 a     1   1   1
        1 g         1   1   1
        2 b             1   1   3
        3 d                 1   1   1
        4 b                     1   1
        5 a                         1


4.        let see for length 4
a.
                0   1   2   3   4   5
                a   g   b   d   b   a
                _____________


                dp[0][3] = ?

                since input[0] !== input[3]
                we need to find the max(dp[0][2], dp[1][3])

                0   1   2   3   4   5
                a   g   b   d   b   a
        0 a     1   1   1   1
        1 g         1   1   1
        2 b             1   1   3
        3 d                 1   1   1
        4 b                     1   1
        5 a                         1

b.

                0   1   2   3   4   5
                a   g   b   d   b   a
                    _____________
    dp[1][4]= max(dp[1][3], dp[2][4]) .e (1, 3) = 3



                0   1   2   3   4   5
                a   g   b   d   b   a
        0 a     1   1   1   1
        1 g         1   1   1   3
        2 b             1   1   3
        3 d                 1   1   1
        4 b                     1   1
        5 a                         1


c.
                0   1   2   3   4   5
                a   g   b   d   b   a
                        _____________
    dp[2][5]= max(dp[2][4], dp[3][5]) .e ( 3, 1) = 3


                0   1   2   3   4   5
                a   g   b   d   b   a
        0 a     1   1   1   1
        1 g         1   1   1   3
        2 b             1   1   3   3
        3 d                 1   1   1
        4 b                     1   1
        5 a                         1




4. lenght = 5
a.
                0   1   2   3   4   5
                a   g   b   d   b   a
                _________________
    dp[0][4]= max(dp[0][3], dp[1][4]) .e (  1, 3) = 3
            Max(dp[row][col -1]  , dp[row + 1][col])

                0   1   2   3   4   5
                a   g   b   d   b   a
        0 a     1   1   1   1   3
        1 g         1   1   1   3
        2 b             1   1   3   3
        3 d                 1   1   1
        4 b                     1   1
        5 a                         1

b.
                0   1   2   3   4   5
                a   g   b   d   b   a
                    __________________
    dp[1][5]= max(dp[1][4], dp[2][5]) .e (  3,3) = 3


                0   1   2   3   4   5
                a   g   b   d   b   a
        0 a     1   1   1   1   3
        1 g         1   1   1   3   3
        2 b             1   1   3   3
        3 d                 1   1   1
        4 b                     1   1
        5 a                         1


6. lenggth =  6

                0   1   2   3   4   5
                a   g   b   d   b   a
                _______________________


    since both first and last char is same 
    dp[0][5]=     2  +  max(dp[0][4], dp[1][5]) .e (  3,3) =  5
    
    formula to find out either of has greater value
    Max(dp[row][col -1]  , dp[row + 1][col])





    
*/
function longestPalindromicSub(input) {

    const dp = new Array(input.length).fill(0).map(o => new Array(input.length).fill(0))

    for (let i = 0; i < input.length; i++) {
        // all single char are parindrome itself
        dp[i][i] = 1

        dp[i][i + 1] = input[i] === input[i + 1] ? 2 : 1
    }
   

    // for(let cl = 1; cl <= input.length ; cl++){
    //     for(let row = 0; row < input.length - cl ; row++){

    //         let col = row + cl
    //         dp[row][col] = 
    //         console.log({cl , row, col})
    //         // console.table(dp)

    //         if(input[row] === input[col]){
    //             dp[row][col] = dp[row + 1][col -1] + 2
    //         }else{
    //             dp[row][col] = Math.max(dp[row + 1][col], dp[row][col -1 ])
    //         }
    //     }
    // }

    // for (let row = 0 ; row < input.length; row++) {
    //     for (let col = row + 1; col < input.length; col++) {
    //         // for char of length 2 or more if there first and last char are same we do : 2 + Math.max(firstChar, lastChar)
    //         dp[row][col] = '*'
    //         console.log({row, col})

    //         if (input[row] == input[col]) {
    //             // 2 + inner substring
    //             dp[row][col] = 2 + dp[row + 1][col - 1]
    //         } else {             
    //             dp[row][col] = Math.max(dp[row][col - 1], dp[row + 1][col]) 
                               
    //         }
    //     }
    // }

    for (let col = 1; col < input.length; col++) {
        for (let row = 0; row < col; row++) {
            // for char of length 2 or more if there first and last char are same we do : 2 + Math.max(firstChar, lastChar)
            if (input[row] == input[col]) {
                // 2 + inner substring
                dp[row][col] = 2 + dp[row + 1][col - 1]
            } else {
                dp[row][col] = Math.max(dp[row][col - 1], dp[row + 1][col])
            }
        }
    }
 
    return dp[0][input.length - 1]
}

function callRecusion(input){
    const dp = new Array(input.length).fill(0).map( o => new Array(input.length))
     return recursion(input, 0, input.length - 1, dp)
}
function recursion(input, row, col, dp){
    // single digit char are palindrome
    if(row === col){
        return 1
    }
    // if first and last char are equal
    // and length is two substring 
    if(dp[row][col]) return dp[row][col]
    if(input[row] === input[col] && row === col -1  ){
        dp[row][col] = 2
        return  dp[row][col]
    }

    // if substring length of more than 2 
    if(input[row] === input[col]){
        // take that first and last char out and compare again
        dp[row][col] = recursion(input, row + 1, col -1, dp ) + 2 
        return dp[row][col]
    }
    // if not equal 
    dp[row][col] = Math.max(recursion(input, row + 1 , col, dp), recursion(input, row, col - 1, dp))
    return dp[row][col]
}
// console.log(longestPalindromicSub('agbdba'))
console.log(callRecusion('agbdba'))
console.log(callRecusion('bbbab'))
console.log(callRecusion('cbbd'))



console.log(longestPalindromicSub('agbdba'))
console.log(longestPalindromicSub('cbbd'))

