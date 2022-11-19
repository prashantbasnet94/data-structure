/*


Dijkstra cannot solve problem with sortest distance if -ve weight is present
Solves the same problem, which is when you have a single source as the vertex that you want to figure out the shortest distance to all other vertext in the graph

Bellman Ford is a algorithm that depends on dynamic programming.

Dynamic Programming:
-------------------

To begin with the basic understannding of dynamic probelm, we need to backtrack and think back to our greedy method.


Greedy method was something that helped us solve optimization problem.
Opitmization problem consist of min or max problem, where you have multiple decision that you need to make inorder to optimize your solution to find the min value  
or a max value amongst the series of chioces.



         6
    > A ----> C ---
 4 /        ^       \4
 /         /         V   
(S)       /3         E  
 \ 2     /           ^
  \     /            | 10  
     > B --------- > D


     let look at example:

     we want to find the shortest path between (S) and E. we want lowest weighted path
    What we are looking for is optimization on the minimum value

The only way you can be certain that you have the lowest weighted path is by exploring every single path possible and figuring out what thier weights are
and then choosing the one with the lowest weight.

That;s the only way you can be guarenteed that the path that you have has indeed the lowest weight

 






































*/