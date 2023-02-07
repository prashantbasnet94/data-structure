/*



DFS approach:


                A
             /    \
            B      C
                  /  \
                 D    E
                 
1. left tree return 1

                A
             /    \
          1 B      C
                  /  \
                 D    E

2. right tree return 1

                A 1 + 2
             /    \
        1 B        C 1 + 1
                  /    \
                 1 D   1 E




BFS appraoch:


                A
             /    \
            B      C
                  /  \
                 D    E


1. queue = [A]  
    level = 0
    queue.length > 0, so go into while loop, push it's children into queue
    level = 1, queue = [B, C]

2. Process B, count = 2
    on B, no left and no right child 
    on C, push both into queue i.e D and E
   level = 3, queeu = [D, E]

   same and so on


*/



function maxheightDfs(node) {
    // if a node doesn't exist then return 0
    if (!node) return 0
    return 1 + Math.max(maxheightDfs(node.left), maxheightDfs(node.right))
}

function maxheightBfs(root) {
    if(!root){
        return 0
    }
    let queue = [], level = 0
    queue.push(node)

    while (queue.length > 0) {
        let count = queue.length

        for (let i = 0; i < count; i++) {
            let node = queue.shift()
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        level++
    }
    return level
}