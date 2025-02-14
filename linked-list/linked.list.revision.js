 /*

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.



 1. we need compare between two list
    a. so check and record the min value

    if(list1.val < list2.val){
        currentNode = list1
        list1 = list1.next
    }else{
        currentNode = list2
        list2 = list2.next
    }


 */

function mergeSortedLinkList(list1, list2){
    if(!list){
        return list2
    }
    if(!list2){
        return list1
    }
    let currentNode = {
        val : -1,
        next: null
    }
    while(list1 && list2){
        if(list1.val < list2.val){
            currentNode.next = list1
            list1 = list1.next
        }else{
            currentNode.next = list2
            list2 = list2.next
        }
        currentNode = currentNode.next
    }

    if(list1){
        currentNode.next = list1
    }else if (list2){
        currentNode.next = list2
    }
    return currentNode.next
}