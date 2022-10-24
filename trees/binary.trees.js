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

*/