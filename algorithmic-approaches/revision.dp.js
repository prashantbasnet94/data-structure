/*

    Either finds min or max value is the opimization problem

    Find the shortest path: is optimization on min


        2          4
  (A) --------->  (B) ---------> (C)
   |      /---->   |            |
 1 |    / 4        |  3         |  2
   V  /            V            V
  (D) ---------> (E) ------> (F)
        5                6


    If we want to reach F from A,
    Greedy Algo Apprach:
        At A, i take the shortest path i can see i.e 1  Math.min(B, D)
        so i come to D

        At D i say Math.min(B, E) i.e  B, totalCost = 5

        At B i say Math.min(C, E) i.e  Math.min(4, 3) 3, totalCost = 8

        At E i then i go to F i.e totalCost = 8 + 6 = 14


        We are making greedy approach at every single node

        so the shorstest path is 14 so far


    Dynamic Programming Approach:
        The only way we can be sure something is the sortest path is by knowing all the paths
        So state based tree come into the picture.

        And we aim to optimize the solution of finding the shortest path by using DP, is by optimizing the state tree
        i.e we don;t want to calulate the same path if we already come across it previously
        So this is what memoization is all about

        Same Example:
            if we want to find the shortest path from A to F

                 i.   (A) --2-->(B)--4--> (C)--2--> (F)  = 8
                ii.   (A) --2-->(B)--3--> (E)--6--> (F)  = 11
                iii.  (A)--1-->(D)--5-->(E)--6--> (F)  = 12
                iv.   (A)--1-->(D)--5-->(B)--3--> (E)--6--> (F)  = 15


                --------------------------------------------------
                Here we see that the shortest path from A -> F is 8
                --------------------------------------------------


                ********** Point to be noted **********
                a. We did alot of repititive work here

                Memoization is i don't want to do the same work again and again rather save the value



        2                4
  (A) --------->  (B) ---------> (C)
   |      /---->   |            |
 1 |    / 4        |  3         |  2
   V  /            V            V
  (D) ---------> (E) ------> (F)
        5                6


For example:
At B to reach F we have 2 options, either go to C or E
                                            6       9
We know which path is shortest i.e Math.min(B-C-F, B-E-F)
we memozie, and we will always take the 6 path

At C, if we every reach C, we know that the shortest path from C to F is 2, we memoize it
At E, if we every reach E, we know that the shortest path from E to F is 6, these are the memoized values


After memoizing



                 i.   (A) --2-->(B) 6 = 6 + 2  = 8
                iii.  (A)--1-->(D)--5-->(E) 6 = 6 + 5 + 1 = 12
                iv.   (A)--1-->(D)--5-->(B)--3--> (E)--6--> (F)  = 15




We saved ourselves from doing alot of work


*/




/*
    Bellman Ford Algo:

        1. On our graph traversal we are going to walk thorught the same vertext multiple times
        2. We want keep track of lowest cost up until that point
            a. if we have the lowest cost to a node (N) from first 3 traversal
               instead of re calulating the cost again, we can start from node (N) to other nodes (K), (L) and (M)
        3. We are going to iterate through all of the possbile edges that we have
        4. We are going to keep track of lowest cost up to that vertex so far
        5. perfom the iteration n-1 times, where n is the number of vertices in the graph
            for the worst possible case




               5
         |--------------------|
         v       9            |
         (1) ----------> (2) <-   |
         |           ^  |  \  |
         |          /   | 3 \ |
        2|      -4/     |    \|
         |      /       |     (3)
         |    /       -3|    ^
         V  /           V  / 7
         (4)  ----------->  (5)
                   6

    How to perfom:
        1. Setup a array or structre that will keep track of the lowest value:
            a. for eg array:

                     0      1          2        3          4
                    [0, Infinity, Infinity, Infinity, Infinity]

            b. source node is going to be 0, becuase it cost nothing to get to itself


        2. We will iterate through edges n-1, performing a check i.e 4 time as we have 5 vertixes
            a.  we are looking at the directed edges and what's the best weight of the source node we keeping track of
                i. i want to take that value and add cost of the edge
                ii. then compare it against the target weight
                    a. if it's lesser than target weight then update that with the new value


        (1, 2) , (3, 2), (5, 3) ,(3, 1), (2, 5), (4, 5), (1, 4), (4, 2)



                     0      1          2        3          4
                    [0, Infinity, Infinity, Infinity, Infinity]

Iteration 1,


    a. (1, 2)
        1's current weight is 0.
        (1,2)'s edge is 9

        0 + 9 = 9

        us 9 lesser that 2's current weight i.e Infinity ?
        yes, so updating 1's weight


          0      1          2        3          4
         [9, Infinity, Infinity, Infinity, Infinity]

    b. (3, 2)
        3's current weight is Infinity so we skip it

    c. (5, 3)
         5's wweight is Infinity too, so we skip it

    d. (3,1)
         3's current weight is Infinity so we skip it

    e. (2, 5)
         2's current weight is 9
         edge is -3

         = 9 + (-3) = 6 < less than infinity

         updating the value

                     1      2          3        4     5
                    [0, Infinity, Infinity, Infinity, 6]



        .
        .
        .
        and so on

        after n - 1 i.e 4th iteration we will have

                     1    2  3  4   5
                    [-3, -2, 2, 2, -5]



    *************** point to be noted ***************
   when we continue 1 more iteration, we will see that the value will change
    this is becuase we have a negative cycle in our graph

    Thus, helps us identify if we have a negative cycle in our graph





*/
