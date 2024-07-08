/*
        Dynamic Programmming: 
            Dp realizes that in order to calculate max or min path, we need to calculate all the possible paths first.
            However,lot of possiblities are just repitivite and repeated work that we already performed


            Memoization:
                By storing these task performend i.e storing the correct answer at certain points
                that helps us generate our state based tree


            *********   Biggest challenge is recognizing what to store and why ***********



            How do we figure out what to store?
            This is the main challenge that we want to solve through our dp


            # Now we know high level concept of dp, let's see how Bellman Ford utilizes it in order to solve the problem of 
             figuring out the shortest source node distance to all other vertexes.




             -----------    Bellman Ford Algo ------------
             Dijkstra fails in the graph that has -ve weight on it

             Bellman ford is a dynamic programming algo, meaning it uitlizes dp under the hood to efficeintly solve
             an optimization problem.

             With Bellman Ford Alog,
                    
             =========== we don;t need to figure out what to memoize =============
             Bellman Ford algo has already figured out, that's why it's implemented the way it is

             For example: To find out the lowest costing path from a source vertex to every other vertex in the graph
             
             This quesiton can be analyzed in a different way as:
                From a particular vertex, what is th lowest costing path to any one randomly choose vertex in the graph?


                we want to pick the worst scenario, In the worst case, 
            =>  in the worst case, what is the most number of edges that we will traverse through in order to get to a vertex.
                (( Here it would be the furthest vertex))

                
        5
   ---------------
  |              |
  v    9         |
  1 ---> 2 <-----|
  |     ^ | \    |
  |    /  | 3\   |
  2 -4/   |   \  |
  |  /     |    v 3
  | /  -3  |    ^ 
  v/       v   /7  
  4 ---6----> 5   
                

  In some of the worst case, we are walking through every single vertex.
  Relationship is defined as N-1, N = number of vertices 

  N-1 :
    a. In the worst case we will walk through every single vertex once
    b. -1 comes from the fact that we are standing on 1 node


    N-1 is the worst case, but there might be much significantly shorter path as well

    And we want to calulcate the path for all of the route, and in order to optimize the amout of calulations.
    We want to save the results through memiozation.


    So what we want to memozie?
    This is going to be driven by reducing the question down little further.

    i. We can infer through all of our traversal, we're probably going to walk through the same vertex numerous times 
        throght all of our different traversal

        a. What we want to keep track is the lowest cost up until that point
        b. we are trying to setup every vertex as another starting point with the shortest path experice so far
           starting from the source node
            
             * How we do that?
               We are going to iterate through all of the possible edges that we have.
               We will keep track of the lowest cost up to that vertex so far.

                
    ii. We must go through N-1 iteration to be absoultely certain we have the optimal value

    iii. The Bellman-Ford algorithm assumes that there are no negative cycles in the graph to guarantee a valid solution.
            a.  It can correctly detect the presence of a negative cycle in the graph.

            b. After performing n-1 iterations (where n is the number of vertices), if there are still updates made in the distances during the nth iteration,
             it indicates the presence of a negative cycle.

            c. If you get a question that asking you to detect a -ve cycly in a graph by implmenting bellman
                what you do is you go up to N -1 iteration, and calculate and record values at that point of N-1 
                and then you go one more step furhter down:
                if any of these values update again, after you've perfomred N -1 iteration, then that means you have -ve cycle


    
      5
----------------
v       9
1 ----------> 2
|       ^  |  \
|      /   | 3 \
2  -4/    |    \
|  /      |     \
| /       |      3
v/        v
4 --------> 5
       




*/