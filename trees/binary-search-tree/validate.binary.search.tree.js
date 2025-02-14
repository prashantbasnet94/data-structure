/*
https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22363390#reviews

    Verify Constraints

1. Can there be duplicate values in the tree?
yes, if you receive duplicate values the tree is not a valid valid bianry search tree

Test Cases:
Valid and Invalid tree cases

Valid
1.    
            12
       7             18  
    5     9     16        25 
    return true

2.
            null 
            return true
3. 
        10 
        retun true

Invalid Case:
4.
            12
        15      17
        return false

5. 
            13
         9      7
         return false

6. 
            15
        12       17
    10     16 16     18
    return false  


    Key here is considerig these cases and making sure our solution accounts for the entirety 

Approach:
 1. Since BFS allows me to go form top to it's respective child it's helpful
 2. At any given point, if i can claim it's left node is smaller and right node is larger and continue the traversal then i can say it is valid
 2. If at any point left is bigger than the parent or right is smaller than the parent i can say is is invalid


*/

// console.log(JSON.stringify(tree))
let invalidTree1 = {
    "left": {
        "left": {
            "left": {
                "left": null,
                "right": null,
                "value": 0
            },
            "right": {
                "left": null,
                "right": null,
                "value": 2
            },
            "value": 1
        },
        "right": {
            "left": null,
            "right": null,
            "value": 6
        },
        "value": 4
    },
    "right": {
        "left": {
            "left": null,
            "right": null,
            "value": 15
        },
        "right": {
            "left": null,
            "right": null,
            "value": 170
        },
        "value": 1
    },
    "value": 9
},
invalidTree2 = {
    "root": {
        "left": {
            "left": {
                "left": null,
                "right": {
                    "left": null,
                    "right": null,
                    "value": null
                },
                "value": null
            },
            "right": {
                "left": {
                    "left": null,
                    "right": null,
                    "value": 3
                },
                "right": null,
                "value": 4
            },
            "value": 1
        },
        "right": {
            "left": null,
            "right": null,
            "value": 6
        },
        "value": 5
    }
},
validTree1 = {
    "left": {
        "left": {
            "left": {
                "left": null,
                "right": null,
                "value": 0
            },
            "right": {
                "left": null,
                "right": null,
                "value": 2
            },
            "value": 1
        },
        "right": {
            "left": null,
            "right": null,
            "value": 6
        },
        "value": 4
    },
    "right": {
        "left": {
            "left": null,
            "right": null,
            "value": 15
        },
        "right": {
            "left": null,
            "right": null,
            "value": 170
        },
        "value": 20
    },
    "value": 9
}
function validateBinarySearchTree(node){
    
    let queue = [node]

    while(queue.length > 0 ){
        let currNode = queue.shift()
        if(currNode.left){
           if(currNode.value < currNode.left.value) {
            return false
           }
           queue.push(currNode.left)
        }
        if(currNode.right){
            if(currNode.value > currNode.right.value){
                return false
            }
           queue.push(currNode.right)
        }
    }
    return true
}

// console.log(validateBinarySearchTree(invalidTree1))
// console.log(validateBinarySearchTree(invalidTree2))
/*
              5
          1      6
    null     4  
           3
          

*/



/*


                12
            7          18
        5       9 16        25   

We have two options:

    BFS approach:
        Starts from the root and navigates level by level
        which means that subsequent reversals from one node value to the next node value goes at a level order.

        For example:
        we move from 12 => 7 , here' the traversal path is correct
        we move from 7 => 18. now this doesn't help us
        18 => 5, 5 => 9, 9 => 16 and 16 => 25 is also not useful

Instead let looks at:
    DFS approach:
        Starts from 12
        12 => 7
        7 => 5
        5 => 7 => 9

        There's a greater overlap of figuring out that logic than in BFS
    
Now let's see which traversal best suits:

                12
            7          18
        5       9 16        25   

1. Preorder: NLR
        [12, 7 , 5 , 9, 18, 16, 25]

2. Inorder : LNR
        Goes all the way down to the left and then start traversal [Really not meaningful]
        [5, 7, 9, 12, 16, 18, 25]
        if we traverse from 12 to 5, we don't know what previous value along the way were
        same as BFS

3. Postorder: LRN
        Goes all the way down to the left and then start traversal [Really not meaningful]
        [5, 9, 7, 16, 18, 25, 12 ]


We've have managed to know that preorder traversal is most likely the correct traversal for us to work with.
Now we need to figure out the realtionship between these nodes and this traversal

DFS is indeed a recursive solution, which means we are able to pass information while we traverse from one node to next

The main relationship that governs is that when we do this traversal to the left, there is some realtionship that we expect this value to have,
and that is we expect any node value left to the parent node is lesser
i.e (7) should be smaller than (12)
again going left, 
(5) should be smaller than (7)

when we traverse from (7) => (9) i.e we go right
we care (9) > (7) && (9) < (12) ie (7) < (9) < (12)

When we traverseed from (12) to left , we cared that (7) is lesser than 12,
This lesser than 12 value persisted when we went right too i.e from (7) => (9)
Whereas when we went left we replaced the < (12) i.e lesser than 12 value with <(7)
i.e (7) => (5) i.e (5) < (7)
lesser than persisted with  updated value
But only when we switch direction i.e to go right , we see that we had to add an additional greater than value i.e 7 < () < 12

                12
            7          18
        5       9 16        25   

Similarly going right from the root,

only condition we care about is that value of () to the right is greater than root node (12)
when we go right again from (12) i.e to (18), we care ()  (18) > (12),
if we were to go left from (18) left i.e to (16), we still want (16) >  (12) but now we also want it to be  lesser than (18) i.e (12) < (18) 

Here we noticed a trend in traversal:
If we go down the same direction we persist the previous greater than or lesser than condition, 
meaning if we went left, we are keeping a fact that this value to the left (7) must be lesser than (12)
if we go left again, we are keeping the lesser than <, but we are updating the value that it must be lesser than the immediate parent
i.e (5) < (7) , 5 must be lesser than 7

going right from 7, (7) => (9)
We want to keep the previous lesser than value i.e (9) < (12) and add an additional greater than value i.e (9) > (7)i.e (7) < (9) && (9) < (12)

If we change direaction and decide to go right from the root (12):

(12) => (18), we persist the condition that (18) should be greater than (12) i.e (12) < (18)  i.e (new node) > (parent node)
again going right, i.e (18) => (25), we persit the condition (new node on the right ) > (node we went right  from) i.e (25) > (18)

If we decide to go left from (18) => (16) then.
(16) should be greater than (12) still persit in addition we also expect it to be lesser than it;s parent (18)

                    12
            7                18
        5       9       16        25    
    3       6 8    10

General Rule:
1. 

            X
          /
        A
      /
    B
   /
  C
    Traversal to the left of the root node implments the rule that 
    left node < parent node
    if we go (X) => (A), 
        (A) should less than (X) i.e (left child node) < (parent Node)
    if we traverse left again (A) => (B), 
        our rule should enforce  (B) < (A)
    if we traverse left again (B) => (C), 
        our rule should enforce  (C) < (B)

---------------- if direction does not chnage than only the less than < (value) is updated the rule is same -------------------
    Common pattern, must be lesser than (X), whereas X is an updated value in each traversal


2. Traversal right from left child node of parent
            X
          /
        A
          \
            B
              \
                C
               /
              D 
    Traversal to the right from the left child of parent node
    a. Going left (X) => (A), we expect (A) < (X)
    b. Going right (A) => (B), we expect (B) to be greater than (A) but lesser than (X) i.e (A) < (B) <(X)
        we keep (B) < (X), but insert that (B) as (A) < (B) < (X)
    c. Going right again (B) => (C), we expect (C) to be greater than (B) but lesser than (X) i.e (B) < (C) < (X)
        we keep that (C) < (X), also  (B) < (C)
    d. (C) => (D), we expect (D) < (C) but also (D) to be greater than (A)
        Common pattern, must be lesser than (X),  whereas must be greater than updated value in each traversal



3. Traversal right from root
                X
                  \
                    A
                      \
                       B
                        \
                         C
    when going right, only condition we care about is (Node Value to the right)  > (parent Node)
    a. we care that (A) > (X)
    b. Going futher right from (A) i.e (A) => (B), we care (B) > (A)
    c. Going futher right from (B) i.e (B) => (C), we care (C) > (B)

    Common pattern, must be greater than (X), whereas X is an updated value in each traversal


4. Traversal, going left from the right child node of parent

                X
                  \
                   A
                 /
                B
               /
              C
    when go right from (X) => (A), we care (A) to be greater than (X) i.e (A) > (X)
    a. When we go left from (A) => (B), we expect (B)  greater than (X)  but also to be lesser than (A) i.e   (X) < (B) < (A)
    b. Goign left from (B) => (C), we expect (C) to be greater than (X) but also to be lesser than(B) i.e  (X) < (C) < (B)

    Common pattern, must be greater than (X), whereas must be lesser than updated value in each traversal

    Here, as a common pattern going left from the right child node, if we go down the same direction, we persit the previous
    greater than or lesser than condtion.


5. Traversal, going left and then right from the right child node of parent

                X
                  \
                   A
                 /
                B
                  \
                   C
                    \
                     D
              
    when go right from (X) => (A), we care (A) to be greater than (X) i.e (A) > (X)
    a. When we go left from (A) => (B), we expect (B)  greater than (X)  but also to be lesser than (A) i.e   (X) < (B) < (A)
    b. Goign right from (B) => (C), we expect (C) to be greater than (B) but also to be lesser than(A) i.e  (B) < (C) < (A)
    c. Going right from (C) => (D), we expect (D) to be greater than (C) but also lesser than (A)

    So when we change direction, like X-A-B-C
    Common pattern, must be greater than (X), whereas must be lesser than updated value in each traversal

    Here, as a common pattern going left from the right child node, if we go down the same direction, we persit the previous
    greater than or lesser than condtion.


Rules:
                12
            7          18
        5       9 16        25   

A. Traverse mode A
-------------------
            X
          /
        X
      /
    X
    1. At any node, to evaluate if the tree is valid, we need left and right boundries.i.e left < (node) < right
        when going left from (12) i.e (12) => (7), 
        we know right bourdry, but what is our left boundry?
        (7) can be greater than anything as long as it is less than (12). So we can pick any small value like -10000
        a.  -10000 < (7) < 12
    2. As we go left we persit the greater than value, i.e  @ (5),  -10000 < (5) whereas the less than value is now updated 
        i.e -10000 < (5) < (7)

    Remeber we have no idea how far down the left branch goes, 

                        12
                    7          18
                5       9 16        25   
    -1000 000

    let's say we have -1000000 value in the left,  when we do our traversal, our traversal will cheeck if it's within the boundy 
    i.e -10000 < -1000 000 < (5)  
    it's perfectly valid for -1000 000 to be there at the left leaf node, but our rule does not work.
    So what we can derive is the value we are considering to be anything should be infinitesimally small, so that we don't easily run out of boundry
    and the value that is 

    infinitesimally small = -Infinity

    So we can say , when we traversing to the left for the first time, left boundry should be -Infinte and right should be parent node 
        i.e going left from (12), (12) => (7), 
            -infinity < (7) < (12)

    So now no matter how far we go, every value is going to be greater than -infinity

B. Traverse mode B
---------------------
            X
          /
        X
         \
          X
           \
            X

                    12
            7                 18
        5       9        16        25   
             8      11



     But the moment we change the direction i.e go right, we will replace the -infinity with the immidiate node that shift the direction
    for ex:
    a. (7) => (9), left boundry = (- infinity) => (7), right boundry = root node => 12
         i.e  (7) < (9) < (12)
         Now we have 2 options:
         i. Going right :
            (9) => (11), we see that the current value of (9) is greater than (7), so we update it accordingly
            left boundry = (9), right boundry = root node
        ii. Going left  :
            (9) => (8),  left boudry = (7), right boudry = (9)

************* Left from the parent Node ************************
   #. if we go left,  i.e left boundry stays the same, right boundry 
   #. if we go right, 
        update left boundry value to the current node's value i.e immdeidate direction shifter
        right boundry stays the same

    what about the right boundry value?
************* Right from the parent Node ************************
    let's go to the right child node form parent
    
    #. update left boundry value to the current node's value i.e immdeidate direction shifter or parent node
    what about the right boundry?
    current node should be greater than left boundry but also less than some value. let's use +infinity as something we did for left value
    i.e (12) < (18) < (+infinity)

    #. if we go left, we need to update the right boundry to the current node's value || immediate direction shifter and left boundry stays the same
    #. if we go right again we update  left boundry value to the current node's value i.e immideiate direction shifter
     right boundry the same i.e +infinity
####################################################################
                    CONCLUSION
####################################################################

ON LEFT:
left boundry  = no change, stays the same
right boundry = update to the immediate direction shifter node || current node that started traversal

ON RIGHT:
left boundry  = update to the immediate direction shifter node || current node that started traversal
right boundry = no change , stays the same

             9
        4         20
    1       6   15      170
 0    2   
 -------------------------------
 0    1   2 3   4  5   6  7
 1    2   3 4   5  6   7  8 
*/




let 
Tree = require('./binary.search.tree'),
tree = new Tree()

tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.insert(0)
tree.insert(2)

function validateTreeDFS(tree){
    return PreOrderDFS(tree,  -Infinity, Infinity)
}
function inRange(x, min, max){
    return x >min && x <max
}
function PreOrderDFS(node, leftBoundry, rightBoundry) {
    // NLR
    if (!inRange(node.value, leftBoundry, rightBoundry)) {
        return false
    }
    if (node.left) {
        /* 
            if there is a left child, then we are going to traverse down and continue checking the recusion
             after we traverse all of the left values, is it enough to say that the binary tree is valid?
             No, we have to comeback and traverse the right side

            if we fail at anypoint in this traversal meaning any of these values come back to us as false,
             we need to pass that false back as well
        */
        if (PreOrderDFS(node.left, leftBoundry, node.val) === false) { // or (!PreOrderDFS(node.left, leftBoundry, node.val ))
            return false
        }

    }
    if (node.right) {
        if (PreOrderDFS(node.right, node.val, rightBoundry) === false) {
            return false
        }
    }
    return true
}

console.log(validateTreeDFS(invalidTree1))