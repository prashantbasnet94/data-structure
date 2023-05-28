/*
https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22329994#overview
Queues: 

Are very basic in the understanding. Not much deep to cover.




*/


class QueueWithStacks{
    constructor(){
        this.in = []
        this.out = []
    }
    // append the value at the end of the queue
    enqueue(val){
        this.in.push(val)
    }
    //removes the value at the start of the queue
    dequeue(){
        if(this.out.length === 0){
            while(this.in.length !== 0) {
                this.out.push(this.in.pop())
            }
        }
        return this.out.pop()
    }
    //return the value at the start of the queue
    // next value we will dequeue
    peek(){
        if(this.out.length === 0){
            while(this.in.length !== 0){
                this.out.push(this.in.pop())
            }
        }
        return this.out[this.out.length -1]
    }
    empty(){
        return this.in.length === 0 && this.out.length ===0
    }
    
}


/*

insights:

1. stack = [1,2,3] ====>  Last in first out LIFO
2. queue = [1,2,3] ====>  First In first Out FIFO


if(this.out.length === 0){
    while(this.in.length !== 0) {{
        this.out.push(this.in.pop())
    }
}

##### Insert

stack = 4,5 => [1,2,3,4,5]
queue = 4,5 => [1,2,3,4,5]

### remove element 
stack  4,5 => [1,2,3,4]
queue  1,2 => [2,3,4,5]

so, how do we achive same functionality on queue using stack
1. [1,2,3,4,5] => while element exist pop out and push in on new array
    i.e  [1,2,3,4,5] => [5,4,3,2,1]
2. on the new array [5,4,3,2,1] => do pop on number of element you want to remove
    i.e [5,4,3,2,1] => [5,4,3,2]

    this.in accepts the value, but inoder to get the right result on dequeue we need to reveerse the order in this.in
    and this is givven by arary this.out


    enqueue(value){
        this.in.push(value)
        [1]
        [1,2]
        [1,2,3]
        [1,2,3,4]
    }
    dequeue(){
          since dequeue removes the element [1,2,3,4] => [2,3,4]

        if this.out is empty, get this.in and set it in reverse order 
         [in]           [out]
        [1,2,3,4 ] => [4,3,2,1]
            i.e if(this.out.length === 0){
                while(this.in.length !==0){
                    this.out.push(this.in.pop())
                }
            }
        here,
        this.in = [1,2,3,4] => this.out = [4,3,2,1]
        this.out.pop() => [4,3,2]
    }
    
    peek(){
        since peek gets head of the queue
         [1,2,3,4] => 1

          if this.out is empty, get this.in and set it in reverse order 
        [1,2,3,4 ] => [4,3,2,1]
            i.e if(this.out.length === 0){
                while(this.in.length !==0){
                    this.out.push(this.in.pop())
                }
            }
            [4,3,2,1] => 1
      // returning the reference value
      return this.out[this.out.length -1]

    }
*/