/*



    3
 1     5
 
 how to find the max path?

 1 + 3 + 5
 max sum path = left + node.val  + right
              = allsum



    3
-2      4

max sum path = 7 = node.val + rightSubTree
                = rightInclusive

    4  
1      -3

max sum path = 2
            = leftInclusive

    4
-2      -3

max sum path = node.val



*/

function maxSumPath(root){
    let maxSum = -Infinity
    function dfs(node){
        if(!node)return 0

        const 
            leftTree = dfs(node.left),
            rightTree = dfs(node.right),
            allsum = node.val + leftTree + rightTree,
            leftInclusive = node.val + leftTree,
            rightInclusive = node.val + rightTree

        /*
        max is choosen from     
            a. node.val 
            b. node.val + leftSubTree
            c. node.val + rightSubTree
            d. node.val + leftSubTree + rightSubTree

        */
        maxSum = Math.max(maxSum, allsum, node.val, leftInclusive, rightInclusive)

        // at any node, we only return the max sum
        return
    }
}