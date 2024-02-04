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



*******************************************



     1 => 2 => 3

     to reverse this

     3 => 2 => 1 => null


     curentHead     next
         1      =>   2

and where is the prev?
        prev = null


   prev      curentHead     next
  null  =>      1      =>   2


3 things in the picture:

 1. we need to point currentNode.next to prev
 2. since we are going to overwrite currentNode.next we need to store that somewhere, so we create
      i  next = curretnNode.next
      ii. currentNode.next = prev from 1.

 3. Now to prcoess furhter linked list so far has to be previous for next processing node
      iii prev = currentNode

4. Now to go on the flow:
    currentNode = next







*/





const reverseList = function (head) {
    let
        currNode = head,
        prev = null,
        next

    if ([null, ''].includes(head) || head.length < 2) {
        return head
    }

    while (currNode) {
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
}, reverseLinkedList2 = head => {
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

    let prevBuild, currentHead = head, next

    while (currentHead) {
        next = currentHead.next
        currentHead.next = prevBuild
        prevBuild = currentHead
        currentHead = next
    }
    return prevBuild
},
    // 1 => 2 => 3 => 4 => 5 => null
    // null => 5 => 4 => 3 => 2 => 1 => null
    tested = function (head) {
        let
            currNode = head,
            prev = null


        while (currNode) {
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

/*

1  => 2 => 3 => 4 => 5
5 => 4 => 3 => 2 => 1


firstNode -----> lastNode

1. 1st node should point to null
2. 2nd node should point to 1st node
3. 3rd node should point to 2nd node
4. 4th node should point to 3rd node

temp = currentNode
curentNode = currentNode.next


1. currentNode.next = null
     1 => null

2. save the result result = 1 => null
3. since we need to record currentNode to preserve the list let's use temp to save it
    currentNode = temp
    currentNode = currentNode.next

    (2)
    temp = currentNode
    currentNode.next = result
    (2) => (1) => null

    result = 2 -> 1 -> null

    c






*/
function reverse(list) {
    let currentNode = list
    let temp = currentNode
    let result = null

    // reversing it
    while (currentNode.next) {
        currentNode.next = result
        result = currentNode
        temp = temp.next
    }
}



function reverse(list) {
    let currentNode = list
    let temp = currentNode
    let result = null

    // reversing it
    while (currentNode.next) {
        currentNode.next = result
        result = currentNode
        temp = temp.next
    }

    while (currentNode) {
        // preserve the stage first
        temp = currentNode.next

        // process the current node
        currentNode.next = result

        //store the result
        result = currentNode

        // prep for the next
        currentNode = temp
    }
}



function myReverse(head) {
   /*
     1. we need to access a node
     2. alter the relationship
     3. Have a result
   */

    let curentNode = head
    // since we are going to alter the relationship we need to preserve our original chain
    // as once we alter the node it's going to forget everthing previously
    let temp = currentNode
    let result = null


    while (currentNode) {
        //preserve the orginal status
        temp = curentNode

        // process the current node
        curentNode.next = result

        // store the new result
        result = curentNode

        // prep for the next step
        curentNode = temp
    }
}