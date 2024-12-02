/*
    Binary Tree:
     Either has 0, 1 or 2 node.

     Types of binary tree:

     1. Complete Binary Tree
        Every level is completely filled except the last level and in the last level leaf nodes are pushed as left as possible
        Either has 0 or 2 children nodes    

                A

                A
              /     \
            B         C


       A
    /     \
   B       C
  / \     / \
 D   E   F   G
/ \
H I






     2. Full Binary Tree:
        Is something that has either 0 or 2 children in each node

               A


              A
             / \
            B   C


                   A
                /     \
            B       C
            / \     / \
            D   E   F   G
            / \
           H   I

     3. Full and Complete Binary Tree   

        satisfies the full and complete binary tree defination 


                A
            /      \
            B        C
        /     \
        D       E      


     4. Pefect Binary Tree:

        All nodes have 2 children and all the leaf nodes (i.e., nodes that do not have any children) are located at the same level.

          A
       /     \
      B       C
     / \     / \
    D   E   F   G


    ================    when a tree is perfect binary tree  ====================

    1. Moving down the tree at each new height the leaf nodes double
    2. Total number of nodes at the bottom level = total number of nodes in all the upper section + 1
    3. Half of the nodes are at the bottom i.e leaf nodes are half of the nodes of the tree
*/




/* 
    *************************        FINDING MAX DEPTH OF BINARY TREE   || MAX HEIGHT         ****************************
    Maximum depth is the number of nodes along the longest path from the root node to the furthest leaf node

    From the question we can conclude:

        1. Max of the left branch root vs Max of the right branch from the root + 1 i.e height of the root is 1

*/


function maxDepthOfTree(node,) {
    if (!node) return 0
    return Math.max(maxDepthOfTree(node.left), maxDepthOfTree(node.right)) + 1
}

function bfsHeightOfATree(head) {

    if (!head) return 0
    let
        queue = [],
        height = 0

    queue.push(head)
    while (queue.length > 0) {

        const size = queue.length
        // we are on a new level or different height
        while (height >= size) {
            const currentNode = queue.shift()
            currentNode.left && queue.push(currentNode.left)
            currentNode.right && queue.push(currentNode.right)
        }
        height++
    }
    return height
}

/*
   ****************    Max sum path *********************

           A 
       B       C
   D     E  F      G


   leftTree =  B + D + E
   rightTree = C + F + G
   leftInclusive =  A + leftTree
   rightInclusive = A + rightTree

   return Math.max(node.value, leftTree, rightTree, leftInclusive, rightInclusive)
*/


function maxSum(root) {
    let maxSum = -Infinity
    function dfs(root) {
        if (!root) return null

        let
            leftTree = dfs(root.left),
            rightTree = dfs(root.right),
            leftInclusive = root.value + leftTree,
            rightInclusive = root.value + rightTree
            allSum = root.value + leftTree + rightTree
            maxSum = Math.max(maxSum, allSum, node.value, leftInclusive, rightInclusive)

            //but at any node, we will only return either that Math.max(node, node + left, node + right)
            return Math.max(root.value,  leftInclusive, rightInclusive)
    }

    dfs(root)
    return maxSum
}


function maxSumPath(root){
    /*

        @ any giving time max sum path in a tree can te

        1. Node.value when left and right  path are both negative
        2. Node.value + left subtree when right sub tree sum is negative
        3. Node.value + right subtree when left sub tree sum is negative
        4. Node.value + left subtreee + right subtree when all value is positive


        Challenge is to find how to calculate left substree from a given node or a right subtree sum from a given node


        sum of left subtree || right subtree can be calculated using dfs how?

        @ any left traveral you have to return max sum at that point

    */


        let maxSum = -Infinity

        function dfs(node){
            const
             leftSubTree = dfs(node.left),
             rightSubTree = dfs(node.right),
             leftInclusive = node.value + leftSubTree
             rightInclusive = node.value + rightSubTree,
             allSum = node.value + leftSubTree + rightSubTree

             maxSum = Math.max(maxSum, node.value, leftInclusive, rightInclusive)

             return Math.max(node.value, leftInclusive, rightInclusive)
        }

        dfs(root)
        
        return maxSum
}



function isSameTree(pTreeNode, qTreeNode){
    /*
        grab as you go
        base cases
        1. if both nodes are null, it's same return true
        2. if one nodes exist and other don't return false
        3. if at anypoint the nodes are not equal return false
    */
   if(!pTreeNode && !qTreeNode) return true
   if(!pTreeNode || !qTreeNode) return false
   if(pTreeNode.value !== qTreeNode.value) return false


    return isSameTree(pTreeNode.left, qTreeNode.left) && isSameTree(pTreeNode.right, qTreeNode.right)
}