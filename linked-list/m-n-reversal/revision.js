/*
     in doing (m,n) reversal we need to account for following things:

     1. linked list reversal algo
     2. m and n are important position, also m - 1 => n and m => n + 1
     3. So we operate using a position address


     1 => 2 => 3 => 4 => 5 => 6 => 7 => 8

     1 => 2 => 6 => 5 => 4 => 3 => 7 => 8

     here,
          m - 1 =>  reverseStartNode = 2
          n + 1 => reverseEndNode = 7


 
*/


function mnReversal(head, m, n) {
    let
        currentNodePosition = 1,
        currentNode = head,
        reverseStartNode = head


    while (currentNodePosition < m) {
        // our m-1 start is need here to point to the n once we reverse linked list
        reverseStartNode = head
            = currentNode
        currentNode = currentNode.next
        currentNodePosition++
    }

    //  while nodeposition is between(m, n) we reverse the linked list
    // inorder to reverse it we need prevBuild, currentNode = head, next

    let prevBuild, next, reverseEndNode = currentNode
    while (m <= currentNodePosition && currentNodePosition <= n) {
        next = currentNode.next
        currentNode.next = prevBuild
        prevBuild = currentNode
        currentNode = next
        currentNodePosition++
    }

    reverseStartNode.next = prevBuild
    reverseEndNode.next = currentNode

    if (m > 1) {
        return head
    } else {
        return prevBuild
    }

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
                    next: null
                }
            }
        }
    }
}
console.log(mnReversal(linkedList, 2, 4))

