/*

    You are climbing an staircase. It takes n steps to reach the top.
    Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

    Example 1:
        Input: n = 2
        Output: 2
        Explanation: There are two ways to climb to the top.
            1. 1 step + 1 step
            2. 2 steps



             | 1
            |  0

    Example 2:
        Input: n = 3
        Output: 3
        Explanation: There are three ways to climb to the top.
            1. 1 step + 1 step + 1 step
            2. 1 step + 2 steps
            3. 2 steps + 1 step


        |   2
       |    1
      |     0


    At 0, you can take either 1 or 2 steps

                    0
                  /   \
                 1      2
               /
              2

             a.
                    |
                  |
                |

            b.
                |
                ||


            c.
                ||
                |





    here, at this problem we can break it down into subproblems and solve it

    What is subproblem here?
        - At each step we can take either 1 or 2 steps
        - So, we can break it down into subproblems of taking 1 step and 2 steps





      1.  At 0,  we have only 1 way to reach 0 i.e 0 itself,  totalWays[0] = 1
      2.  At 1,  we have only 1 way to reach 1 i.e from 0,  totalWays[1] = 1
      3.  At 2,  we have 2 ways to reach 2 i.e either from 0 or 1,  totalWays[2] = totalWays[0] + totalWays[1] = 2
      4.  At 3,  we have 2 ways to reach 3 i.e either from 1 or 2, totalWays[3] = totalWays[1] + totalWays[2] = 3

            But notice, at 2 we have 2 ways to reach 2, so we can add that to 3
            and get 3 ways to reach 3

function climbStairs(n){
  dp = new Array(n + 1)
    dp[0] = 1
    dp[1] = 1

    for i from 2 to n:
        dp[i] = dp[i-1] + dp[i-2]

    return dp[n]

}


To recognize characteristics for using dynamic programming to solve a problem:

1. Overlapping Subproblems:
Notice that the number of distinct ways to reach the current step depends on the number of distinct ways to reach the previous steps.
For example, to reach step i, you can either come from step i-1 by taking a single step or come from step i-2 by taking two steps.

2. Optimal Substructure: The optimal solution for reaching the i-th step can be constructed from
 the optimal solutions of the previous steps.


n+1 because we need to account for the 0th step as well.
Since the steps are numbered from 1 to n, we need an array of size n+1 to store the number of distinct ways to reach each step.
*/

function climbStairs(n) {
    const dp = new Array(n + 1)
    dp[0] = 1
    dp[1] = 1

    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}

// Time: O(n)
// Space: O(n)

function optimizeClimbStairs(n) {

    if (n === 1 || n === 2) return n



    let
        // to reach 1st step, we have 1 way
        prev = 1,
        // to reach 2nd step, we have 2 ways
        prevPrev = 2


    for (let i = 3; i <= n; i++) {
        const temp = prev + prevPrev
        prev = prevPrev
        prevPrev = temp
    }
    return prevPrev

}


/*

    Climbing stairs:
        how many ways to climb the stairs from the bottom to the top.
        In each step you can take either 1 or 2 steps.




        0 => 1
        1 => 2 || 3    ,        3 => 4 || 5
        2 => 3 || 4    ,        4 => 5 || 6
        3 => 4 || 5
        4 => 5 || 6
        5 => 6 || 7




        here's the relations we can develop

        dp[i] = dp[i+] and dp[i+2]


        // @ step 0, you it takes you 0 way to reach
        dp[0] = 0
        dp[1] = dp[0] + 1
        dp[2] = dp[1], dp[0]
        dp[3] = dp[2], dp[1]
        dp[n] = dp[n -1] + dp[n -2]


*/


function climbingStairs(n) {
    let dp = new Array[ n ]

    dp[0] = 0
    dp[1] = 1
    dp[ 2 ] = 2

    for (i = 3; i <= n; i++){
        dp[n] = dp[n-1] + dp[n-2]
    }

    return dp[n]
}


function optimizeClimbStairs(n) {

    let prevPrev = 0
    let prev = prevPrev + 1
    let wayToGetToCurrentStep = prev + prevPrev
    for (let step = 2; step <= n; step++){

        wayToGetToCurrentStep = prev + prevPrev
        prevPrev = prev
        prev = wayToGetToCurrentStep
    }

    return dp[step]
}















function climbStairs2(n) {
  if (n === 1 || n === 2) return n;
  let dp = new Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = dp[0] + dp[1];
  dp[3] = dp[1] + dp[2];

  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n];
}



console.log(climbStairs2(2)) // 2
console.log(climbStairs2(3)) // 3







function optimizeClimb(n){
    let prev = 1
    let prevPrev = 2

    for(let i = 3; i <=n; i++){
        let temp = prev + prevPrev
        prevPrev = prev
        prev = temp
    }

    return prev + prevPrev
}
