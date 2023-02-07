
/*


The Lowest Common Ancestor (LCA) of a Binary Search Tree (BST) is the lowest node in the tree that has both the given nodes as its descendants. 
To find the LCA in a BST, you can start at the root and traverse the tree. If the current node's value is greater than both the given nodes, move to the left subtree. 
If the current node's value is less than both the given nodes, move to the right subtree. If the current node's value is between the given nodes, it is the LCA.
 Repeat this process until you find the LCA or you reach a null node.



*/
function lowestCommonAncestor(root, p, q){
    if(!root)return null

    // if root val is greater than both node go left to find smaller val
    if(root.val > p.val && root.val > q.val){
        return lowestCommonAncestor(root.left, p, q)
        // if root val is smaller than both the node than go right to find bigger val
    }else if(root.val < p.val && root.val < q.val){
        return lowestCommonAncestor(root.right, p, q)
    }else return root
}