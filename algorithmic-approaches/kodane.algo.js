/*
https://www.youtube.com/watch?v=86CQq3pKSUw

        [1  -3   2   1   -1]
         0   1   2   3    4 
         

         for the 0 index, the max sub array ending @ position 0 is Math.max(1)
                                                                  
         for the 1 index, the max sub array ending @ position 1 is  Math.max([1, -3], -3)  i.e [1, -3]

         Sub array with max sum ending @ 2 is:
         for index 2:                                                
                    the max sub array ending @ position 2 is Math.max ([1, -3, 2], [-3, 2], 2) i.e 2
         
        for index 3:
                   the max sub array ending @ position 3 is Math.max(  [1 , -3, 2, 1], [-3, 2, 1], [2, 1], 1 ) i.e [2, 1] i.e 3

        Here the idea is simple, but it's not very efficient.

        
        The intresting idea from Kodane algorithm is that:


        [1  -3   2   1   -1]
         0   1   2   3    4 
                 ^
                 |
           we are looking into   

        Max sub array @ index 2 is Math.max(currentElement or currentElement combine with prev max sub array  )
        i.e Math.max(
                2, 
        [1, -3, 2])

        i.e 1 and -3
        so in this case it is currentElement

        we are going to do the same thing for all the index excep the first one.


        max sub array ending @ nth element is  Math.max(x, [m ,x]), where m is sub array ending at previous index


         
*/

function kodaneAlgo(input){
    let
    // maxcurrent is sum of current max sub array || max sub array that ends @ current index
     maxCurrent = input[0],
    //keeps track of the glboal maximum sum
     maxGlobal = input[0]


     for(let index = 1; index < input.length; index++){
        maxCurrent = Math.max(input[index], maxCurrent + input[index])
        maxGlobal = Math.max(maxGlobal, maxCurrent)
     }

     return maxGlobal
}


console.log('kodane', kodaneAlgo([-2,1,-3,4,-1,2,1,-5,4]) === 6)
console.log('kodane', kodaneAlgo([1]) === 1)
console.log('kodane', kodaneAlgo([5,4,-1,7,8]) )


