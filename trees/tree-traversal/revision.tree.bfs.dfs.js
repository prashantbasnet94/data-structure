let RevisionTree = require('../binary-tree/revision.binary.search.tree'),
tree = new RevisionTree()
function inOrder(node = tree.root, list = []){
    if(node.left){
        inOrder(node.left, list)
    }
    list.push(node.value)
    if(node.right){
        inOrder(node.right, list)
    }
    return list
}
function preOrder(node = tree.root, list = []){
    list.push(node.value)
    if(node.left){
        preOrder(node.left, list)
    }
    if(node.right){
        preOrder(node.right, list)
    }
    return list
}
function postOrder(node = tree.root, list = []){
    if(node.left){
        postOrder(node.left, list)
    }
    if(node.right){
        postOrder(node.right, list)
    }
    list.push(node.value)
    return list
}
 
RevisionTree.prototype.InOrder =  ()=> {
   return inOrder()
}
RevisionTree.prototype.PreOrder =  ()=> {
    return preOrder()
}
RevisionTree.prototype.PostOrder =  ()=> {
    return postOrder()
}

RevisionTree.prototype.BFS = () => {
    let
     list = [],
     queue = [],
     currentNode = tree.root
     queue.push(currentNode)
     while(queue.length > 0){
        let currentNode = queue.shift()
        list.push(currentNode.value)

        if(currentNode.left){
            queue.push(currentNode.left)
        }
        if(currentNode.right){
            queue.push(currentNode.right)
        }
     }
     return list

    
}


tree.insert(10)
tree.insert(15)
tree.insert(5)
tree.insert(7)
tree.insert(3)
tree.insert(17)
tree.insert(13)


 console.log('InOrder => ', tree.InOrder())
 console.log('PreOrder => ', tree.PreOrder())
 console.log('PostOrder => ', tree.PostOrder())
 console.log('BFS => ', tree.BFS())
