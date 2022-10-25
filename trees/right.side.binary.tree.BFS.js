/*
    Given a binary tree, imagine you are standing to the right of the tree.
    return an array of the values of the nodes you can see ordered from top to bottom
    example:

                    1
                  /   \      
                2       3
             /    \       \
            4      5        6
             \
              7
            /
           8
           
           we can see 1, 3, 6 and 7,8

Verify constraints:

1. What if null if passed?
    return []

2.      1
      /   \
    null  null     
    return [1]


NRL => PreOrder => [1,3,6,2,5,4,7,8]
RNL => InOrder =>  [6,3,1,5,2,7,8,4]
RLN => PostOrder => [6,3,5,8,7,4,2,1]

*/
class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinaryTree {
    constructor(){
        this.root = null
    }
    insert(value){
        let node = new Node(value)
        if(!this.root){
            this.root = node
        }else{
            let currentNode = this.root

            while(currentNode){
                if(currentNode.value < value){
                    // go right
                    if(!currentNode.right){
                        currentNode.right = node
                        return node
                    }
                    currentNode = currentNode.right
                }else{
                    //go left
                    if(!currentNode.left){
                        currentNode.left = node
                        return node
                    }
                    currentNode = currentNode.left
                }
            }
        }
        return true
    }
/*
            Modification needed:
                1. Do only enter the right most child on any level
                
             9                          [9]
        4         20                    [4,20]
    1       6   15      170             [1,6,15,170]
                
*/
    observedFromRightSideBFS(tree) {
        if (!tree) {
            return []
        }
        let
            queue = [tree.root],
            list = []
        while (queue.length > 0) {
            let queuesize = queue.length,
                levelOrder = [],
                count = 0
            while (count < queuesize) {
                let currentNode = queue.shift()
                levelOrder.push(currentNode.value)
                currentNode.left && queue.push(currentNode.left)
                currentNode.right && queue.push(currentNode.right)
                count++
            }
            list.push(levelOrder.pop())
        }
        return list
    }
    observedFromRightSideDFS(){
        const result = []
        traversalPostOrderDFS(this.root, result,0)
       return result
    }
}
/*
                    1
                  /   \      
                2       3
             /    \       \
            4      5        6
             \
              7
            /
           8
           
With DFS:
    NRL => PreOrder => [1,3,6,2,5,4,7,8]
    RNL => InOrder =>  [6,3,1,5,2,7,8,4]
    RLN => PostOrder => [6,3,5,8,7,4,2,1]

    which one is closer?
    looks like NRL or preorder is closer
*/
function traversalPostOrderDFS (node, result,level){
    if(!node) return;
    if(level >= result.length){
        result.push(node.value)
    }
    if(node.right){
        traversalPostOrderDFS(node.right,result, level+1)
    }
    if(node.left){
        traversalPostOrderDFS(node.left,result, level+1)
    }
    return result
}
const dfs = (node, currentLevel, result) => {
    if(!node) return;
    if(currentLevel >= result.length) {
      result.push(node.value);
    }
  
    if(node.right) {
      dfs(node.right, currentLevel + 1, result);
    }
    
    if(node.left) {
      dfs(node.left, currentLevel + 1, result);
    }
  }
const rightSideViewDFS = function(root) {
    const result = [];
    
    dfs(root, 0, result);
    return result;
  };
let tree = new BinaryTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)


console.log(tree.observedFromRightSideBFS(tree))
console.log(traversalPostOrderDFS(tree.root, [], 0))
console.log(rightSideViewDFS(tree.root))

