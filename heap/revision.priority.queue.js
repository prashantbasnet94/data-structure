class PriorityQueue{
    constructor(comparator = (a,b) => a >b){
        this._heap = []
        this._comparator = comparator
    }
    _parent(index){
        return Math.floor((index  - 1 ) / 2)
    }
    _leftChild(index){
        return (index * 2) + 1 
    }
    _rightChild(index){
        return (index * 2) + 2
    }
    push(value){
        this._heap.push(value)
        this._suffleUp()
        return true
    }
    size(){
        return this._heap.length
    }
    pop(value){
        let temp = this._heap[0]
        this._heap[0] =  this._heap[this.size() - 1]
        this._heap[this.size() - 1] = temp
        let popped = this._heap.pop()
        this._shuffleDown()
        return popped
    }
    _swap(i, j){
        let temp = this._heap[i]
        this._heap[i] = this._heap[j]
        this._heap[j] = temp
    }
    _compare(i , j){
        return this._comparator(this._heap[i], this._heap[j])
    }
    _suffleUp(){
        let
         nodeIndex = this.size() - 1
         while(nodeIndex > 0 &&  this._compare(nodeIndex, this._parent(nodeIndex))){
            this._swap(nodeIndex, this._parent(nodeIndex))
            nodeIndex = this._parent(nodeIndex)           
         }
    }
    peek(){
        return this._heap[0]
    }
    _shuffleDown(){
        let nodeIndex = 0
        while(
            this._leftChild(nodeIndex) > 0 && this._compare(this._leftChild(nodeIndex), nodeIndex) ||
            this._rightChild(nodeIndex) > 0 && this._compare(this._rightChild(nodeIndex), nodeIndex)
            ){
                // as long as right child is there left child must be
                // but if there is a left child yet we don't know if there is a right child

                let greaterIndex = this._rightChild(nodeIndex) &&  this._compare(this._rightChild(nodeIndex), this._leftChild(nodeIndex)) ? this._rightChild(nodeIndex) : this._leftChild(nodeIndex)
                this._swap(greaterIndex, nodeIndex)
                nodeIndex = greaterIndex
            }
    }
}

let pq = new PriorityQueue()
pq.push(10)
pq.push(15)
pq.push(5)
pq.push(25)
pq.push(30)
console.log(pq._heap)
console.log(pq.peek())
console.log( pq.pop())
console.log( pq.pop())
console.log(pq._heap)


