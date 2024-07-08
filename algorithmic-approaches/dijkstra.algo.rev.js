/*
        Dijkstra Algo:

            Only applicable on the graphs, that are weighted.

            Used to figure out the shortest path reach the target node or all nodes.


            To understand this algo, we need to understand Greedy algo.
            This only applies for the optimization problem.


            Greedy Algo: makes discision at every point choosing the min or max option given depending on the optimization type.
            But this does not work always.

         6
   A ------> C ---
 4 /     ^         \ 4
 /       |          \
(S)      |  3       E
 \ 2     |         ^
  \      |  10    / 3
   B --------- > D
          5

        Here with greedy algo
         (S) => (B) => (C) => (E) = 2 + 3 + 4 = 9


         but if we change the value from (A) => (C),  greedy algo does not work

         1
   A ------> C ---
 4 /     ^         \ 4
 /       |          \
(S)      |  6       E
 \ 2     |         ^
  \      |  10    / 3
   B --------- > D
          5

          With Greedy algo, our shortest path is still 9, 
          (S) => (B) => (C) => (E) = 2 + 6 + 4 = 12

          But we know that 

          (S) => (A) => (C) => (E) =4 + 1 + 4 = 9

          Thus fails to provide us the shortest path


          If you take the concept of greedy algo and figure out how to utilize in a way that cover the weakness of the algo.
          Thus comes Dijkstra's algo.

          
        Dijkstra Appraoch:
            1. We keep track of distance array
                a. it is a distance array for each node/vertexes 
                b. All the other values i.e distance to other nodes are Infinity
                    because, we don't know the distances yet
                c. 0th index is 0, as it does not take any distance to reach itself
                    we put 0 for the starting node
            2. Figure out the distance from 0 to every other node
                a. if you can travel to that node, we take that distance and we input in our array
                b. if we can't travel, we don't update the array
                


         1
   1 ------> 3 ---
 4 /     ^         \ 4
 /       |          \
(0)      |  6       5
 \ 2     |         ^
  \      |  10    / 10
   2 --------- > 4
          5


        1.
                0       1           2       3           4       5
            [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity]


            starting from 0:
                0       1           2       3           4       5
            [0, Infinity, Infinity, Infinity, Infinity, Infinity]

        2. 
        a. Here we can travel to 1
            updating 1 value, Infinity => 4

             0  1    2       3           4       5
            [0, 4, Infinity, Infinity, Infinity, Infinity]
        
        b. we can also travel to 2

             0  1  2       3           4       5
            [0, 4, 2, Infinity, Infinity, Infinity]

        c. Can we travel to 3,4 and 5 directly from 0?
            we can't, so we don't update


            At this point we closed  node (0), we are never going back to (0)

            if we ever comeback to this node, the distance can only be greater.



        3. Now we look into the array and say what's the next smallest value?

             0  1  2       3           4       5
            [0, 4, 2, Infinity, Infinity, Infinity]

            applying greedy approach:
            we have two options Math.min(4, 2)  = 2

            so we are working from node (2)

        Where can we traverse with 2?


         1
   1 ------> 3 ---
 4 /     ^         \ 4
 /       |          \
(0)      |  6       5
 \ 2     |         ^
  \      |  10    / 10
   2 --------- > 4
          5


          from (2),
          a.  (2) => (3)

            thinking about shortest path from 0,
            if it cost us 2 from (0) => (2), it cost 6, from (2) => (3)
            thus total = 8

            updating the value of node (3) in distance array

             0  1  2  3           4       5
            [0, 4, 2, 8, Infinity, Infinity]            

            distance [targetNode] = distance[currentNode] + edge

         b. 
            (2) => (4) , edge is 5


            distance[4] = distance[2] + edge

            updating array,
             0  1  2  3  4       5
            [0, 4, 2, 8, 7, Infinity]   


        c. Now are there any other vertex we can traverse to from (2) ? 
            no, we move on to the next smallest distance in arrray, applying greedy appraoch

            since (0) and (2) are already taken care, we have Math.min( [ 4, 8, 7, Infinity]   )

                    i.e node (1)

                (1) => 3, edge = 1

                updating the value

                distance[3] = distance[1] + edge
                            = 4 + 1
                            = 5

                    0  1  2  3  4       5
                    [0, 4, 2, 8, 7, Infinity]  

                but we also have the a distance value in distance[3],
                so we ask is 5 < 8 ? yes, so update it

                updating the array

                    0  1  2  3  4       5
                    [0, 4, 2, 5, 7, Infinity]  

                since we cannot go anywhere other than 3, we close down 1


        d. what's the next smallest value?
                     X  X  X
                     0  1  2  3  4       5
                    [0, 4, 2, 5, 7, Infinity]              


                    Math.min(5, 7, Infinity)  = 5 i.e node (3)

            from node 3, 
            (3) => (5)

            distance[5] = disntace[3] + edge
                        = 5 + 4
                        = 9
                        is 9 < distance[5] ?
                        yes so update the array

                     X  X  X
                     0  1  2  3  4  5
                    [0, 4, 2, 5, 7, 9]       


                    can we go to other node from 3?
                    No, so closing down node 3

        e. What's next smallest distance we can work with?

                     X  X  X  X
                     0  1  2  3  4  5
                    [0, 4, 2, 5, 7, 9]  

                    Math.min(7, 9) = 7, i,e (4)



         1
   1 ------> 3 ---
 4 /     ^         \ 4
 /       |          \
(0)      |  6       5
 \ 2     |         ^
  \      |  10    / 10
   2 --------- > 4
          5


                (4), where can we go?

                (4) => (5)

                distance[5]  = distance[4] + edge
                             = 7 + 10
                             = 17


                        is 17 < 9 ? no, so don't do anything



    can we go to other nodes from 4? 
    no, so closing down (4)

                     X  X  X  X  X
                     0  1  2  3  4  5
                    [0, 4, 2, 5, 7, 9]  


5. what the next shortest distance we can take?
    we only have 5, so taking 5

    can we go anywhere else from (5)?
    No



*/