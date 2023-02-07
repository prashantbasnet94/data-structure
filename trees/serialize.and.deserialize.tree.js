 
/*

******* Note *****

Deserialize and insert are different operations on a binary tree.


Insert, on the other hand, is the process of adding a new node to an existing binary tree. It takes in a new value and finds the correct position to insert the new node by traversing the tree, based on the value of the new node, it compares it to the value of each node in the tree, and then it is inserted as the left or right child of that node.

In short, deserialize creates a new tree while insert adds a node to an existing tree.

*/

//given
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var serialize = function (root) {
    //basically serialization can be done with dfs pre-order
    
    let tree = new Tree()
    return tree.serialize(root)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

function buildTree(nodes) {
    let val = nodes.shift()
    if (val === this.NULL) return null
    let node = new TreeNode(val)
    node.left = this.buildTree(nodes)
    node.right = this.buildTree(nodes)
    return node
}

var deserialize = function (data) {

    // if (!data || data.length === 0) return null
    // console.log(data)
    // return buildTree(nodes)
     let tree = new Codec()
    return tree.deserialize(data)
};

function node(val) {
    return {
        val: val,
        left: null,
        right: null
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    dfsPreOrder(node, result = []){
        result.push(node.val)
        node.left && this.dfsPreOrder(node.left)
        node.right && this.dfsPreOrder(node.right)
        return result.join(',')
    }

    //Deserialize is the process of constructing a binary tree from a serialized representation of the tree,
    // such as an array or a string. It takes in the serialized data and uses a depth-first approach to construct the tree by creating new nodes and linking them together.

    deserialize(data){
        if(!data) return null
         const nodes = data.split(',')
         return this.buildTree(nodes)
    }
    buildTree(nodes) {
        let val = nodes.shift()
        if(val === null) return null
        let newNode = new TreeNode()
        node.left = this.buildTree(nodes)
        node.right = this.buildTree(nodes)
        return newNode
    }
}

class Codec {
    constructor() {
        this.NULL = "#"
    }

    serialize(root) {
        let res = []
        this.dfs(root, res)
        return res.join(",")
    }

    dfs(node, res) {
        if (!node) {
            res.push(this.NULL)
            return
        }
        res.push(node.val)
        this.dfs(node.left, res)
        this.dfs(node.right, res)
    }

    deserialize(data) {
        if (!data) return null
        let nodes = data.split(",")
        return this.buildTree(nodes)
    }

    buildTree(nodes) {
        let val = nodes.shift()
        if (val === this.NULL) return null
        let node = new TreeNode(val)
        node.left = this.buildTree(nodes)
        node.right = this.buildTree(nodes)
        return node
    }
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */