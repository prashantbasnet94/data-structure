/*
Priority Queue

what is priority queue?

Like a max heap or min heap, priority queue stores node in the same way based on a priority value given

The root node is always of highest priority or lowest depending upon priority 


functions it uses:
1. Insert 
2. Remove
3. Size
4. SortUp => while insert
5. SortDown => while remove
6. SwapElement
7. parentIndex
8. leftChildIndex
9. rightChildIndex


This priority queue, uses array:
a. parentIndex => (index - 1) / 2
b. leftChildIndex => index * 2 + 1
c. RightChildIndex => index * 2 + 2

*/


class PriorityQ{
    constructor(comparator){
        this.heap = []
        this.comparator = comparator
    }
    _parentIndex(index){
        return (index - 1) / 2
    }
    _leftChildIndex(index){
        return (index * 2) + 1
    }
    _rightChildIndex(index){
        return (index * 2) + 2
    }
    _swap(i, j){
        let temp = this.heap[i]
        this.heap[i] = this.heap[j]
        this.heap[j] = temp
    }
    _sortUp(){

    }
    _sortDown(){

    }
    size(){
        return this.heap.length
    }
    push(value){
        this.heap.push(value)
        this._sortUp()
        return true
    }
    pop(){
        if(this.size() > 0){
            this._swap(0, this.size() -1)
        }
        const removedVal = this.heap.pop()
        this._sortDown()
        return removedVal
    }

}