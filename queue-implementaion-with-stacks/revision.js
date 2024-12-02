/*

    queue => [1, 2, 3, 4, 5]  => first in first out

    stack => [1, 2, 3, 4, 5] =>  last in first out


    // popping
    queue => 1
    stack => 5

    // insert
    queue => [1,...5] + 6 => [1, 2, 3, 4, 5, 6]
    stack => [1,...5] + 6 => [1, 2, 3, 4, 5, 6]

    so insertion is same in queue and stack, only removal is different


    how can we make a queue using stack?
    
    [1, 2, 3, 4, 5] => how to remove 1?

    [1, 2, 3, 4, 5] => transfer elements to 2nd array

    [1, 2, 3, 4, 5] => becomes => [5, 4, 3, 2, 1]
    now popping 1 out of 2nd array
*/

class QueueWithStack{
    constructor(){
        this.in = []
        this.out = []
    }
    enqueue(value){
        this.in.push(value)
    }
    //remove the value at the start of the queue
    dequeue(){
        if(this.out.length === 0){
            while(this.in.length !== 0){
                this.out.push(this.in.pop())
            }   
        }
        return this.out.pop()
    }
    empty(){
        return this.in.length === 0 && this.out.length === 0
    }
    peek(){
        if(this.out.length === 0){
            while(this.in.length !==0){
                this.out.push(this.in.pop())
            }
        }
        return this.out[this.out.length -1 ]
    }

}










class Queue{
    constructor(){
        this.in = []
        this.out = []
    }
    enqueue(value){
        this.in.push(value)
    }
    dequeue(value){
        if(this.out.length === 0){
            while(this.in.length !== 0){
                this.out.push(this.in.pop())
            }
        }
        return this.out.pop()
    }
    isEmpty(){
        return this.in.length === this.out.length && this.out.length === 0 
    }
    peek(){
        if(this.out.length === 0){
            while(this.in.length !== 0){
                this.out.push(this.in.pop())
            }
        }
        return this.out[this.out.length - 1]
    }
}