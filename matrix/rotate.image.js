/*


│ 1 │ 2 │ 3 │
│ 4 │ 5 │ 6 │
│ 7 │ 8 │ 9 │

transformed into:

│ 7 │ 4 │ 1 │
│ 8 │ 5 │ 2 │
│ 9 │ 6 │ 3 │


Approach:
    1. Top left => Top Right
    2. Top Right => Bottom Right
    3. Bottom Right => Bottom Left
    4. Bottom Left => Top Left



    What happens to the top right?
    let say we put topRight to the temp
    1 => 3, 3 is stored in temp

    now moving 3 (topRight) => Bottom Right
    and what happens to the bottomRight value?
    store it in the temp.

    Okay, then moving bottomRight => bottomLeft, then what happens to the bottomLeft value?
    again store it in the temp var?



    So every time we rotate a value we need a temp value.
    Can we change the clockwise direction to counter clock to minimize the number of temp var.?
    Yes we can


    Appraoch:
    1. Botom Left => Top Left

    Temp Var = Top Left

    2. Bottom Right => BottomLeft
    3. Top Right => Bottom Right
    4. Top Left i.e temp var => top Right


    5. Now in a matrix let's say we do a transofration for outer layers, what about the inner layer, how do we keep track of it?
    That's where the boundries pointer comes to play.

    i.  top = 0, bottom = matrix.length -1
    ii. left = 0, right = matrix.length - 1

              L       R 
              0   1   2  
      T  0  │ 1 │ 2 │ 3 │
         1  │ 4 │ 5 │ 6 │
      B  2  │ 7 │ 8 │ 9 │ 



│ 7 │ 4 │ 1 │
│ 8 │ 5 │ 2 │
│ 9 │ 6 │ 3 │

┌─────────┬────┬────┬────┬────┐
│ (index) │ 0  │ 1  │ 2  │ 3  │
├─────────┼────┼────┼────┼────┤
│    0    │ 5  │ 1  │ 9  │ 11 │
│    1    │ 2  │ 4  │ 8  │ 10 │
│    2    │ 13 │ 3  │ 6  │ 7  │
│    3    │ 15 │ 14 │ 12 │ 16 │
└─────────┴────┴────┴────┴────┘
┌─────────┬────┬────┬────┬────┐
│ (index) │ 0  │ 1  │ 2  │ 3  │
├─────────┼────┼────┼────┼────┤
│    0    │ 15 │ 13 │ 2  │ 5  │
│    1    │ 14 │ 3  │ 4  │ 1  │
│    2    │ 12 │ 6  │ 8  │ 9  │
│    3    │ 16 │ 7  │ 10 │ 11 │
└─────────┴────┴────┴────┴────┘

What about the values inbetween
use index as a col or row to rotate the inbetween values

1. 1  is offset by 1 from left => offset by 1 from top
2. 10 is offset by 1 from top => offset by 1 from right
3. 12 is offset by 1 from right => offset by 1 from bottom
4. 13 is offset by 1 from bottom => offset by 1 from left

Similarly,

1. 9 is offset by 2 from left => offset by 2 from top
2. 7 is offset by 2 from top => offset by 2 from right
3. 14 is offset by 2 from the right => offset by 2 from bottom
4. 2 is offset by 2 from bottom => offset by 2 from left 



    clockwise pattern:
        1 from left => 1 from top
        1 from top => 1 from right
        1 from riiht => 1 from bottom
        1 from bottom => 1 from left

    in anti clockwise we are working:
        1 from bottom => 1 from left
        1 from right => 1 from bottom
        1 from top => 1 from right
        1 from left => 1 from the top


Pattern:
1. [top][left] => [top + i][right]
2. [top+i][right] => [bottom][right -i ]
3. [bottom][right -i ] => [bottom + i][l]
4.  [bottom + i][l] => [top][left + 1]

now our otter most layer is completly rotated, now we need to do the same by inside
just incerement the top and left pointer and right and bottom to 1 decrement =>  just shift a pointer by 1

*/


function rotateImage(matrix) {
    let
        l = 0,
        r = matrix.length - 1

    // left < right
    while (l < r) {
        // how many rotation in the top row?
        // 0 to matrix.length -1
        // iterate throguh entire row except the last element
        for (let i = l; i < r; i++) {
            let
                top = l,
                bottom = r,

                // save the top left value in temp
                topLeft = matrix[top][l + i]

            // movee the bottom left => top left
            matrix[top][l+ i] = matrix[bottom - i][l]

            // move the bottom right => bottom left
            matrix[bottom - i][l] = matrix[bottom ][r - i]

            // move the top right => bottom right
            matrix[bottom][r - i] = matrix[top + i][r]

            // move the top left stored in topLeft => top Right
            matrix[top+ i][r] = topLeft

            /*
        in anti clockwise we are working:
        1 from bottom => 1 from left
        1 from right => 1 from bottom
        1 from top => 1 from right
        1 from left => 1 from the top

            tempLeft = [top][l]
            [top][l] = [bottom][l]
            [bottom][l] = [bottom][r]
            [bottom][r] = [top][r]
            [top][r] = tempLeft




         
          here how to use i so that in between values are moved?
          check the other function
         after our top left position is transformed i.e

┌─────────┬────┬────┬────┬────┐
│ (index) │ 0  │ 1  │ 2  │ 3  │
├─────────┼────┼────┼────┼────┤
│    0    │ 5 *│ 1  │ 9  │ 11 │
│    1    │ 2  │ 4  │ 8  │ 10 │
│    2    │ 13 │ 3  │ 6  │ 7  │
│    3    │ 15 │ 14 │ 12 │ 16 │
└─────────┴────┴────┴────┴────┘

after 5 is transformed, we move 1 position to the right i.e 1 and start transforming values by offset 1 from left, top, right, bottom
that's where the i is used.

         */
        }
        l +=1
        r -=1
    }


}



function rotate(matrix) {

    /*

        Logic:
            1. Using four pointers top, bottom , left and right to transform the outer array and inner arrray 
            2. How does the value move?
                a. we move in the anticlock wise direction

                [top][l] = [bottom][l]
                [bottom][l] = [bottom][r]
                [bottom][r] =[top][right]
                [top][r] = tempTopL
            
            3. How does the other value move?
                2 is 1 offset from Tleft => 1 offset from topR
                6 is offset from topR => offset from BottomR
                8 offset from BottomR => offset from bottomL
                4 is offset from bottomL => offset from Tleft

                in anticlockwise:

                offset from Tleft = offset from bottomL
                offset from bottomL  = offset from BottomR
                offset from  BottomR = offset from topR
                offset from topR = offset from leftT

                plottin in:

                   tempTopL = [top][l]
              a.  [top][l] = [bottom][l]
              b.  [bottom][l] = [bottom][r]
              c.  [bottom][r] =[top][right]
              d.  [top][r] = tempTopL


            tempTopL = [top][l + i]

            a. [top][l] = [bottom - i][l]
            b.  [bottom- i][l] = [bottom][r -i]
            c.  [bottom][r - i] =[top + i][r]
            d.  [top + i][r] = tempTopL

              
    */

    let l = 0, r = matrix.length - 1


    while (l < r) {
        for (let i = 0; i < r - l; i++) {
            let
                top = l,
                bottom = r,
                tempTopL = matrix[top][l + i]

            matrix[top][l+i] = matrix[bottom - i][l]
            matrix[bottom - i][l] = matrix[bottom][r - i]
            matrix[bottom][r - i] = matrix[top + i][r]
            matrix[top + i][r] = tempTopL
        }
        l +=1
        r -=1
    }
}



function rotateImageFinal(matrix) {
    let
        l = 0,
        r = matrix.length - 1

    // left < right
    while (l < r) {
        // how many rotation in the top row?
        // 0 to matrix.length -1
        // iterate throguh entire row except the last element
        for (let i = 0; i < r -l; i++) {
            let
                top = l,
                bottom = r,
/*

        1 from bottom => 1 from left
        1 from right => 1 from bottom
        1 from top => 1 from right
        1 from left => 1 from the top
*/
                // save the top left value in temp
                // [l + i] => gives us top left offset by 0, then 1, then 2
                topLeft = matrix[top][l + i]

            // movee the bottom left => top left
            //same [l + i] refers the the offset position
            // bottom left we need to move up so - i
            matrix[top][l + i] = matrix[bottom - i][l]

            // move the bottom right => bottom left
            // bottom right to increase the offset we substract from right
            matrix[bottom - i][l] = matrix[bottom][r - i]

            // move the top right => bottom right
            // for the top right, as we continnue with the rotation we move down in the col i.e go down row, we we add to top
            matrix[bottom][r - i] = matrix[top + i][r]

            // move the top left stored in topLeft => top Right
            matrix[top + i][r] = topLeft
        }
        r -=1
        l +=1
    }


}

function transpose(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix[i].length; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    return matrix
}

console.table([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]])
console.table(transpose([[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]))

console.table([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
console.table(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))


function revi(matrix){
    /*
┌─────────┬────┬────┬────┬────┐
│ (index) │ 0  │ 1  │ 2  │ 3  │
├─────────┼────┼────┼────┼────┤
│    0    │ 5  │ 1  │ 9  │ 11 │
│    1    │ 2  │ 4  │ 8  │ 10 │
│    2    │ 13 │ 3  │ 6  │ 7  │
│    3    │ 15 │ 14 │ 12 │ 16 │
└─────────┴────┴────┴────┴────┘

 5 => 11
 11 => 16
 16 => 3
 15 => 5

 topL => topR
 topR => BottomR
 BottomR => BottomL
 BottomL => TopL


 Following it in aniclockwise

    tempVar = TopL

    TopL = BottomL
    BottomL = BottomR
    BottomR = TopR
    TopR = tempVar

    now let's use offset:
    1. TopR offset = TopL offset by i
    2. BottomR offset = TopR offset by i
    3. BottomL offset = BottomR offset by i
    4 TopL offset  = BottomL offset by i


    [Top][L+i] = [Bottom- i][L]
    [Bottom-i][L] = [Bottom][R-i]
    [Bottom][R-i] = [Top+i][R]
    [Top + i][R] = tempVar

    */

    let l = 0, r = matrix.length -1

    while(l < r){
        for(let i = 0; i < r - l; i++){
            let Top = l, Bottom = R, tempVar =  matrix[Top][L+i]
            matrix[Top][L+i] = matrix[Bottom- i][L]
            matrix[Bottom-i][L] = matrix[Bottom][R-i]
            matrix[Bottom][R-i] = matrix[Top+i][R]
            matrix[Top + i][R] = tempVar
        }
        l +=1
        r -=1
    }
    return matrix
}