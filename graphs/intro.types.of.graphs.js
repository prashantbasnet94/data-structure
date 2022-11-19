/*
https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22433910#questions/14246232

    Graphs complexity lies in the fact that there are so many varaitions of graphs 
    Throught out the section we are going to learn different variation of graphs and some of the most important algorithms
    that are applied to these different variations of graphs 

    Let's understand the basic of graphs:
    Graphs are really just collections of these nodes.
    Node here is pretty much identical to the node inside of a binary tree.
    node: {
        value: something
        connection [left or right] || edge : new Node()
    }

    The main difference between tree vs graph is in graphs, 
    1. Nodes are often called vertices or vertex for singular.
    2. Connection are called edge
    3. Node or vertex can have multiple connection to multiple different nodes


              (D) 
               | 
               | 
    (A) ----- (X) -----(Y)
             /           \   
            /             \   
          (B)             (C)  

Here there are actually four connected nodes to this singular node(x)

1. This is one of the unique charcateristics about graphs, which is where the nodes can have any number of 
connections to numerous, numerous nodes
2. The other thing is that there is very high possibility that these nodes can be connected to other nodes and form what is known as cycle.

A cycle is essentially where these nodes are connected in a way that forms this type of circular connection.
where you might be able to travese from one node back  to itself if these nodes are connected to each other in this ciruclar like structure.

             (D) 
          /    | 
       /       | 
    (A) ----- (X) -----(Y)
             /           \   
            /             \   
          (B)             (C)  


So this cycle you can think of it as a cycle inside of a linked list

And there's not just one cycle that can exist inside a graph. you can have numerous diffrent cycles.
This is just the nature of graphs.

Undirected Graphs:
-----------------
Every edge is a two direction edge in unidrected graph
So up until this point, what we've noticed is that these graphs are largely known as undirected graphs.
Undirected means that we can traverse from any node to any of it's corresponding nodes




             (D) 
          /    |  \
       /       |    \ 
    (A) ----- (X) ---(Y)
             /           \   
            /             \   
          (B) ----------- (C)  

i can go from A to D or A to X, 
if i go from A to D, i can travel back to A.

This is the result when connections are not directed.


Directed Graphs
---------------
We also have directed graphs:
Meaning the direction we can traverse is dictated by the direction of the actual arrow that represents the connection

            --->  (D) 
          /    |      |
       /       |      V
    (A) -----> (X) --->(Y)
             ->           \   
            /              V  
          (B) ----------- (C)  


I can go from A to D, but i cannot go to D => A

These direction can be either both way or one way.

(A) <----> (B)
we can go back and forth in this case


Also the graphs we have looked at , there is no cost to traversing across an edge. and this is because these are both unweighted graphs.

Unweighted Graphs:
------------------
When it is unweighted it means that there is no associcated weight to any of these edges
whereas a weighted graph does have an associated weight to every edge



             3
            --->  (D) 
         /     | 2    | 1
       /   7   |      V
    (A)<-----> (X) --->(Y)
             ->           \ 5   
            /6             V  
          (B) ----------- (C)  
                    5

    Here traversing from
     A => D === 3
     A => X === 7


Now let's focus on A <=> X

this means regardless of which direction you traverse, the weight appiles regardless of direction.


When traversing from one node to another node you have to pay the cost. i.e cumulative cost of all the weighted edges that we traverse through when we go from one node to another


we can take numerous path, we want to figure out which takes the lowest cost.



Weighted graphs exist in both directed graph variations as well as undireted graphs
The only complexity that adds is that we have to consider the weight cost of traversing across an edge.



Every undirected graph can be easily converted into directed graph, very edge should be seen as two directional


Another variation  of graph that can exist with this format is one where we have diffrent nodes that are connected to other nodes.
But the entirety of all the nodes might not be connected as one structure.



(A) ------ (B)
 |          |
 |          |   
(C) --------(D)
                    (E) ------ (F)



Here, you can see there are almost two different sections that do have connections in their nodes.
But these two sections are not joined together.

When you have this case, this is considered as an unconnected graph



A binary tree are directed graphs.
All binary trees are graphs, but all graphs are not binary tree.

Another data structure that acutally represents  graph is 2D array.
The reason for this is if you visualize this 2D array as a grid and you visualzie every single element as a vertex,
what you wikll see is that every single grid cell is a vertext that is connected by pattern of edges, which represent the traversal pattern that 
we can make from one grid cell to another.
*/