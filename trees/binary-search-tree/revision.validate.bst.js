/*

Write an alogrithm, that return if the binary tree is valid or invalid

Test Case:

A. Valid Tree

1.
              19
        15          25
    10      16  23      30

    How do i know this is a valid tree?
    At any given node,
     left child < parent node  &&  parent node < right child node

2. 
             
              19
        15          25
    10      16  23      30
14     13

BFS = [19, 15, 25, 10, 16, 23, 30, 14, 13]

       PreOrder: NRL (GRAB AS YOU GO) 
       InOrder: Go down one direction and when hit the null come back and grab it's parent
       PostOrder: Go down both direction and only when both direction are null grab it;s parent

DFS: {
NLR    PreOrder    : [19, 15, 10, 14, 13, 16, 25, 23, 30]
LNR    InOrder     : [14, 10,13,15,16,19, 23, 25,30] ===> No good to us
LRN    PostOrder   : [14,13,10,16,15,23,30,25,19] => Even dangerous no good in this case

}

Comparing the traversal data, we know immidiately BFS is no good to us.
So the only option left is DFS, 

after compariong the different order traversal in DFS, we can pick the preorder
so let's write out preorder algorithm and see what tweak we need make to land the result


B. In Valid Tree

            15
         25     60
                  
*/


function preOrder(list, node){
    list.push(node.value)
    if(node.left){
        preOrder(list, node.left)
    }
    if(node.right){
        preOrder(list, node.right)
    }
}

/*
    Above written preorder alog, has to verify during the traversal of each node that, 
    it is either less than some value or is greater than some value

    for example:

                20
        15              25
    10      18      23      30
14   13  16    19


1. we are @ (20), in order for our rule to work, something has to be lesser than 20 and something has to be greater than 20,
 ie. something < 20  && something > 20
2. Let's say we go left something has to be lesser than 15 and something has to be greater than 15
    we know 
    15 has to be lesser than 20, but it also has to be greater than something
    15 < 20 && 15 > something

3. again let's say we go left, somethign has to be lesser than 10 and something has to be greater than 10
    we know
    10 has to be lesser than 15, but it also has to be greater than something
    10 < 15 && 10 > something

4. let's say we decide to left again. similar case applies here

---------But what if we decide to go right ? ------------

5. let's say we decide to go right from the root, then
    25 has to be greater than something and 25 has to be lesser than something
    i.e 25 > 20 && 25 < something
6. we go right again,
    30 has to be greater than something and 30 has to be lesser than soemthing
    30 > 25 && 30 has to be lesser than something

------------Let look how can thing change if we change direction ---------------------

                20
        15              25
    10      18      23      30
7   13  16    19


7.
    A. we go left  form the root and then we go right 
        i. 15 < 20 && 15 > something
        ii. When we go right from here:
            18 also has to be greater than something and 18 has to be lesser than something
            18 > 15 && 18 < something

    B. 
        a. We go right again from 18,
            19 has to be greater than something and 19 has to be lesser than something
            19 > 18 && 19 < something

        b. We go left from 18
            i.  16 also has to be greater than something and 16 has to be lesser than something  
            ii. 16 < 18 && 16 > something


Conslusion:
----------
At any node, at any given time, the node has to be greater than something and lesser than something

1. If we go left and left and left, 
    i,e (20) => (15), 15 < 20 
    i.e (15) => (10), 10 < 15
    i.e (10) => (7)  7 < 10 

    what we have is node is greater than something, but we don't have what is lesser than the node i.e
        A
      /
    B
    we have B < A but we don't have the other half i.e B > something

    so we let's pick a value there, let assume it to be -Infinity 

    so know 1 can be written as
     i,e (20) => (15),   -Infinity < 15 < 20 
    i.e (15) => (10),    -Infinity < 10 < 15
    i.e (10) => (7),     -Infinity <  7 < 10 


                20
        15              25
    10      18      23      30
7   13  16    19


2 If we go right and right and right
    i.e (20) => (25),  20 < 25  && 25 < +Infinity
    i.e (25) => (30), 25 < 30  && 30 < +Infinity

3. 
    A. When we change direction:
            20
        /
        15 
            \
            18
        i.e (20) => 15 , -Infinity < 15 < 20
        i.e (15) => 18, ****we change direction****
            15 < 18 && 18 < 20

    B.
        20
        /
        15 
           \
            18
              \ 
               19
        i.e (20) => 15 , -Infinity < 15 < 20
        i.e (15) => 18, ****we change direction****
            15 < 18 && 18 < 20
        i.e (18) => 19, 18 < 19 && 19 < 20

        Here the common pattern is ,
        if we change direction  at any node,
        i.e if we go right,  we update the left boundry, right stays the same
    
    C.
        20
        /
      15 
        \
         18
        /
       16

        i.e (20) => 15 , -Infinity < 15 < 20
        i.e (15) => 18, ****we change direction**** going right means left boundry updates
            15 < 18 && 18 < 20
        i.e (18) => 16, **** chaning direction**** going left me left right boundry updates
            15 < 16 && 16 < 18

################### Change in direction ##################

 ======> Going right ==========> left boundry updates
 <============== Going left <============ right boundry updates
  
 
 now back to the code

 Modifications:
 1. Now we know we need left and right boundry
 2. We don't need the result of traversal we can remove list
 3. Return at any point if the node does not match our royal rule . 
    i.e it has to be greater than something and has to be lesser than soemthing
*/

function inTheRange(value, leftBoundry, rightBoundry){
    return value > leftBoundry && value < rightBoundry
}
function preOrderChanged( node, leftBoundry, rightBoundry){
    if(!inTheRange(node.value, leftBoundry, rightBoundry)){
        return false
    }
    if(node.left){
        if(preOrderChanged(node.left, leftBoundry, node.value) === false){
            return false
        }
    }
    if(node.right){
        if(preOrderChanged(node.right, node.value, rightBoundry) === false){
            return false
        }
    }
    return true
}

function validateTree(tree){
    return preOrderChanged(tree, -Infinity, Infinity)
}

let invalidTree = {
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
validTree = {
    "left": {
        "left": null,
        "right": null,
        "value": 4
    },
    "right": {
        "left": null,
        "right": null,
        "value": 10
    },
    "value": 9
},
Tree = require('./binary.search.tree'),
tree = new Tree()


console.log(validateTree(invalidTree))


/*

              10  
         5         15   
      1     7   11      16
      
      
      in order for this to be a valid binary tree

      i. node > node.left && node < node.right

1. @ 10,  10 > something && 10 < something
    a. if we decide to go left,  5 > something && 5 < 10 
    b. if go further left, 1 > something && 1 < 5

    here the common patten is if we go left, the right bound updates i.e i.e less than something

2. @ 10, we decide to go right
    a. if we decide to go right,  15 > 10 && 15 < something
    b. we go further right, 16 > 15 && 16 < something

    here on going right , the left boundry i.e greater than soemhting updates


    Depending on this principal


    let's determine which traversal algo to use?

    bfs: [10, 5, 15, 1, 7, 11, 16] => we know we cannot establish any relation using bfs

    how about dfs?

    we have 

              10  
         5         15   
      1     7   11      16

    preorder: grab as you go

    [10 , 5 , 1, 7, 10, 15, 11, 16] => looks like this will work 
    why?

    a.we go from 10 => 5, we know 5 has to lesser than 10
    b. 5 => 1, we know 1 has to be lesser than 5
    c. from 1 => 5 => 7, here 7 has to be greater than 5

    ------
    thus we know we have a realtion we can use or is needed to verify a node , node.left and node.right

    inorder: go down in one direction and if you hit null comeback and grab it
    result: [1, 5 , 7, 10, 11, 15, 16] => we don't see the realtion we need inorder to verfiy it

    postorder: go down in both direction and if you hit null on both then comeback and grab it
    [1, 7, 5, 11, 16, 15, 10]
    here as well we don't see the realtion


    thus our requried traversal pattern is DFS > In Preorder

let's write our dfs skeleton    
*/

function dfs(node, list){
    list.push(node.value)

    if(node.left){
        dfs(node.left, list)
    }
    if(node.right){
        dfs(node.right, list)
    }
    return list
}


// mofifying to suit our need
function inrange(value, leftBoundry, rightBoundry){
    return value > leftBoundry && value < rightBoundry
}


function dfsvalid(node, leftBoundry, rightBoundry){
    if(!inrange(node.value, leftBoundry, rightBoundry)){
        return false
    }

    if(node.left){
        if(dfsvalid(node.left, leftBoundry, node.value) === false){
            return false
        }
    }

    if(node.right){
       if(dfsvalid(node.right, node.value, rightBoundry) === false){
        return false
       }
    }
    return true
}


function validateTree2(tree){
    return dfsvalid(tree, -Infinity, Infinity)
}


console.log(validateTree2(invalidTree))
console.log(validateTree2(validTree))
console.log(validateTree(validTree))
