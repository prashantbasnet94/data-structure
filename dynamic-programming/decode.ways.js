/*


    1.

        11106 => {
            AAJF
            KJF
        }
        
    2. 12 => {
        AB
        L
    }
        

    3. 226 => {
        BBF
        VF
    }
        
    4. 989812
                0   1   2   3   4   5 
                9   8   9   0   1   2
       0   9    I   IH         
       1   8        H   HI      
       2   9            I   0
       3   0                0   0       
       4   1                    A   AB
       5   2                        B







        
                                1 2 7 5
                                /      \
                            1           12
                          /   \         /    \     
                       2       27      7      75
                     /  \            /  \       
                    7    75         5   75             
                  /                 #
                 5                JGE     
                 #  
                 ABGE       

                    




        Logic:

            i. Use recursion
            ii. pass one and two string @ a time
            iii. any time a string starts from 0 return 0


                        226
                     /      \
                    2         22
                  /   \      /   
                2      26   6 
               /
              6 
                        BZ   UE     
              BBF


              B + recursion(26)



                       228
                     /      \
                    2         28
                  /   \      /   
                2      28   6 
               /
              8 
*/
function decodeWays(input){
    const result = [],
    map = {
        '1' : 'A',
        '2' : 'B',
        '3' : 'C',
        '4' : 'D',
        '5' : 'E',
        '6' : 'F',
        '7' : 'G',
        '8' : 'H',
        '9' : 'I',
       '10' : 'J',
       '11' : 'K',
       '12' : 'L',
       '13' : 'M',
       '14' : 'N',
       '15' : 'O',
       '16' : 'P',
       '17' : 'Q',
       '18' : 'R',
       '19' : 'S',
       '20' : 'T',
       '21' : 'U',
       '22' : 'V',
       '23' : 'W',
       '24' : 'X',
       '25' : 'Y',
       '26' : 'Z'}
    recursion(input,map, result)
    return result.length

}
function recursion(A, map,result,construct = '', ){
    if(A[0] === undefined || A.charAt(0) === '0' ){
        if(result.indexOf(construct) < 0) result.push(construct)
        return
    } 
   
    if(map[A.substring(0, 1)]){
        recursion(A.slice(1), map, result,  construct + map[A.substring(0, 1)] )
    } 
    if(map[A.substring(0, 2)]){
        if(parseInt(A.substring(0, 2)) <= 26){
            recursion(A.slice(2), map,result, construct + map[A.substring(0, 2)] )
        }
        return
    } 
}


/*

                226
                
            dp = {
                3: 1
            }
                 i   
                 226
                /   \ 
              226  
               i
             / 
          226   
            i
            |
            226
             i
            
       dp = { 3: 1 }


                            1116
                            /   
                          1
                          iv. returns back to index 0
                            a. res = 3
                            b. 11 < 26
                            c. res += dfs(0 + 2) , 3 += 2
                            d. dp[0] = 5
                        /
                       1
                       iii. returns back to index 1
                        a. res = 2
                        b. checks for 11 < 26
                        c. res += dfs(1 + 2) , 2 +=1
                        d.dp[1] = 3

                      /
                    1
                    ii.
                        a. returns back to index 2, res = 1
                        b. checks for substring '16'
                        c. saisfies the if condition < 26
                        d. dfs(index + 2) =>  retuns 1 as it hits the end
                        e. res += dfs(index + 2), new res = 2
                        f. dp[2] = 2                    
                  /
                 6, index = 3
                 starts returning with res = 1
                 i. checks for substring of length two i.e 6

                        
*/
function decodeWaysRefactored(s){
    const
     dp = {
        //base case
        [s.length] : 1
    },
    //top down approach
    // starting from 4 => 1
     dfs = index => {
        //base case hits the end length of the string
        if(index in dp)return dp[index]
        //invalid string
        if(s[index] === '0')return 0
        let res = dfs(index +1)
        if(index + 1 < s.length && s[index] === '1' || (s[index] === '2' && '0123456'.includes(s[index + 1]) )){
            res +=dfs(index + 2)
        }
        dp[index] = res
        return res
     }
     return dfs(0)
}
/*

                                    0 1 2 3    
                                    1 1 1 6
                                    
                                i = 3, s[i] = 6
                                
                                1 1 1 6
                                0 1 2 3     
                         dp =  [5 3 2 1 ]       





*/
function iterativeApproach(input){
    const dp = {[input.length] : 1}

    for(let i = input.length -1 ; i >=0; i--){
        if(input[i] === '0'){
            dp[i] = 0
        }else{
            dp[i] = dp[i + 1]
        }
        if(i + 1 < input.length && input[i] === '1' || (input[i] === '2' && '0123456'.includes(input[i + 1]))){
            dp[i] += dp[i + 2]
        }
    } 
    return dp[0]
}

console.log(decodeWays('1116'))
console.log(decodeWaysRefactored('1116'))

 