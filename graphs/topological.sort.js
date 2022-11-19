/*
https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22505048#questions

Topological Sort:

A sort that returns a specific order of the vertex of a given graph as long as the graph satisfies certain condition

Also a very simple algorithm to learn



First thing we need to look at is vertex @ isolation:

    (A)

Every vertex in isolation has what's known as an indegree factor. This only applies as long as the vertex is within a directed graph
This is the key:
Graph needs to have edges that are directed in order to have this in degree value.

Indegree value:
It's represented as how many connections are comming into this vertex.

Here we want to start with 0 because we're looking at a vertex in isolation.



  (A) => (B)
Indegree = 1 for B

        C
        ||   
         v   
    A => B  <= D
    Indegree = 3
        
So the easiest way to think about it is how many edges are pointing into this vertex
this is whatever the indegree value for that vertex will be.

Now we understand indegree, how does this apply to topological sort?

So topological sort is less a sort, but more a way to get this order in a topological sense

What it is is simply, when you get a graph that's directed, you want to figure out what every vertex's indegree value is


A ----> B < ----- C
        |         |
        V         V  
D-----> E         F

indegree values:
A : 0
B : 2
C : 0
D : 0
E : 2
F : 1


The way topological sort works is that you can only take a vertex and it;s value as long as its indegree value is 0.
But once you take it , then you want to remove it from the graph 

What that will do is, it will reduce the indegree value of any nodes that it is directing into
and then those nodes become open for us to take as a next value.

But because there may be multiple values where indegree value is 0,
you can take them in whichever order

Topological sort doesnot have very set order.


Topoglical rule is a graph should be DAG i.e Directed Acyclic Graph and will not be able to help us if a graph is 
Directed cyclic graph. ACG
(A:0) ----> B:2 < ----- (C:0)
             |         |
             V         V  
(D:0)-----> E:2      F:1

Here, we want to take the inital value of one of the vertex with indegree of 0

here A, C, and D has indgree 0, so let just take C and put it in the array output
that will hold the order that we want to see for this topological sort.

next, decrement 1 from the indegree value of any vertex it(C) is directing into i.e F
[C]

(A:0) ----> B:1
             |         
             V          
(D:0)-----> E:2      F:0


2. then we continue
    here we see that (F) has indegree value of 0, so let's take that

order = [C, F]

(A:0) ----> B:1
             |         
             V          
(D:0)-----> E:2    


3. again ,let's take (D) this time

    order = [C, F, D]

    (A:0) ----> B:1
                |         
                V          
        -----> E:2   

    now let decrement indegree value of any node it's directed to


    (A:0) ----> B:1
                |         
                V          
                E:1

4. Now let's take (A)
    order = [C, F, D, A]


         ----> B:1
                |         
                V          
                E:1

    now let decrement indegree value of any node it's directing into i.e B

               B:0
                |         
                V          
                E:1

5. Now let's remove B
    order = [C, F, D, A, B]

                |         
                V          
                E:1

    now let decrement indegree value of any node it's directing into i.e E

                E:0

6. Now let's remove E
    order = [C, F, D, A, B, E]


This is one example of the topological order that we can get from that graph.



So when is topological sort not applicable?
--------------------------------------------

It is always applicable in directed graph

There can be no cycle within this graph for us to perfom a topological sort
If the graph contains a cycle, then it's impossible for us to get the value



The reason why is we can see this eg:

(A:0) ----> B:2  -----> (C:1)
             ^            |
             |            V  
             | ---------- F:1

1.  When to do topological sort, A is the only value with indegree 0

    sort [ A ]
    

         ----> B:2  -----> (C:1)
                ^            |
                |            V  
                | ---------- F:1

        now decrementing indegree value that A is directing to nodes


                B:1  -----> (C:1)
                ^            |
                |            V  
                | ---------- F:1


2. Now we can't take any of the remaining vertext because the indegree value for these vertexs is 1,    
    and topological sort is only able to take vertex where they're in degree 0


But this also doesnot mean that this topological algorithm does not have it;s use cases if you have DCG i.e Directed Cyclic Graph




If you think about our question, our question is really asking us to figure out wheaterh or not our directed graph is acyclic and therefore all the course 
can be taken

or a cyclic thus cannot be completed.



Once we finish our topological sort, if we are able to reach every single vertex, then we were able to complete all the courses.

If we are not able to then, there must have been a cycle. 
*/