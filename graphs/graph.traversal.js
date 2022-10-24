let Graph = require('./index.js'),
graph = new Graph
console.log(graph.adjacentList)


/*
https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12431202#overview

Graph Travesal is same as tree traversal. Tree are simply a type of graph.
Using the same technique, instead of using left and right properties, perhaps there is 10 children. 
We can do the same thing using DFS and BFS

This is really powerful, graphs are used to model real life models such as recommednation engine in amazon.
What types of items are perhaps related, or closet realted to the last book that we bought.
THey might use BFS to determine closest realtion

Or on Facebook what type of friend i should be recommended. or closest friend on facebook  or closest connection in Linkdn is given by BFS

vs 

DFS:
Good to see if something exist.

*/