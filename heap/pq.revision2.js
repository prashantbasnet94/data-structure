/*
    functions to implement on pq:
    1. insert
    2. remove
    3. peek
    4. size
    5. isEmpty
    
    1. _leftChild
    2. rightChild
    3. _parent
    4. _swap
    5. _bubbleUp
    6. _bubbleDown


*/

class PQ{
    constructor(comparator){
        this.compare = comparator
        this.heap = []
    }
    _leftChild(index){
        return (index * 2) + 1
    }

    _rightChild(index){
        return (index * 2) + 2
    }
    
    _parent(index){
        return (index - 1) / 2
    }
    _swap(i, j){
        let temp = this.heap[i]
        this.heap[i] = this.heap[j]
        this.heap[j] = temp
    }
    _compare(i, j){
        return this.heap[i] > this.heap[j]
    }
    //for insertion
    _bubbleUp(){
        let
         addedItemIdx = this.size() - 1

         while(this._compare(this._parent(addedItemIdx), addedItemIdx)){
             this._swap(addedItemIdx, this._parent(addedItemIdx))
             addedItemIdx = this._parent(addedItemIdx)
         }
    }

    // for deletion
    _bubbleDown(){
        let nodeIdx = 0

        while( 
            0 < this._leftChild(nodeIdx)  && this._compare(this._leftChild(nodeIdx), nodeIdx) ||
            0 < this._rightChild(nodeIdx) && this._compare(this._rightChild(nodeIdx), nodeIdx)
        ){
           // if right child exist, left child must exist but if the left child exist we don;t know if right child exist
           //if right child exist we check if it's greater than left child, if at any point doesn't exist we know left is greater 

            let greaterIdx = this.rightChildIdx(nodeIdx) 
            && this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx)) 
            ? this._rightChild(nodeIdx) 
            : this._leftChild(nodeIdx)
            this._swap(greaterIdx, nodeIdx)
            nodeIdx = greaterIdx
         }

    }

    isEmpty(){
        return this.heap.length === 0
    }
    size(){
        return this.heap.length 
    }
    insert(value){
        // if(this.isEmpty()){}
        this.heap.push(value)
        this._bubbleUp()
        return true
    }
    removal(){
        // need to remove the top elememnt
        // for that pop will not work
        // swap 1st and last elem
        // and pop out the last one and return it

        if(this.size() > 1){
            this._swap(0, this.size - 1 )
        }
        const poppedVal = this.heap.pop()
        this._bubbleDown()
        return poppedVal
    }
    peek(){
        return this.heap[0]
    }
}