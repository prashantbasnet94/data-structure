function isSubtree(root, subTreeRoot){
    if(!root)return false
    if(isSubTree(root, subTreeRoot))return true
    return isSubtree(root.left, subTreeRoot) || isSubtree(root.right, subTreeRoot)
}

function isSameTree(a, b){
    if(!a && !b) return true
    if(!a || !b || a.val !== b.val) return false
    return isSameTree(a.left, b.left) && isSameTree(a.right, b.right)
}