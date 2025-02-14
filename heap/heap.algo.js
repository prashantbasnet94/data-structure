class Heap {
  constructor(comparator = (a,b) => b < a) {
    this.comparator = comparator;
    this.heap = [];
  }

  _parent(index) {
    return Math.floor((index - 1) / 2);
  }
  _leftChild(index) {
    return index * 2 + 1;
  }
  _rightChild(index) {
    return index * 2 + 2;
  }
  _swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
  insert(node) {
    this.heap.push(node);
    this._bubbleUp();
  }

  _bubbleUp() {
    /*
            1. find the index at the end
            2. repeatadely compare it with it's parent
            3. if greater than parent swap it


        */
    let currentNode = this.heap.length - 1;
    let parentNode = this._parent(currentNode);
    while (this.heap[parentNode] < this.heap[currentNode]) {
      this._swap(currentNode, parentNode);
      currentNode = parentNode;
      parentNode = this._parent(currentNode);
    }
    return;
  }

  size() {
    return this.heap.length;
  }
  peek() {
    return this.heap[0];
  }
  pop() {
    /*
            1. swap it with last element
            2. pop it 
            3. boble down
        */

    this._swap(0, this.size() - 1);
    const result = this.heap.pop();
    this._bubbleDown();
    return result;
  }
  _compare(i, j){
    return this.comparator(this.heap[i], this.heap[j])
  }
  _bubbleDown() {
    let parentNode = 0;

    // parentNode is less than one of it's child
    while (
        0 < this._leftChild(parentNode) && this._compare(this._leftChild(parentNode), parentNode)
        || 0 < this._rightChild(parentNode) && this._compare(this._rightChild(parentNode), parentNode)
    ) {
      let greaterChildIndex =
        this._rightChild(parentNode) &&
        this._compare(this._rightChild(parentNode), this._leftChild(parentNode))
          ? this._rightChild(parentNode)
          : this.leftChild(parentNode);
      this._swap(parentNode, greaterChildIndex);
      parentNode = greaterChildIndex;
    }
  }
}
