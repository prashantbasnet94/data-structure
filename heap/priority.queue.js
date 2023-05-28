/*
How does a priority queue relate to the Heap?

Priority queue is pretty much just a queue, except it always returns || gives you the value with the highest priority.

Let's say we had inserted four different values, let's say they were objs with different props. We assigned each obj with a priority value, which is
represented by a number

(1)   (2)   (3)   (4)

any value with the highest priority is going to be the value we return from priority queue.
Here, 4 has the highest priority, we should return 4

What we can say is that if we implement a max heap using the priority as the value in which we set their node values, then we automatically now have a priority queue
 


                45
              /    \
            40        25
          /   \      /  \
        20    35    10  15   
      
In this example of max heap, let's say this is a priority queue. 45 has the greatest priority. 40 then has the next greatest priority, 35 then has the next great priority.
So as you remove these values from this priority queue max heap structure, we know that given how we perform our insertion or deletion we are always going to have the value 
with the greatest priority inside our heap as the  next root value
    
So this is how a priority queue and a max heap are pretty much the exact same thing


You can also implement it with a min heap, but now the priority value has to be smaller
So you have to aware base on which heap you are implmenting for what priority queue is going to return



Time and Space complexity:

For Insertion,
we are adding a value at the next avaible spot and shifting it up the branch. Let's say we are inserting 80


                45
              /    \
            40        25
          /   \      /  \
        20    35    10  15   
       /
      80


We then compare the value and make swaps along the way. So here the max potential number of swaps is going to be from the base level i.e leaf nodes level to the rootnode or height 1, 
which is the height of the treee,  height = log(N)

For Removal:

                45
              /    \
            40        25
          /   \      /  \
        20    35    10  15   
    let's remove 45, 

                15
              /    \
            40        25
          /   \      /  
        20    35    10  
    Then we perform the swaps down, here how many swaps we can perform?
    Swaps can done as the height of the tree, i.e logN



Desiging Priority Queue

Writing a class implmentation of a solution are important



*/
class PriorityQueue{
  constructor(comparator = (a, b) => a > b){
    // next thing we want to implment is the array that is going to hold the values inside of the heap structure that represent priority queue

    //_ represent private 
    this._heap = []
    this._comparator = comparator
  }

  size(){
    return this._heap.length
  }
  peek(){
    this._heap[0]
  }
  _parent(index){
    return Math.floor((index -1)/2)
  }
  _leftChild(index){
    return 2 * index + 1
  }
  _rightChild(index){
    return 2 * index + 2
  }
  _swap(i, j){
    let temp = this._heap[i]
    this._heap[i] = this._heap[j]
    this._heap[j] = temp
  }
  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  _shiftUp() {
    /*
    let
      currPositionOfNewValue = this._heap.length, // 3
      parentIndexOfCurrentNode = this._parent(currPositionOfNewValue) //1
    if (this._heap.length > 1) {
      while (this._heap[parentIndexOfCurrentNode] < newValue) {
        this._swap(currPositionOfNewValue, parentIndexOfCurrentNode)
        currPositionOfNewValue = parentIndexOfCurrentNode
        parentIndexOfCurrentNode = this._parent(currPositionOfNewValue)
      }
    }
*/
    let nodeIndex = this.size() - 1 
    // as soon as our node index is equal to root, we know we cant swap
    // and also acutal node value is greater than the parent
    while(nodeIndex >0  && this._compare(nodeIndex, this._parent(nodeIndex))){
      this._swap(nodeIndex, this._parent(nodeIndex))
      nodeIndex = this._parent(nodeIndex)
    }
}


/*
  shiftUp || sortUp

  1. get the currentElementIndex i.e this.size() -1
  2. when currentElementIndex > 0 && currentElment > it's parent enter into whileLoop to shift the value up{
        a. swap(currentElementIndex, parentElementIndex)
        b. currentElementIndex = parementElementIndex
      }
*/

_sortUp(){
  let curElemIndx = this.size() - 1
  while( curElemIndx > 0 && this.compare(curElemIndx , this._parent(curElemIndx))){
    this._swap(curElemIndx, this._parent(curElemIndx))
    curElemIndx = this._parent(curElemIndx)
  }
}


_shiftDown(){

  /*
  let nodeIndex = 0,
  leftChildIndx = this._leftChild(nodeIndex),
  rightChildIndx = this._rightChild(nodeIndex),
  greaterChildIndx = this._comparator(leftChildIndx, rightChildIndx) ? leftChildIndx : rightChildIndx
  while(nodeIndex < this._heap.length && this.comparator(this._heap[greaterChildIndx], this._heap[nodeIndex])){
    this._swap(greaterChildIndx, nodeIndex)
    nodeIndex = greaterChildIndx
  }

  In the while loop, the condition checks whether either child exists and whether that child is greater than the current node. Specifically, it checks two conditions with the || operator:

this._leftChild(nodeIndex) < this.size() && this._compare(this._leftChild(nodeIndex), nodeIndex) - This condition checks if the left child exists and if it is greater than the current node.
this._rightChild(nodeIndex) < this.size() && this._compare(this._rightChild(nodeIndex), nodeIndex) - This condition checks if the right child exists and if it is greater than the current node.

  */
 let nodeIndex = 0

 // as long as one of the child exist we step in while loop
 while(
  this._leftChild(nodeIndex) < this.size() && this._compare(this._leftChild(nodeIndex), nodeIndex) ||
  this._rightChild(nodeIndex) < this.size() && this._compare(this._rightChild(nodeIndex), nodeIndex)
 ){
   // if a right child exist, left child must exist but if the left value exist we don't know if the right value exist as well
   // if right child exist we check if it is greater than left child, if at any point that fails we know left is greater
  const greaterNodeIndx = this._rightChild(nodeIndex) < this.size() && 
  this._compare(this._rightChild(nodeIndex), this._leftChild(nodeIndex)) ? this._rightChild(nodeIndex) : this._leftChild(nodeIndex)
  this._swap(greaterNodeIndx, nodeIndex)
  nodeIndex = greaterNodeIndx
 }
}

  push(newValue) {
    /*
      Steps:
      1. Push at the end
      2. Then compare the end position element with it's parent
        i.  currentlyInserted value > it's parent ? swap position with parent : do nothing
    
    
           15
         9   10
        let's insert 20

          15
        9   10
      20

      1.  
              15
            20 10
          9
      2.    
            20
          15  10
         9

    ********** in array ***********
        [15, 9, 10]
         0   1   2

          15
        9   10
      20

      1. push 20 @ the end i.e [15, 9, 10, 20]
                                0   1   2   3

      2.
        i. Check element @ position 3 with it's parent
          i.e parent = Math.floor((index -1) / 2) = Math.floor((3-1) / 2 ) = 1
          so compare array[1] i.e 9 with arrat[3] i.e 20

          since 20 > 9, we swap it  [15, 20, 10, 9]
                                    0   1   2   3
        ii. Check element @ position 1 i.e 20 with it's parent
            parent = Math.floor((index-1)/2) = 0, array[0] = 15
            is 20 > 15, then swap it again
            [20, 15, 10, 9]
             0   1   2   3

           20
        15    10
      9

      which is correct

          15
        9   10
      4

       [15, 9, 10, 4]
        0   1   2  3
    */

    this._heap.push(newValue)
    this._shiftUp()
    return this.size()
  }
  pop(){
    /*
            20
          15  10
         9

         let's say we need to delete 20.

         Steps to follow
         1. Remove 20 and replace it with the rightmost leaf node

                  9
                15  10
              [9, 15, 10]
               0   1  2
        2. Compare the root node to it;s child node and pick whichever child is greater and then compare it with the parent node
          here
          left = 2 * index + 1   = 9 @position 0 = 2 * 0 + 1 = 1, array[1] = 15
          right = 2 * index + 2  = 2 * 0 + 2 = 2, array[2] = 10

          left > right, pick left and then compare it with the current parent. i.e 15 > 9, so we swap the root 9 with 15

                  35
                30   10
            4     20 6   7
              [15, 9, 10]
               0   1  2

                         // removes first element in the array
        this._heap.shift()
        // insert the last || right most leaf node
        this._heap.unshift(this._heap.pop())
        this._heap.splice(this._heap.length -1 , 1)
    */
    // here we don;t want to use shift as it takes o(N)
    // so using pointer technique

    if(this.size() > 1){
      this._swap(0, this.size() -1)
    }
    const poppedVlaue = this._heap.pop()
    this._shiftDown()
    return poppedVlaue
  }
  isEmpty(){
    return this.size() === 0
  }

/*
 5 methods that are crucial:
 a. size => returns total size
 b. isEmpty => if there is any values || emtpy
 c. peek => returns the biggest value in max heap and vice versa in min heap
 d. push => insert value into the heap
 e. pop  => remove heap

*/
}

let pq = new PriorityQueue()
pq.push(9)
pq.push(15)
pq.push(10)
pq.push(4)
pq.push(5)
pq.push(6)
pq.push(7)




console.log(pq._heap)