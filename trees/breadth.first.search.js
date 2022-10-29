
/*
    Traversal:
    Travesal or search is used interchangably

    Times when we want to do operation in the node. We might want to add a color property to a node,
    perhaps if we have a user node, we wannt to add age property to all our user that are in the tree structure

    Can you check if our binary search tree, we enter in our db is correct and valid, that our left item is always lower than right items? 

    in order for us to check that, we have touch every single node, but will we go about doing this?

    Traveersal => visiting every node, and that is O(N) linear type

    How do we go about doing this? in ds like tree or graph

    Tree or graph treversal , our two options are exact same:

    1. Breadth First Search 
    2. Depth First Search

    sometimes it's also called treverasl instead of search

    Big o = o(n)


    Let's reveiw, why we don't store everything in list, which are simpler to understand!
    The main benifit why we don't put complex data into just list i.e arrays that are sorted is that we get 
    O(N) for search

    what about hash table?
    remeber hash table are not ordered

    At the end of the day, when you represent data with different DS based on needs. Trees and graphs work really well for lot of cases.
    1. When we search for things we get the benefits
    2. Insert or delete items, we have better performance than array
    3. We also maintain the order otherwise not possible with hash table

 Trees and graphs are used alot when we want to search nodes or visit every node. It represets alot of data that models the real world

 Let's explore how BFS and DFS works!
 
*/


/*
    Breadth first search/ Travesal
    ----------------------------
    Start with the root node, move left to right across the second level, then move left to right across the third level and keep going left to right level by level.
    Keep going until you find the node you are looking for or tree ends

                            1
                    2               3
            4           5      6            7
        8       9   10     11

    BFS uses additional uses additional memory to keep track of child node of all the nodes on a given level.
    This means that we need to track every node and it's children in order.

    Implications?


    Depth first search/ Travesal
    ----------------------------
    The search follows one branch of the tree down as many levels as possible until the target node is found or the end is reached
    When the search cannot go any further it continues at the nearset ancestor with an unexplored child

                       1
                2           5
            3       4   6       7

    DPS has a lower momory requirement than BFS, cause it's not necessary to store all the childs pointers at each level
    
    The idea with Depth First Search is that we want to go deep as possible on tree or graph usally starting from the left side and then start going to the right
    until travesal is done. 
    As the name suggest we go deep first

                                         1           
                                2        5       9     
                            3         6      8        10
                        4       7
DFS is like walking through the maze go far as we can and when we hit a dead end, you turn back around and go the next point where you can make left or right turn
until you get to the end of maze
        

Eg:
                   9
            4           20
        1       6   15      170

BFS: [9,4,20,1,6,15,170]
DFS: [9,4,1,6,20,15,170]


BFS:
Water flooding 
        -
       ----
    ---------
-------------------

DFS:
         |
       |   | 
       |   |
      | | | | 

What is advange of one over the other?
What type of travesal to do?
when to use one over the other?

Time Complexity:
DFS and BFS visit all nodes i.e O(N)
When we are trying to traverse tree or graph. we are really trying to walk through the tree without ever repeating ourselves.
The order is the thing that matters when it comes to BFS or DFS

Breadth First Search:
--------------------
1. Very good for finding the shortest path between the starting point and any other reachable node
    because we always start off with the root node and search the closest node first and then further and further and further
2. We always start off with root node


Downside:
1. Requires more memory than Depth First Search

Rule of thumb:

if you have additional information on the location of the target node and you know that node is likely in the upper level of a tree, then BFS is better
As it searches the closed node first

Depth First Search:
--------------------
On the other hand, DFS is opposite. If you know that the node is likely at the lower level of a tree, perhaps DPS is better
DPS is really good at asking the quesition: Does the path exist to a certain node from a sources node to a target node

1. Uses less momory
2. Does path exist?

Downside:
1. Can get slow if the tree/graph is really really deep


Question to answer:

1. If you know a solution is not far from the root of the tree?
BFS

2. If the tree is very deep and solutions are rare
BFS > DFS
DFS take a really long time with very deep tree. Becuase the tree is really deep it's goining to go one by one really really down below.
And since solutions are rare it most likely it's going to repeat that process over and over. DFS uses recursive fucntion

3. IF the tree is very wide?
DFS
Becuase BFS needs too much memory. As it has to keep tracks of nodes in current level 

4. If solutions are frequest but the located deep in the tree?
DFS

5. Determinig whearter a path exists between two nodes?
DFS, built for the same reason

6. Finding the shortest path?
BFS

7. If the tree is very deep and solutions are frequent?
BFS

8. If the tree is very wide and solutions are rare?
DFS

insights:
Very wide => DFS => BFS needs to much memory to keep track of nodes
Very Deep => BFS => DFS can be really slow
*/


/*
    Breadth First Search:
    Memory concern:
    From the top , to the left to the right, and visit all the node in that level.
    

            9
    4           20
1       6   34      45

when it visits 6 and 12, then it going to back to 1,4, and 34, 45
So as it goes through level 2, we need to keep a reference to all the children nodes of every node we visit
So that we can go back to them and visit their children

*/


let BinarySearchTree = require('./binary.search.tree')
/*
             9
        4         20
    1       6   15      170

    1st iteration
    ------------------
    queue = 9,
    as it passes through 4 and 20,

    does  9 has left child? 
    adds 4 to the queue

    does 9 has right child?
    adds 20 to the queue

    now that the queue has two items, as it passes through 4 and 20. i.e queue = [4,20]

   2nd iteration
    ------------------
    currentNode = queue.shift => 4
    push 4 to the list

    does 4 has a left child?
    add 1 to the queue

    does 4 has right child?
    adds 6 to the queue


    3rd iteration
    ------------------
    currentNode = queue.shift = 20
    push 20 in the list

    does 20 has left child?
    adds 14 in the queue

    does 20 has right child?
    adds 170 in the queue

    4th iteration
    ------------------
    currNode = 1,
    adds 1 to the result list

    it grabs 4 and push 4 to the list
    and then it going to ask if 4 has left child? yes it does, then adds it to the queue
    and then does 4 has right child? adds 6 to the queue again



*/
BinarySearchTree.prototype.breadthfirstsearch = function(){
    let 
        currentNode = this.root,
        list = [],
        queue = []
    queue.push(currentNode)
    while(queue.length > 0){
        //removes root node from the queue
        currentNode = queue.shift()
        // push the value of root node
        list.push(currentNode.value)

        // if left node exist then push that left Node
        if(currentNode.left){
            queue.push(currentNode.left)
        }
        // if right node exist then push that right node as well
        if(currentNode.right){
            queue.push(currentNode.right)
        }
    }
    return list
}
const tree = new BinarySearchTree()

tree.insert(9)
tree.insert(12) 
tree.insert(6) 
tree.insert(1) 
console.log(tree.root)
console.log(tree.breadthfirstsearch())

