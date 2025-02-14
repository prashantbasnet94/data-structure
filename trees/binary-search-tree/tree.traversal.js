function preOrder(node, result =[]){
    if(!node){
        return
    }
    result.push(node.value)
    preOrder(node.left, result)
    preOrder(node.right, result)
    return result
}

function inOrder(node, result = []){
    if(!node){
        return
    }
    inOrder(node.left, result)
    result.push(node.value)
    inOrder(node.right, result)
    return result
}

function postOrder(node, result = []){
    if(!node){
        return
    }
    postOrder(node.left, result)
    postOrder(node.right, result)
    result.push(node.value)
    return result
}


function bfs(node){
    if(!node){
        return []
    }
    const queue = []
    queue.push(node)
    const result = []

    while(queue.length > 0){
        let currentNode = queue.shift()
        result.push(currentNode.value)

        currentNode.left && queue.push(currentNode.left)
        currentNode.right && queue.push(currentNode.right)

    }
    return result
}