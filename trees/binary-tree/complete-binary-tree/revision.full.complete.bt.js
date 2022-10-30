/*
How to count number of nodes on complete binary tree in less than O(N) || regular traversal algos.
i.e to get the answer of O(logN)

from the answer itself, it's clear that we need to get O(logN) so we use Binary Search 

Approach:

              X
        X           X
    X      X    X        X
Y     Y  Y   Y
0     1  2   3   4  5 6        7

Here's this problem can be broken down into X and Y i.e

Total Number of Nodes X + Total Number of Nodes Y

So how do we calculate that?

X => First Section
Y => Second Section


Here's we can get total number of node x if we can get the height of the tree
i.e 
    At height 0 , 2^h => 2^0 => 1 number of nodes present

    At height 1, 2 ^ 1 => 2 , 2 number ofnodes present.

    At height 2, 2^2 => 4. 4 nodes are present

    How many nodes are present above height 2?
    2^h -1 
    2^2 -1
    4-1 => 3

    Similary, At height 3, 2^h -1 i.e 2^3 -1 =>  7 total nodes are present

    so let's find out how tall or the level of tree is.

    We can find that by traversing all the way to the left, since this is a complete tree.

*/
function getTreeHeight(tree){
    let 
        currentNode = tree.root,
        height = 0
    while(currentNode.left){
        currentNode = currentNode.left
        height++
    }
    return height
}

function getTotalNodesInFirstSection(tree){
    let height = getTreeHeight(tree)
    return Math.pow(2, height) -1
}

/*
now the challege is to find the number of nodes in the second section.

Since , the complexity has to be better than O(N), we can try to create it in logN
let's use binary search here

How can i accomplish that?

In second section:

we know,
minNodes =0, maxNodes = 2^h 

              X
        X           X
    X      X    X        X
Y     Y  Y   Y
0     1  2   3   4  5 6        7




*/

function assumedNodeExist(indexToFind, height, node) {
    let left = 0, right = Math.pow(2, height) -1
        levelTraversed = 0

    while (levelTraversed < height) {
        let mid =  Math.ceil((left + right) / 2)
        // mid = 4, indexToFind =2,  4 >2 , we know we need to go left to find that 2
        if (indexToFind >= mid) {
            node = node.right
            left = mid
        } else {
            node = node.left
            right = mid - 1
        }
        levelTraversed++
    }
    return node !==null
}

function getTotalNodesInSecondSection(tree){
    let 
        height = getTreeHeight(tree),
        left = 0,
        right = Math.pow(2, height) - 1
       

    while(left<right){
         // this is the assumed right most child node so far
        let mid = Math.ceil((left+right)/2) 
         if(assumedNodeExist(mid, height, tree.root)){
            // still go right we might find some other rightmostleftnode
            left = mid 
        }else{
            // why mid -1 , becuase we check if node exist in the mid, so we can throw away everything to the right of mid inclusive
            right = mid -1
        }
    }
    return left + 1
}

function totalNodes(tree){
    return getTotalNodesInFirstSection(tree) + getTotalNodesInSecondSection(tree)
}
let 
Tree = require('../binary.search.tree'),
tree = new Tree()
/*


             9
        4         20
    1       6   15      170
 0    2   
 -------------------------------
 0    1   2 3   4  5   6  7
*/
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.insert(0)
tree.insert(2)
console.log( totalNodes(tree))