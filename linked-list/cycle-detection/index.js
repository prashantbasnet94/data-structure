/*

1. Tortoise and Hare are two pointers initated
2. We move tortoise 1 step and Hare moves two step at a time
3. We keep moving two pointers until they meet at the same point
4. If Hare points or lands on a null at any time we know we don't have cycle

5. Finding the node where cycle beigns? 
6. We initiate two pointers again, one at the starting of the linked list and another at the meeting of Tortoise and Hare 
7. We traverse one step at a time calling their next value and the moment both pointer overlaps we find the start of the cycle 

*/

const hasCycle = head => {
    let tortoise = head, hare = head, meeting = null, start = head

    while(true){
        tortoise = tortoise.next
        if(hare.next === null){
            return false
        }
        hare = hare.next.next

        if(tortoise === hare){
            meeting = tortoise
            while(start !== meeting){
                start = start.next
                meeting = meeting.next
                if(start == meeting){
                    return true
                }
            }
        }
    }

},
myrefactored = head => {
    let hare = head, tortoise = head

    while(true){
        if(hare === null || hare.next === null){
            return false
        }
        hare = hare.next
        tortoise = tortoise.next

        if(hare === null || hare.next === null){
            return false
        }
        hare = hare.next
        
        if(hare === tortoise)break
    }
    let start = head, meeting = hare
    while(start !== meeting){
        start = start.next
        meeting = meeting.next
    }
    return start
}