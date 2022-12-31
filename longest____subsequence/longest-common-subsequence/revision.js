/*
     "abcde"
     "ace" 

     ace
     return 3

                    "abcde" "ace" 
                        |            
                    1+ bcde ce      since b and c are not equal
                   /              1 \
             cde   ce                bcde e
             /                        /      \
          1 + de e                cde e     bcde ''       
          /                      1   / \             0
       e  e                    de e   cde
        /                        / \       0
      1                      e e   de ''
                            1     0 
            */



function lcs(A, B){
    return recursionLcs(0, 0, A, B)
}

function recursionLcs(i, j, A, B){
    if(A[i] === undefined || B[j] === undefined){
        return 0
    }else if(A[i] === B[j]){
        return 1 + recursionLcs(i+1, j+1, A, B)
    }else{
        return Math.max(recursionLcs(i + 1, j , A, B), recursionLcs(i, j + 1, A, B))
    }
}

console.log(lcs('abcde', 'ace') === 3)
console.log(lcs('abc', 'abc') === 3)
