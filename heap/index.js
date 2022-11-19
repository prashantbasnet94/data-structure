/*

https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22374636#questions

Binary tree , binary search tree,  and full and complete binary tree
we can combine alot of these ideas together so that we can learn a new assistant data structure, which is heap

From Heap, we can then learn about priority queues which is a variation on the queue data structure, and  much more useful


Heaps by design is a data structure that resembles a binary tree.
In particular, it resembles a complete binary tree.

Complete binary tree are ones where every single level is full except for the very last level.
But if there are nodes in the last level, it must be pushed to the left as possible

Two variations on Heap:
1. Max Heap
    Has values in such a way, at every single node, all of the children of that node are smaller than it

             50
        40        25
     20     35 10       15

Keeping these rules in mind, the  main thing to focus on is that the root node of a max heap is the greatest value in this entire heap
    
then, nodes i.e child of parent node are the second and the third greatest value inside of this heap?
No this is not the case

2. Min Heap
Similarly, min heap is just the reverse of this rule, meaning that the root node is the smallest value inside the heap
similarly, all of the values that are children to this node must be greater than this root vlaue
Root node of the min heap is the smallest value of the ds

How to add and remove value from the heaps?

How to represent a heap inside of code?
up untill this point, whenever we've received a binary tree, we get the root node as a object

Another way to represet a binary tree is array,
the way we fill the value in the array is using BFS


Heap:
               50
             /    \
          40        25
         /  \      /  \
        20  35    10  15    


array = [50,40,25,20,35,10,15]
         0  1   2  3  4  5  6

only difference between array vs class of tree node is that using array we need to figure out
some mathematical formulas that help us define the relationship between nodes

So what we want to do is think about the realtionship relative to the indices of the values inside our array

Mathmatical Relationship:

To get parent of any node:
        Math.floor((index of currentNode - 1) / 2)
    i.e (10) has index of 5, using formula we have 2
    array[2] => 25 and that is correct 25 is parent of 10

To get the left child:
    (Index * 2) +1
    let's find the left child of 40, it has index = 1
    (1*2)+1 => 3 i.e array[3] => 20 

To get the right child:
    (Index * 2) +2
    let's find the left child of 40, it has index = 1
    (1*2)+2 => 4 i.e array[3] => 35 


    


INSERTION:

insert 45 :

               50
             /    \
          40        25
         /  \      /  \
        20  35    10  15    
The only way that we can insert 45 is at the next available spot. Following Breadth first search order

               50
             /    \
          40        25
         /  \      /  \
        20  35    10  15   
       /
     (45)

     First insert the 45 in. We look at the total structre and ask if this is still a valid max heap?
     No, it's not.

     45 > 20 and as well as 45 > 40
    
     Steps to follow:
     1. Take 45 and it's parent then compare, is 45 greater than 20? yes, so swap it
               50
             /    \
          40        25
         /  \      /  \
       45  35    10  15   
       /
      20 

    2. Again compare the new parent i.e (45) greater than it's parent? yes so swap 40 and 45 position
               50
             /    \
          45        25
         /  \      /  \
       40  35    10  15   
       /
      20 

    3. Then compare again, is 45 greater than 50? no, so no swap are done. Thus our heap is valid and new final heap


******************* with Array ******************************
               50
             /    \
          40        25
         /  \      /  \
        20  35    10  15    

    [50,45,25, 20, 35, 10, 15]
      0  1  2   3  4   5    6
1. In exact same vein of what we need to do, we just insert 45 at the end of the array, i.e array.push(45).
    i. Compare new value i.e 45 with it's parent value and keep comparing and swapping value until we find it's final resting point
       we get the index of 45 i.e 7
       parent is given by formula: Math.floor((index - 1) / 2)
       = Math.floor((7-1)/2) 
       = Math.floor(3)
       =3

       @ poistion 3 we have 20, which is the parent of 45

       is 45 > 20?
       so swap the position of the element

        [50, 40, 25, 45, 35, 10, 15, 20]
          0   1   2   3   4   5   6   7

    ii. Then we compare again, we take index 3, find it's parent i.e Math.floo((index-1)/2) = 1
      @ position 1, we have 40
      is 45 > 40 ?
      yes. so swap once again
      
      [50, 45, 25, 40, 35, 10, 15, 20]
       0   1   2   3   4   5   6   7     

    iii. Comapare one more time, index = 1, parentNode = Math.floor((index -1)/2) = 0
        @ position 0, we have 50
        is 45 > 50 ?
        No
    Thus the final resting point





    ################################### Removal #########################################

    Insights:
     The reason why we implemented the heap in the first place particalualy a max heap is,
     we will provice the values, and whenever i want to retrieve a value from you , you have to give me the greatest value amongst the values i supplied

    So this is why with the max heap, whenever we talk about removal, deletion or retrieveing a value from this heap, the only condition we want to 
    satify is that we're getting the greatest value, which  is root value in max heap.




              75
             /    \
          50        25
        /   \      /  \
       45    35    10  15   
     /   \
    20    40

    let call remove here, which will remove the 75 and return it
               ()
             /    \
          50        25
        /   \      /  \
       45    35    10  15   
     /   \
    20    40

Now we need to restrucutre our heap so we can re maintian not only the rule that the max heap has gretest value at the top
but also that we are still a complete binary tree

Steps that follows:
    1. We are going to take the rightmost value at the last level as palceholder root

               40
             /    \
          50        25
        /   \      /  \
       45    35    10  15   
     /   
    20    

    Here the root value is not the greatest value, so we need to shift this value down.How to do so?
    1. Starting from the root of it's two children , which one is greater value?
         left or right ? 50 or 25 ? 50 which is left. Is this also greater than the root value ? 50 > 40 ? yes then swap it then
               50
             /    \
          40        25
        /   \      /  \
       45    35    10  15   
     /   
    20    
         
    2. Do the same thing with 40 again, amongst it's two children which one is greater? 45 is greater. 
      Is it greater than parent i.e 40? yes 45 > 40 then swap it.

              50
             /    \
          45        25
        /   \      /  \
       40    35    10  15   
     /   
    20    

    3. Once again, we going to say does 40 has two children? No it has 1. 
     Let's take that child and compare it with parent, is 20 > 40 ? No

     So now we know 40 is it's final resting point

     Now we see the 50 is the greatest value inside the max heap once again

******************* with Array ******************************


              75
             /    \
          50        25
        /   \      /  \
       45    35    10  15   
     /   \
    20    40

 [75, 50, 25, 45, 35,  10, 15, 20, 40]
  0   1   2   3   4     5  6   7    8

  STEPS:
  1.  Remove 75, and push 40 in it;s place
    [40, 50, 25, 45, 35,  10, 15, 20]. 
      0   1   2   3   4    5   6  7 

                40
              /    \
            50        25
          /   \      /  \
        45    35    10  15   
      /   
      20    

    Now let's compare and firnd the correct place of our new value. We take left and right child of 40 i.e @ index 0
    left   = (2 * index) + 1  = 1 i.e array[1] = 50
    right  = (2 * index) + 2  = 2 i.e array[2] = 25 

    since 50 > 25. and 50 is also greater than 40, so we swap our position

    [50, 40, 25, 45, 35,  10, 15, 20]. 
      0   1   2   3   4    5   6  7 
                50
              /    \
            40        25
          /   \      /  \
        45    35    10  15   
      /   
      20    

  2. Once again , we take 40 @ index 1 and find it's two children
  i,e left = (2*1) + 1 = 3 , array[3] = 45
   right = (2*1) + 2 = 4 , array[4] = 35

   since 45 > 35 and 45 > parent 40, we swap it

    [50, 45, 25, 40, 35,  10, 15, 20]. 
      0   1   2   3   4    5   6  7 

                50
              /    \
            45        25
          /   \      /  \
        40    35    10  15   
      /   
      20  
    
    3. Once again we take 40 @ position 3, we get it's child
    i.e left = 2 * index + 1 = 2*3 +1 = 7, array[7]  =20
        right =2 * index + 2 = undefined

        since 20 < 40, we don;t perform swap.


     */ 

 