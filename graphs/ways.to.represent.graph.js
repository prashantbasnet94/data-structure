/*
https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22504142?start=15#questions

    Adjacency List & Adjacency Matrix

             (1) 
          /    | 
       /       | 
    (0) ----- (3) -----(4)
             /           \   
            /             \   
          (2)             (5)  


Adjacency List:
    Represent this graph as an array []
1. This array is going to have the equal number of values as there are nodes of the graph.
2. Every index that you see inside of this array points to the correesponding node that has same number identifier.
3. The numerical value of any node that is connected to the corresponding node

[
 0 : [1, 3]
 1 : [0, 3]
 2 : [3]
 3 : [0, 1, 4]
 4 : [3, 5]
 5 : [4]  
]
 
Is there ever going to be a chance where the identifier for these vertext nodes is going to be a string?
yes, for example

            (D) 
          /    | 
       /       | 
    (A) ----- (X) -----(Y)
             /           \   
            /             \   
          (B)             (C)  

If this is the case then, adjacency list is going to take the form of object where the key is going to be every single node and values is going to be array containing 
strings.

{
    A: ['D', 'X'],
    B: ['X'],
    C: ['Y'],
    D: ['A', 'X'],
    X: ['A' , 'B', 'D', 'Y']
    Y: ['X', 'C']
}

if we were to look up value of value of B, then we can easily do so i.e Object[Object['B']]
This is the main benefit of using adjecency list. We get really fast lookup and it's easy to traverse from one node to it;s children 
or to it's siblinings.


What about Adjacency matrix?
It uses 2D array or a matrix.
Here we are going to represent each node as the outside array's indices
[
 0 :
 1 :
 2 :
 3 :
 4 :
 5 :
]
             (1) 
          /    | 
       /       | 
    (0) ----- (3) -----(4)
             /           \   
            /             \   
          (2)             (5)  


and then inside for every array the indices represent which node is connected to this node that we are intailly looking for.
[     0  1  2  3  4  5  
 0 : [                ]   
 1 : [                ]       
 2 : [                ]   
 3 : [                ]   
 4 : [                ]   
 5 : [                ]   
]

here we will put 0 if no connection and 1 if there's connection from outside index to inside index node as a value



[     0  1  2  3  4  5  
 0 : [0  1  0  1  0  0]   
 1 : [1  0  0  1  0  0]        
 2 : [0  0  0  1  0  0] 
 3 : [1  1  1  1  1  0] 
 4 : [0  0  0  1  0  1] 
 5 : [0  0  0  0  1  0] 
]

This is adjacency matrix. It's a dense data strucutre
It takes up a lot of space
It's going to be number of nodes squared becuase that's how many units that we have to store inside of our 2D array


Vs

Adjacency List, dependent on the number of edges there are in the graph
Most of the time ends up being smaller, but once again depends on the graph
So you need to evalute which one is better.


So now let's think about traversal, how cadn we traverse graph?

1. BFS
2. DFS











*/