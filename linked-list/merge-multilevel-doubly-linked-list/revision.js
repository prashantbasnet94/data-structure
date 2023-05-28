/*

    Merge doubly linked list:


    1. in order to merge a double linked list
        node.next = node2
        node2.prev = node

    1 => 2 => 3 => 7 => 8
              ||
              4
              ||
              5
              ||
              6

    2. In order to merge the child, we need to identify the child as we traverse the linked list
        a. once the child is found
            i. find the tail of the children node list
                i.e 6 
                (6).next = 7
                if(tail.next != null) => tail.next.prev = tail

            ii. currentNode.next = currentNode.child
                currentNode.next.prev = currentNode
            iii. currentNode.child = null


*/


function mergeDoublyLinkedList(head) {
    let currentNode = head

    while (currentNode) {
        if (currentNode.child === null) {
            currentNode = currentNode.next
        } else {
            /*
                find currentNode children nodes tail
                    a. tail.next = currentNode.next 
                    b. if tail.next is not null, set tail.next.prev = currentNode
            */
            let currentNodeTail = currentNode.child

            while (currentNodeTail.next) {
                currentNodeTail = currentNodeTail.next
            }
            currentNodeTail.next = currentNode.next
            if (currentNodeTail.next) {
                currentNodeTail.next.prev = currentNodeTail
            }

            // once tail is done
            // we update the currentNode and it's apparent child relation to next 

            currentNode.next = currentNode.child
            currentNode.next.prev = currentNode
            currentNode.child = null
        }
    }
}