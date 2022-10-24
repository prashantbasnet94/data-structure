/*
https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12369748#overview

Graphs:
One of the most useful and used data strucutre in CS when it comes to modeling real life.

In short, a graph is simply a set of values that are related in a pairwise fashion

Just like a little network
There is connection to different node.

In a graph each item is called node or vertex. Nodes are then connected with edges

            (6)
                \----------------edges
                 (4) - (5)
                 /          \
                (3)        (1)
                 \          /
                  \       (2)
                    (6) /
                        
  Graphs are great data structers to model real world realtionships representing links, graphs ideal cases where you're working with things that connect to
  other things. Kind of like how interent works for ex: 
  1. We can use graph to represent may be friendship or family trees
  2. We can use graphs to represent networks 
  3. We can use it to represents roads one city to another and the roads that connect it
  4. Facebook uses it for social network
  5. Amazon uses it for recommendation engine
  5. Google maps uses graphs for determining to where you wanna go?


  There are many types of graphs. But there are certain characteristics that allow us to describe graphs

  1. Directed Graphs
        One way street
        Twitter is more directed, people can follow me, but i don't automatically follow them
  
  
  2. Undirected Graphs
        Highway between two cities
        Facebook has undirected graph in friendship, i am friend with a friend, he is also connected with me

  That means in undirected graph you can go back and forth between nodes, in directed graphs you can only go in one direction 

  Another way to describe graphs:
  Not just the node but also edges can carry information or value




  3. Weighted Graphs
  Going on a trip? And trying to figure out the most efficient way to visit sites that intrest you.
  Google maps will use weighted graph to decide what is the shortest path for you to get there
  And these sort of graphs are used a lot in calculating optimal paths.


  4. Unweighted Graphs


  5. Cyclic Graphs
    When you have a vertices conntected in a circular fashion, it's called cycle. 
    Really common in weighted graphs, such as google maps, becuase there is a way to get back

  6. Acyclic Graph
    Where you cannot go in circular fashion


    Directed Acyclic Graph => DAG => Iota project uses it
    A graph that goes in one direction



    Building a graph:
    ----------------

    Graph are build on the top of other data strucutures
    DAG uses tree and linked list

    How to start building graph?
    Three ways we can think about it:

              (2) ---------(0)
            /    \
           /      \
         (1) ------(3)    
    Let we want to build this graph. How would we go about doing this?
          



1. Edge list: 
        Simply shows the connection i.e which node is connected to which



    edge list
    0 and 2 as first item => 0 is connected to 2 and 2 is connected to 0
    [2,3] => 2 <=>3 (2 and 3 is connected)
    [2,1] => 2 <=>1 (2 and 1 is connected)
    [1,3] => 1 <=>3 (1 and 3 is connected)

*/
const graph = [[0,2],[2,3],[2,1],[1,3]]


/*
2. Adjacent List:
            index => the node 
            value => node's neighbour || index node is connected to these node
            what does it mean?
            in here we can use array, object, linkedlist

    Index of 0, we consider node 0. Node 0 is connected to 2
    Thus, graph = [[2]]

    index: 1, i.e node 1, Node 1 is connected to [2,3]
    graph = [[2],[2,3]]

    index:2, i.e Node 2 is connected to [0,1,3]
    graph = [[2],[2,3],[0,1,3]]

    index: 3, i.e Node 3 is connect to [1,2]
    graph = [[2],[2,3],[0,1,3],[1,2]]

    Similarly, can be done with obj as well
*/
const 
    graph2 = {},
    graph3 = [[2],[2,3], [0,1,3],[1,2]]


/*

              (2) ---------(0)
            /    \
           /      \
         (1) ------(3)   

3. Adjacent Matrix:
    This matrix is simply goint to have, 0 and 1 indicating whether the node X has a connection to Y.
    0 => No, 1 => Yes

    If you have a weighted graphs you can add weight here, instead of 0 and 1
*/
 const graph4 = [
    [0, 0, 1, 0], // index of 0, i.e Node 0 has connection 2
    [0, 0, 1, 1], // index of 1, i.ed Node 1 is connected top [2,3]
    [1, 1, 0, 1], // index of 2, i.ed Node 2 is connected top [0,1,3]
    [0, 1, 1, 0]  // index of 3, i.ed Node 3 is connected top [1,2]
]
// instead of array we can use object
const graph5 = {
    0: [0, 0, 1, 0], // index of 0, i.e Node 0 has connection 2
    1: [0, 0, 1, 1], // index of 1, i.ed Node 1 is connected top [2,3]
    2: [1, 1, 0, 1], // index of 2, i.ed Node 2 is connected top [0,1,3]
    3: [0, 1, 1, 0]  // index of 3, i.ed Node 3 is connected top [1,2]
}

/*
Creating undirected, unweighted graph 

        (3) ----- (4) ----------(5)
         |         |            |
         |         |            |
         |         |            |  
        (1)-------(2)          (6) 
          \      /
           \    /
            \  /
             (0)

Graphs looks overly complex but are actually extremely simple
looks intimidating at first but once you understand they are really simple
 */
class Graph{
  constructor(){
    // total vertices we have in our graph
    this.totalNodes = 0
    /* 
    why use {} vs []
      if we start placing or removing items out of order
      array is expensive than obj, array shifting and unshifting is expensive
      with obj , we can quickly find items and see their connections.

      addVertex => adds nodes 
      addEdge => adds connection of one node to another
     */
    this.adjacentList = {
      // here 0 is connected to 1 &2
      // 0:[1,2]
    }

  }
  addVertex(node){
    this.totalNodes += this.totalNodes
    this.adjacentList[node] = []
  }
  addEdge(node1, node2){
    // undirected graph, both nodes point to each other

    // since undirected we make theconneciton both way
    this.adjacentList[node1].push(node2)
    this.adjacentList[node2].push(node1)
  }
}

module.exports = Graph

let myGraph = new Graph()

myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');
// console.log(myGraph.adjacentList)

/*
https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12372616#overview

Pros and Cons of Graph:
When it comes to perfomance, it get's little complicated as there are many types of graphs

1. Graphs are really useful when it comes to relationship, simply  indispensable because some data just needs to be in graph form, no other way around it
2. There are alog around graphs, that allows us to perform operation such as finding shortest path or traversing a graph

When it comes to graph, because they can get complicated scaling is pretty hard, you need a big resources and engineering power to make sure that you build
graph data structure that scale well.

But luckily for us we never have to implement our own graph in production, or at least for 99% times

Tools like neo4j, popular db for building really fast graphs databases, 
most of the time we use this kind of tools like this to build complex structures to contain our data

*/