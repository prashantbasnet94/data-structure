/*

Most important poisitons:
m-1,m,n n+1

1. Point m-1 => head of new reversed linked list
2. Tail Of new reveresed linked list => n+1


1 => 2 => 3 => 4 => 5 => 6 => 7

m = 3, n = 5

startBefore = 2
prevBuild = 5 => 4 => 3

1 => 2 => 5 => 4 => 3 => 6 => 7
*/


const mnReversal = (head, m, n) => {
    let 
    headNode = head,
    currentPosition = 1,
    currNode = head,
    startBefore,
    start,
    endAfter,
    end,
    prevBuild,
    tailOfReversedList 

    while(head){
        
        if(currentPosition === m -1){
            //store the start of 3 i.e 2
            startBefore = currNode
        }
        if(currentPosition ===m){
            tailOfReversedList = currNode
        }
        if(currentPosition >= m && currentPosition <= n){
            //reverese in between list
            let next, currNode2 = currNode
            while(currNode2){
                next = currNode2.next
                currNode2.next = prevBuild
                prevBuild = currNode2
                currNode2 = next
                currentPosition++
            }
            startBefore.next = prevBuild
            tailOfReversedList.next = currNode
        }

        currentPosition++
    }
},
 mnReversal2 = (head, m, n) => {
    /*
1 => 2 => 3 => 4 => 5 => 6 => 7

m = 3, n = 5

    */
    let 
    currentPosition = 1,
    currNode = head,
    start = head

    while(currentPosition < m){
        start = currNode
        currNode = currNode.next
        currentPosition++
    }

    let newList = null, tail = currNode, next
    while(currentPosition <= n && currentPosition >=m){
      next = currNode.next
      currNode.next = newList
      newList = currNode
      currNode = next
      currentPosition++
    }

    start.next = newList
    tail.next = currNode
    if(m > 1){
        return head
    }else{
        return newList
    }
},
mnreversal3 = (head, m, n) => {
    let currentPosition = 1,
    start = head,
    currNode = head

    while(currentPosition < m){
        start = head
        currNode = currNode.next
        currentPosition++
    }
    let reversedList= null, tailOfReversedList = currNode
    while(currentPosition <= n && currentPosition >=m){
        const next = currNode.next
        currNode.next = reversedList
        reversedList = currNode.next
        currNode = next
        currentPosition++
    }
  // 1=> 2 => 3 => 4 => 5 => 6

  // 1 => 2 => 5 => 4 => 3 => 6
    start.next = reversedList
    tailOfReversedList.next = currNode

    if(m > 1 ){
        return head
    }else{
        return reversedList
    }
}