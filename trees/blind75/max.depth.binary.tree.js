/*

    find the max depth of the binary tree:
    A max depth is the longest route from the root of the tree to the further node

            3A
        2B        C
    1D      E   F     G   
H0 

maxDepth = 3

            A4
        B3        C
    D2          F     G   
H      I1
          J0  


Logic:

1. Go down the dfs and store the maxPath 
    i. anytime new maxPath greater than the current is found replace it with new maxPath
2. Go down left && right
    i. if no node exist return 0 from there
    ii. Add it to the upper node as height

pseudo code:

DFS - recusrive way
    recursive(maxPath = 0, node){
        // 1 => for accouting root node as well
        maxPath = 1 + Math.max(dfsPreOrder(maxPath, node.left), dfsPreOrder(maxPath, node.right))
        return maxPath
    }

BFS - level order way

            A
        B       C
    D       E F     G

 i. queue = [A]
    count = 1
    //process A out and push B and C
    level = 1

ii. queue = [ B, C]
    count = 2
    // process B, C out and insert the rest
    level = 2

iii. queue = [D, E, F, G]
    count = 4
    // after processing all four count
    levle = 3




    bfs{
        queue.push(node)
        let level = 0
        while(queue.length > 0){
            let count = queue.length

            for(i = 0; i < count; i++){
                const processingNode = queue.shift()

                processingNode.left && queue.push(processingNode.left)
                processingNode.right && queue.push(processingNode.right)

            }
            level++
        }
        return level
    }


*/

function maxDepth(node, maxDepth = 0){
    if(node){
        return 0
    }
    maxDepth = 1 + Math.max(maxDepth(node.left, maxDepth), maxDepth(node.right, maxDepth))
    return maxDepth
}

function bfsLevelOrder(node){
    if(!node){
        return 0
    }

    let 
        queue = [],
        level = 0
 
    queue.push(node)
    while(queue.length > 0){
        // for level order we need to keep track of the current count
        const count = queue.length

        for(let i = 0; i < count; i++){
            const currNode = queue.shift()
            currNode.left && queue.push(currNode.left)
            currNode.right && queue.push(currNode.right)
        }
        level++
    }
    return level
}


/*

        Analyzing BigO


        dfs way => {
            time complexity => O(N) => where dfs visit each node exactly once
            space compleixty => O(H) => function stores a stack of node that need to be processed and the stack can grow to the height of the tree
                worst case: unbalanced tree like linked list, O(N)
        }

        bfsWay => {
            time complexity => O(N)  => bfs visits each node of a tree exatly once
            space complexity => O(N) => funciton stores the queue of node that need to be processed.
                worst case: queue can store nodes on the lowest level of the tree which can  be largest, which can be n/2, hence n
        }

*/

function postOrder(node, length){
   
    if(!node){
        return 0
    }
    let leftDepth = postOrder(node.left)
    let rightDepth =  postOrder(node.right)

    return 1 + Math.max(leftDepth, rightDepth )

}

function postOrder(node){
    if(!node) return 0
    return 1 + Math.max(postOrder(node.left), postOrder(node.right))
}
function maxDepthRevised(root){
    return 1 + Math.max(postOrder(node.left), postOrder(node.right))
}

//https://unisala.com/threads/maximum-depth-of-binary-tree-blind-75-leetcode-673e70bbd112347a2a08f58d