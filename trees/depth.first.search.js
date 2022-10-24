/*

Three ways to do Depth First Search:
        101
      33     105     




             9
        4         20
    1       6   15      170

1. Inorder:
    W
    case1 : [33,101,105]
    case2 : [1,4,6,9,15,20,170] 

2. PreOrder:
    Starts from parent node, then grab the child node from left to  right
    Useful for recreating a tree
    case1: [101,33,105]    
    case2: [9,4,1,6,20,15,170]

3. PostOrder:
    Going all the way down starts from left to right and then parent
    case1:[33, 105, 101]


Most of the time depth first search is implmented with Recursion:
DFS inOrder
DFS preOrder
DFS postOrder
*/


/*

             9
        4         20
    1       6   15      170

Easy:
1. Go all the way to the left as long as left exist
2. If no futher left, add that node to the list
3. Go all the way to the right as long as right exist
4. if no left and right node exist at the current node, Return the list

Recursion Behind The Scene:

             9
        4         20
    1       6   15      170


traverseInOrder(9, []) => {
    traverseInOrder(4, []) => {
        traverseInOrder(1, []) => [1]
        [1].push(4)
        // go to right
        traverseInOrder(6, [1, 4]) => [1, 4, 6]
    }
    [1, 4, 6].push(9)
    traverseInOrder(20, [1, 4, 6, 9]) => {
        traverseInOrder(15, [1, 4, 6, 9])=> [1, 4, 6, 9, 15]
        [1, 4, 6, 9, 15].push(20)
        traverseInOrder(170, [1, 4, 6, 9, 15, 20])
    }
}


             9
        4         20
    1       6   15      170

More explanation:
-----------------
#check for left node  @ node 9
left node exist running func for 4
    #check for left node  @ node 4
    left node exist running func for 1  
        #check for left node  @ node 1
        since there is no left @ Node { left: null, right: null, value: 1 }  pushing current value 1, i.e list = [1]
        #check for right node
        end reached => list [ 1 ]
    resolved recursive func @  4 i.e traverseInOrder(1, [])  =>  [ 1 ]
    ----------- if left go to left is done  @ node 4 ---------------------
    since there is no left @ Node {left: ...,right: ...,value: 4}  pushing current value 4 i.e list = [1, 4]
    #check for right node
        right node exist running func for Node { left: null, right: null, value: 6 }
        #check for left node  @ node 6
        since there is no left @ Node { left: null, right: null, value: 6 }  pushing current value 6 i.e list = [1, 4, 6]
        #check for right node
        end reached => list [ 1, 4, 6 ]
 ----------- if left go to left is done @ node 9 ---------------------
resolved recursive func @  9  => i.e traverseInOrder(4, []) =>  [ 1, 4, 6 ]
 ########=============      All left childs of the root is searched by this point ================################
since there is no left @ Node {left: ..., right: ..., value: 9}  pushing current value 9  i.e list = [1, 4, 6, 9]
#check for right node
right node exist running func for Node {left:...,right: ..., value: 20}
    #check for left node  @ node 20
    left node exist running func for 15
        #check for left node  @ node 15
        since there is no left @ Node { left: null, right: null, value: 15 }  pushing current value 15 i.e list = [1, 4, 6, 9, 15]
        #check for right node
        end reached => list [ 1, 4, 6, 9, 15 ]
        ----------- if left go to left is done @ node 20 ---------------------
    resolved recursive func @  20,  i.e traverseInOrder(15, [1,4,6,9])  =>  [ 1, 4, 6, 9, 15 ]
    since there is no left @ Node {left: ...,right: ...,value: 20}  pushing current value i.e list = [1, 4, 6, 9, 15, 20]
    #check for right node
    right node exist running func for Node { left: null, right: null, value: 170 },  i.e traverseInOrder(170, [1,4,6,9, 15, 20]) 
        #check for left node  @ node 170
        since there is no left @ Node { left: null, right: null, value: 170 }  pushing current value i.e list = [1, 4, 6, 9, 15, 20, 170]
        #check for right node
        end reached => list [ 1,  4,   6, 9, 15, 20, 170]

             9
        4         20
    1       6   15      170

    take 9, go to 4, go to 1, since no left child exist @ 1, list.push(1), check if right node exist @ 1, since no right child exist list = [1]
    @ node 4
    if(node.left){
        traverseInOrder list becomes [1]
    }
    list.push(4)    //list = [1,4]

    now see if right child exist, @4 , 6 is the right child. we call traverseInOrder(6,[1, 4])
    @ node 6
    there is no left child 
    list.push(6)
    there is no right child
    return [1,4,6]

*/


let BinarySearchTree = require('./binary.search.tree')


BinarySearchTree.prototype.DFSInOrder = function () {
    return traverseInOrder(this.root, [])
}

// preorder and postOrder are very simialar
BinarySearchTree.prototype.DFSPreOrder = function () {
    return traversePreOrder(this.root, [])
}

BinarySearchTree.prototype.DFSPostOrder = function () {
    return traversePostOrder(this.root, [])
}

function traverseInOrder(node, list) {
    if (node.left) {
        traverseInOrder(node.left, list) //  recursive case
    }
    list.push(node.value)
    if (node.right) {
        traverseInOrder(node.right, list) //  recursive case
    }
    return list //base case
}
// with pre-order we want to push at the very begining
function traversePreOrder (node, list){
    list.push(node.value)

    if(node.left){
        traversePreOrder(node.left, list)
    }
    if(node.right){
        traversePreOrder(node.right, list)
    }
    return list
}

function traversePostOrder (node, list){
    if(node.left){
        traversePostOrder(node.left, list)
    }
    if(node.right){
        traversePostOrder(node.right, list)
    }
    list.push(node.value)
    return list
}

let tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)


console.log(tree.DFSInOrder())
console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())



