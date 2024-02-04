/*

    Longest common subsequence:

    Some important application of LCS:




1. Bioinformatics:
     Comparing DNA, RNA, and protein sequences is fundamental in bioinformatics. Finding a common subsequence between two DNA sequences,
      for example, can provide insights into shared evolutionary history, functional similarities, or gene structures.

2. Version Control Systems:
     Tools like Git and SVN often need to merge changes made by different contributors.
     By finding the LCS between two files (treated as sequences of lines), these tools can determine which parts have remained unchanged. This forms the basis for the three-way merge algorithm.

3. Text Diffing Tools:
     Software like the UNIX diff command identifies differences between two text files.
     It can use LCS to identify common subsequences and then highlight only the differences.

4. Plagiarism Detection:
     When comparing two documents, an LCS can help identify copied or slightly modified content, making it useful in plagiarism detection software.

5. File Compression:
     Some compression algorithms utilize patterns within a file. LCS can help in identifying repeated patterns which can be represented more succinctly.

6. Speech Recognition:
     When transcribing spoken word, there may be errors or uncertainties in the transcription.
     Comparing the transcript with a database of known phrases (or parts of phrases) using LCS can help correct or validate uncertain parts.

7. Data Synchronization:
     For devices that need to synchronize data (like calendar events or contacts) without transferring entire datasets,
      LCS can help identify minimal changes required to bring datasets into alignment.

8. Video Compression and Analysis:
    If two video frames are being compared to identify changes, the LCS can identify common sub-sequences of frames (or parts of frames)
    to optimize storage or transmission.

9. Natural Language Processing:
     In tasks like paraphrase detection or textual entailment, where the goal is to determine if two sentences convey a similar meaning,
      LCS can be used as one of the features to compare the structure and content of sentences.

10. Gaming:
     Some games, especially story-driven ones, allow players to make decisions that shape the outcome of the story.
        If developers want to compare different players' paths through the game to see common decisions or sequences, LCS can be used.






### Problem Description:

Given two sequences X with length m and Y with length n ,
find a maximum-length sequence of characters that appears left-to-right in both sequences (not necessarily consecutively).

### Problem Understanding:

1. You're looking for a subsequence, i.e, characters don't have to be contiguous but must appear in the same order in both sequences.
2. You want this subsequence to be as long as possible. i.e if there are multiple common subsequences, you want the longest one.

### Approach & Thinking Pattern:

1. Brute Force Approach**: Generate all possible subsequences for X and Y and find the longest matching pair.
 However, this is highly inefficient as there are (2^m) subsequences for X and 2^n for Y.


            For any given sequence (or string) of length k, every character can either be included in a subsequence or not.
             Therefore, there are 2 choices for each character. For a sequence of length k, there are 2^k possible subsequences
              because we have 2 choices (include or not include) for each of the k characters.

            Sure, let's break down the subsequences for the sequence  X="AB":
            Given the sequence of length 2, each character can either be included in a subsequence or not. So, there are


                "- -": Neither of the characters are included. (Represents the empty subsequence)
                "A -": Only the first character, 'A', is included.
                "- B": Only the second character, 'B', is included.
                "A B": Both characters are included.



    Thus, for the sequence "AB", there are 4 possible subsequences: "", "A", "B", and "AB".








2. **Observation**: Let's consider the two sequences:
   - If the last characters of both sequences match, we have an LCS that includes that character.
   - If they don't match, the LCS would either exclude the last character of \(X\) or of \(Y\).

3. **Recursive Formulation**:
   - Let's define \(LCS[i][j]\) as the length of the LCS of \(X[1 \dots i]\) and \(Y[1 \dots j]\).
   - Then:
     1. If \(X[i] = Y[j]\), \(LCS[i][j] = 1 + LCS[i-1][j-1]\) (matching last characters)
     2. Else, \(LCS[i][j] = \max(LCS[i-1][j], LCS[i][j-1])\) (excluding last character from \(X\) or \(Y\)).

4. **Dynamic Programming Approach**:
   - We notice that the solution to the LCS problem involves solutions to smaller subproblems. This inherent overlapping of subproblems allows us to use dynamic programming to store and reuse solutions, rather than recalculating them.
   - We can construct a table where entry \(i, j\) contains the length of the LCS of \(X[1 \dots i]\) and \(Y[1 \dots j]\).
   - Build this table from smaller values to larger values of \(i\) and \(j\).

5. **Backtracking (Optional)**:
   - To not just determine the length of the LCS but also the LCS itself, one can backtrack from the bottom-right corner of the table to the top-left corner.
   - The backtracking approach:
     1. If \(X[i] = Y[j]\), the character is part of the LCS. Move diagonally up-left.
     2. If not, move in the direction of the larger of the two neighbors (left or up).

### Key Takeaways:

1. **Optimal Substructure**: The solution to a problem can be constructed from solutions to its subproblems. The LCS for two sequences can be constructed from the LCS of their prefixes.

2. **Overlapping Subproblems**: The same subproblems are solved multiple times. This is where dynamic programming provides efficiency by storing and reusing solutions.

3. **Tabulation**: Construct a solution iteratively in a table, based on precomputed smaller solutions.

This pattern of recognizing the optimal substructure and overlapping subproblems, then using tabulation or memoization, is common in dynamic programming problems. Once you get a good grasp of this pattern through problems like LCS, you'll find it easier to recognize and solve other dynamic programming problems.







*******************************************************************************************************************************************************************************************

Thinking process:

1. Generate all subsequnce
     For every char in one of the sequnce, is either in the subsequence or not. 2^m for first string

2. Check Each Subsequence
     For every subsequence we have generated from first string, check if it's a subsequence in the second string

3. Track the longest common subsequence:
     Var to store the longest common subsequnce found, update this if a new lcs is found





1. Generating Subsequnce
     string = 'AB'

     1. ''
     2. A
     3. B
     4. AB

think of this like a decision tree:

start with ''

1st decision: Include 'A' or not
                       /      \
                      A        ''

2nd decision: Include 'B' or not
            /   \     /      \
          ''     A   'AB'     A




2. Checking subsequence existence in another string:
     For each subsequence ['', 'A', 'B', 'AB']

     we want to see if it can be formed from 2nd string by removing some characters but keeping the order

     for example
     string2 =   'XAYBZ'

     '' => can be formed by taking no chars
     'A' => can be formed by just taking 'A'
     'B' => can be formed by just taking 'B'
     'AB' => can be formed by taking 'A' and 'B'


========================================================Thinking Process======================================================

     a. Starts with two pointer since we are making comparision
          i.  pointerA for the subsequence from string1
          ii. pointerB for the string2

     b. Sequential Character Matching:
          if (subsequnceFromA[pointerA] === string2[pointerB]){
               // move both pointer forward
               pointerA++
               pointerB++
          }else{
               // we are looking for the subsequence of string1 within string2, but they don't have to be contiguous in string2
               pointerB++
          }

     c. Check Completion:
          i.  If we reach the end of the subsequence i.e pointerA have moved past the last char of the subsequence => then the subseqeunce exist within B
          ii. If pointerB reaches the end of string2, then the subsequence does not exist in string2



          PSEUDO-CODE FOR CHECKING:

          function isSubSequence(subseq, string2){
               let pointerA = 0
               let pointerB = 0

               while(pointerA < length of subseq && pointerB < length of stringB){
                    if(subseq[pointerA] == string2[pointerB]){
                         pointerA++
                         pointerB++
                    }else{
                         pointerB++
                    }
               }
               return pointerA === length of subsequence
          }





Step-by-step Explanation with an example:


subseq = "AB" and string2 = "XAYBZ"

1. pointerA = A, pointerB @ 'X', don't match so pointerB to next character.
2. pointerA = A, pointerB @ 'A', it's a match so move bother pointers
3. pointerA = B, pointerB @ Y, no match , move pointerB to next char
4. pointerA = B, pointerB @ B, match so move both pointers
5. End, as pointerA has moved past the end of the subseq, meaning every charter in subseq was found in B, \

hence 'subseq' is a subsequnce of string 2












*/

function lcs(string1, string2, m, n){
     if(string1[m] === undefined || string2[n] == undefined){
          return 0
     } else if(string1[m] === string2[n]){
          return 1 + lcs(string1, string2, m+1, n+1)
     }
      return Math.max(lcs(string1, string2, m+1, n), lcs(string1, string2, m, n+1))
}

function revisedLCS(m, n, A, B){
     if (A[ m ] === undefined || B[ n ] === undefined) {
          return 0
     } else if (A[ m ] === B[ n ]) {
          return 1 + revisedLCS(m + 1, n + 1, A, B)
     }
     return Math.max(revisedLCS(m+1, n, A, B), revisedLCS(m, n+1, A, B))
}

function optimizedLCS(m, n, A, B, dp) {
     if (A[ m ] === undefined || B[ n ] === undefined) {
          return 0
     } else if (A[ m ] === B[ n ]) {
          if (dp[ m ][ n ]) {
               return dp[m][n]
          }
          dp[ m ][ n ] = 1 + optimizedLCS(m + 1, n + 1, A, B)
          return dp[ m ][ n ]
     }

     dp[ m + 1 ][ n ] = optimizedLCS(m + 1, n, A, B, dp)
     dp[ m ][ n + 1 ] = optimizedLCS(m, n + 1, A, B, dp)

     return Math.max(dp[m+1][n], dp[m][n+1])
}