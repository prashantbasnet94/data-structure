/*
Back tracking:
    Solves a similar problem as what dynamic programming solves.

    The only thing about back tracking is what we care about returning all of the solutions.
    So if we are asked to generate all of the possible paths or solutions in a problem, there's a good chance it's back tracking problem.

    Alternativly,
    it could also be that we want to return a valid solution amongst all solutions.

    What this means is that given a type of question that is asking us a valid solutions, 
    you can tell that it;s asking for a vlaid solutions amonngst all the solutions.


    There are certain constraints in play that prevent all of the solutions from being correct, only a couple of them are correct

This is different from an optimization question because in an optimization question there is usally only 1 solutions amongst all the solutions.
Because you want either the minimum or maximum.


When it comes to backtracking witht this valid solution, there might be actually be multiple valid solutions.
You just have to return the first one that is valid, but you still want to generate all of the possible solutions that exist, may be only one of them is valid.

This is the idea behind backtracking is the appropriate approach for this question.

An example of backtracking:

we need to travel 3 different location for errands, we must go to the store, cafe, and a barber shop.
However, the order doesnot matter the order in which we travel.
The question want us to find all of the different paths that we could take and return all the possible paths

=> here we want to return all the possible solutions so this is a good time for back tracking.

What we want to do with backtracking is we want to imagine what this state space tree would look like for all of the paths we can take.



                                             Start
                                /---------------|----------------------|
                           Store             Barber                   Cafe
                          /   \              /   \                   /   \
                     Cafe     Barber       Cafe     Store       Barber     Store   
                     /          \           /          \         /          \
                Barber          Cafe      Store          Cafe   Store       Barber



Now, let's image question ask us about a constraint and the constraint says that cafe cannot be the 2nd place we vist.

                                             Start
                                /---------------|------------------------|
                           Store              Barber                      Cafe
                          /   \              /       \                   /   \
                     Cafe(X)     Barber   Cafe(X)     Store       Barber     Store   
                                   \                    \         /          \
                                   Cafe                  Cafe   Store       Barber

a. Here we come to the cafe and see we are violating the constraint, so we backtrack to the store and start travesing other path.
b. So once again we find go barber then cafe, find violating the constraint, so we cancel off any possible solutions that can stem from this path onwards and backtrack back to barber


*/

const results = [];

function backTrack(start, currentList) {
  let sum = currentList.reduce((acc, current) => acc + current, 0);

  if (sum === target) {
    results.push([...currentList]);
  }
  if (target < sum) {
    return;
  }
  for (let i = start; i < nums.length; i++) {
    currentList.push(nums[i]);
    backTrack(i, currentList);
    currentList.pop();
  }
}

backTrack(0, []);
return results;




combinationSum2(candidates, target) {
  candidates.sort((a, b) => a - b); // Sort first to handle duplicates

  const results = [];

  function backTrack(start, currentList) {
    const sum = currentList.reduce((acc, curr) => acc + curr, 0);

    if (sum === target) {
      // Create key by joining the current combination
      const key = currentList.join(",");
      // Store the array as value
      // results.set(key, [...currentList]);
      results.push([...currentList]);
    }

    if (target < sum) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (start < i && candidates[i] === candidates[i - 1]) continue;

      currentList.push(candidates[i]);
      backTrack(i + 1, currentList);
      currentList.pop();
    }
  }

  backTrack(0, []);
  return results;
}