/*

    1 => 2 => 3 => 4 => 5 => 6

    6 -> 5 -> 4 => 3 => 2 => 1 => null


    1. Take the first head and head should point to null
    2. If head points to null, we need a next to be preserved
    3. We traverse throguh the element reversing it

    1 => null

    2 => 1 => null


    From here what we can conclude is:

    let prevBuild, currentHead = head, next


    whiel(currentHead){
        //next
        //currentHead
        //prev
        //currentHead goes to next

---------- var defined is updated in descending order in the loop   ---------
    }
    



*/

function reverseLinkedList(head) {
    let prevBuild, currentHead = head, next

    while (currentHead) {
        // preserve next
        next = currentHead.next
        // 1 => null
        currentHead.next = prevBuild
        // 1 => null is our build
        // saving it up for next build
        prevBuild = currentHead
        currentHead = next
    }
    return prevBuild
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
console.log(reverseLinkedList(linkedList))
