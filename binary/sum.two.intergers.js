/*


Input: a = 1, b = 2
Output: 3


let's first understand what are some real world application of solving this problem?
what can you do with the technique learnt here?


  Indexing, compression, and query optimization in database engines.
Graphics processing:
  Pixel manipulation and color blending in image processing.
Data compression:

Embedded systems and microcontrollers:

Where hardware resources are limited, bitwise operations can be more efficient.
Used in device drivers and direct hardware manipulation.


Bitwise operations are typically faster than arithmetic operations.
They're often executed in a single CPU cycle.

Database Indexing:

Where: In companies like Amazon for their product database or Google for their search index.
Application: Quickly finding and sorting through millions of items.
Why bitwise: It's faster than traditional comparison methods for large datasets.


Compression in Streaming Services:

Where: Netflix or YouTube for video streaming.
Application: Reducing video file sizes without losing much quality.
Why bitwise: Allows for efficient manipulation of video data at the bit level.






conclusion::
    1. Without using + operators how to add nums?
    2. Why is - even mentioned?


A instint we can have, is how does computer does the operation in it's core?

when we use +, we understand it, what is the logic that computer computes on?

Also we know that in the computer langauge there is 0 and 1 which is binary.


So let's think about this, thus the concept of bitwise operator, in other words binary calculation?

what are some logical operator we know?
1. AND
2. OR
3. NOR Exculsive OR
4. Left Shift, i.e when we add 1 and 1 it become 10, which is left shift as we added 0 to the left
    a. 1 => 10
    b. 10 => 100
    c. fundamentally left shift to the binary digit is simialar to factor multiplication of 2 in decimal
        meaning, 2(decimal) is 10 (binary). Left shift to 10 is 100 which is 2 * 2 = 4 , which is 100 in binary 





Now since we know we can use bitwise techniques, let's see how numbers add up in binary

Decimal  Binary   
 1        1 
 2        10
 3        11
 4        100
 5        101
 6        110


 2 + 3, let's see how these works in binary



 2 is 10, 3 is 11

a. 
    1 0
    1 1
----------
      1     


b. 
  1  
    1 0
    1 1
----------
   1 0 1     

   here, we have carry over
   101 is 5.



3 is 11 in binary, let's add 3 + 3

a.  
    1
    1 1
    1 1
----------
      0 


here we have cary over, we need to learn how to handle cary over
also when there is a cary over there is intruduciton 0 and 1 shift to the left

b. 

    1
    1 1
    1 1
----------
      0 

    here, 1 + 1 = 10, and we have 1 (carry over)
    notice here we calcuated, without the carry over then 
    calculating number + carryover
         10 + 1 = 11

  1 1
    1 1
    1 1
----------
    1 0
again, we have 1 cary over going to the left
  

  1 1
    1 1
    1 1
----------
  1 1 0   => 6 in decimal


  so the conclusion is how do we handle cary over?
  add the numebr in place without carry over.
  and how do we make a shift to the number?



  in bitwise operation, we need to handle?


  peseudo code:


  function add(a, b) {
    caluclation loop {
       // identify carry
       // Add without carry
       // Shift carry
    }
       return total
}


now let's look at our bitwise operator pool:

1. AND (&): identifyies where carry over happend for example 1 & 1 = 10. In binary addition, a carry occurs when both bits are 1.
2. OR (|): Combines bits, resulting in 1 if either bit is 1.
3. XOR (^) (Exclusive OR) adds bits without handling carry. It returns 1 if bits are different, 0 if they're the same.
4. NOT (~). Inverts all bits. Can be used in subtraction algorithms.
5. Right Shift (>>),Can be used for division by powers of 2. Example: 1000 >> 1 = 0100
6. Left Shift(<<),  We use this to move the carry to the next significant bit position.


form this pool, we match AND, XOR and Left Shift


*/


function add(a,b){
    while(b !==0){
        // Identify carry
        let carry = a & b
    
        // Xor, add numbers without cary over
        a = a ^ b

        // left shift
        b = carry << 1

    }
    return a
}