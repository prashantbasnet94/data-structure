/*

Althogh we have talked with graph and tree traversal, with BFS and DFS.
There is also another thing you should consider.

Know when to use Bellman-Ford or Dijkstra algo to figure out shortest path problem?

But why do we need these algo? we already know BFS is used for shortest path problem.
BFS is great for shortest path problem but there is one thing it can't do.
de in
It assumes that each jump to another no a graph. It asssumes that each path has (equal || same) weight.
DFS and BFS does not care what kind of weight an Edge has

For example,
In real life, such as google maps. Some roads are faster than the other, we have prehaps more traffic on one road, may be distance from one road to another is shorter
And these weighted graphs have a number associcated with the edges.

    Node => vertex
    Connection Between two nodes => Edge

DFS doesnot really allow us to take into account these weight, we need something else.
For a weighted graph, that allows us to find shortest path, our answer is Bellman or Dijkstra algorithm

https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12432472#questions

When to use what ?
Bellman Ford:
    Is very effictive at solving shortest path over Dijkstra algo, because it can accomodate negative weights
    If a weighted graph has -ve weight or -ve number Bellman ford alog is going to solve shortest path problem. While Dijkstra won't be able to

Than why use Dijkstra ever if Bellman Ford can do better?
Bellman ford algo can take a long time to run in terms of compelxity and is not the most efficient algorithm

Bellman Ford algo worst time complexity => O(N^2)
Dijkstra algo on the other hand is a little bit faster and more efficient with the downside it can't accomodate for --ve weights between nodes

*/