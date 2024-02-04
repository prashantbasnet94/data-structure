/*
     in doing (m,n) reversal we need to account for following things:

     1. linked list reversal algo
     2. m and n are important position, also m - 1 => n and m => n + 1
     3. So we operate using a position address

        m-1    m              n   n+1
     1 => 2 => 3 => 4 => 5 => 6 => 7 => 8

     1 => 2 => 6 => 5 => 4 => 3 => 7 => 8

     here,
          m - 1 =>  reverseStartNode  i.e 2 => 6
          reverseEndNode  => n + 1, i.e  3 => 7



*/


function mnReversal(head, m, n) {
    let
        currentNodePosition = 1,
        currentNode = head,
        mMinus1 = head


    while (currentNodePosition < m) {
        // our m-1 start is need here to point to the n once we reverse linked list
        mMinus1 = currentNode.next
        currentNode = currentNode.next
        currentNodePosition++
    }

    //  while nodeposition is between(m, n) we reverse the linked list
    // inorder to reverse it we need prevBuild, currentNode = head, next

    let prevBuild, next, m = currentNode
    while (m <= currentNodePosition && currentNodePosition <= n) {
        next = currentNode.next
        currentNode.next = prevBuild
        prevBuild = currentNode
        currentNode = next
        currentNodePosition++
    }

    mMinus1.next = prevBuild
    m.next = currentNode

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




function mnReversal2(head) {
    let currNode = head, mMinus1 = head, currentPosition = 1

    // till we reach m-1 position
    while (currentPosition < m) {
        mMinus1 = mMinus1.next
        currNode = currNode.next
        currentPosition++
    }

    //once we reach m, m to n should be reversed

    let m = currNode, prevBuild = currNode, next

    while (m <= currentPosition && currentPosition <= n) {
        next = currNode.next
        currNode.next = prevBuild
        prevBuild = currNode
        currNode = next
        currentPosition++
    }
    mMinus1.next = prevBuild
    m.next = currNode

    if (m > 1) {
        return head
    } else {
        return prevBuild
    }

}