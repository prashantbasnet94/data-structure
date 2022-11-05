/*

Matrix is just the more acadamic way to say a 2D array.
Let's explore what it is.

A 2D array is just an array that holds other arrays as the elements inside, what;s inside nested array can be anything so they can contain any value you want, whether it be interger, string, or objs or anything
Each of these internal arrays, though tends to be the same size.
So if the first array has six elements then every subsequent array is also going to have six elements.

[
    [X, X, X, X, X ], 
    [X, X, X, X, X ],
    [X, X, X, X, X ],
    [X, X, X, X, X ]
]

You can imagine this data structure abstracted as a grid where every row is one of those internal arrays.

Imagine we were to receive 2D array. Inorder to access any single element inside of any of the internal arrays, we need to utilize a row, column pair
row: represent the index of the inner array
col: represent the index of value inisde that inner array

[      0  1  2  3  4 
0:    [X, X, X, X, X ], 
1:    [X, X, X, X, X ],
2:    [X, X, X, O, X ],
3:    [X, X, X, X, X ]
]
      R  C
Array[2][3]


So now we understand the coordinate system and where these elements can be accessed, let's talk about traversal inside of 2D arrays

Traversal in 2D array is very similar to traversal inside of binary trees.
We are trying to start from some element inside of our grid 2D array, and we want to explore all the values touching every value once.

R
[      0  1  2  3  4 C
0:    [X, X, X, X, X ], 
1:    [X, X, X, X, X ],
2:    [X, X, X, O, X ],
3:    [X, X, X, X, X ]
]

let currrent ={
    row: 
    col:
}
Current keeps track fot he row and column pair of the value that we're currently scanning @
Most of the time when we start the traversal, we start form the left corner of 0 0
i.e row = 0, col = 0

Here;s in order to better understand our direction, i'm going to start instead from row = 1, col = 2, which is O

R
[      0  1  2  3  4 C
0:    [X, X, X, X, X ], 
1:    [X, X, O, X, X ],
2:    [X, X, X, X, X ],
3:    [X, X, X, X, X ]
]
our current position: Array[1][2]
The four direction you can traverse is up, down, left and right, and when you traverse you want to traverse one element at a time

Going Up
-------- (-1, 0)
R
[      0  1  2  3  4 C
0:    [X, X, A, X, X ], 
1:    [X, X, O, X, X ],
2:    [X, X, X, X, X ],
3:    [X, X, X, X, X ]
]

In order to move up to that A, i.e array[0][2], we want to minus 1 from the row but keep the column same
Array [0][2]

Going Down
-------- (+1, 0)

R
[      0  1  2  3  4 C
0:    [X, X, X, X, X ], 
1:    [X, X, O, X, X ],
2:    [X, X, A, X, X ],
3:    [X, X, X, X, X ]
]

In order to move down to A, i.e Array[2][2], we need to add 1 to the row but keep the column same


**************** moving left or right increment or decrement @ col *********************
Going Left (0, -1)
--------

R
[      0  1  2  3  4 C
0:    [X, X, X, X, X ], 
1:    [X, A, O, X, X ],
2:    [X, X, X, X, X ],
3:    [X, X, X, X, X ]
]
In order to move left, col -1 i.e Array[1][1]


Going Right (0, +1)
--------

R
[      0  1  2  3  4 C
0:    [X, X, X, X, X ], 
1:    [X, X, O, A, X ],
2:    [X, X, X, X, X ],
3:    [X, X, X, X, X ]
]
In order to move left, col + 1 i.e Array[1][3]



Now we understand our traversal, so is there any chance where we want to navigate to the corner meaning diagonally form the position where im curerntly standing.

There are some cases where you will if the question makes sense to move in diagonal pattern.
But most of the time it;s going to be left, right, up and down

With these traversal, you're still going to think about depth first search and breadth first search
Conceptually, it;s going to be the exact same as we know it with binary trees where you 
1. Either going as far in one direction as possible 
2. Or you are exploring all of the nodes around your element first

Traversing through using DFS and BFS

*/


/*

    Solving question related to 2D arrays:

    Tips:
    The main thing that we want to notice when we get our two D array question is to focus on the values, values being what is inside of every cell of this grid or what is every
    element in the inner arrays

    Here , values follow two main pattern 

    1. They are either limited: Limited values means specific values like : [O * #], here it means only expect one of the three kinds of values

    2. Or they're unlimited: 
        Unlimited essentially just means that they can be practically anything, for examaple number from -Infinity to + Infinity, A-Za-z


 When you think back to Binary tree question, you know the primary way we learn to solve them is by asking question, do i wanna traverse this tree is so then 
 do is do it with BFS or DFS?

 We know there is BFS or DFS involved in 2D array as well, but how it gets integreted into our solution process is not the same as we did with binary trees
chances are we do not beign by thinking about traversing through the entire 2D array using one of the traversal algo. It might be the case you do.
Generally you do something called sequential order. 

Sequential order is essentailly where you scna throguh the entire 2D array in a ZigZag patten

[
    [---------->]
    [---------->] 
    [---------->] 
    [---------->] 
]

The reason why you do so is beacuase you scan thorugh this entire 2D array looking for specifc values that will help you solve your question.

[
    [           #    ]
    [   O  *        *]
    [   O           *]
    [   *           ]
]
we have [* O #] as a limited values

* => wall
# => destination
O => starting point

Repace starting point O , with the number of steps that takes to reach desitnation (#), without crossing the wall * 

how to approach?
First thing you want to ask regardless of whether it's limited values or unlimited values inside the 2D array, is

Is there a relationship between the values?
if yes, then is it meaningful and can help us solve the problem?


We know between the starting point and the destination there is indeed a realtionship because we need to figure out how
to get from the start values to the end values


We also know there is relationship between O (starting point) and *(wall) and the reason is we cannot cross through *

Now we know the relationship, the next thing to do is figure out is there a repeated subproblem that once solved gives us the overall solution to the problem as a whole?

Here we want to figure out how many steps it takes for each (O) to reach # (destination). 
So may be we can break that down into just solving for one of the green circles instead.

Let's start with 
[
    [           #    ]
    [  (O)  *        *]
    [   O           *]
    [   *           ]
]


Here we might want to implment our BFS or DFS in order to count number of steps to reach that # (destination)

Here it takes 3 steps to reach #
[
    [           #    ]
    [  (O)  *        *]
    [   O           *]      
    [   *           ]
]
[
    [           #    ]
    [   3  *        *]
    [   O           *]      
    [   *           ]
]
Note:
We don't know how many O are there and also don;t know where they are in the 2D array. 
And the solution we want to build out is such that we return the enitre 2D array back.
 But every green circle has the value for the number of steps it took inorder to reach the red traingle

 This sounds like a case, wehere we go need to implment sequential order instead of other traversal alog

By starting with sequential order, you are able to say, scan through the 2D array util we find (O) 
then we get the number of steps it takes to reach that red triangle. We fill in the position of O
We continue with sequential order looking for another green circle. once we find another O , we do exact same thing, count the number of step to reach destination
from starting position O





 */


