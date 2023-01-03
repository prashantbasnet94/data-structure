/*
Revese a linked list


1  => 2 => 3 => 4 => 5 
5 => 4 => 3 => 2 => 1

1 => 2
2 => 1

1 
1

null
null


Logic:
1. var to store newly build linked list
2. var to store the current head 
3. var to store the next of currentHead
4. Run a while loop till the head is null
    a. For the first one point it to null
    b For the second point => newlyBuildLinkedList
*/

const reverseList = function(head){
    let 
    currNode = head,
    prev = null,
    next

    if([null, ''].includes(head) || head.length < 2){
        return head
    }

    while(currNode){
        /*
         1. 1 => null, but if i do this then we have no record of 2,3,4 and 5  i.e currNode.next = prev
         2. So to keep track of other linked list, we have "next" as a record    
         3. Once 1 => null  we want it to be stored somewhere i.e prev as we need to manipulate currNode
         4. changed currNode.next = prev is changed to currNode = currNode.next i.e next
        */
        next = currNode.next
        currNode.next = prev
        prev = currNode
        currNode = next
    }
    return prev
},reverseLinkedList2 = head => {
    /*
     1 => 2 => 3
     3 => 2 => 1

     Logic:
     currNode i.e 1 points to null i.e PrevBuildLinkedList
     currNode.next i.e 2 points to 1 => null i.e PrevBuildLinkedList
     currNode.next.next i.e 3 points to 2 => 1 => null i.e prevBuildLinkedList
    */

    //  let prev = null,
    //  currNode = head,
    //  next

    //  while(currNode){
    //     next = currNode.next
    //     currNode.next = prev
    //     prev = currNode
    //     currNode = next
    //  }
    //  console.log(prev, 'a')
    //  return prev

    let prevBuild,currentHead = head, next

    while(currentHead){
        next = currentHead.next
        currentHead.next = prevBuild
        prevBuild = currentHead
        currentHead = next
    }
    return prevBuild
},
// 1 => 2 => 3 => 4 => 5 => null
// null => 5 => 4 => 3 => 2 => 1 => null
tested = function(head){
    let 
    currNode = head,
    prev = null

 
    while(currNode){
        let next = currNode.next
        currNode.next = prev
        prev = currNode
        currNode = next
        console.log('prev')
    }
    return prev
}

// console.log(reverseLinkedList2([1,2,3,4,5]))


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
                    next: null
                }
            }
        }
    }
}
console.log(reverseLinkedList2(linkedList))
