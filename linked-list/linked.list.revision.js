/*
    Reversing Linked List:

    1 => 2 => 3 => 4 => 5 => 6

    6 => 5 => 4 => 3 => 2 => 1

    How?

     1 => null

     2 => 1 => null
     3 => 2 => 1 => nulll

     currNode.next = prev
     prev = currNode
*/

function reverseLinkedList(head){
    let curentNode = head, prev = null


    while(curentNode){
        let next = curentNode.next
        curentNode.next = prev
        prev = curentNode
        curentNode = next
    }
    return prev
}
let linkedList = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: {
                        value: 6,
                        next: {
                            value: 7,
                            next: null
                        }
                    }
                }
            }
        }
    }
}
// console.log(reverseLinkedList(linkedList))

/*

M and N reversal 

1 => 2 => 3 => 4 => 5 => 6 => 7 , m = 3, n = 6

1 => 2 => 6 => 5 => 4 => 3 => 7


*/

function mnReversal(head, m, n){
    let curentNode = head, start = head,  position = 1

    while(position < m){
        start = curentNode
        curentNode = curentNode.next
        position++
    }

    let newList = null, tail = curentNode, next =null

    while(position >= m && position <=n){
        next = curentNode.next
        curentNode.next = newList
        newList = curentNode

        curentNode = next
        position++
    }
    start.next = newList
    tail.next = curentNode

    if(m > 1){
        return head
    }else{
        return newList
    }
}
console.log('mnreversal ',JSON.stringify(mnReversal(linkedList, 3, 6)))


/*
    Cycle Detection:
        Using tortoise and hare algorithm

*/

function cycleDetection(head){
    let tortoise = head, hare = head

    while(true){
        if(!hare && hare.next === null){
            return false
        }
        hare = hare.next
        tortoise = tortoise.next
    
        if(!hare && hare.next === null){
            return false
        }
        hare = hare.next
        if(hare === tortoise) break
    }
    
    let starting = head, meeting = hare

    while(starting !== meeting){
        starting = starting.next
        meeting = meeting.next
    }
    return starting
}


function cycleDetection1(head){
    let hare = head, tortoise = head

    while(true){
        if(hare && hare.next === null){
            return false
        }
        hare = hare.next
        tortoise = tortoise.next

        if(hare && hare.next === null){
            return false
        }
        hare = hare.next
    }
    let starting = head, meeting = hare
    while(starting !== meeting){
        starting = starting.next
        meeting = meeting.next
    }
    return starting
}


/*
Merging multilevel doubly linked list

1. As long as current node exist.
    i. Check if child of currentNode exist or not
        a. If child does not exist then continue with currentNode = currentNode.next
        b. If child exist, then
            i.  Preserve currentNode.next as we are going to manipulate currentNode next prop
            ii. what we know is 
                A <-> B <-> C <-> D
                      ^
                      |
                      v
                      I <-> J <-> K

                     B.next = B.currentChild i.e I 
                     a. currentNode.next = currentNodeChild i,e I should be the next obj B should point to
                     b. currentNodeChildListTail.next = currentNode.next, Tail of currentNode child list should point to next obj B is default pointing.
                     c. currentNode.next.prev = currentNodeChildLIstTail, CurrentNode.next should point back to the tail as well

                      (K.next) i.e B.childListTail = C i.e (B.next)
                      currentChild.next.prev = tail
                      
                
*/



 
function mergeDoublyLinkedList(head){
    let currentNode = head

 /*
 if child exist then tail and child head are two node we manipulate.
    while(currentNode){
        let next = currentNode.next
        if(!currentNode.child){
            currentNode = currentNode.next
        }else{
           
        
            let
             tail = currentNode.child
            while(tail.next){
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
*/

while(currentNode){
    let next = currentNode.next

    if(!currentNode.child){
        currentNode = currentNode.next
    }else{
        // if child exist then we need to point currentNode to child head
        // and point current child list tail node to currentNode.next and set prev prop accordingly.

        let tail = currentNode.child

        while(tail.next){
            tail = tail.next
        }

        tail.next = currentNode.next
        if(tail.next){
            tail.next.prev = tail
        }

        // now let's focus on currentNode and it;s first child

        currentNode.next = currentNode.child
        currentNode.next.prev = currentNode
        currentNode.child = null
        
    }

}
}