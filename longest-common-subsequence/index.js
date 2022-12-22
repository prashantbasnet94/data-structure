
/*
https://www.youtube.com/watch?v=sSno9rV8Rhg
###1

String 1 :
            a b c d e f g h i j

String 2:
            c d g i


        No doubts the character are not together, but they are coming in same order i.e same sequence.
  
          c d g i:

        So this is also longest common subsequence


String 1 :
            a b c d e f g h i j

String 2:
            e c d g i

            now let's try to match it with one another.

            
            a  b  c  d  e  f  g  h  i  j
                   |   /   
                   | / 
                  /|
                e  c  d g  i


            These matching  lines should not intersect with each other

            So skip c, 
            now is there anything matching?

            same for d, 

            a  b  c  d  e  f  g  h  i  j
                      /     / .   /
                    /     /    / 
                  /      /   /
                e  c  d g  i
            

                egi are subsequence



####### 2 ############################
    Now insteading of starting from e let's start from c

            a  b  c  d  e  f  g  h  i  j
                  |  |       / .   /
                  |  |     /    / 
                  |  |  /   /
              e   c  d g  i



                 cdgi is the longest subsequence.

####### 3 ############################

        a   b   d   a   c   e
           /     / .  / . / 
         / .  / .    / . /
        b   a   b   c   e


        bace


              a   b   d   a   c   e
              |   |        / .  / 
               \   \.    / . /
            b   a   b   c   e

            abce


            two subsequence of same length



i can also say, dgi or gi or i is appearing as well. But what is the longest?
cdgi is the longest common subsequence


The mactching character need not be continuous.






Test Case:

A :  b  d  0
     0  1  2

B:  a b c d 0
    0 1 2 3 4



*/
let count = 0, count2 = 0
function recursive(i, j, A, B){
    count += 1
    if(A[i] === undefined || B[j] === undefined){
        return 0
    }else if(A[i] === B[j]){
        return 1 + recursive(i + 1, j + 1, A, B)
    }else{
        return Math.max(recursive(i+1, j, A, B), recursive(i, j+1, A, B))
    }
}

function recursive2(){
    {
        if(A[i] === 0 || B[j] === 0){
            return 0
        }else if(A[i] === B[j]){
            if(dp[i][j] !== undefined){
                return 1 + dp[i+1, j+1] 
            }
            return 1 + recursive(i + 1, j + 1, A, B)
        }else{
            if(dp[i+ 1 ][j] === undefined){
               dp[i + 1][ j]  = recursive(i+1, j, A, B) 
    
            }else{
               return dp[i + 1][ j] 
            }
    
            if(dp[i][ j+1] == undefined){
                dp[i][ j+1]  = recursive(i , j +1, A, B)
            }else{
                return dp[i][ j+1] 
            }
            if(dp[i, j]){
                
            }
            return Math.max(recursive(i+1, j, A, B), recursive(i, j+1, A, B))
        }
    }
}

function recursiveDp(i, j, A, B, dp){
    if(A[i] === 0 || B[j] === 0){
        return 0
    }else if(A[i] === B[j]){
        if(dp[i][j])return dp[i][j]
        dp[i][j] = 1 + recursive(i + 1, j + 1, A, B)
        
    }else{
        if(dp[i][j])return dp[i][j]
        dp[i][j] = Math.max(recursive(i+1, j, A, B), recursive(i, j+1, A, B))
    }
     return dp[i][j]
}
function recursiveDpModified(i, j, A, B, dp){
    count2 +=1
    if(A[i] === undefined || A[i] === '' || B[j] === undefined || B[j] === ''){
        return 0
    }else if(A[i] === B[j]){
        if(dp[i][j])return dp[i][j]
        dp[i][j] = 1 + recursiveDpModified(i + 1, j + 1, A, B, dp)
        return dp[i][j]
    }else{
        if(dp[i][j])return dp[i][j]
        dp[i + 1][j] =recursiveDpModified(i+1, j, A, B, dp)
        dp[i][j+ 1] =recursiveDpModified(i, j+1, A, B, dp)

         return Math.max( dp[i+1][j], dp[i][j+1])
     }
}




function dp(string1, string2){
    if(string1.length < 1){
        return string2.length
    }
    if(string2.length < 1){
        return string1.length
    }
    const dp = new Array(string1.length +1).fill(0).map(o => new Array(string2.length +1))
    let valueCommon =  recursiveDpModified(0, 0, string1, string2, dp)

    // return valueCommon
    return string1.length + string2.length - (2 * valueCommon)

}
    
console.log(recursive(0, 0, 'heat', 'hit'))
console.log(dp('heat', 'hit' ))
// console.log('count', count)
// console.log('count2', count2)


function revisionLCS(i, j, A, B){

    if(A[i] === undefined || B[j] === undefined){
        return 0
    }else if(A[i] === B[j]){
        return 1 + revisionLCS(i + 1, j + 1, A, B)
    }else{
        return Math.max(revisionLCS(i + 1, j , A, B), revisionLCS(i, j + 1, A, B))
    }
}


// implmenting dp on revision LCS

function revisionLCSDp(i, j, A, B, dp){
    if(A[i] === undefined || B[j] === undefined){
        return 0
    }else if(A[i] === B[j]){
            if(dp[i][j])return dp[i][j]
            dp[i][j]= 1 + revisionLCSDp(i + 1, j + 1, A, B, dp)
            return dp[i][j]
    }else{
        // return Math.max(revisionLCSDp(i + 1, j , A, B, dp) , revisionLCS(i, j + 1, A, B, dp))
        if(dp[i][j])return dp[i][j]
        dp [i +1] [j] = revisionLCSDp(i + 1, j, A, B, dp)
        dp[i][j + 1] = revisionLCSDp(i, j + 1, A, B, dp)

        return Math.max(dp[i + 1][j], dp[i][j + 1])
    }
}