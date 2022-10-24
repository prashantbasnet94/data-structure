/*
every recursive function needs to have a base case or stopper. Recursive function has two path:
let counter = 0
function inception(){
    if(counter > 3){
        return 'Done'
    }
    counter++
    return inception()
}
console.log(inception())

1. Identify the base case  ====> Stop calling the func nothing more to search || return @ base case 
2. Indentify the recursive case  ====>  Call the function again  ||   return itself     

    Get closer and closer and return when needed. Usally have two returns

+plus:
    Anything you do with recursion can be done with iteratively(loop)

Pros:
    Using recusion can 
1. DRY code
2. Increase readbility of code

Cons:
    Not always the best approach
Drawbacks:

1. Creates extra memory footprint
2. Can trigger stack overflow

Thus,Iterative approach may be more effieceint 

    Thumb rule of using recursion:
1. Working with ds, you don;t know how deep they are
2. Or, how may loops to go through!

-------------- Tail call optimization --------
In js, with es6:
It allows recursiont to be called without increasing the call stack

When to use recusion:
3 key things that might trigger recursive solution:
1. A problem can be divided into number of sub problems that are smaller instances of same problem
2. Each instance of the sub problem is identical in nature
3. Thee solution of each smaller problems, the leaf nodes of that tree and you combine them, that solves the problem in hand


Divide and conquer uses resursion

Recursion > looping => Recursion makes task super easy than looping

Rule of thumb:
Use recusion when it makes code more clean
Sometimes can be less effectient than loping solution

============== Normal recursion space ==============
4! => 4 * 3 *2 *1 =>24                              */
function recFact(x){
    if(x <= 1){
        return 1
    }
    return x * recFact(x-1)
}

recFact(4)
4 * recFact(3)
4 * (3 * recFact(2))
4 * (3 * (2 * recFact(1)))
4 * (3 * (2 * 1))


return 