class pq{

    constructor(){
        this.heap = []
    }
    _parent(index){
        return (index - 1) / 2
    }
    _leftChild(index){
        return index * 2 + 1
    }
    _rightChild(index){
        return index * 2 + 2
    }
    size(){
        return this.heap.length - 1
    }
    _swap(i,j){
        let temp = this.heap[i]
        this.heap[i] = this.heap[j]
        this.heap[j] = temp
    }
    _sortUp(){

    }
    _sortDown(){

    }
    insert(value){
        this.heap.push(value)
        _sortUp()
    }
    remove(value){
        this._swap(0, size())
        _sortDown()
    }
    peek(){
       return this.heap[0]
    }
}