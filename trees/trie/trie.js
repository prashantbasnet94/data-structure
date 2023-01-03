/*



Trie:
A Trie is a specilized tree used in searching most often with text.
In most cases, in can out perform binary search tree, hash table and other ds

                            start
                A       D       N       Z
             R     S    O     E     O      E
          E             T    W      T         N
                             S

Trie allow you to know if a word or part of a word exist in the body of text

Trie has usally a empty root node, and from there letters are added. It's not a binary tree, and can have multple childrens

The part of trie, when we search somthing such as N, if we had this disctionary, we know right away there are two words associated with word N
Another name for trie is prefix tree. It's tree like data structre, which proves to be quite efficient in solving these problems specific to strings

Example: Auto completion, seach something on google and knows what you are trying to search, auto suggestion

Time Complexity:
Big of Trie = O(length of word)
            looking for a word ARE
            1. Look for A
            2. Look for R
            3. Look for E

Space Complexity:
Has a major advantage, we don't have to store word multiple times
*/