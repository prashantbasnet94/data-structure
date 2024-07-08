/*
    Same Tree:
        Two binary trees are considered the same if they are structurally identical, and nodes have the same value


        1           1
    2       3   2       3

    p = [1,2,3], q = [1,2,3]
    return true


        1          1 
    2                   2

    p = [1, 2], q = [ 1, null, 2]
    return false



Logic:
    1. trave a tree and compare it's value if the value is equal than it's identical else not
    2. We can use either dfs or bfs to traverse

*/

function dfsTraversal(node, result){
    if (node === null) {
        result.push(null);
        return;
      }
      result.push(node.val);
      dfsTraversal(node.left, result);
      dfsTraversal(node.right, result);
}


function isSameTree(p,q){
    const
     ptraversal = [],
     qtraversal = []

     dfsTraversal(p, ptraversal)
     dfsTraversal(q, qtraversal)

    if(ptraversal.length !== qtraversal.length){
        return false
    }

    for(let index in ptraversal){
        if(ptraversal[index] !== qtraversal[index]){
            return false
        }
    }
    return true
}


/*
    Time and space complexity:

        dfsTraversal => {
                time : O(N), as we need to go to each node in the tree exactly once
                space: O(H), as the stack grows to the height of the tree
                for the worst case, it can be a linked list => so space can grow to O(N)
        }

        isSameTree{
                2N + 1 + N
              time:  O(N)
              space: O(H), as the nodes are proportional to the height of the tree
                worst case: space become O(N)
        }


*/

// DFS appraoch:


function isSameTree(p,q){
    // if both is null same tree
    if(!p && !q){
        return true
    }
    // if p  is null ||  q is null || and both is not equal then it's different tree
    // if either of the value doesn't exist or both doesn't match it's differnt
    if(!p || !q || p.val !== q.val){
        return false
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

// time comp => O(N) + O(N) , as we need to touch each node
// space comp => O(H), as we need to store the stack of recursive call as the height of the tree