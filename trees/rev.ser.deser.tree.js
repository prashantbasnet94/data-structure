/*

    Approach

    1. Serialize 
        a. Serialize can be done using dfs preorder
           so we need to write a dfs preorder func that can handle null nodes too

    2. Deseralize
        Inorder to deserialize a tree you need a string or an array of a tree i.e serialized tree
        b. in order to dersrialize a tree you need to build a tree

    ==========> so there are total 4 function <=============

*/


function node(value){
    return {
        left: null, 
        right: null,
        value
    }
}
class Tree{
    constructor(){
        NULL = '#'
    }

    serialize(root){
        let res = []
        this.preOrder(root, res)
        return res.join("")
    }
    _preOrder(node, res){
        if(node === null){
            res.push(this.NULL)
        }
        res.push(node.value)
        node.left && this._preOrder(node.left)
        node.right && this._preOrder(node.right)
    }
    deserialize(data){
        if(!data) return null
        let normalizeData = data.split(',')
        return this.buildTree(normalizeData)
    }

    _buildTree(nodes){
        const node = node.shift()
        if(node === '#'){
          return null
        }

        node.left = _buildTree(node.left)
        node.right = this._buildTree(node.right)
        return node
    }
}


class Tree1{
    constructor(){
        this.NULL = '#'
    }
    serialize(root){
        // serialize requires a dfs preorder
        let res = []
        _preOrder(root, res)
        return res.join('')
    }

    _preOrder(node, result){
        if(node === null){
            result.push(this.NULL)
            return
        }
        result.push(node.value)
        node.left && this._preOrder(node.left, result)
        node.right && this._preOrder(node.right, result)
    }
    deserialize(stringData){
        if(!stringData) return null
        const nodes = stringData.split(',')        
        return _buildTree(nodes)
    }
    _buildTree(nodes){
        const value = nodes.shift()
        if(value === this.NULL) return null
        const node = node(value)
        node.left = this._buildTree(nodes)
        node.right = this._buildTree(nodes)
        return node
    }
}

console.log([1,2, 3, 4])
console.log()
console.log(".join() ",[1,2, 3, 4].join())
console.log()
console.log(".join('') ",[1,2, 3, 4].join(''))
console.log()
console.log(".join(',')", [1,2, 3, 4].join(','))
console.log([1,2, 3, 4].join(),[1,2, 3, 4].join(',').split(','))