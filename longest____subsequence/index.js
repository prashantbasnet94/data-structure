/*

Subsequence: sub + sequence
    subsequence is sequence that can be derived from another sequence by deleting some or no elements.
    Without changing the order of the remaining elements.


    For example:
            given a sequence:
                ABCDEF

        The subsequence are:
            ABC
            CDE
            DEF
            ABCDEF it'self

            and with 1 char deleted:
            ABE
            BCF
            CDF


    But
    BAD or ACFE are not subsequence becuase the order of the char in these sequence are altered


Subsequence problems are a category of sequence problems that deal specifically with identifying, generating, or manipulating subsequences of a given sequence (like arrays, strings, or lists). These problems often test a candidate's ability to recognize patterns and apply dynamic programming, greedy algorithms, or other algorithmic techniques.

Here are some common types of subsequence problems you might encounter on platforms like LeetCode:

1. Longest Increasing Subsequence (LIS):
    Given an unsorted array of integers, find the length of longest increasing subsequence.

2. Longest Common Subsequence (LCS):
    Given two sequences, find the length of the longest subsequence present in both of them.

3. Shortest Common Supersequence:
    Given two strings, find the shortest string that has both strings as subsequences.

4. Longest Palindromic Subsequence:
    Given a string, find the length of the longest palindromic subsequence in it.

5. Longest Repeated Subsequence:
    For a given string, find the length of the longest repeating subsequence.

6. Count of Subsequences:

    Count distinct subsequences of a given string.
    Count subsequences of type a^i b^j c^k.
    Subsequence Matching:

7. Is subsequence:
    Given two strings, check if one is a subsequence of the other.

8. Generating All Subsequences:
     Sometimes, you might be asked to generate all possible subsequences of a given sequence.


Solving subsequnce problems requires a blend of various algorithms techniques for their solutions.
Depending on the specific problem and it's constraints, one or more fo the following techniques might be applicable.




1. Dynamic Programming (DP):
 This is perhaps the most common technique used for subsequence problems, especially for problems like:
    a. Longest Common Subsequence (LCS),
    b. Longest Increasing Subsequence (LIS),
    c. Longest Palindromic Subsequence.

  Dynamic programming is useful when a problem can be broken down into smaller overlapping subproblems.
  A solution is built by combining the solutions to these subproblems.

    a. Recursion:
        Some subsequence problems can be approached using recursion, especially when generating all possible subsequences or exploring different possibilities.
        However, plain recursion might be inefficient due to overlapping subproblems, leading us to use dynamic programming or memoization.

    b. Memoization:
         This is a technique to optimize recursion by storing results of expensive recursive calls and returning the cached result when the same inputs occur again. It's a way to implement top-down dynamic programming.

2. Greedy Algorithms:
    Some subsequence problems, especially those that involve making a series of choices, can sometimes be solved using a greedy approach.
    However, it's essential to prove the correctness of such a solution, as greedy solutions are not always optimal.



3. Two Pointers:
     For certain subsequence problems, especially those that deal with contiguous subsequences (subarrays or substrings) or
    require specific conditions to be met (e.g., sum of subarray), the two-pointer technique can be highly efficient.

4. Binary Search:
    Problems like the Longest Increasing Subsequence (LIS) can benefit from a binary search approach,
     especially when optimizing for time complexity.

5. Segment Tree / Fenwick Tree:
    For problems that require efficient range queries or updates on sequences, data structures like segment trees or Fenwick trees might be used.

6. Trie (Prefix Tree):
    For subsequence problems related to strings, especially when you have to deal with multiple queries or handle a set of strings, a Trie can be an efficient data structure to use.

7. Hashing:
    Used for problems where you need to track elements or subsequences efficiently, especially to check existence or frequency.

8. Backtracking:
   For problems where you need to explore all possible combinations or permutations, backtracking can be a suitable approach, especially for generating all subsequences or finding subsequences that meet specific criteria.










































*/