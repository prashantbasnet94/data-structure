/*

Full Tree: =>
    Either 0 or 2 children, can be any level and not all levels can be completely full. 
At any level at any node, it can have either 0 or 2 children

           X
          /   \
        X       X
              /   \
             X     X


Complete Tree:
    One where every level is completly full, the only level that doesnot need tbe be full is the last level.
    ALl of the nodes must be pushed as far left as possible.


    Complete Tree
            X
          /   \
        X       X
      /   \
     X     X

            X
          /   \
        X       X
      /   \    / 
     X     X   X
     

     Full And Complete
            X
          /   \
        X       X
      /   \   /   \  
     X     X  X    X


There is more complexity and nuance to receiving a complete tree rather than a full tree

Question:
--------

Given a complete binary tree, count the number of nodes in the tree

Verify the constraints:

1. Empty binary tree
    return 0

Test Cases:

1.
            X
          /   \
        X       X
      /   \   /   \  
     X     X  X    X
     return 7

2.
            X
          /   \
        X       X
      /   \
     X     null
     return 4

2.
            X
          /   \
        X       X
      /   \    / \
     X     X  X   null
     return 6



     Since this can be done by BFS or DFS easily at the complexity of 
        Time Complexity: O(N)
        Space Complexity: O(N)
    
    Does traversal mattter? and does it drive towards DFS or BFS.
    95% time it does, and 5% it does not

    This question is the perfect example of does not
    It leverages more on our critical and abstract thinking involving the complete binary tree struture than the actual traversal algos

    So to beign with, what we need to really thing about is the fact that this is a complete tree, 
    and we have to think about what characterisitcs are there as well as what goal we are trying to achive

    In our case, we are trying to count the number of nodes in this tree.
    So let's take the idea that we;re looking for the total number of nodes in any given tree but also the fact that it;s a complete tree
    
    what are the facts about complete tree?
    Complete trees are full at every single level except for the last one

    so in a way you can see that you almost have to break up this problem of counting the nodes in the tree 
    into 2 section

            X           |
          /   \         |    
        X       X       |--------> First Section    
      /   \    / \      |
     X     X  X   null
     ----------------------------> Second Section

     So if we break this prblem into two section, what we're able to say,
     1. How efficiently can i count the nodes above this last level || first section
     2. How efficiently can i count the nodes in last level || second section

1. How efficiently can i count the nodes above this last level || first section
     We also want to keep in mind that we are tying to achive an optimal time better than o(N),
     which means each of these section must be able to perform in eighter O(logN) or O(1)

So knowing that, let's think about how can we calculate the size of this part of the tree || first section

            X              2^0 => 1
          /   \
        X       X          2^1 => 2 
      /   \    / \
     X     X  X   X        2^2 = 4   
    / \    / \ /\  /\
    X X    X X X X X X     2^3 = 8    

Here, we can see very cleary, if we had a tree of this size just up until this point

            X              
          /   \
        X       X          
     --------------- number of values in above proition is 3
      /   \    / \
     X     X  X   X  
     ---------------> At this level, it's equal to 4, 4 - one level i.e 1 = 3
    / \    / \ /\  /\
    X X    X X X X X X    
similary, the next level we have 8 nodes, 8 - 1 = 7, 7 is the total number of nodes we have above that level

15 is total number of nodes in current tree, 15 is 1 less than the next level.
So what we can say is that the value of the number of nodes in this upper portion of the tree is equal

    number_of_nodes_in_the_upper_portion_of_the_tree = 2^(height_of_the_tree-1) -1

using the same formula:
At level 0 ,
    nummber of nodes at height = 2^(height)
    number of nodes = 2^(0) = 2 ^ 0 = 1

    nummber of nodes at present above that height = 2^(height) -1 = 2^(1-1) - 1 = 2^0 -1 = 1-1 = 0
 
At level 1 ,
    nummber of nodes at height = 2^(height )
    number of nodes = 2^(1) = 2 ^ 1 = 2

    nummber of nodes at present above that height = 2^(height ) -1
    Number of nodes above level 2 is given by number_nodes_at_level_2 i.e 2 -1 = 1

At level 2 ,
    nummber of nodes at height = 2^(height)
    number of nodes = 2^(2) = 2 ^ 2 = 4

    nummber of nodes at present above that height = 2^(height) -1
    Number of nodes above level 3 is given by number_nodes_at_level_3 i.e 4 -1 = 3

At level 3 ,
    nummber of nodes at height = 2^(height)
    number of nodes  = 2 ^ 3 = 8

At any time in the complete tree,
    nummber of nodes at present above that height = 2^(height ) -1
    Number of nodes above level 3 is given by number_nodes_at_level_3 i.e 8 -1 = 7


            X
          /   \
        X       X
      /   \   /   \  
     X     X  X    X
    /
   X

   if we can find the height, by travesering through left , we will find the height by counting the number of steps that we took along the way
   actual height = 4

   But what's the performance doing this traversal?

   Here we took 4 steps which is the height of the tree, 
   we can say this in any case  it runs in O(h) time, what's h, h = logN

   Log base 2 i.e log2 of the full number of nodes of this tree is equal to height of the tree

   so this means runtime for finding the height is o(logN), which implies logN is the time it take for us to calculate number of nodes 
   in above portion of any complete binary tree 
    

Now, 
we know how to calculate number of nodes in first section, how do we calculate number of nodes in second section?

Couple of hints:
1. For all the nodes that could be in second secton or leaf nodes, they must be pushed to the very left. 
    Meaning that if you are able to find the rightmost node at this level, you can assume that all the nodes to the left exist
    Which means, if you are able to figure out what number from left to right is , you can immediatly tell how many nodes are in this level
2. The trick is figuring out that this is the right node to look for
3. We need to do this logN time, what search can we perfom in log N time? binary search. How do we perform the binary search here?

Number of nodes at the last level is variable, we have no idea how many could be here, 
what we know is 
min node is 1 and max = 2^(h-1)

Now we know the min and the max, we need to figure out a couple of things:
1. Indentifing what we are looking for is the right most node at that level
2. Once we find out right most node at that level we still need to figure out how that tells us how many nodes are here to the left of it
    What we can do is,leveraging the min and max we can almost apply indices to these values

            X              
          /   \
        X       X          
      /   \    /  \
     X     X  X      X       
    / \   / \ /\    / \
    X X   X X X null nul null     
    0 1   2 3 4 5    6   7

    let's say you found a node that has associated index value of  4, the
    4 +1 (index starts @ 0) = 5 nodes






We can now tell the height of the tree and max number of nodes here, but we have no idea what right most node actaully is
1. Figuring out an effictive and efficinet way of determining what the right most node in this level is.
2. Once we have figured out that we want to search for a node that's down somewhere in the leaf node, if we are going form the root
    how do we effecitively traverse the tree and make the right decision meaning left or right node to go down? In order to get to that node or see if that node even exist


1. Figuring out an effictive and efficinet way of determining what the right most node in this level is.

if we were to treat the last level like an array,We know last level nodes is equivalent to n/2 i.e O(N) and this we cannot have. 
Our max time in worst case should atleast be o(logN). 
Then how do we find some particular value in an array in logN time?
The only way to search anything in logN is Binary search

Can we apply binary search to finding the right most value inside of this level or array.
Binary search only works if we have some kind of sorted order, which we have in the indices.

If we were to use indices as an actual value to do binary search, we have then figured out an way to see if some particular node exist


            
Apply Binary Search

            X              
          /   \
        X       X          
      /   \    /  \
     X     X  X      X       
    / \   / \ /\    / \
    X X   X X X null nul null     
    0 1   2 3 4 5    6   7

we need left and right value
left: 0
right: 7
mid: (3.5) => 4

now we know the node we are looking for is index 4.
Let;s assume that we've already solved an effective way to get from the root down to here i.e node at index 4.
And we see that node exist, we also know that every node to the left of this node must exist

There's no need for us to ever search on the left of this node to see if any of these node exist.

Howerver, we don;t know that this node i.e node at index 4 is the right most node at this point
The right most node could exist on the right side, but also scould be this value like in this example

Note:
    if the value exist, left = midVlaue
    if the value doesnot exist, right = mid -1

For this reason, we need to shift the left equal to the mid value
left = 4
right 7
mid = 5.5 => 6

we found that node at index 6 does not exist, which also means that there is no node to the right of 6 including itself,
which is why we move right = mid -1

So now, we have 
left = 4
right = 5
mid = 4.5 => 5

we go down and check node at index 5 and turns out there is no node, so here we once again shift right value by 1

left = 4
right = 4
mid = 4,

unlike traditional binary search, when left and right overlap, we don;t perform the search again
we know this is the value we are looking for,
we found our right most value
First problem is solved.
------------------------


2. How to navigate from root down to some value in logN time, when we don't know what the path of taking left or right will be

    We want to go to position || index 4, leaf node from the root
    what we know is that all of these nodes that could be patentially down are all part of the tree that is extended from root

How do we determine mathematically wheather or not some value we know the index of, lives on right or left branch of the root.
If i decide to go right, i am throwing away everything on the left

Here, it's the same thing, it's binary search again. We are going to retake the left and the right indices
left = 0
right = 7
mid = 3.5 => 4

rounding up meaning going right
rounding down meaning going left


            X              
          /   \
        X        X   we are here       
      /   \      /  \
     X     X    X      X       
    / \   / \   /\    / \
    X X   X X   X null nul null     
    0 1   2 3   4 5      6  7  
At this node, we question which of the nodes down are accecible form this node ?
4-7 are

Similarly, we are going to shift the left to be equal to this mid value 
left = 4,
right = 7
mid = 6

6 > 4, which means value we are looking for is less than mid value, so we go left

            X              
          /   \
        X       X      
      /   \    /  \
     X     X  (X)*  X    * we are here       
    / \   / \ /\    / \
    X X   X X X null nul null     
    0 1   2 3 4 5      6  7

left = 4, 
right = midvalue -1 = 5
midvalue = 4.5 => 5
So, five is what we are going to search as the mid value for this branch
here we see that our value i.e 4 is less than mid vlaue,
so we go left

            X              
          /   \
        X       X      
      /   \    /  \
     X     X  X     X          
    / \   / \ / \    / \
    X X   X X *X null nul null     
    0 1   2 3 4 5      6  7

    Here we find it.


             9
        4         20
    1       6   15      170
 0    2   
 -------------------------------
 0    1   2 3   4  5   6  7
 1    2   3 4   5  6   7  8 
*/



// count first section
// count section section

let 
Tree = require('../binary.search.tree'),
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

// console.log(JSON.stringify(tree))


const
getTreeHeight = (root) => {
  let currNode = root,
     height = 0

  while(currNode.left){
    currNode = currNode.left
    height++
  }
  return height
},
nodesPresentAtHeight = height => {
  return  Math.pow(2, height)
},
nodesPresentAboveHeight = height =>  Math.pow(2, height -1) - 1,
height = getTreeHeight(tree.root),
nodesAtFirstSection = nodesPresentAtHeight(height),
nodeExistDescription= (indexToFind, height, node) => {
    /*

               9
        4         20
    1       6   15      170
 0    2   
 -------------------------------
 0    1   2 3   4  5   6  7
 1    2   3 4   5  6   7  8 

 */
  // here - 1 is for the index starts @ 0
  let left = 0, right = Math.pow(2, height) -1, 
  // keeps track of how many steps we've gone down 
  count = 0
  while(count < height){
    console.log('currentNode () @ ', node.value)
    console.log('checking for rightMostNode @ index', indexToFind)
    //  we need the midlle of the node i.e indexToFind
    let midOfNode = Math.ceil((left + right)/2)
    console.log('current midOfNode @ index ', midOfNode)

    if(indexToFind >= midOfNode){
      console.log('since index of indexToFind >= midOfNode', indexToFind, midOfNode)
      console.log('going right => \ ', 'current left index @ ', left)
      node = node.right
      left = midOfNode
      console.log('new currentNode () @ ', node.value , 'new left index @ ', left)

    }else{
      console.log('since index of indexToFind < midOfNode', indexToFind, midOfNode)
      console.log('going left <= / ', 'current right index @ ', right)
      node = node.left
      right = midOfNode - 1
      console.log('new currentNode () @ ', node && node.value , 'new right index @ ', right)
    }
    console.log()
    console.log()

    count++
  }
  return node !== null
},
nodesAtSecondSectionDescription = () => {
/*

               9
        4         20
    1       6   15      170
 0    2   
 -------------------------------
 0    1   2 3   4  5   6  7
 1    2   3 4   5  6   7  8 


our new indexToFind @  4

currentNode () @  9
checking for rightMostNode @ index 4
current midOfNode @ index  4
since index of indexToFind >= midOfNode 4 4
going right =>   current left index @  0
new currentNode () @  20 new left index @  4


currentNode () @  20
checking for rightMostNode @ index 4
current midOfNode @ index  6
since index of indexToFind < midOfNode 4 6
going left <= /  current right index @  7
new currentNode () @  15 new right index @  5


currentNode () @  15
checking for rightMostNode @ index 4
current midOfNode @ index  5
since index of indexToFind < midOfNode 4 5
going left <= /  current right index @  5
new currentNode () @  null new right index @  4




node () does not exist @ mid  4
shifting right from  7  => mid -1 3



our new indexToFind @  2

currentNode () @  9
checking for rightMostNode @ index 2
current midOfNode @ index  4
since index of indexToFind < midOfNode 2 4
going left <= /  current right index @  7
new currentNode () @  4 new right index @  3


currentNode () @  4
checking for rightMostNode @ index 2
current midOfNode @ index  2
since index of indexToFind >= midOfNode 2 2
going right =>   current left index @  0
new currentNode () @  6 new left index @  2


currentNode () @  6
checking for rightMostNode @ index 2
current midOfNode @ index  3
since index of indexToFind < midOfNode 2 3
going left <= /  current right index @  3
new currentNode () @  null new right index @  2




node () does not exist @ mid  2
shifting right from  3  => mid -1 1



our new indexToFind @  1

currentNode () @  9
checking for rightMostNode @ index 1
current midOfNode @ index  4
since index of indexToFind < midOfNode 1 4
going left <= /  current right index @  7
new currentNode () @  4 new right index @  3


currentNode () @  4
checking for rightMostNode @ index 1
current midOfNode @ index  2
since index of indexToFind < midOfNode 1 2
going left <= /  current right index @  3
new currentNode () @  1 new right index @  1


currentNode () @  1
checking for rightMostNode @ index 1
current midOfNode @ index  1
since index of indexToFind >= midOfNode 1 1
going right =>   current left index @  0
new currentNode () @  2 new left index @  1




node () exist @ mid  1
shifting left from  0  => mid  1
 */
  let 
    left = 0,
    right = Math.pow(2, height) - 1
    
    while(left < right){
      
       /*
       if asscumedRightMostLeafNode exist
       for example, left = 0, right = 7, mid = 4

       Here in our example leafNodes[4] is null, so we know that anything to the right of it is also null
       so we reduce our search space in half by doing
       left = 0,
       right = mid -1 i.e 3
       mid = Math.ceil(0+ 3)/2) = 2

       leftNodes[2] is also null, again reducing the search space

       left = 0,
       right = 2 i.e midvalue -1  = 1
       mid = 1

       leftNodes[1] is (2), which exist 

      */
     // assuming the first right most leaf node  
     let mid = Math.ceil((left + right)/2)

      console.log()
      console.log('our new indexToFind @ ', mid)
      console.log()
      if(nodeExistDescription(mid, height, tree.root)){
        console.log()
        console.log()
        console.log('node () exist @ mid ', mid)
        console.log('shifting left from ', left, ' => mid ', mid)
        left = mid
        console.log()
        console.log()
      }else{
        console.log()
        console.log()
        console.log('node () does not exist @ mid ', mid)
        console.log('shifting right from ', right, ' => mid -1', mid -1)
        console.log()
        console.log()

        right = mid -1
      }
    }
    // once we hit the right most node that exist, left and right both points to the same right most node
    return left + 1
}

/*
console.log(nodesAtSecondSection())

console.log('nodes at second section',nodesAtSecondSectionDescription())
console.log('nodes at first section',  Math.pow(2, height ) - 1, 'where height = ', height)
console.log('total nodes ',  Math.pow(2, height ) - 1 + nodesAtSecondSectionDescription())

               9
        4         20
    1       6   15      170
 0    2   
 -------------------------------
 0    1   2 3   4  5   6  7
 1    2   3 4   5  6   7  8 
*/

function getMyTreeHeight(tree){
  let height = 0
  while(tree.left){
    tree = tree.left
    height++
  }
  return height
}
function getNodesAtFirstSection(height = getMyTreeHeight(tree.root)){
  return Math.pow(2, height) -1
}
function nodeExist(indexToFind, height, node) {
  let left = 0, right = Math.pow(2, height) - 1,
    currentLevel = 0
  while (currentLevel < height) {
    let currentMid = Math.ceil((left + right) / 2)
    // if assumed index of rightmostleafnode is greater or equal to currentMid index then go right
    if (indexToFind >= currentMid) {
      node = node.right
      left = currentMid
    } else {
      // if assumed index of rightmostleafnode is lesser than currentMid index then go left
      node = node.left
      right = currentMid - 1
    }
    currentLevel++
  }

  return node !== null
}
function getNodesAtSecondSection(){
// first assume the rightmostleftnode using binary search since we want to accomplish O(logN)
  let 
    left = 0,
    right = Math.pow(2, height) -1
    while(left < right){
      let 
      mid = Math.ceil((left + right)/2 ),
      assumedRightMostLeafNodeExist = nodeExist(mid, getMyTreeHeight(tree.root), tree.root)
      if(assumedRightMostLeafNodeExist){
        // if assumed rightmostleft node exist, stil search right and may be we can find any possible rightmostleftnode
        left = mid
      }else{
         right = mid -1 
      }
    }
    return left + 1
}

function totalNodes(){
  return getNodesAtFirstSection() + getNodesAtSecondSection()
}
console.log(totalNodes())