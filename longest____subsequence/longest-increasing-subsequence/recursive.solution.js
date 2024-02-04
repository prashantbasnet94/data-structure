/*

    Thinking approach for recursive appraoch:

    1. In the recrusive appraoch number 1 concern is:
        do a certain task in repeitive approach.

        so what is the approach here?
        recursion will do it often and often.


        So can i see the pattern that's repeting?
            simply, we compare the input[left] < input[right]
                        if true do something
                        else move forward



function recursion(input, left, right) {
    if (input[ left ] < input[ right ]) {
        //increase the longestIncreaingSubsequence
    }
    // else just move forward int the process
}
*/

function recursion(input, left, right) {

    // base case
    // when we are done with the input comparision

    //in the comaparison
   // if ( current element can contribute)
   //  else { current element won't contribute}

}

/*

    now if element contribute how will it add up the previour result?
    so then we need a way to get longestIncreaingSubsequence for a given index
    so let's introduce memoization


    if ( input [currentIndex - 1] < input[currentIndex]){
        dp[i] = math.max(dp[i], 1 + dp[i])
    }else{

    }


*/