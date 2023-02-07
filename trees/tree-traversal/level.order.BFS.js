
/*
------ RETURN THE LEVEL ORDER TRAVERSAL OF THE NODES -------------------
what is level order?
Values at every level, level order wants us to get at each level is an array that holds the value at that level

             9                          [9]
        4         20                    [4,20]
    1       6   15      170             [1,6,15,170]

    finally return  answer => [[9],  [4,20], [1,6,15,170]]

Verifying constraint?

1. Is there always an answer to the question?
    yes
2. What do we return if the tree is empty?
    return an empty array

Some test cases:
1.
                     3
                  /    \
                 6      1
              /    \      \  
            9       2       4
            \
            5
           /
          8

        return [[3],[6,1],[9,2,4],[5], [8]]
 2.   
        4
      /    \
    null   null
    return [[4]]

3.      null
    return []

4. Worst Cases?


Tips to solve question:

1. First question you want to ask yourself with any binary tree question is does traversal matter?
    if it does, what is the manner in which i do it?
    is BFS or DFS?
    if it;s DFS does any of the order matter in how i traverse through DFS. is it PreOrder, Inorder or PostOrder

Approach:

    since our solution is going be a level order traversal, we will use BFS

 */

class Node {
    constructor(value) {
        this.left = null
        this.right = null
        this.value = value
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let node = new Node(value),
            currentNode = this.root
        if (!this.root) {
            this.root = node
        } else {
            while (currentNode) {
                if (currentNode.value < value) {
                    if (!currentNode.right) {
                        currentNode.right = node
                        return currentNode.right
                    }
                    currentNode = currentNode.right
                } else {
                    if (!currentNode.left) {
                        currentNode.left = node
                        return currentNode.left
                    }
                    currentNode = currentNode.left
                }
            }
        }
        return tree
    }
    levelOrderTraversal(tree) {
        /*
                 using bfs
                 we use a queue to record the child of current level travesing node
                
                              9                          [9]
                        4         20                    [4,20]
                    1       6   15      170             [1,6,15,170]
         */
        let currentNode = tree.root,
            queue = [currentNode],
            list = []
        while (queue.length > 0) {
            let
                queuesize = queue.length,
                count = 0,
                levelOrder = []
            while (count < queuesize) {
                let currentNode = queue.shift()
                levelOrder.push(currentNode.value)
                currentNode.left && queue.push(currentNode.left)
                currentNode.right && queue.push(currentNode.right)
                count++
            }
            list.push(levelOrder)
        }
        return list
    }
}
/*
https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22363348#reviews
    How to identify when a level is ended and a new level is started?

    New things added to BFS:
    1. Identify level of tree
    2. Initialize our levelorderarray i.e sub array
    3. Push this subarray into our result 
*/

let tree = new BinaryTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

console.log(tree.levelOrderTraversal(tree))


/*

    Time Complexity:    O(N)
    Space Complexity: O(N)

*/
