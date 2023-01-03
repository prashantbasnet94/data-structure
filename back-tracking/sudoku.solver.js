/*

Rules:
 A. Each row should have a unique number 1- 9
  
    1  2  3   4   5   6   7   8   9
    or can be of any order

 B. Each column should have a unique number as well 1-9
    1
    2
    3
    4
    5
    6
    7
    8
    9
    or can be of any order

 C. Each of the digits 1-9 must occur exatcly once each of the 9 [3*3] sub boxes of the grid
    
    1   2   3
    7   8   9
    4   5   6

    or any order



We combine all these different rules together and we recieve any different number of board.

The board we receive might already have values that are filled in previously.
It's up to us to fill in the remianing values.

There are multiple solutions. All our algorigthm needs to do is just fill it with one that is valid and that would be a succesful solve.



Now let;s verify constarints.

1. What happens if the board cannot be solved?
    meaning we have repeated number in either row or col or sub boxes.
=> Leave sudoku puzzle as it is



Test Cases:

1. Violates a sub box

5 0 0 2 6 0 7 0 1
6 8 6 0 7 0 0 9 0
1 9 5 0 0 4 5 0 0
8 2 0 1 0 0 0 4 0
0 0 4 6 0 2 9 0 0
0 5 0 0 0 3 0 2 8
0 0 9 3 0 0 0 7 4
0 4 0 0 5 0 0 3 6
7 0 3 0 1 8 0 0 0




Tips:
How to recoznize this question needs back tracking as a solution?
This is where you need to think about the question. Sometimes question itself will give it away. Othertimes you need to start thinking about how you could solution
and realize that backtracking is one of the possiblites.


The way it works it that if you need to solve all of the solutions or if you need to solve all the valid solutions or even solve for one valid solutions.
These are all different things that tell you back tracking could be possible options for you. 

The reason why this happens, when you need to generate all possible solutions, if all of the solutions are not correct. Meaning looking at this sudoku board,
we could fill  in those values with any number. We can fill them even with the numbers 1-9 only.
But as long as we are not obeying all of these rules, then automatically we know that solution is aboslutley incorrect.

And all the possibe solutions invloved with certain violations of rules should not be contained.

0   1   2   3   4   5   6   7   8   
1   5   3   5
2   6       5
3   

As long as we have 5 @ [1, 3], from here on we have numerous valeus to fill.
However, whatever value you fill in for the rest of exploring,  filling out this board, as long as 5 is @[1, 3] here, you are violating constrait of needing 
unique values in a row


So we can say that no matter what value you fill in these squares, as long as five is placed here @ [1, 3] this is going to be incorrect


Here, what you will notice is that this is exactly what backtracking tries to do.

Backtracking:
------------

Backtracking says that if i place a value the moment that i realize that placing that value violates one of these rules, i know that any possible solution i fill in for
the rest of this board is automaticlaly going to be incorrect.
So why even waste the resources generating out those options.

It realizes that in order to solve the problem, we need to generate all of the possible solutions that could exist.
However, some of those solutions, if not most of them, are going to be invalid.

if that;s the case, i don't want to waste any resources generating those solutions. i want to throw them instead.
That's when you can tell back tracking helps you out.


******************** Backtracking is a brute force solution *******************************

Brute force solutions is typically known as one that isn't really finessed.
It's not efficient
We will compute every possible option unitl we've computed one that's correct
It's a brute force there is no optimization.


https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22519086#overview






pseudo code


























@args => current element we are looking at
    every recrusive func call represents the current element we are iterating on
    on 2D gird, it represents the current grid cell that we're working with
    and the args tells us how to get the value at that grid cell or it tells us the position of grid cell we are at
args => row index and col index
ans => represnts the final answer we are building towards, also represent the current board state in the context of the sudoku problem.
    we are trying to figure out what the full sudoku board looks like when it;s filled out with valid solution


Every recursive function represents the current iteration that we care about or the current grid cell we're working on, 
function recrusive(args, answer){

    first thing you care about is the addition
    this is where you are adding a new value into the board and you are going to evalute wheater or not it's correct

    {1-9} loop over and add to the answer that current value
    answ.push(currentValue => 1-9)

    once we placed a value into the correct coordinate grid, then we need to make a decision if it's valid and is within constraint
    make a decision =>{
        if(isValid()){
            // if none of the rules are violated then we want to continue
            // we want to call our recursive func
            recursive(args, ans)
        }
        later when we realize that a value does not work, i want to backtrack
        so what we care about is that when we backtrack, we want to now remove this value and try next value inside of our for loop as we are looping throgh 1-9
    }
}



function recrusive(args, answer){

    for(1-9){
        ans.push(currentVal) => add
        
        if(isValid()){ => make a decision
             if none of the rules are violated then we want to continue
             we want to call our recursive func
            recursive(args, ans)
        }
        removeCurrentValue from the answer => remove 
    }
     
}



General formula for backtracking:
---------------------------------
1.  You want to add in some values to whatever data strcuture that represents your final answer
2.  You want to make a decision based on what you've added about whether or not you want to contine, therefore recuriing down through the rest of that path 
3.  Or throw it away
4.  Once that happens, you are going to try another value through the loop

------- This is the entirety of pretty much all backtracking recursive functions -----------------




Further:

1. we add a value to the grid cell.
How do we determine if it's valid or not?

We need to check if we have any repeated values in the row or any repeated values in the col or any repeated values in the sub box gird
So this means we 3 things we need to solve.
How do we keep track of what values are in the row already or col?
we can have [
    0: [{1: true, 2: true}]
    1: [{3: true}]
    2: [{4: true}]
]

What about the sub box grid?

if we're able to keep track of all of the values in each box, we need to figure out how we can capture every box

So what if assign similar index to every single sub box so the values could sit:
[
    0: [    0   0   0]
       [    0   0   0]
       [    0   0   0]
    1: [    0   0   0]
       [    0   0   0]
       [    0   0   0]
    2: [    0   0   0]
       [    0   0   0]
       [    0   0   0]
    3: [    0   0   0]
       [    0   0   0]
       [    0   0   0]
       and so on
]


[   0  1  2   3 4 5   6 7 8
 1,2   0     1       2        => 0 - 2
 3,4,5    3     4       5        => 3 - 5
    6     7       8        => 6 - 8
]

    0   1   2   3   4   5   6   7   8   
0   0   0   0   1   1   1   2   2   2
1   0   0   0   1   1   1   2   2   2    
2   0   0   0   1   1   1   2   2   2
3   3   3   3   4   4   4   5   5   5
4   3   3   3   4   4   4   5   5   5
5   3   3   3   4   4   4   5   5   5
6   6   6   6   7   7   7   8   8   8
7   6   6   6   7   7   7   8   8   8
8   6   6   6   7   7   7   8   8   8



here how to derive box id from row and col ?

function (row, col){
    (2, 2) => {
        newRowVal = Math.floor(2/3) * 3 => 0
        newColVal = Math.floor(2/3) => 0
        return 0 + 0 => 0

    }
    
    (3, 3) => {
        newRowVal = Math.floor(3/3) * 3 => 3
        newColVal = Math.floor(3/3)  => 1    
        return 3 + 1 => 4 
    }

    (5, 7) => {
        newRowVal = Math.floor(5/3) * 3 => 3
        newColVal = Math.floor(7/3) => 2
        return 3 + 2  => 5
    }

    (7, 5) => {
        newRowVal = Math.floor(7/3) * 3 => 6
        newColVal = Math.floor(5/3) => 1
        return 6 + 1  => 7
    }
}


*/

function getBoxId(rows, cols){
    const
     rowsValue = Math.floor(rows / 3) * 3,
     colsValue = Math.floor(cols / 3) * 3
     return rowsValue + colsValue
}
function sudoku(board){
    const
     n = board.length
     boxes = new Array(n).fill({}),
     rows = new Array(n).fill({}),
     cols = new Array(n).fill({})

     // so now we have ds to keep track of if we're violating any constraints

     // next scan the value in the board that come by default and add it at row, col and box value position
     // loop throught the entire board

     for(let r = 0; r < n; r++){
        for(let c = 0; c < n; c++){
            // at this point, we need to check if whether or not the board @ the position has the value.
            // and at the empty cell, is it just going to be undefined or is there some kind of stipulation here?
            // here empty can be represeted as -1 or value < 0 as we are playing with only 1-9

            if(board[r][c] !== '.'){
              const
               val = board[r][c],
               boxId = getBoxId(r, c)
              boxes[boxId][val] = true
              rows[r][val] = true
              cols[c][val] = true
            }
        }
     }
}

// let's declare is valid function
function isValid(box, row, col, num){
    return (box[num] || row[num] || col[num]) ? false: true
}

// now we need to write out actual recursive funtion that will drive the check and filling of the pieces into the board and also the back tracking 
// (params) => ?, (@1st => board, @2nd => Boxes, @3rd => rows, @4rth =>cols, @5th => stating row position, @6th => starting col position)
function solveBacktrack(board, boxes, rows, cols, r, c){

    // when we are working with backtrack function, it;s recusive and we need to think what could happen
    // our r and c might be outside of the boundry
    if(r === board.length || c === board[0].length) return true

    // if the current cordinate we are looking at is an empty space
    if(board[r][c] === '.'){
        // for loop 1- 9
        for(let num = 1; num < 9; num++){
            // add it into the board
            board[r][c] = num
            
            // now perfom the check if it's valid?
            const
             boxId = getBoxId(r, c),
             box = boxes[boxId],
             row = rows[r],
             col = cols[c]

             if(isValid(box, row, col, num)){
                box[num] = true
                col[num] = true
                row[num] = true
 
                // if we are at the end of the col, go to the next row
                if(c === board[0].length - 1){
                    if(solveBacktrack(board, boxes, rows, cols, r + 1, 0)){
                        return true
                    }
                }else{
                // if we are not equal to the board length, meaning we are still inside of our row
                    if(solveBacktrack(board, boxes, rows, cols, r, c + 1)){
                        return true
                    }
                }
                // if we return back to our parent stack at any point we perfom removal
                delete box[num]
                delete rows[num]
                delete cols[num]
             }
             board[r][c] = '.'
           
        }
    }else{
        // if we encounter any number already given in the board
        if(c === board[0].length -1 ){
            if(solveBacktrack(board, boxes, rows, cols, r + 1, 0)){
                return true
            }
        }else{
            // if we are not equal to the board length, meaning we are still inside of our row
                if(solveBacktrack(board, boxes, rows, cols, r, c + 1)){
                    return true
                }
            }
    }
}


/*

    TIME COMPLEXITY:
    Each grid cell has 9 possibilities, there are total of 81 positions
    therefore 9 ^ 81
    
    Here in backtracking:
    for the first value we have 9 possibilities,
    next gird cell has 8 possibiliteies
    then 7 possibiliteies
    then 6 
    then 5
    then 4
    so and so forth

    9 * 8 * 7 .... 1
    9!
    9! for 1 row, how many rows do we have?
    we have 9 rows
    9! * 9! * 9! * 9! * 9! * 9! ... 
    9! ^ 9, where 9 is the number of rows and 9! for each row


    SPACE COMPLEXITY:
    maximum call stack size is 81 O(81) or O(1)
    i.e constant space






*/