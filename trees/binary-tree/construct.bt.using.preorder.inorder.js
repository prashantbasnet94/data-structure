/*

Logic:
    1. First element of preorder is going to be root elememt
    2. Find the index of root in inorder as mid
        a. Everything left to mid => left children
        b. Everything right to mid => right children




*/
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
function buildTree(preorder, inorder) {
    if (!preorder.length || !inorder.length) return
    const
        root = TreeNode(preorder[0]),
        mid = inorder.indexOf(preorder[0])

    root.left = buildTree(
        preorder.slice(1, mid + 1),
        //everything to the left of the mid is left children
        inorder.slice(0, mid)
    )

    root.right = buildTree(
        preorder.slice(mid + 1),
        //everything to the right of the mid is right children
        inorder.slice(mid + 1)
    )

    return root
}