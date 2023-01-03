/*

Questions:
 
1. Does the thickness of the lines affect the area ?
    Will the line in cut it? or take up any space with in?

2. Do the left and right sides of the graph  count as wall? => nope

3. Does a higher line indside our container affect our area? => nope


Logic: greatest and furthest will make the larger area



const containerWithMostWater = input => {

    let maxArea = 0

    if(input.length < 2){
        return maxArea
    }
    for( let i = 0; i < input.length; i++){
        const firstElement = input[i]
        for( let j = i+1; j < input.length; j++){
            const 
                secondElement = input[j],
                currMaxArea = Math.min(firstElement,secondElement) * (j - i)
                maxArea = Math.max(currMaxArea, maxArea)

        }
    }
    return maxArea
}

*/
const containerWithMostWater = input => {

    let maxArea = 0

    for( let i = 0; i < input.length; i++){
        for( let j = i+1; j < input.length; j++){
            const 
                height = Math.min(input[i], input[j])
                width = (j - i),
                area = height * width
                maxArea = Math.max(area, maxArea)
        }
    }
    return maxArea
},cointainerWithMostWater2 = input => {
    let 
        leftPointer = 0,
        rightPointer = input.length - 1,
        maxArea = 0
        while(leftPointer< rightPointer){
            let height = Math.min(input[leftPointer], input[rightPointer]),
            width = rightPointer - leftPointer
            area = height * width
            maxArea = Math.max(maxArea, area)
            if(input[leftPointer] <= input[rightPointer]){
                leftPointer++
            }else{
                rightPointer--
            }
        }
        return maxArea
},
containerWithMostWater3 = input => {
    let maxArea = 0
    for( let i = 0; i < input.length; i++){
        for(let j = i+1; j < input.lneght; j++){
            const 
                height = Math.min(input[i],input[j]),
                width = j - i,
                area = height * width
            maxArea = Math.max(area, maxArea)
        }
    }
    return maxArea
},
containerWithMostWater4 = input => {
    let 
        leftPointer = 0,
        rightPointer = input.length - 1,
        maxArea = 0

        while(leftPointer < rightPointer){
            const 
                height = Math.min(input[leftPointer], input[rightPointer]),
                width = rightPointer - leftPointer,
                area = height * width
            maxArea = Math.max(maxArea, area)
            /*
             0 .1 .2 .3  4  5  
            [4, 8, 1, 2, 3, 9]
             a              b
            a = 0, b = 5
            
            currentArea = Math.min(4 , 9) * (5-0) = 4 * 5 = 20
            next, when moving the pointer, which direction to move?
            
            if we move a to 8,
            a = 1, b = 5
            currentArea = Math.min(8 , 9) * (5-1) = 8 * 4 = 32, notice area increased

            what if we have moved b instead,
             a = 0, b = 4
            currentArea = Math.min(4 , 3) * (4-0) = 3 * 4 = 12, notice area decreased

            Here we can see the pattern of which of the value is smaller [a] or [b]? if [a] > [b] ?  b-- : a++




            */
            if(input[leftPointer] <= input[rightPointer]){
                leftPointer++
            }else{
                rightPointer--
            }
        }
    return maxArea
}