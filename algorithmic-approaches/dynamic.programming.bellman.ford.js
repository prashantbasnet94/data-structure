const { count } = require('yargs')

/*

https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22506628#questions

Dijkstra cannot solve problem with sortest distance if -ve weight is present
Solves the same problem, which is when you have a single source as the vertex that you want to figure out the shortest distance to all other vertext in the graph

Bellman Ford is a algorithm that depends on dynamic programming.

Dynamic Programming:
-------------------

To begin with the basic understannding of dynamic probelm, we need to backtrack and think back to our greedy method.


Greedy method was something that helped us solve optimization problem.
Opitmization problem consist of min or max problem, where you have multiple decision that you need to make inorder to optimize your solution to find the min value  
or a max value amongst the series of chioces.



         1
    > A ----> C ---
 4 /        ^  \     \4
 /         /    \      V   
(S)       /6     \7     E  
 \ 2     /        \    ^
  \     /          V   | 10  
     > B --------- > D
            5


   

     let look at example:

     we want to find the shortest path between (S) and E. we want lowest weighted path
    What we are looking for is optimization on the minimum value

The only way you can be certain that you have the lowest weighted path is by exploring every single path possible and figuring out what thier weights are
and then choosing the one with the lowest weight.

That;s the only way you can be guarenteed that the path that you have has indeed the lowest weight


Inorder to find the shortest path this algo travels to all the possible path and then decides which is shortest path:

1: S-A-C-E => 9
2: S-A-C-D-E => 22
3: S-B-C-E => 12
4: S-B-C-D-E => 25
5: S-B-D-E => 17



Dynamic programming, on the other hand recognizes that the only way you can be 100% sure you have the correct answer is by building out
the entire state space tree and exploring every possible path and option.
 
However, where it aims to improve in the time it takes to build up this tree where it recognizes you repeat a lot of work when you explore
every single path.

Looking at our state space tree,
 1. we see end up repeating this C-E calculation twice on 1 and 3
 2. We also repeat C-D-E twice in 2 and 4
 3. D-E three different times.


We are just repeating the same amount of work multiple times.

In fact, if we were able to find a way to not have to redo this work when we've already done it, then we can save ourselves on
any consumption cycles that this process takes.

And this is what dynamic programming aims to do

It sees that there is repeated work, it stores the value of the work somewhere so that if we ever come here again later on, we 
don;t have to recalulate it. We saved it somewhere.

The process of saving these values in known as memoization.

Memoization:
-----------
I don;t want to repeat the same work . Im just going to save this value so that if i need it again, i will fetch it out


So what we need to recognize, is what do we memoize?
---------------------------------------------------------
In the example:

         1
    > A ----> C ---
 4 /        ^  \     \4
 /         /    \      V   
(S)       /6     \7     E  
 \ 2     /        \    ^
  \     /          V   | 10  
     > B --------- > D
            5



on the context of repeating  C-E and C-D-E

At this point, what we see is that from C, in the context of this question we have explored every possible option that C has.
And if we frame it in the context of the optimization problem, which is looking for the shortest lowest costing path.

Then let's compare all the paths that we calculated here in our first two iterations through A. ie. C- E and C-D-E are the only
possible options that C has

This means that when we get the values for these calcualation, we know which path is the shortest from C-E, it's straight C-E = 4 than C-D-E = 17

So what we are going to memoize is

if we ever reach node C, then just automatically take 4 i.e C-E. Dont think about making any addiotional decision.




So now that we understand this is memoization, whare else can we apply it?

At D, we only have 1 option to go to E. So the moment you hit D, you take 10

So now if we were to repeat these last three steps instead

         1
    > A ----> C ---
 4 /        ^  \     \4
 /         /    \      V   
(S)       /6     \7     E  
 \ 2     /        \    ^
  \     /          V   | 10  
     > B --------- > D
            5


Here,
exploring our A branch:
1: S-(A)-C-E => 9
2: S-(A)-C-D-E => 22

Along the way, we manage to figure out that we've calculated everything for C and for D as well. i.e {C: 4, D: 10}

Continuing on we go from S-B i.e another branch

3. S-B
   here we make decision either to go to C or D
   i. we go to C first, S-B-C which cost 6, the moment we hit C, we check and see that we've memoized the value here.
      so we don't need to explore anything. we know the answer is 4 . i.e S-B-C => 2 + 6 +  4 = 12.

   ii. Continuing with our other option D,  S-B-D i.e 7 so far
         Here @ D, we also have memoized this value i.e 10, immediatly we just take the 10, thus 17




Now we got all of the right calculations. So here we notice 1: S-A-C-E => 9, is still the shortest path.


But what you will see throgh this dynamic programming calculation is that we've saved ourselves not only an entire branch of work, 
but also reduced the amount of work we had to do for these branches.

This is what dynamic programmign helps us to do.

It realizes that we still need to caluclate all of the possiblilites

However, a lot of these possiblites are repititive and repeated work that we've already done.

So let's save ourselves from doing that work by reconfiguring the question and thinking about it in such a way that 
we can reduce and save ourselves those calcuations by storing the correct answer at certain points that gets repeated 
in the state based tree,

The biggest challenge is recognizing what you need to store and why?
----------------------------------------------------------------------

How do we figure out what to store?

This is going to be the main challenge that we want to solve through our dyanamic programming

Now we know this high level concept of dynamic programming, let's learn how Bellmanford utilizes it in order to solve this problem of figuring out the 
shortest soruce node distance to all other vertexes.











######################## Bellman Ford Algo ################################################

https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22506632#questions

               5
         ---------------------|
         v       9            | 
         1 ----------> 2 <-   | 
         |           ^  |  \  |  
         |          /   | 3 \ | 
        2|      -4/     |    \|
         |      /       |     3
         |    /       3 |    ^
         V  /           V  / 7
         4  ----------> 5            
               6



This graphs has negative weight, which is where Dijkstra's algorithm fails because it cannot hanlde any weighted graphs that has -ve weights in it


Bellman ford is a dyanamic programming algorithm, meaning that it utilizes dynamic prgramming under the hood to efficiently solve
an optimization problem. 


In this praticualr case, the optimiation problem is a minimzation problem because we are tying to solve from a single source vertex what is
the shortest distance path to every other vertext in the graph.


When you think about this question, what we are trying to do is figure out and calculate all of the available paths in the graphs to every single vertex.

And as we can already tell, that is very computationally expensive endeavor to do.


But only way that we can be certain that we have the lowest costing path is if we do explre every single possible path to every single possible node.

What dynamic prgramming through Bellman ford aims to do is save us on some of those computaion cycles through memoization.


|-------------------------------------------------------------------------------------------------------|
|  We do not need to figure out what to memoize?                                                        |
|  The Bellmanford algo has already figured that out and that's why it's implmented the way it is.      |
|-------------------------------------------------------------------------------------------------------|

And the implmentation is reamarkably simple.
However, in order for us to understand why it's implmented the way it is, we do need to break it down from the dynamic programming lens

And through that, we'll also  get a better understanding of dynamic prgramming.

Here, we know it is trying to solve the optimization minimization problem of figuring out from some given source vertex the lowest costing path to 
every other vertex in the graph.


But if we reduce that question space down, we can better understand the memoizatin aspect here.

What we're tying to figure out instead is from some particular source vertext, what is the lowest costing path to any one randomly choosen vertex
in the graph?

We want to pick the worst case scenario.

In worst case scenario, what is the most number of edges that we will traverse throgh in order to get to a vertex.
here it would be the furthest vertex.
When we think about the number of edgesm, we also don;t want to run in cycles because that's just wasting steps.

               5
         ---------------------|
         v       9            | 
         1 ----------> 2 <-   | 
         |           ^  |  \  |  
         |          /   | 3 \ | 
        2|      -4/     |    \|
         |      /       |     3
         |    /       -3|    ^
         V  /           V  / 7
         4  ----------->  5            
               6


   here worst case is 1 -> 2 -> 5 -> 3
                      1 .  2 .  3 .  4

what we notice is happening is that we're walking through every single vertex

The relationship is actually defined as (N-1) where N is the number of vertices in the graph!
We can picture with a really large graph that will still be the case because 

N -1:

1. you in the worst case  will walk through every vertex once, 
2. -1 comes from the fact that we are standing on one node.


This -1, is how we are able to optimize some of the calculations when we're figuring out all of these paths.

we want to analyze question even further!

if we are trying to figure out the shortest possible path to some specific target vertext, we do need to explore all of the paths available.
There are N-1 edges to pass through in the worst possible path, but there might be numerous N-1 paths


We can imagine that this graph could be given to us in a way where one has a direct connection to there. 1- 3 
or 
1-2-3
or
1-4-3

There are numerous different possibilities for the number of steps that we have to take in order to reach the furthest node.

So not only would there by a number of different N-1 edges path to 3, but there might be much significanly shorter ones as well.
And we want to caluclate for all of them, in order for us to optimize the amount of computations.
we want to save some of these results through memoization.


And what we want to memoize is going to be driven by reducing the this question down a little further.

we can infer that through all of our treversal, we're probably going to walk through the same vertex numerous times, throughout all of our different traversal

what we want to keep track is the lowest cost up until that point,
 because what we can then say is if we have the lowest possible cost to (2), through may be from first three traversal we figure that out
Then what we can say is that instead of recalculating that, just start from (2) and just go on through the rest of the different traversal.

If we reach (5) and we know the shortest path from 1-5, then from 5 we continue on to whatever other vertex there are

We are tying to setup every vertex as another starting point with the shortest path experince so far starting from source node
And how we do that is we are going to iterate through all of the possible edges that we have. We will keep track of the lowest cost up to that vertext so far.

We must go through N-1 iteration to be absolutely certain we have the optimal value.



When we conntinue and check these cycles, these values in any of these vertices in one of these iterations is constantly going to go down, which means
After 4 iteration , when n= 5, n-1 = 4
the value will keep reducing at one of these nodes inside of this -ve cycle for any subsequent iteration

That's why it fails, and is the limitation. 
Because  Bellman ford assumes that there are no -ve cycles inside of the graph.

But Bellmanford also allows us to check for any -ve cycles in the graph.

If you get a question that asking you to detect a -ve cycly in a graph by implmenting bellman
what you do is you go up to N -1 iteration, and calculate and record values at that point of N-1 
and then you go one more step furhter down:
if any of these values update again, after you've perfomred N -1 iteration, then that means you have -ve cycle
---------------------------------------------------------------------------------------------------------------
*/
const times = [
   [1, 2, 9], [1, 4, 2], [2, 5, 1],
   [4, 2, 4], [4, 5, 6], [3, 2, 3], [5, 3, 7], [3, 1, 5]
],
times2 = [[1, 4, 2], [1, 2, 9], [4, 2, -4], [2, 5, -3], [4, 5, 6],[3, 2, 3], [5, 3, 7], [3, 1, 5]]
function networkTimeDelay(times, n, k){
   let
    distances = new Array(n).fill(Infinity)
    distances[k-1] = 0
    /*
      adjacencyList: [
         0:[[1, 9],[3, 2] ],
         1:[[4, 1]]

      ]
    */
    for(let i =0 ; i < n-1 ; i++){
      for (let value of times){
         let 
            source = value[0],
            target = value[1],
            weight = value[2]
            if(distances[source - 1] + weight < distances[target-1]){
               distances[target-1] = distances[source-1] + weight
            }
       }
    }
    let answer  = Math.max(...distances)
    return answer === Infinity ? -1 : answer
}


// **************** After Lesson ************************

function networkTimeDelay2(times, n, k){
   let 
      distances = new Array(n).fill(Infinity)
      distances[k-1] = 0

      // next step is to implment N-1 iteration of the Bellman ford algo
      // inorder for us to run iteration n-1 times we use for loop
      for(let i =0; i< n-1; i++ ){
         /*
           we also want to keep track of wheather or not the values inside our distance array has bee updated 
          remember, there's a chance that by the first or second or third iteration, we;ve already updated all the values
          and running through all of our edges is just wasting needless cycles.

          so all we need to do is at the start of every for loop instantiation we create a variable to keep track
          */

          // increment when value is updated in distances
          let count = 0;

          // at this point, we have all of the edges defined for us in the times array
         for (let j = 0; j< times.length; j++){
            let 
               source = times[j][0],
               target = times[j][1],
               weight = times[j][2]

               if(distances[source-1] + weight < distances[target-1]){
                  distances[target-1] = distances[source-1] + weight
                  count++
               }
         }

         if(count === 0) break
      }
       let answer  = Math.max(...distances)
      return answer === Infinity ? -1 : answer
}

console.log(networkTimeDelay(times2, 5, 1))
