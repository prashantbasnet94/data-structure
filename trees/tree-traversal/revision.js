/*

    Revision on Tree Travesal and level order


*/

function bfs(root){
    let
        queue = [],
        currentNode = root,
        list = []

    queue.push(currentNode)
    while(queue.length > 0){
        let node = queue.shift()
        list.push(node.value)

        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
    }
    return list
}


function dfs(root){
    /*
        3 ways to traverse dfs
            a. preorder => grab as you go
            b. inOrder => go to one direction as deep down once hits null comeback and grab it
            c. postOrder => go to one direction deep down when both of the direction hits null comeback and grab it
    */

        const result = []
        preOrder(root, result)
        inOrder(root, result)
        postOrder(root, result)

}

function preOrder(node, list){
    list.push(node.value)
    node.left && preOrder(node.left, list)
    node.right && preOrder(node.right, list)
}

function inOrder(node, list){
    node.left && inOrder(node.left, list)
    list.push(node.value)
    node.right && inOrder(node.right, list)
}

function postOrder(node, list){
    node.left && postOrder(node.left, list)
    node.right && postOrder(node.right, list)
    list.push(node.value)
}

// ******************   LEVEL ORDER TRAVERSAL ********************

function bfsModifiedTraversal(root){
    const queue = [], list = [], currentNode = root

    queue.push(currentNode)

    while(queue.length > 0){
        let
         queuesize = queue.length,
         count = 0,
         levelOrder = []

         while(count < queuesize){
            const node = queue.shift()
            levelOrder.push(node.value)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
            count++
         }
         list.push(levelOrder)
    }
    return list
}