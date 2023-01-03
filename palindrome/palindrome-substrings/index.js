
/*
https://leetcode.com/problems/palindromic-substrings/

https://www.youtube.com/watch?v=EIf9zFqufbU

    abc => {
        a
        b
        c
    }

    aaa => {
        a
        a
        a
        aa
        aa
        aaa
    }

    ab => {
        a
        b
    }

    abba => {
        a
        b
        b
        a
        abba
    }

    aba => {
        a
        b
        a
        aba
    }
    aaa => {
        A , B , C
        
        
        AB
        AC

        BC
        CB
        AC
        CA
        ABC
        ACB
        BCA
        BAC
        CBA
        CAB



    
    }

    For palindrome:

    i.    it;s single char, it is a palindrome
    ii.  if the length of the word is 2, and both char are identical then it;s a palindrome
    iii. word[leftPointer] === word[rightPointer] . and substring inside that should also be a palindrome


    Logic using dp:

    1. Have a 2D matrix of text.length * text.length
        value i.e 1 represents it is palindrome and 0 as non palindorm
    
    2. We have our counter = 0 initally, to count number of palindrome substrings

    3. Diagonal of this 2D matrix is going to be 1 as compared values are same in the diagonal

                0   1   2
                a   b   a
        0  a   1   
        1  b       1
        2  a           1

        Here condition i is satisfied



    4. Bottom half ie Bottom left and top right are mirrored, so we only need to account for either half

    5. Since we know what's in row = 0, col =0, we start from col = 1

        the order how our dp is filled is

        |   |   |
            V   V
            |   |
            v   v
                |
                v
                
            for(let col = 1; col < input.length; col++){
                for(let row = 0; row < col; row++){

                }
            }


            becuase:
        
                0   1   2   3   4   5   6
                a   a   b   a   a   c   a
        0  a    1   #   
        1  a       1    #   
        2  b           1    #   
        3  a                1   #    
        4  a                    1   #
        5  c                        1   #
        6  a                            1


        here already know at col = 0, we have single char a i.e palindrome

      6.  here, # is length of 2, given by row === col-1
        to check if the 2 length substring are identical, we can do it be input[row] === input[col]



      7.  if the entry is of length greater than 2
         i. we also have to determine if the inner substring is also a palindrome
         ii. also check if the first char and last char match as well

         if both condition are true than it is a palindrome


         More explanation on how this dp is wokring
----------------------------------------------------------------
         to check if the inner substring is palindrome, we can simply check if the value of bottom left of the entry is one
         go to next row and prev col


         for example:

                0   1   2   3   4   5   6                0   1   2   3   4   5   6
                a   a   b   a   a   c   a                a   a   b   a   a   c   a
        0  a    1  #   
        1  a       1   #        B    
        2  b           1    #           D
        3  a                1   #   C
        4  a                    1   #
        5  c                        1   #
        6  a                            1



        row = 0, col = 0
        substring starting @ 0 and ending @ 0 is a

        B. row = 1, col = 4
        substring starting @ 0 and ending @ 0 is abaa
    
        C. row = 3, col = 5
        substring starting @ 0 and ending @ 0 is aac
        
        D. row = 2, col = 6
        substring starting @ 0 and ending @ 0 is baaca

        if we were to check if D is palindrome

                b           a        input[row + 1 = 3][col -1 = 5]
        if(firstChar === lastChar && input[3][5] === 1){
                                        aac is palindrome ?
        }
        
*/

function palidromeSubstrings(input) {
    let
        count = 0,
        dp = new Array(input.length).fill(0).map(o => new Array(input.length))

        // diagonal i.e single char are palindrome
        for(let i = 0 ; i < input.length; i++){
            dp[i][i] = 1
            count +=1
        }


        // now we need to take care of sub string of length 2 or more
        // also starting our calculation from col = 1 because @ 0, our substring is still a single char
        // also if we only account for top right mirror half @ any given point our row < col
        for(let col = 1; col < input.length; col++){
            for(let row = 0; row < col ; row++){
                // for each entry we have to check if the length of substring is 2 or more
                // length of substring is 2 if the entry is directly above the diagonal line i.e single char

                // check if substing is of length 2 and if char @ 0 === char @ 1
                if(row === col-1 && input[row] === input[col]){
                    dp[row][col] = 1
                    count++
                }

                // if the entry is of length greater than 2
                // i. we also have to determine if the inner substring is also a palindrome
                // ii. also check if the first char and last char match as well
                // if both condition are true than it is a palindrome

                // checks if inner substring is palindrome && check if first char and last char are equal
                else if(dp[row + 1][col -1] === 1 && input[row] === input[col]){
                    dp[row][col] = 1
                    count++
                }
            }
        }
        // console.table(dp)
        const result = []
        for(let i = 0 ; i < input.length; i++){
            for(let j = 0; j < input.length; j++){
                if(dp[i][j] === 1){
                    result.push(input.substring(i, j+1))
                }
            }
        }
        console.table(dp)
        return {count, result}
}


console.log(palidromeSubstrings('aaa'))
console.log(palidromeSubstrings('abc'))






/*

put char into bucket

make different word combination using the char from bucket


if any word is palindrome only use those

function recursion(i, A, result) {
    if (A[i] === undefined) return

    console.log('pushing into result ', A[i])
    result.push(A[i])
    // check if 0& 1 is palindrome
    if(checkIfPalindrome(A, 0, i) && i > 0){
        result.push(A.substring(0, i+1))
    }
    recursion(i + 1, A, result)
}

*/


