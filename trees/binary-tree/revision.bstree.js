function node(value){
    return{
        value : value,
        left: null,
        right: null
    }
}

class BinarySearch{
    constructor(){
        this.root = null
    }
    
    insert(value){
        if(this.root === null){
            this.root = node(value)
        }else{
            let currentNode = this.root

            while(true){
                if(value  < currentNode.value){
                  
                    if(currentNode.left === null){
                        currentNode.left = node(value)
                        return true
                    }else{
                        currentNode = currentNode.left
                    }
                }else if(value > currentNode.value){
                    if(currentNode.right === null){
                        currentNode.right = node(value)
                        return true
                    }else{
                        currentNode = currentNode.right
                    }
                }
            }
        }
        return false
    }

    lookup(value){
        // start from root node
        // check if value is greater than currentNode.value then go right
        // if value is less than currentNode.value then go left

        if(this.root === null) return this.root
        let currentNode = this.root

        while(true){
            if(value > currentNode.value){
                currentNode = currentNode.right
            }else if(value < currentNode.value){
                currentNode = currentNode.left
            }else{
                return currentNode
            }
        }
        return false
    }

    remove(value) {

        let currentNode = this.root,
        parent = currentNode

        while (true) {
            if (value < currentNode.value ) {
                // go left
                parent = currentNode
                currentNode = currentNode.left
            } else if (currentNode.value < value) {
                // go right
                parent = currentNode
                currentNode = currentNode.right
            } else {
                // out meat of the operation
                /*
                 when right child does not exist
                            X
                        A       B
                     C      D   
                 */

                     if(currentNode.right === null){

                        if(parent.value > currentNode.value){
                            parent.left = currentNode.left
                        }else{
                            parent.right = currentNode.left
                        }
                     }else if(currentNode.right && currentNode.right.left === null){

                /*
                 when right child exist and right child's left child does not exist
                            X
                        A       B
                     C     D 
                             E       

                             Here to delete A,
                             X.left = D.right

                  */

                             if(parent.value > currentNode.value){
                                parent.left = currentNode.right
                            }else{
                                parent.right = currentNode.right
                            }

                        parent.left = currentNode.right
                        parent.left.left = currentNode.left

                     }else if( currentNode.right && currentNode.right.left){
                        /*

                            X
                        A       B
                    C      D
                         E    F
                       G  
                         H

                    Inorder to delete A

                    X.left = G
                    G.left = C
                    G.right = D
                    E.left =  G.right

                    1. Find the left most child of the currentNode right child

                       */

                    let
                     rightChildNode = currentNode.right,
                     leftMostChild = currentNode.right.left,
                     parentOfLeftMostChild = rightChildNode

                     while(leftMostChild.left){
                        parentOfLeftMostChild = leftMostChild
                        leftMostChild = leftMostChild.left
                     }
                    
                     
                     parentOfLeftMostChild.left = leftMostChild.right
                     leftMostChild.right = currentNode.right
                     leftMostChild.left = currentNode.left


                     if(parent.value > currentNode.value){
                        parent.left = leftMostChild
                     }else{
                        parent.right = leftMostChild
                     }
                     }
                    
                     return true

                // when the right child exist and the right child's left child also exist
            }
        }
        return false

    }
}

let bs = new BinarySearch()

console.log(bs.insert(10))
console.log(bs.insert(5))
console.log(bs.insert(15))
console.log(bs.insert(17))
console.log(bs.insert(17))

console.log(bs.root)
console.log(bs.remove(15))
console.log(bs.root)


/*

Binary Tree:

1. Insert

    while(true){
        if(value < currentNodeVal){
            go left
            if(currentNode is null){
                createANode
                return true
            }else{
                keep going left
            }
        }else{
            go right
            if(currentNode is null){
                createANode
                return true
            }else{
                keep going right
            }
        }
    }
2. LookUp
        while(true){
            if(value < currNodeVal){
                go left
            }else if(value > currNodeVal){
                go right
            }else{
                return true
            }
        }
3. Remove




*/

function insert(){

}