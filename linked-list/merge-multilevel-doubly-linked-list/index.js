/*

 1 => 2 => 3 => 4 => 5
      ||
       6 => 7 

1 => 2 => 6 => 7 =>3 => 4 =>5


Difference between single linked list and doubly linked list is that
doubly linked list has prev prop i.e {
    value: nulll,
    prev: ListNode, 
    next: ListNode
}



Logic:

1. While currnetNode.next exist move ahead
2. Check if currentNode has a child
    a. If child exist childNode = currentNode.child
    b. We need to point currentChild.prev = currentNode
    c. Also, immedidate childNode list's tail should point to currentNode.next node
        i. While currrentChildNode.next exist move ahead, once it reaches the tail, tail.next = currentNode.next and currentNode.next.prev => tail
        ii. curretNode.next = currentChildNode and currentChildNode.prev = curretNode and currentNode.child = null which gives us 7 =>3 and 2 => 6 ,
             so we have 2 =>6 =>7 =>3


 1 => 2 => 3 => 4 => 5
      ||  
       6 => 7 

1 => 2 => 6 => 7 =>3 => 4 =>5

*/

const flattenLinkedList = (head) => {
    if(!head){
        return head
    }
    let currentNode = head
        while(currentNode){
            let next = currentNode.next

            if(currentNode.child === null){
                currentNode = next
            }else {
                let 
                    child = currentNode.child,
                    childHead = child
                while(child){
                    tail = child
                    child = child.next
                }
                tail.next = currentNode.next
                if(currentNode.next){
                    currentNode.next.prev = tail
                }
                

                childHead.prev = currentNode
                currentNode.next = childHead
                currentNode.child = null
            }
            
        }
        return head
}, 
refactored = (head) => {
    if(!head){
        return head
    }
    let currentNode = head
    // travese current list
        while(currentNode){
            let next = currentNode.next
            //when no child move ahead
            if(currentNode.child === null){
                currentNode = next
            }else {
                // if child is found, we need currentNode.next = child, child.prev = currenNode, 
                //childNodeListTail.next = curretNode.next and curentNode.next.prev = childNodeListTail
               // and set currentNode.child to null
                let 
                    tail = currentNode.child
                while(tail.next !== null){
                    tail = tail.next
                }
                tail.next = currentNode.next
                if(tail.next !== null){
                    tail.next.prev = tail
                }
                
                currentNode.next = currentNode.child
                currentNode.next.prev = currentNode
                currentNode.child = null
            }
            
        }
        return head
}