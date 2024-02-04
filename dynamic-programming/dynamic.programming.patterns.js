/*
    Patterns:

        1. Minimum || Maximum path to reach the target
        2. Disting ways
        3. Merging intervals
        4. Dp on strings
        5. Decision Making

*/


/*
    1. Optimization problem: Min or max path

    Approach:
        1. Choose minimum || maximum path among all possible path discoverded so far i.e before the current state
            then add value for the current state

            routes[i] = Math.min(routes[i-1], routes[i-2], routes[i-3], routes[i-k]) + cost[i]

        2. Generate optimal solutions for all values in the target and return the value for the target



        Top down:
            Calculate top value now,so as we go down we can fill up value

            result[n] = Math.min( minCost(n-1), minCost(n-2))
            minCost = (i, cost) => {
              if(i < 0) return 0
              if(i === 0 || i ===1 )return cost[i]
              return cost[i] + Math.min(minCost(i -1, cost), minCost(i -2 , cost))
            }



            result[n] = Math.min(minCost(n-1), minCost(n-2))

            minCost = (i, cost){
                return cost[i] + Math.min(minCost(i-1), minCost(i-2))
            }

                 Top
                /   \
            Top-1  Top-2
            /    \
         Top1-1 Top1-2

            So the logic is:
            To calulcate the top, we need to go down



        Bottom Up:

           Calculate bottom value now so as we go up we can fill the value

            oddStep = way[0]
            evenStep = way[1]

            //since we already take 2 step
            for(i = 2; i < endOfStairs; i++){
                oddStep =
                evenStep =
            }

            // we know these values have to update to solve the problem
            // but what't the logic?

            for(i = 2; i < endOfStairs; i++){
            //now going to 3rd, how many ways we can go?
                currentWay = cost[i] + Math.min(oddStep, evenStep)
                oddStep = evenStep
                evenStep = currentWay
            }

            // to reach at the end
            // we have 2 step either from 2nd last or from last
            retun Math.min(stepOdd, stepEven)


*/