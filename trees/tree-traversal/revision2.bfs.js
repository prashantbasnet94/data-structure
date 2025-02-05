function bfs(root){
    /*
         we want a 
         1. currentNode
         2. list to store the result
         3. queue to process inorder



         next we check if we have data to process in the queue
          
         if(queue.length > 0){
            let node = queue.shift()
            list.push(node.value)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
         }
         return list
    */

         const list = []
         const queue = []

        queue.push(root)
        while(queue.length > 0){
            let currentNode = queue.shift()
            list.push(currentNode.value)    

            currentNode.left && queue.push(currentNode.left)
            currentNode.right && queue.push(currentNode.right)
        }
        return list
}



function dfsPreOrder(node){
    // list.push(node.v)
    dfsPreOrder(node.left)
    dfsPreOrder(node.right)
}