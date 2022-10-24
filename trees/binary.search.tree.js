/*
    Binary Search Tree: Subset of binary tree
    Binary search tree is great for searching or comparing things
    Why is this better than hash table?
    This data strucutre preserves relationships, just like you would not want your folders to be in hash table data structre, becaues there is no sort of relationship
    instead we want our folder to have a relationship
        
        Parent>MyPc> DriveA > MyDataStructure>Code

    Things like binary search tree allow us to preserve the realtionship

    
                        101
                33            105
            9        37  104        144   

    Rules:
    1. All Child nodes to the right must be greater than current Node. Decreases to the left
    2. Node can only have upto two child

    Time Complexity:
    Lookup : O(logN)
    Insert : O(logN)
    Delete : O(logN)

Problem with binary search tree:
Can become a linked list, where nodes are just added by looping thorugh nodes on right

                2
            1      5
    
if we insert 6,7,8,9,10

            2
        1       5
                    6
                        7
                            8
                                9
                                    10
----------Unbalanced Binary Search tree is bad --------

ideally we want to balance our search tree

Performance implications:

1. It has really good performance across the board. Most or all operation in binary search tree is better than o(N) assuming it is balanced
2. It is also ordered
3. WE can keep growing our tree


Cons:
No O(1) operation

Compared to an array, look up will be lot faster o(logN) vs O(N)
Inserts and Deletes are also faster, unless an array is adding to the end

Comparing to Hash Table:
Insert and Search at constant time. With Binary search tree we have sorted data. We also have structure of parent child realtionship 


Binary search tree are not the fastest of anything. On average an array or an obj will have faster operation

Under ceratin condition Binary search tree outperform objects and arrays


As long as you stay away from edge cases, Binary search tree performs really well


*/



function node(value) {
    return {
        left: null,
        right: null,
        value: value
    }
}

class Node {
    constructor(value) {
        this.left = null
        this.right = null
        this.value = value
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            let currentNode = this.root
            while (true) {
                // if value is less than current node value => go left
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                } else {
                    // if value is greater or equal than currentNode value => go right
                    if (!currentNode.right) {
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }
    lookup(target) {
        let currentNode = this.root
        if (currentNode.value === target) {
            return currentNode
        } else if (currentNode.value < target) {
            //go right
            while (currentNode.right) {
                currentNode = currentNode.right
                if (currentNode.value === target) {
                    return currentNode
                }
            }
        } else {
            // go left
            while (currentNode.left) {
                currentNode = currentNode.left
                if (currentNode.value === target) {
                    return currentNode
                }
            }
        }
    }

    lookuprefactored(target) {
        if (!this.root) {
            return false
        }
        let currentNode = this.root
        while (currentNode) {
            if (currentNode.value === target) {
                return currentNode
            } else if (currentNode.value < target) {
                //go right
                currentNode = currentNode.right
            } else {
                currentNode = currentNode.left
            }
        }
        return false
    }
    revisedInsert(value) {
        if (!this.root) {
            this.root = node(value)
        } else {
            let currentNode = this.root,
                newNode = node(value)
            while (true) {
                if (currentNode.value < value) {
                    // insert at the right when right is null
                    if (!currentNode.right) {
                        currentNode.right = newNode
                        return newNode
                    }
                    currentNode = currentNode.right
                } else {
                    //insert at the left when left is null
                    if (!currentNode.left) {
                        currentNode.left = newNode
                        return newNode
                    }
                    currentNode = currentNode.left
                }
            }
        }
    }

    remove(value) {
        if (!this.root) {
            return false
        }
        let currentNode = this.root, parentNode

        while (currentNode) {
            if (currentNode.value < value) {
                parentNode = currentNode
                currentNode = currentNode.right
            } else if (currentNode.value > value) {
                parentNode = currentNode
                currentNode = currentNode.left
            } else {
                // we have a match , get to work
                // option 1: No right child
                if (!currentNode.right) {
                    if (!parentNode) {
                        this.root = currentNode.left
                    } else {
                        //if parent > currentValue make current left child a  child of parent
                        if (parentNode.value > currentNode.value) {
                            parentNode.left = currentNode.left
                        } else if (parentNode.value < currentNode.value) {
                            // if parent < currnet value, make left child a right child of parent
                            parentNode.right = currentNode.left
                        }
                    }
                }
                //    // option 2: node has right child which doesnt have a left child
                else if (currentNode.right && currentNode.right.left === null) {
                    if (!parentNode) {
                        this.root = currentNode.left
                    } else {
                        // if parent > current, make right child the left child of parent
                        if (parentNode.value > currentNode.value) {
                            parentNode.left = currentNode.right
                        }
                        //if parent < currnet, make right child a right chidle of the parent
                        else if (parentNode.value < currentNode.value) {
                            parentNode.right = currentNode.right
                        }
                    }
                }
                // option 3: right child has a left child
                else {
                    // find the right child's left most child
                    let
                        // get the left child of the right child
                        leftMostChild = currentNode.right.left,
                        // right child now becomes the parent of left most child
                        leftMostChildParent = currentNode.right
                    //while left of the leftmost child is not null find all of the left most child
                    while (leftMostChild.left !== null) {
                        // left of leftmostchild is there, so leftMostChildParent becomes current leftmostchild and leftmostchild go futher down
                        leftMostChildParent = leftMostChild
                        leftMostChild = leftMostChild.left
                    }
                    /*
                     removing and changing the subtree of the tree
                     parent's left subtree is now leftmost's right subtree

                     since we travel all the way to the left 

                        Z  
                      /    \
                     A      X
                       \
                        B
                      /
                    C
                   /
                  D 
                 /
                E
                 \
                  F
                  
                  if we want to delete A, then we have to somehow find E and move E to the position of A
                  What about F ?
                  Since we just move a left child of D, we want to replace it with F 
                  1. D.left = E.right
                  2. E.left = A.left
                  3. E.right = A.right

                
                    */
                    leftMostChildParent.left = leftMostChild.right
                    leftMostChild.left = currentNode.left
                    leftMostChild.right = currentNode.right

                    if (!parentNode) {
                        this.root = leftMostChild
                    } else {
                        if (parentNode.value > currentNode.value) {
                            parentNode.left = leftMostChild
                        } else if (parentNode.value < currentNode.value) {
                            parentNode.right = leftMostChild
                        }
                    }
                }
            }
        }
        return true
    }
}

module.exports = BinarySearchTree
const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(6)
tree.revisedInsert(10)
tree.revisedInsert(12)


// JSON.stringify()
// console.log(JSON.stringify(tree))
// console.log(tree.lookup(10))
// console.log(tree.lookuprefactored(12))
