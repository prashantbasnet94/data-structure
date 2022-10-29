/*

So we learnt about sorting and understand how recursion helps us better understand how to write sorting algo
Much of our sorting has revolved around array

There are couple other sorts that exist primarily for other data structure. Let's explore these data structure

Recusrion is very core part of not only all the question that revolve around thease new data structure that we have yet to explore,
but recursion is also very central to the majority of algorithms in these data strucutres

One of the Data Structure we are going to explore is Binary Tree

There is difference between binary tree and binary search tree, but as far as the question go it only adds a little bit of complexity 
about the difference between the two. 

The core of these two binary tree data structure is deeply entrenched in Recursion


Binary Tree:

1. Each node can only have either 0, 1 or 2 nodes, each child can only have one parent
2. Each node represents a certain states


Perfect Binary Tree: (Really efficient and desirable)
-----------------------
        O
    |       |
    O       O
|     |  |      |
O     O  O      O

1. No gaps in the tree
2. Has everything filled in, all the leaf(Bottom layer) node are full
3. There is no node that has 1 child, either has 0 childern or 2


When Binary trees are perfect, they have 2 intresting props
1. Number of total nodes in each level double as we move down the tree
2. Number of nodes at the last/bottom level is equal to sum of number of nodes on all the other levels + 1
    leaf nodes = all the nodes above it + 1  
3. ---> Half of our nodes are at the bottom <----

By organizing perfect binary tree we can have some efficieny


Full Binary Tree:
-----------------
        O
      |   |
      O   O
   |   |
   O   O
      |  |
      O  O

1. A node has either 0, 2 children, but never 1 child


*/



function BinaryTreeNode (value){
    this.value = value
    this.left = null
    this.right = null
}

/*
    Because of the way binary tree are structured, there is certain way for us to calculate the number of nodes they have
    for Eg, 
    Level  0 - root-node : 2^level => 2^0 = 1
           1 : 2^1 = 2
           2 : 2^2 = 4
           3 : 3^2 = 8
           
    # of nodes = 2^h -1 
    log nodes = steps

    log n simply means, based on the height the max number of decision we are going to take is log(N), that means

    is this the node we are looking for? either go left or right
    we have max of 3 steps in tree to find a node, than in array visiting every single node

    Log N => looking up phone book => using divide and conquer => only explore subset of each section

    Our search is optimized using O(logN)


    With Binary Trees, there are traverses and there are search types:

    Search Types:
    Breadth First Search
    Depth First Search

    Traverses:
    In order
    Pre Order
    Post order

These are the tools that will best help you implment your solution when it comes to navigating through binary tree

Question:
1. Given a binary tree, find it's maximum depth.
    Maximum depth is the number of nodes along the longest path from the root node to the furthest leaf node
  

 Verify our constarint?

1. What do we return if the tree is empty?
    return 0
2. Tree with only root node?
    return 1


 Write out somet test cases:

1.              (X)
               /   \
            (X)    (X)
                  /   \    
                (X)   (X)  
                      /  \
                    (X)  (X)  
                    /
                  (X)
            return 5
     Here, our answer is 5, number of nodes in the longest path       

2. null
    return 0

3.   (X)
    /   \
  null  null
  return 1

4. Worst Case:
        (X)
       /   \
      null   (X)
            /   \
           null  (X)
                /    \
             null     (X)
                     /   \
                  null   null
            retun 5
In order to traverse down any of the node, you are going to follow along the path.
This is significant because when it comes to your space and time complexity, it's always going to be O(N)

             9
        4         20
    1       6   15      170
*/  

let 
Tree = require('./binary.search.tree'),
tree = new Tree()

tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

 
/*
function inorder(tree, maxDepth = 1){
    if(tree.left){  
        inorder(tree.left, maxDepth++)
    }
    if(tree.right){
        inorder(tree.right, maxDepth++)
    }
    return maxDepth
}


function findMaxDepth(tree){
        if(!tree){
            return 0
        }
        let maxDepth = 1
        if(tree.left === null && tree.right === null){
            return maxDepth
        }
        return inorder(tree.root, [], 1)
}
console.log(findMaxDepth(tree))

}*/
// --------- FIND MAX DEPTH ---------------
function myMaxDepth(tree, maxDepth = 1){
    if(!tree){
        return maxDepth
    }
    maxDepth++
    return Math.max(myMaxDepth(tree.left,maxDepth), myMaxDepth(tree.right, maxDepth))
}

function findMaxDepth2(tree){
    if(!tree){
        return 0
    }
    if(tree.left === null && tree.right === null){
        return 1
    }
    return myMaxDepth(tree.root, 0)
}

console.log(findMaxDepth2(tree))
