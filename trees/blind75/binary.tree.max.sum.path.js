/*
    Binary Tree Max Sum Path:


                    1
                2       3

                = 6
                = leftSubTree + node.value + rightSubTree


                -10
            9       20
                  15    7
                  
                  
                = 15 + 20 + 7 = 42
                =  rightSubTree


            -10
        20      -5
         = 20
         = leftSubTree


    logic:
        1. calculate leftSubTree
        2. calculate rightSubTree
        3. calculate node.value + leftSubTree i.e leftInclusiveNode
        4. calculate node.value + rightSubTree i.e rightInclusiveNode
        



*/

function maxPathSum(node){
    let max = -Infinity

function dfs(node){
    if(!node){
        return 0
    }
    const
     leftSubTree = dfs(node.left),
     rightSubTree = dfs(node.right),
     allSum = node.val + leftSubTree + rightSubTree,
     leftInclusive = node.val + leftSubTree,
     rightInclusive = node.val + rightSubTree

     // max is either going to be left + node + right || (left + node) || (node + right) || node
     max = Math.max(max, node.val, allSum, leftInclusive, rightInclusive)

     //at any give node max can be either the node val || node + left || node + right
     return Math.max(node.val, leftInclusive, rightInclusive)
}

     dfs(node)
     return max
}