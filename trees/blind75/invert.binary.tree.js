/*
     Invert Binary Tree
        Process of swapping left and right subtrees of evey single node in the tree.
        The Goal is to transform the original binary tree into a mirror image of itself

        A                   =>              A
    B       C                           C       B


        A                                       A
    B        C              =>              C       B
D      E   F   G                         G     F E      D



        4                           4
    2       7           =>      7           2  
  1   3 6      9            9        6   3       1



// logic {
        let temp = node.left
        node.left = node.right
        node.right = node.left
}

*/

function invertBinaryTree(node){
     if(!node){
        return node
     }

     let temp = node.left
     node.left = node.right
     node.right = temp

     invertBinaryTree(node.left)
     invertBinaryTree(node.right)
}

/*

        time : O(N), as we need to touch all then nodes
        space complexity: O(H), as we need to store the stack of recurive call as the height of the tree
        worst space complexity => o(N), in case of skewed  unbalanced trere that resembles linked list
*/