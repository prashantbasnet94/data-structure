

function reverseLinkedList(head) {
    const currentHead = head

    if (!head) {
        return null
    }

    let
        // 2
        next = head.next,
        // null
        newlyBuildList = null,
        // 1
        temCurrentHead = currentHead

    //  1 => null

    while (next) {

        temCurrentHead.next = newlyBuildList
        newlyBuildList = temCurrentHead
        temCurrentHead = currentHead.next
        console.log(newlyBuildList)
    }
    return newlyBuildList


}

function afterStudy(head) {
    /*
        we need 3 things
     prevBuild  currentHead next
     null       1           2



     run a while loop where currentHead exist

         1 preserve the next using next var
            next = currentHead.next

         2. update the currentHead as we want to reverse it,  1 => null
            currentHead.next = prevBuild

         3. now update your prevBuild
            prevBuild = currentHead

        4. update the currentHead with the preserved next
            currentHead = next




     */
    let prevBuild, currentHead = head, next
    while (currentHead) {
        next = currentHead.next
        currentHead.next = prevBuild
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
console.log(afterStudy(linkedList))