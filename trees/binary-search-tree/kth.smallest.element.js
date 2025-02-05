function KthSmallestElement(root, k) {
    let
        count = 0,
        result
    function inOrder(node) {
        if (!node) return
        inOrder(node.left)
        /*
        inorder, traversal of BST visits left subtree first, then current node, and finally  the right subtree
        this way the lements in the left subtree will be counted and considered first,
        since they are smaller than the current node, before the elements in the right subtree are considered.
        */
        count++
        if (k === count) 
            result = node.val
 -=           return result
        }
        inOrder(node.right)
    }
    inOrder(root)
    return result
}