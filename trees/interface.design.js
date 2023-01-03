
function node(value){
    return {
        parent: value,
        child: [],
        isAlive: true
    }
}
class monarchyTree{
    constructor(monarch){
        this.root = node(monarch)
        // root = {
        //     parent : 'Jake',
        //     child : []
        // }
    }
    birth(child, parent){

        let childNode = node(child)
        if(parent === this.root.parent){
            this.root.child.push(childNode)
        }else{
            
            // traverse the parent child and push it on the rich location

            function findParentAndInsert(currChildNodes) {
                if(currChildNodes === undefined )return 
                for (let i = 0; i < currChildNodes.length; i++) {
                    let currNode = currChildNodes[i]
                    if (currNode.parent === parent) {
                        currNode.child.push(childNode)
                        return
                    }else{
                        findParentAndInsert(currNode.child)
                    }
                }
            }
            findParentAndInsert(this.root.child)
        }
    }
    death(name){
        console.log('runing death for ', name)
        function findNameAndDelete(currNode){
            if(!currNode) return
            for(let child = 0; child < currNode.child.length; child++){
                if(currNode.parent === name){
                    console.log('dying name is ', name)
                     currNode.isAlive = false
                    return
                }{
                    findNameAndDelete(currNode[child])
                }
            }
        }
        return findNameAndDelete(this.root)
    }
    getOrderOfSuccession(){
        // return this.root
        function dfs(node, list){
            if(!node) return
             for( let i = 0; i < node.length; i++){
                if(node[i].isAlive){
                    // console.log('Alive ', node[i])
                    list.push(node[i].parent)
                }
                dfs(node[i].child, list)
            }
            return list
        }
        return dfs(this.root.child, this.root.parent.isAlive ?[this.root.parent] :[] )
    }
    size(){
        return this.root.length
    }
}
// let monarch = new monarchyTree('Jake')
// monarch.birth('Catherine', 'Jake')
// monarch.birth('Jane', 'Catherine')
// monarch.birth('Tom', 'Jake')
// monarch.birth('Celine', 'Jake')
// monarch.birth('Farah', 'Jane')
// monarch.birth('Mark', 'Catherine')
// monarch.birth('Peter', 'Celine')

// monarch.death('Jake')
// monarch.death('Tom')
// monarch.death('Catherine')


// // monarch.getOrderOfSuccession()
// console.log(monarch.getOrderOfSuccession())


// *****************************    Refactoring ***********************************

function Person(name){
    return {
        name: name,
        child:[]
    }
}
class Monarchy{
    constructor(king){
        this.king = new Person(king)
        this._person = {
           [this.king.name]: this.king
        }
    }

    birth(childName, parentName){
        const 
            parent = this._person[parentName],
            newChild = new Person(childName)
            parent.child.push(newChild)
            this._person[childName] = newChild
    }

    death(name){
        const person = this._person[name]
        if(person === undefined) return null
        person.isAlive = false
    }

    getOrderOfSuccession(){
        const order = []
        this._dfs(this.king, order)
        return order
    }

    _dfs(node, order){
        if(node.isAlive){
            order.push(node.name)
        }
        for(let i = 0; i < node.child.length; i++){
            this._dfs(node.child[i], order)
        }
    }

}


// ***** revision **********

function Person2(name){
    return {
        name: name,
        children: [],
        isAlive: true
    }
}
class Monarchy2{
    constructor(king){
        this._king = new Person2(king)
        this._persons = {
            [this._king.name] : this._king
        } 
    }

    birth(childName, parentName){
        let
         newChild = new Person2(childName),
         parent = this._persons[parentName]
         parent.children.push(newChild)
         this._persons[childName] = newChild

    }

    death(name){
        let person = this._persons[name]
        if(!person)return null
        person.isAlive = false
    }

    getOrderOfSuccession(){
        const order = []
        this._dfs(this._king, order)
        return order
    }

 

    _dfs(node, order){
        if(node.isAlive){
            order.push(node.name)
        }
        for(let i = 0; i < node.children.length; i++){
            this._dfs(node.children[i], order)
        }
    }
}


let mona = new Monarchy2('Jake')
mona.birth('Catherine', 'Jake')
mona.birth('Jane', 'Catherine')
mona.birth('Tom', 'Jake')
mona.birth('Celine', 'Jake')
mona.birth('Farah', 'Jane')
mona.birth('Mark', 'Catherine')
mona.birth('Peter', 'Celine')

mona.death('Jake')
mona.death('Tom')
mona.death('Catherine')
console.log(mona.getOrderOfSuccession())