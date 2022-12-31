/*

Verify Constaraints:


1. What do we return if it's not possible?
 If all the oragens can't rot we will return -1

2. What do we return if there are no oranges?
 0 if no oranges.


 Test Cases:

 [
    [*  @   @   0   0]
    [@  @   @   0   0]
    [0  @   @   @   @]
    [0  @   0   0   @]
 ]

 Min: 1

  [
    [*  *   @   0   0]
    [*  @   @   0   0]
    [0  @   @   @   @]
    [0  @   0   0   @]
 ]

  Min: 2

  [
    [*  *   *   0   0]
    [*  *   @   0   0]
    [0  @   @   @   @]
    [0  @   0   0   @]
 ]

   Min: 3

  [
    [*  *   *   0   0]
    [*  *   *   0   0]
    [0  *   @   @   @]
    [0  @   0   0   @]
 ]

Min: 4

  [
    [*  *   *   0   0]
    [*  *   *   0   0]
    [0  *   *   @   @]
    [0  *   0   0   @]
 ]


 Min: 5

  [
    [*  *   *   0   0]
    [*  *   *   0   0]
    [0  *   *   *   @]
    [0  *   0   0   @]
 ]

 Min: 6
  [
    [*  *   *   0   0]
    [*  *   *   0   0]
    [0  *   *   *   *]
    [0  *   0   0   @]
 ]

  Min: 7
  [
    [*  *   *   0   0]
    [*  *   *   0   0]
    [0  *   *   *   *]
    [0  *   0   0   *]
 ]
Hence tool 7 mins


Case 2:

[
    [@  @   0   0   0]
    [*  @   0   0   0]
    [0  0   0   @   *]
    [0  (@)   0   0   @]
 ]
(@) => never rots => -1

Min 1:

[
    [*  @   0   0   0]
    [*  *   0   0   0]
    [0  0   0   *   *]
    [0  @   0   0   *]
 ]


Min 2:

[
    [*  *   0   0   0]
    [*  *   0   0   0]
    [0  0   0   *   *]
    [0 (@)  0   0   *]
 ]

Regardless of how much times passes (@) organe will never rot
so return -1

Case 2:
[] => 0

[[],[]] => 0



Subproblems to Identify:

What is the way to make sure we're able to keep track if there are any remaining oranges, if we do BFS

 [
    [*  @   @   0   0]
    [@  @   @   0   0]
    [0  @   @   @   @]
    [0  @   0   0   @]
 ]


 Possible Approach:

 1. Start sequential order traversal we can identify 3 cases:
 {
    0 => empty shelf
    1 => oranges
    2 => rotten oranges
 }

 since we are looking for number of min it will take to rot all oranges.

 At any point of sequential order if we discover rotten oranges i.e 2, then we do BFS and check all the oranges around it
 again we can have 3 cases that we will discover
 {
    0 => empty shelf
    1 => oranges
    2 => rotten oranges
 }

Insights:

1. Each minuete any 1 that are adjacent  up, right, down and left to the rotten organes will then flip into 2
2. Each possible traversal to up, right, down or left is equivalent to 1 min




** Lesson **
Couple of things we need to figure out:

1. We want to figure out how many minutes must pass in order for us to convert all of the fresh oranges into rotten oranges.
2. If number of rotten oragnes increase in the matrix the minutes decreases. For example, 

 [
    [*  @   @   0   0]
    [@  @   @   0   0]
    [0  @   @   @   @]
    [0  @   0   0   @]
 ]
 it takes 7 mins to rot all oranges here 

 vs


  [
    [*  @   @   0   0]
    [@  @   @   0   *]
    [0  @   @   @   @]
    [0  @   0   0   @]
 ]

Now we have two points that we need to beign rotting from 
In the first min, this top left rot orange will rot 
* @ ...         *  *
@ @ ...   =>    *  @    
.
.
.

and also, the one below *, 
  [
    [*  @   @   0   0]
    [@  @   @   0  (*)]
    [0  @   @   @  (@)]  (@) will also rot  
    [0  @   0   0   @]
 ]

 So here we can see that while we are expanding out level by level , it;s all happening at once.
 We need some way to make sure, when we start figuring  out how to rot these oragnes in level by level pattern every min, 
we need to make sure we do it from both of the rotting oranges or all of the rotting oranges given 

So to beign with, we already get some kind of rough idea that we need to figure out where all of the rotten oranges are inside our 2D array 
before we even start.

Other thing to note is also that there's a chance that we might not be able to reach one of these oranges.

For Example: 

 [
    [*  0  (@)   0   0]
    [@  @   0   0   0]
    [0  @   @   @   @]
    [0  @   0   0   @]
 ]

(@)  will never going to be reached. since it is only reached throguh diagonally.

So this means we need someway to ensure that once we finish rotting as many orages as possible.
we are somehow able to determine wheather or not there are any frsh oranges left. 
And this is a subproblem inside our solution.


Subproblems we faced so far:
****************************
1. Inorder to implment rotting orange pattern we need to figure out where all the rotten oranges are
2. Implment the rotting orange pattern 
3. Keep track of fresh oragges, 
    return the time if all the ornages are rotten away, if any fresh oranges is left we just return -1. 
    i. For this we need to count the number of fresh oranges - fresh oranges that were rotten during the process. 



So let's solve this sub problem, because it's a smaller problem than solving how to figure out the rotting pattern


How to determine whether or not there are any fresh oranges left?
Easiest way to figure this out is, once the rotting is done, we can scan throgh the entire 2D array in sequentail order and see if there's any fresh oranges left.

If there is then , we know that our rotting pattern couldnot reach that orange.
Therefore our answer => -1

Whereas if we were to do it in the beginning, what we can do is we can count all of the fresh oranges that are available before we even do any of the rotting pattern
Then once we start rotting outwords, wherener we rot an orange, we just decrease the count of fresh oranges
And once we are done with our rotting, then we know that if there's any fresh oranges left, 
if the count is greater than 0, then there must be fersh oranges we could not reach.

So Here we have two perfectly valid solutions, but we don't knwo which one is better at this point.

But if we start thinking about gouping it with any other sub problem that we solved , we might have a better idea.

Now let's think back to the first problem, which is figuring out what the original rotting orages were. before we even start the rotting pattern.

In order to make sure that we have all of the rotting oranges at the very beginning;
what we need to do is scan through 2D array and figure out the position of all of the ortting oranges so we know where to beign our rotting pattern.


Because we are going to scan the 2D arrays anyways in the very beigning just to find the position of rotten oranges.
We might as well group that with the fact that we're also counting the number of fresh oranges.


It's pertty much the exact same sequentail traversal, but now we just split up the logic.


If (element === 1){
    increment countFreshOranges
}
If (element === 2){
    account for the fact that there's a rotting orange at the position.
}

Here we haev tackled two different sub problems, that can be solved by scanning 2D array sequentailly.
Now the main problem left to solve is figureing out how to implmemt the logic for this rotting order that we have to do.

So here we kow that we want to start rotting outwards in the immediate vicinity of our starting oranges
we want to rot outwards into whatever fresh oranges are in the immediate up, right, down and left of any of these rotten oranges.
And do the same for next levl of any of these rotting oranges.

The probelm is that the order in which we do it has to be tracked in a minute to minute basis.
In some ways, every new ring that we expand outwards represenet a new minute.
those rings are combined when you group the number of oranges that there are at every level.

We know BFS is going to be our approach, since bfs goes to the nearest vicinity of element and grab them first. 
The problem is figuring out how we group it into these mins appropriately.

BFS implments a queue, and queue process one element at a time, it doesnot know if elements are at different level.
for example:


 [
    [*   @   @   0   0]
    [@ (1@)  @   0   0]
    [0  @    @   @   @]
    [0  @    0   0  (2@)]
 ]

element at (1@) vs element at(2@) are pocessed in the same way in the queuee, it doesnot know how to implment that break. 
And that's where we need to implment it, to treat the element at two different level separately 
This is where we need to be creative.



Just like our level order traversal in our BFS in tree, we need a way to track when our level changed from rotten orage  => vicinity oranges => to it's neighbouring oranges.

let's see how we can do this:
[     0   1   2   3   4          
 0:   [2  0   1   0   0]
 1:   [1  1   0   0   2]
 2:   [0  1   1   1   1]
 3:   [0  1   0   0   1]

]

first we know total fresh oranges count: f = 9, and
 position of rotten oranges:[
    [0,0], [1, 4]
]

we initalize queuelength = 2

The momnet we've processed two element, we have reached the end of the this current processing level and therefore the min can increase

once we start,
queue.shift() => 2 @[0,0] is going to pop out
our queue = [ [1, 4] ]
it will drop the count of the length by 1

The value we are working with is [0, 0]


Now let's think about the logic that we want to apply when we have this rotting orange.
We want to be rotting in the immdediate vicinity of our BFS
so we take the immediate top, right, left and down value and look, for any fresh oranges

our queue = [ [1, 4], [1, 0] ], queuelenght = 1
we see there's a fresh orage at the bottom of position [0,0]. We do following;
1. Rot that value by swithcing it from 1 => 2
2. Decrease the number of fresh orange we have
3. Also add the coordinate of this value into the queue, so that we can process it later part of our BFS.


so we take the next value from our queue = [1, 4], current queue = [[1, 0]], our count = 0
[1, 4]
so we check the immediate top, right, left and down value and look, for any fresh oranges

we see there's a fresh orage at the bottom of position [0,0]. We do following;
Follow that 3 steps again:
1. Rot that value 1 => 2
2. Decrease our fresh orange by 1
3. We take the cordinate @ [2, 4] and push it in the queue i.e queeu = [[1, 0], [2, 4]]

Here what we notice is 
our qeueu length is 0, which means we finish processing all of the oranges at the first layer level.
We know the moment our queue length hits 0,  all of the next value to process are at next level/

1. One minute has passed
2. Next reinstanite our queue length. i.e 2, where queue = [[1, 0], [2, 4]]

now we repeat our process again.


...

finally,

fresh orage =1
minutes = 4

if (freshorage value > 0){
    return -1
}

if(fresh orange value === 0){
    return minutes
}




 */

const direction = [
    [1, 0], //up
    [0, 1], // right
    [-1, 0], //down
    [0, -1] // left
]
function bfs(queue, matrix, min){

    while(queue.length > 0){
        let [row, col] = queue.shift()

        for(let dir = 0; dir < direction.length; dir++){
            let currDir = direction[0],
            newRow = row + currDir[0],
            newCol = col + currDir[1]

            if( newRow < 0 || newRow >= matrix.length || newCol < 0 || newCol >= matrix[0].length){
                continue
            }

            if(matrix[newRow][newCol] === 1){
                matrix[newRow][newCol] = 2
                queue.push([newRow, newCol])
            }
        }
        min++
    }
}
function minToRotAllOranges(matrix){
    /*
    do the sequential order traversal first

 1. min = 0
    [
        [*  @   @   0   0]
        [@  @   @   0   0]
        [0  @   @   @   @]
        [0  @   0   0   @]
    ]

2. min = 1, queue = [*q1, *q2]
 [
    [*   *q1  @   0   0]
    [*q2  @   @   0   0]
    [0    @   @   @   @]
    [0    @   0   0   @]
 ]

3. min = 2, queue = [*q1, *q2, *q3]
 [
    [*    *   *q2  0   0]
    [*  *q3    @   0   0]
    [0    @    @   @   @]
    [0    @    0   0   @]
 ]

4. min = 3, queue = [*q1, *q2]
 [
    [*    *     *   0   0]
    [*    *   *q1   0   0]
    [0    *q2   @   @   @]
    [0    @     0   0   @]
 ]


5. min = 4, queue = [*q1, *q2]
 [
    [*    *     *     0   0]
    [*    *     *     0   0]
    [0    *     *q1   @   @]
    [0    *q2   0     0   @]
 ]



6. min = 5, queue = [*q1, *q2]
 [
    [*    *     *     0   0]
    [*    *     *     0   0]
    [0    *     *    *q1  @]
    [0    *   0     0   @]
 ]



7. min = 6, queue = [*q1]
 [
    [*    *     *     0   0]
    [*    *     *     0   0]
    [0    *     *    *  *q1]
    [0    *   0      0    @]
 ]

7. min = 7, queue = [*q1]
 [
    [*    *     *     0   0]
    [*    *     *     0   0]
    [0    *     *    *    *]
    [0    *   0      0    *q1]
 ]

 conclusion => any elements that touches the queue rots





    */
    let min = 0
    for(let row = 0; row < matrix.length; row ++){
        for(let col = 0; col < matrix[0].length; col++){
            if(matrix[row][col] === 2){
                // perform a bfs search 

                 let queue = [[row, col]]

                 bfs(queue, matrix, min)
            }
        }
    }
}


//https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22417068#questions
//     **************** learned *****************


function timeRotOrange(matrix){

   if(matrix.length === 0 || matrix === null){
      return 0
   }

   // sequentail order to find position of rotten oranges and total number of fresh oranges

   let freshOrange = 0, queue = []
   for(let row = 0; row < matrix.length;  row++){
      for(let col = 0; col < matrix[0].length; col++){
         // we can dicover 3 different elemnets 0, 1 and 2
         // we account for 1 (fresh) and 2 (rotten) oranges
         if(matrix[row][col] === 1) freshOrange++
         if(matrix[row][col] === 2) queue.push([row, col])
      }
   }

   // here we know the position of rotten oranges and total number of fresh oranges as well
   // let's do bfs inorder to find out rotting patten and time

   console.log('fresh orange before bfs', freshOrange)
   let result = rottingPattenBFS(queue, matrix, freshOrange),
   minutes = result.minute
   freshOrangeAfter = result.freshOrange
   console.log('fresh orange after bfs', result)
   if(freshOrangeAfter === 0){
      return minutes
   }else{
      return -1
   }

}

function rottingPattenBFS(queue, matrix, freshOrange){
   let 
      size = queue.length,
      minute = 0

   while(queue.length > 0){
      // do bfs traveral

      if(size === 0){
         minute++
         size = queue.length
      }
      let [row, col] = queue.shift()
      size--

      for(let dir = 0; dir < direction.length; dir++){
         let 
            currDir = direction[dir],
            newRow = row + currDir[0],
            newCol = col + currDir[1]

            if(newRow < 0 || newRow >= matrix.length || newCol < 0|| newCol >= matrix[0].length){
               continue
            }

            if(matrix[newRow][newCol] === 1){
               matrix[newRow][newCol] = 2
               freshOrange--
               queue.push([newRow, newCol])
            }

      }
   }
   return {minute, freshOrange}
}

const testCase = [[2,1,1],[1,1,0],[0,1,1]]
console.log(timeRotOrange(testCase))

/*

Time Complexity => O(N)
 Space Complexity => O(N)


Conclusion: It's very important that you work on the critical think process of breaking apart a question 
so that you can identify what sub problems there are and how you can solve it and put it all together


It's all about working on your process of breaking down the problem that will helop you
*/