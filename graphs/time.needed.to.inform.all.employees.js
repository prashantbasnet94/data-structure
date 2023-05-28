/*

https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22505032#questions
2D arrays and binary tree are considered graphs. => graphh that follow sepecifc rules


Generally, graph question are very abstract
It's hard to identify that question is a graph right from the outside of the question being asked.

The reson for this is because graphs themselves don't really appear in the way that we've seen some other ds

The question might not say, you'are given this graph, solve this problem.
Instead, the question might be more abstract and you have to figure out from the question that it's actually a graph data structre.

############# Question ################
A company has n employees with unique IDs from 0 to n-1. The head of the company has the ID headID.

For ex: 

For n = 8, 8 employees, the ids = 0, 1, 2, 3, 4, 5, 6, 7 
headId = 4


You will receive a managers array where managers[i] is the id of the manager for the employee i.
Each emplyee has one direct manager. The company head has no manager(manager[headId] = -1).
It's guranteed the subordination relationships will have a tree strucutre.

now:
             0  1  2  3   4  5  6  7
Managers = [ 2, 2, 4, 6, -1, 4, 4, 5]

Here all index are employees, where value at that index is the manager

so know we are looking to build that subordination realtionship as a tree structure


Notes:
All trees are graphs just with kind of specifc rules

And so far we have only worked with the binary trees.

Looking at this, we might end up with what's called an N-ary  tree.

In Binary tree, we know any node can have up to two branches
In an N-ary  tree, any node can have any number of branches

So let's look at how we can take these given 3 things: employees, headId and managerArray
and create this tree strucutre.

             0  1  2  3   4  5  6  7
Managers = [ 2, 2, 4, 6, -1, 4, 4, 5]

1. First thing we want to do is figure out what the head of this tree will be. 
    As we know, it'll probably be the head of the company. Reason is the head of the compnay has no head
    (4)

2. Let's find the subordinates of 4.i.e we want to look inside the managers array and and see which indexes have the value of 4 as thier value. index 2, 5 and 6
                (4)
             /   |   \  
          (2)   (5)   (6)


From here, we want to find leaf node subordinates, i.e to find subordinates of 2, 5 and 6

3. 
    i. Let's start with 2, which values in the manager array are two. i.e index  0 and  1

                (4)
             /   |   \  
          (2)   (5)   (6)
        /  \
       0    1
    
    ii. Let's do the same for 5, which index has value 5


                (4)
             /   |   \  
          (2)   (5)   (6)
        /  \     |
       0    1    7

    iii. Let's do the same for 6, which index has value 3


                (4)
             /   |   \  
          (2)   (5)   (6)
        /  \     |      \
       0    1    7       3

       So here we;ve built out our subordiation hierachy of all the employees inside of this company

There is more to this question, but i want to take a second to really think about what we've seen so far.
As mentioned before, graph question are not very explict that they are graphs.
But what we notice is question gave us a hint that it's going to resemble a tree like strucutre.

If it doesn't explictly say that it's a binary tree, we know it's most like going to be an N-ary tree, which means
can node can have any number of branches.

As we can see, 
some node has 0, 
some has 1,
some has 2 branch
some can even have 10, 15 , or ever 100 branches.

Idea is, the moment you notice it's N-arry tree, most likely it's going to be graph question


The head of the company wants to inform all employees of news. He will inform his direct subordinates who will inform their direct subordinates and so on
unitl everyone knows the news. 

You will recieve an informTime array where infomTime[i] is the time it takes for employee i to inform all thier direct subordinates,
Return the total number of minutes it takes to inform all employees of the news

So this means:
              0  1  2  3  4  5  6  7 , where index => employeeId to inform all thier direct subordinates
informTime = [0, 0, 4, 0, 7, 3, 6, 0], where value is the time it takes for index employee 


Let's bring back our tree stuructre to understand what it's asking us.
We want to figure out how much time in total it takes to inform everybody in the company of the news.

We know th bottom vertices must have a informed time of zeor, becuase if a vertex has no direct subordinates, 
then there is no time needed to spend to tall anyone



                (4)
             /   |   \  
          (2)   (5)   (6)
        /  \     |      \
      (0)   (1) (7)     (3)

And we can see that 0 => no time needed, coincides with what infomredTime array shows.

         0  1  2  3  4  5  6  7
        [0, 0, 4, 0, 7, 3, 6, 0]

        here, employe id of 0,1 3 and 7 needed 0 time to infom it's subordiantes

                 (4)
             /   |   \  
          (2)   (5)   (6)
        /  \     |      \
      (0)   (1) (7)     (3)
       0     0   0       0 


Moving on with this logic then, 

               7(4)
             /   |   \  
         4(2)  3(5)   6(6)
        /  \     |      \
      (0)   (1) (7)     (3)
       0     0   0       0 

So knowing this, we need to figure out how we can get the total number of mins it takes for every sigle subordinate to know the news.

So this means, we want to accumulate numberOFMins varibale


To elavorate:
1. head i.e (4) takes 7 min to inform it's subordinates
2. (2), i.e (4)'s subordinate takes 4 minutes to inform it's subordinate, totalNumberOfMins so far = 11
3. (5), i.e (4)'s subordinate takes 3 minutes to inform it's subordinate, totalNumberOfMins so far = 10
    sinice 11 is greater than 10, we ignore 10
4. (6), i.e (4)'s subordinate takes 6 mins to inform it's subordinate, totalNumberOf mins so far = 13
    since 13 > 11 , we take 13

So total time in minute required is 13


Verify Constraints:

1. Is it a cyclic graph?
------------------------
    Are there any cycles? For exa:

       (A)
      /  \
   (B) -- (C) 

   Here we have undirected graph, so it's definitely cyclic
   The momnet that thre or multiple nodes are connected in such a way where you could end up back at original node through traversal.
if it's directed, the arrows must point in such a way that you can start from some node and traverse through it and still end up back at the original node

In our particular case, this is not possible becuase in the question itself it says that it's guraneted the subordination realtionship will have a tree strucutre.
And as we know with tree, it is directed, always directed in 1 direction.

But once you know it;s a tree, you can pretty much be gurentedd that it;s most likely not cyclic.


Is it possible that while it;s not cyclic, is it possible you can still end up with this type of cicular structure?
As you can see here:
            --->  (D) 
          /    |      |
       /       |      V
    (A) -----> (X) --->(Y)
             ->           \   
            /              V  
          (B) ----------- (C)  


    X and Y are connected as well as D and Y are connected, so the question you can come up with is:

Can a employees have more than 1 manager?
No employee can only have 1 manager.

2. Is it unconnected?
-----------------------
   for example:
                (4)
             /       \  
          (2)   (5)   (6)
        /  \     |      \
      (0)   (1) (7)     (3)
       0     0   0       0 

    Here there is two possible  mini graphs.
    Is this possible for the graph to be be unconnected?

So to frame it, does every employee have a manager?
Yes every eemployee has a manager expcept the head of the company who has no manager.
By this defination, we cannot receive an unconnected graph

Every employee must have some manager so all nodes are connected


3. Is it weighted graph?
-----------------------
We need to figure this out, when we solve the problem.



4. Is it directed graph?
-----------------------
Becuasaes it's a tree, it is directed




######################### TEST CASE #######################

1.
For n = 8, 8 employees, the ids = 0, 1, 2, 3, 4, 5, 6, 7 
headId = 4

InformTime
         0  1  2  3  4  5  6  7
        [0, 0, 4, 0, 7, 3, 6, 0]



2. n = 1, headId = 0, managers = [-1]
    informTime = [0]

3. Scewed Case
    n = 7, headId = 6,
    managers = [1, 2, 3, 4, 5, 6, -1]
    infomTime = [ 0, 6, 5, 4, 3, 2, 1]

Here' if every single employee has a manager, then it's going to be the cummulative value of all of these values
i.e 6+ 5+ 4 +3 +2 +1 => 21

Hint,

Think about how to transform these values that we do receive in the question into a adjacency list

*/
/*
For n = 8, 8 employees, the ids = 0, 1, 2, 3,  4, 5, 6, 7 , index => emplopyee under manager
headId = 4,          Managers = [ 2, 2, 4, 6, -1, 4, 4, 5], value => manager 
InformTime
         0  1  2  3  4  5  6  7
        [0, 0, 4, 0, 7, 3, 6, 0]

Here' value is the manager and index is the subordinate employee that manager has

ManagerArray:

  0, 1, 2, 3,  4, 5, 6, 7 , index => emplopyee under manager
[ 2, 2, 4, 6, -1, 4, 4, 5], value => manager 

for example in our ajacencyList
outter array index is manager, inside residing array of employee is the subordiantes employee under that manager in index

here, for index 0 , its manager is 2, so we add 0 to index of 2 in our adjacency list
similary for index 1, it's manager is 2, so we add 1  to index 2 inour adjacecy list

here the pattern is as index progresss, we find out the value that resides in manager array, and then push that index to the the adjacentList[valueManager]


[
  0:  []
  1:  []
  2:  [0, 1]
  3:  []
  4:  [2, 5, 6]
  5:  [7]
  6:  [3]
  7:  []
]

This is the adjacency list, using this adjaceny list, let's determine the total number of minutes using one of search traversal algorithm

*/

const
  manager = [2, 2, 4, 6, -1, 4, 4, 5],
  infromTime = [0, 0, 4, 0, 7, 3, 6, 0],
  headId = 4,
  n = 8

function buildGraph(managers, headId, n, informTimes) {
  //o(N)
  let adjacencyList = managers.map(o => [])
  //o(N)
  for (let emplopyee in managers) {
    let manager = managers[emplopyee]
    if (manager === -1) continue
    adjacencyList[manager].push(emplopyee)
  }
  //o(N)
  return dfsrefactored(adjacencyList, headId, infromTime)
}

let finalResult = buildGraph(manager, headId, n, infromTime)


function dfs(matrix, vertex, seen, values) {


  values.push(vertex)
  seen[vertex] = true

  let connections = matrix[vertex]

  for (let i = 0; i < connections.length; i++) {
    let connection = connections[i]
    if (!seen[connection]) {
      dfs(matrix, connection, seen, values)
    }
  }

}


function dfsrefactored(adjacencyList, currentId, informTime) {

  if (adjacencyList[currentId].length === 0) return 0

  let
    max = 0,
    subordiantes = adjacencyList[currentId]


  for (let i = 0; i < subordiantes.length; i++) {
    let subordinate = subordiantes[i]
    // what are we doing with the subordinate value
    // we want to perfom this same DFS on every subordinate  , because we want this subordinate to figure out what's the mas time it takes for it to 
    // tell its subordinates the news
    max = Math.max(max, dfsrefactored(adjacencyList, subordinate, informTime))
  }
  // once this for loop is done, we can be certain that our max value is updated to the max value between all of the subordinates that this currentId has
  // so now i can finally return my second base case

  return max + informTime[currentId]

}

console.log('finalResult', finalResult)

/*

Time complexity: O(N) + O(N) + O(N) => 3O(N) => O(N)

Space Complexity:

we know automatically end up with at least N arrays inside of the adjacency list, therefor O(N)

what about the values inisde the adjacency list?
How many values can we have inside of each nested array
Let's think about the relationship between all of these vertexes 

we know that node must be connected only in one direction and these nodes can have only 1 manager
There is a manager subordinate relationship here

Neither a manager node is shared nor the subordinate node is shared, so we know that every one of the nested arrays can only hold the same value once
NO value gets repeated across multiple of our inner arrays of our adjacency list


Skewed tree like linked list can have o(N) stack call
ajacencyList itself has length of O(N)
and the value inside those nested array are not repeated but sit once i.e again O(N)

therefore O(N) +O (N) +O(N) => O(N)


*/