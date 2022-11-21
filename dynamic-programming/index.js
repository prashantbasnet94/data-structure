/*

Bellman and ford utilized these dynamic programming principles in order to capture a solution when it came to figuring out shortest 
path from source vertex in a directed weighted graph.

We are able to extrapolate these dynamic programming principles and apply them to multiple questions across all data structures.

The main thing is that we need to recognize when dynamic prgamming can help us come to solutions as well as understanding the steps to complete a full, 
dynamic programming solution.
And there are many steps it is often considred the most challenging question inside of our interview prep.

It is difficult to understand the steps without working in the context of a question and becuase of all of the differnt states in our state based tree, as we've seen before



Questin:
--------
1.
    a.  For a given staircase, the i-th step is assigned a non negative cost indicated by a cost array.
    b.  Once you pay the cost for a step, you can either climb one or two steps. Find the minimum cost to reach the top of the staircase, your first setp can either be the first or second step.



cost = [10, 15, 30]

                  ___   
               __| Fin
            __| 30    
         __|15   
        |10

We want to reach this finish step
The number of steps we can take each time is referenced in the second part of the question
Once we pay the cost for taking a step, we can either climb one or two steps up.
We need to figure out what the minimum cost to reach the top of this entire staircases is.
We also need to realize that the first step we take can either be the first or the second step in the staircase.

Here,
if we start from the bottom, our first step can be either on 10 or 15



First step:

Recognize it;s a dynamic programming problem.

Not all problems that have dynamic programming as a potential solution require dynamic programming as a solution.

Dynamic programming is a pradigm that can help you solve specific tpyes of optimization questions or question that could lend itself to some type of memoization to help solve it
Most of the time, 95% of the time, optimzation question that are min or max based on all available option or solutions and you picking the best one is going to be a dynamic programming
based solution

If we analyze the second half of the statement, what we'll see is that we're finding the minimum cost to reach the top of the staircase

********** The moment you see minimum or maximum, you should realize that is an optimization question ***************


What we know with optimization questions is that we need to generate all of the possible paths that we can take and pick the one with the minimum value.
Only by generating all of the options in an optimization question can you be certain that you are picking either the minimum or maximum path.
So now we understand that nature of optimization question, let's move on to the actual dynamic programming solution.

One thing about dynamic prgramming is that it's very unique to other algorithmic paradigms.
There are multiple stages in a dynamic programming solution

 At every stage, you are indeed writing a viable solution, meaning that it's able to accurately solve the problem
However, every subsequent stage gets more optimized when it comes to space and time complexity.
We are working through these stages, trying to get to the most optimal solution

So in order for us to understand how to begin at stage one, we need to realize that dynamic programming has it's basis in recursion

Recursive fucntions is the starting point  for figuring out what the first solution for this problem


Recurrence Relations:
Most crucial part.
The recurrence relation is a formula that helps us understand what the actual recursive function we're trying to write is going to be.


Recursive fuct calls itself and it has base cases that determine when this self calling nature has reached an end.
Beacuase we want to take all of the values that we get back from these recursive functions and combine them together to create our final solution.

We are trying to figure out what;s  the big problem we are trying to solve?
In our case we are trying to figure out the minimum cost it takes to traverse from the start of the staircase to end of the staircase
Out of all of the possible traversal pattern that we can take which one yields the minimum cost.
If we do this from recurrence stand point, what it means is that we want to figure out


cost = [10, 15, 30]

                  ___   
               __| Fin
            __| 30    
         __|15   
        |10


is there a way that i can redefine this problem as a repeated problem that we can combine together in order to get the final answer?

            finaldestination cost:

                                minCost(n)
                              /            \
               min(minCost(n-1)      ,      minCost(n-2))
                 /         \                  /          \
     min(minCost(n-2)  , minCost(n-3))   min(minCost(n-3) ,  minCost(n-4))

Note:
Minimum cost of reaching 15 or 30  includes the cost of the step iteself. i.e inorder to reach 15 you need to pay all the previous price + 15


                                ------minCost(n)--------- 
                              /                          \
               min(minCost(n-1)        ,                minCost(n-2)) + cost(n)
                 /         \                                 /                \
     min(minCost(n-2)  , minCost(n-3)) + cost(n-1)        min(minCost(n-3) ,  minCost(n-4)) + cost(n-2)


     The reason why there was no min cost value for minCost(n) is beacause this value has no cost to get to finish.

     What you are starting to see is a pattern emerge for what our recurrence looks like.
     **** Also the basis of determining the recurrence relation *********

     Notice, what we are doing is we are starting from the very end value

     What;s the minmum cost it takes for me to reach this last step?
     This top down approach is exactly what it is.

We are taking a top down look at figuring out what this recurrence pyramid looks like.

We need to define a problem that gets repeateedly called into some kind subsequent smaller sub problem.
Solution to these smaller sub problem is what i'm going to use to build for the answer of my main problem
And this problem is something that repeats itself at every level. 


Here what we care about is determining relationship. That's why it's called recurrence relation

                                ------minCost(n)--------- 
                              /                          \
               min(minCost(n-1)        ,                minCost(n-2)) + cost(n)
                 /         \                                 /                \
     min(minCost(n-2)  , minCost(n-3)) + cost(n-1)        min(minCost(n-3) ,  minCost(n-4)) + cost(n-2)

What we see here is that we are defining the relationship between the function call given it's argument.

and it's internal subsequent recursive function call and the arguments that they receive
There is a relationship that we have defined n, n-1 and n-2
How many functions are we calling recursively?
twice in every function call.
i.e minCost(n) => Math.min(minCost(n-1), minCost(n-2))

again minCost(n-1) => calls it'self twice with different argument.

how far down we can go?
you can go all the way down until n = 0


Generic formular we can derive:
at any step i, minCost(i) = cost(i) + Min(minCost(i-1), minCost(i-2))

This tree is what you want to think about building out when you're looking at any dynamic programming. question

This is the hardest thing to learn at the begining.

Last thing we need to do is come up with the base cases:

Our base cases are going to essentially depend on the arguments that come into our recursive function.
Here, arguments => i => index

So what are the different conditions that we can get for i, that might change the calculation

minCost(i) = cost(i) + Min(minCost(i-1), minCost(i-2))
here, 
this really works for every value expect for couple of instances.
We can end calling index at 0, 1 and possibly index before 0 i.e -1

if i < 0 => return 0
i === 0 return cost[0], Zero is the very first step you can take
i ===1 return cost[1],  there only 2 position you could come from either from 0 or come from very start where there is no value.


If we know that all of the values in the arrary can only be non negative, that means taking (0 => 1 )' weight is always greater than (starting from nothing => 2)' weight
There's no value lesser than nothing, soo for this reason you don't even need to consider adding the cost and comparing it based on this min
















*/