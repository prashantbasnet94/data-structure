function isSameTree(root, subTreeRoot){
    if(!root)return false
    if(isSubTree(root, subTreeRoot))return true
    return isSameTree(root.left, subTreeRoot) || isSameTree(root.right, subTreeRoot)
}

function isSubTree(a, b){
    if(!a && !b) return true
    if(!a || !b || a.val !== b.val) return false
    return isSubTree(a.left, b.left) && isSubTree(a.right, b.right)
}