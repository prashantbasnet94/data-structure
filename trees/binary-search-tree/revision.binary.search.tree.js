function node(value) {
    return {
        value,
        left: null,
        right: null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        // if root is null
        if (!this.root) {
            this.root = node(value)
        } else {
            let currentNode = this.root
            while (true) {
                if (currentNode.value > value) {
                    //if value we trying to insert is less then go left
                    if (!currentNode.left) {
                        currentNode.left = node(value)
                        return true
                    }
                    currentNode = currentNode.left
                } else {
                    //else go right
                    if (!currentNode.right) {
                        currentNode.right = node(value)
                        return true
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }
    lookup(target) {
        if (!this.root) {
            return false
        } else {
            let currentNode = this.root
            while (currentNode) {
                if (currentNode.value === target) {
                    return currentNode
                } else if (currentNode.value < target) {
                    // if we are @ 10, and value we are looking for is 15 then go right
                    currentNode = currentNode.right
                } else {
                    currentNode = currentNode.left
                }
            }
        }
    }
    remove(target) {
        if (!this.root) {
            return false
        } else {
            let currentNode = this.root, parentNode

            while (currentNode) {
                if (currentNode.value < target) {
                    // if we are @ 10 and the value we are looking for is 15, then go right
                    parentNode = currentNode
                    currentNode = currentNode.right
                } else if (currentNode.value > target) {
                    // if we are @15 and the value we are looking for is 10, then we go left
                    parentNode = currentNode
                    currentNode = currentNode.left
                } else if(currentNode.value === target) {
                    /*
                     if we found the value
                     we operate on the give node

                     There are 3 conditions:
                     X
                    /   \
                   A     B
                 /
                C 
                 

                        i. if the child has no right child i.e deleting A
                        ii. if the child has right child and has no left child
                        iii. if the child has right child and has left child
                    */

                    if (currentNode.right === null) {
                        // if the right child does not exit at all
                        if (!parentNode) {
                            this.root = currentNode.left
                        } else {
                            if (parentNode.value > currentNode.value) {
                                parentNode.left = currentNode.left
                                // if currentNode is right child of parent
                            } else if (parentNode.value < currentNode.value) {
                                parentNode.right = currentNode.left
                            }
                        }
                    } else if (currentNode.right && currentNode.right.left === null) {
                        if (!parentNode) {
                            this.root = currentNode.right
                        } else {
                            // if currentNode is left child of parent
                            if (parentNode.value > currentNode.value) {
                                parentNode.left = currentNode.right
                                // if currentNode is right child of parent
                            } else if (parentNode.value < currentNode.value) {
                                parentNode.right = currentNode.right
                            }
                        }
                    } else {
                         /*
                                                
                                                 A
                                               /   \
                                              B     C
                                                \
                                                  D
                                                 /
                                                E
                                               /
                                              F
                                              \
                                               G
                                                          
                        if we were to delete B,
                        
                        E.left = G
                        F.left = B.left
                        F.right = B.right
                        A.left  = F
                        
                        */

                        let
                            leftMostChild = currentNode.right.left,
                            leftMostChildParent = currentNode.right

                        while (leftMostChild.left !== null) {
                            leftMostChildParent = leftMostChild
                            leftMostChild = leftMostChild.left
                        }
                        leftMostChildParent.left = leftMostChild.right
                        leftMostChild.left = currentNode.left
                        leftMostChild.right = currentNode.right
    
                        if(parentNode.value > currentNode.value){
                            parentNode.left = leftMostChild
                        }else if(parentNode.value < currentNode.value){
                            parentNode.right = leftMostChild
                        }
                    }

                
                    return true;

                }
            }
        }
    }
}
module.exports = BinarySearchTree
let tree = new BinarySearchTree()
// let Tree = require('./binary.search.tree'),
// tree = new Tree()
tree.insert(10)
tree.insert(15)
tree.insert(5)
tree.insert(7)
tree.insert(3)
tree.insert(17)
tree.insert(13)

 
console.log(tree.remove(5))
console.log(tree.root)


/*
        10
      /    \
     5       15
  3     7  13    17    

*/







function myNode(value){
    return{
        value, 
        left: null,
        right:null
    }
}

class MyBST{
    constructor(){
        this.root = null
    }
    insert(value){
        if(!root){
            this.root = myNode(value)
            return
        }
        let currentNode = this.root
        while(true){
          if(currentNode.value < value ){
              // go to right
              if(!currentNode.left){
                  currentNode.left = myNode(value)
                  return
              }
              currentNode = currentNode.left
          }else{
              // go to left
              if(!currentNode.right){
                  currentNode.right = myNode(value)
                  return
              }
              currentNode = currentNode.right
          }
        }
    }
    lookup(value){
        if(!this.root){
            return false
        }
        let currentNode = this.root
        while(currentNode){
            if(currentNode.value === value){
                return currentNode
            }
            if(currentNode.value < value){
                // go to right
                currentNode = currentNode.right
            }else{
                // got to left
                currentNode = currentNode.left
            }
        }
    }
}