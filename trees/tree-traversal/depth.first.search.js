/*


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



Depth First Search:
-------------------- Read comparision on BFS note.
On the other hand, DFS is opposite. If you know that the node is likely at the lower level of a tree, perhaps DPS is better
DPS is really good at asking the quesition: Does the path exist to a certain node from a sources node to a target node

1. Uses less momory
2. Does path exist?

Downside:
1. Can get slow if the tree/graph is really really deep




Three ways to do Depth First Search:
        101
      33     105     




             9
        4         20
    1       6   15      170

1. Inorder: GO DOWN ONE DIRECTION WHEN IT HITS NULL COMEBACK AND GRAB IT
    W
    case1 : [33,101,105]
    case2 : [1,4,6,9,15,20,170] 

    1. Starts from parent node, then go left i.e 4, go left i.e 1, go left i.e null , then comeback and grab 1 i.e list = [1] then go right
    2. Since nothing to go right then comeback to 4, grab it i.e list = [1, 4], then go right i.e 6, then go left there's nothing,
         then go to the right there's nothing, then comeback to 6 and grab it i.e [1, 4, 6]
    3. Comeback to 4, then comeback to 9, grab it i.e list = [1, 4, 6, 9]
    4. Go to the right i.e 20, then go to the left i.e 15 then go to the left i.e null then comeback at 15 and grab it i.e list = [1, 4, 6, 9, 15], 
        go to the left there's nothing, go to the right there's nothing then comeback to 20 and grab it i.e [1, 4, 6, 9, 15, 20]
    5. The go to the right i.e from 20 to 170, then go left i.e null, then go right i.e null then comeback and insert 170 i.e [1, 4, 6, 9, 15, 20, 170]

       
    tips:
    Go left as far as we can before we finally take the node, 

2. PreOrder: GRAB AS YOU GO
    Starts from parent node, grap the parent node, then grab the child node from left to  right
    a. Start from parrent node i.e 9 grab it, go the left grab it i.e [9,4], then go to the left then grab it i.e [9,4,1],
    b. Since nothing to go to left or right, comeback to 4 then go right and grab it i.e [9,4,1, 6]
    c. Since nothing to go left or right, comeback to 4, comeback to 9, then go right and grab it i.e [9,4,1, 6,20]
    d. Go to the left grab it. i.e [9,4,1, 6,20, 15], then go to the left null , then go to the right i.e null then comeback to 15,
      then comeback to 20, then go to the right i.e 170 grab it i.e [9,4,1, 6,20, 170]

    tips:
        As we go through we grab the value

    Useful for recreating a tree
    case1: [101,33,105]    
    case2: [9,4,1,6,20,15,170]

    NRL
    preorder takes the node value as we go through

            101
      33         105     


             9
        4         20
    1       6   15      170
    
3. PostOrder: GO DOWN BOTH DIRECTION AND WHEN BOTH DIRECTION HITS NULL COMEBACK AND GRAB IT
    Start form the parent node, go to the left as far as we can 
    1. Start from the parent node i.e 9, go to the left i.e 4, go to the left i.e 1, go to the left i.e null , the comback and go to the right i.e null
        comeback and grab 1 i.e list = [1]
    2. Then comback to 4, go the right i.e 6, go to the left i.e null and then comeback and go to the right i.e null, then comeback and grab that 6 i.e list = [1, 6]
    3. Then comback to 4, then grab it i.e list = [1,6,4]
    4. Then comeback to 9 and go the right i.e 20, now to the left, i.e 15 and go to the left i.e null , then comeback to 15 and go to right i.e null, comeback to 15
        and grab it i.e list =  [1,6,4,15]
    5. The comeback to 20, go to the right i.e 170. go to left i.e null and comeback to 170, go to right i.e null. 
    6. Since righit is also null then comeback to 170, grab it i.e  [1,6,4,15, 170]
    7. The comeback to 20, grab it i.e list = [1,6,4,15, 170,20]
    8. The comeback to 9, grab it i.e list = [1,6,4,15, 170,20,9]



    Going all the way down, starts from left to right and then parent
    case1:[33, 105, 101]
    case2: [1, 6 , 4, 15 , 170 , 20, 9]

    tips:
     We are going to go as far right and as far left as we can before we finally take the node value

                    1
                  /   \      
                2       3
             /    \       \
            4      5        6
             \
              7
            /
           8
1.  PreOrder: NRL (GRAB AS YOU GO)
    --------------
    Start from the root i.e 1, and get 1 i.e list = [1].
    Then go right and get 3, i.e list = [1,3]
    then go right and get 6, i.e list = [1,3,6]
    the go right i.e null then comeback and go left i.e null, again comeback to 3, go left i.e null, comeback to 1, and go left i.e 2
    get that node to the list i.e list = [1,3,6, 2]
    then still prioritize going right, so go to 5, get that 5 i.e  list = [1,3,6, 2, 5]
    then go to right i.e null and comeback and explore to left i.e null, then comeback to 5, then comeback to 2, then go to left i.e 4,
    take that 4 to the list i.e list = [1,3,6, 2, 5, 4]

    then go right i.e 7, take 7, i.e list = [1,3,6, 2, 5, 4, 7]
    then go right i.e null and comeback and then go to 8, take that 8 to the list = [1,3,6, 2, 5, 4, 7,8]



2. InOrder: RNL (GO DOWN ONE DIRECTION AND WHEN HIT NULL COMEBACK AND GRAB THAT PARENT NODE)
    ------------
     Go right as far as we can before we finally take the node, 
     start from the root i.e 1, go right go right go right when hits the null, then come back and take 6 then go left ,
     there's nothing, come back take 3. i.e list = [6,3] then go left from 3, there is nothing then come back to 3 and then comeback to 1,
     then take 1 i.e list = [6,3,1].

     Then go left i.e 2, go right i.e 5 and then go right 5, then go right i.e null
     come back take 5 i.e list = [6,3,1,5]
     then come back and take 2, i.e list = [6,3,1,5,2]
     then go left i.e 4, then go right i.e 7, then go right i.e null, then come back take 7 i.e list = [6,3,1,5,2,7]
     then go left i.e 8, then go right i.e null, then comeback to 8, i.e list = [6,3,1,5,2,7,8]
     then go left i.e null, then comeback, then comeback i.e 7, then comback i.e 4, take 4 i.e list = [6,3,1,5,2,7,8, 4]

     Then go left 

                    1
                  /   \      
                2       3
             /    \       \
            4      5        6
             \
              7
            /
           8
           
3.  PostOrder: RLN (GO DOWN BOTH DIRECTION AND ONLY IF BOTH DIRECTION ARE NULL THEN GRAB THAT PARENT NODE)
    --------------
    We are going to go as far right and as far left as we can before we finally take the node value
    Start form the root i.e 1, we are going to go right, go right, go right i.e null there is nothing 
    comeback and go left there's nothing, then comeback and take the 6, i.e list = [6]

    comeback i.e 3, then go left i.e null, there's nothing then comeback to 3, and then take it i.e list =[6,3]

    then comeback i.e 1, then go left, then go right i.e 5, then go right i.e null, then comeback i.e 5 and then go left i.e null, then comeback to 5,
    then take 5 i.e list = [6,3,5]

    then comeback i.e 2, then go left i.e 4, then go right i.e 7, then go right i.e null, then comeback to 7 then go left i.e 8, then go right i.e null, then
    comeback  to 8, then go left i.e null, then comeback to 8 , then take 8 i.e list = [6,3,5,8].

    Then comback to 7, then take it i.e list = [6,3,5,8,7]
    
    then comback to 4, go left i.e null, then take 4 i.e list = [6,3,5,8,7,4]

    then comeback to 2, and take 2, i.e list  [6,3,5,8,7,4, 2]
    finally comeback and take 1, i.e list = [6,3,5,8,7,4, 2, 1]












Most of the time depth first search is implmented with Recursion:
DFS inOrder
DFS preOrder
DFS postOrder
*/


/*

             9
        4         20
    1       6   15      170

Easy:
1. Go all the way to the left as long as left exist
2. If no futher left, add that node to the list
3. Go all the way to the right as long as right exist
4. if no left and right node exist at the current node, Return the list

Recursion Behind The Scene:

             9
        4         20
    1       6   15      170


traverseInOrder(9, []) => {
    traverseInOrder(4, []) => {
        traverseInOrder(1, []) => [1]
        [1].push(4)
        // go to right
        traverseInOrder(6, [1, 4]) => [1, 4, 6]
    }
    [1, 4, 6].push(9)
    traverseInOrder(20, [1, 4, 6, 9]) => {
        traverseInOrder(15, [1, 4, 6, 9])=> [1, 4, 6, 9, 15]
        [1, 4, 6, 9, 15].push(20)
        traverseInOrder(170, [1, 4, 6, 9, 15, 20])
    }
}


             9
        4         20
    1       6   15      170

More explanation:
-----------------
#check for left node  @ node 9
left node exist running func for 4
    #check for left node  @ node 4
    left node exist running func for 1  
        #check for left node  @ node 1
        since there is no left @ Node { left: null, right: null, value: 1 }  pushing current value 1, i.e list = [1]
        #check for right node
        end reached => list [ 1 ]
    resolved recursive func @  4 i.e traverseInOrder(1, [])  =>  [ 1 ]
    ----------- if left go to left is done  @ node 4 ---------------------
    since there is no left @ Node {left: ...,right: ...,value: 4}  pushing current value 4 i.e list = [1, 4]
    #check for right node
        right node exist running func for Node { left: null, right: null, value: 6 }
        #check for left node  @ node 6
        since there is no left @ Node { left: null, right: null, value: 6 }  pushing current value 6 i.e list = [1, 4, 6]
        #check for right node
        end reached => list [ 1, 4, 6 ]
 ----------- if left go to left is done @ node 9 ---------------------
resolved recursive func @  9  => i.e traverseInOrder(4, []) =>  [ 1, 4, 6 ]
 ########=============      All left childs of the root is searched by this point ================################
since there is no left @ Node {left: ..., right: ..., value: 9}  pushing current value 9  i.e list = [1, 4, 6, 9]
#check for right node
right node exist running func for Node {left:...,right: ..., value: 20}
    #check for left node  @ node 20
    left node exist running func for 15
        #check for left node  @ node 15
        since there is no left @ Node { left: null, right: null, value: 15 }  pushing current value 15 i.e list = [1, 4, 6, 9, 15]
        #check for right node
        end reached => list [ 1, 4, 6, 9, 15 ]
        ----------- if left go to left is done @ node 20 ---------------------
    resolved recursive func @  20,  i.e traverseInOrder(15, [1,4,6,9])  =>  [ 1, 4, 6, 9, 15 ]
    since there is no left @ Node {left: ...,right: ...,value: 20}  pushing current value i.e list = [1, 4, 6, 9, 15, 20]
    #check for right node
    right node exist running func for Node { left: null, right: null, value: 170 },  i.e traverseInOrder(170, [1,4,6,9, 15, 20]) 
        #check for left node  @ node 170
        since there is no left @ Node { left: null, right: null, value: 170 }  pushing current value i.e list = [1, 4, 6, 9, 15, 20, 170]
        #check for right node
        end reached => list [ 1,  4,   6, 9, 15, 20, 170]

             9
        4         20
    1       6   15      170

    take 9, go to 4, go to 1, since no left child exist @ 1, list.push(1), check if right node exist @ 1, since no right child exist list = [1]
    @ node 4
    if(node.left){
        traverseInOrder list becomes [1]
    }
    list.push(4)    //list = [1,4]

    now see if right child exist, @4 , 6 is the right child. we call traverseInOrder(6,[1, 4])
    @ node 6
    there is no left child 
    list.push(6)
    there is no right child
    return [1,4,6]

*/


let BinarySearchTree = require('../binary-tree/binary.search.tree')


BinarySearchTree.prototype.DFSInOrder = function () {
    return traverseInOrder(this.root, [])
}

// preorder and postOrder are very simialar
BinarySearchTree.prototype.DFSPreOrder = function () {
    return traversePreOrder(this.root, [])
}

BinarySearchTree.prototype.DFSPostOrder = function () {
    return traversePostOrder(this.root, [])
}

function traverseInOrder(node, list) {
    if (node.left) {
        traverseInOrder(node.left, list) //  recursive case
    }
    list.push(node.value)
    if (node.right) {
        traverseInOrder(node.right, list) //  recursive case
    }
    return list //base case
}
// with pre-order we want to push at the very begining
function traversePreOrder (node, list){
    list.push(node.value)

    if(node.left){
        traversePreOrder(node.left, list)
    }
    if(node.right){
        traversePreOrder(node.right, list)
    }
    return list
}

function traversePostOrder (node, list){
    if(node.left){
        traversePostOrder(node.left, list)
    }
    if(node.right){
        traversePostOrder(node.right, list)
    }
    list.push(node.value)
    return list
}

let tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)


console.log(tree.DFSInOrder())
console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())



