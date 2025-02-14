class Trie {
  constructor() {
    this.root = {
      keys: {},
      isEnd: false,
    };
  }
  insert(word, node = this.root) {
    if (word.length === 0) {
      node.isEnd = true;
      return;
    }
    if (!node.keys[word[0]]) {
      node.keys[word[0]] = {
        keys: {},
        isEnd: false,
      };
    }
    this.insert(word.substring(1), node.keys[word[0]]);
  }
}

class Solution {
  /**
   * @param {character[][]} board
   * @param {string[]} words
   * @return {string[]}
   */
  constructor() {
    this.Trie = new Trie();
    this.directions = [
      // up
      // right
      // down
      // left
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
  }
  dfs(row, col, board, node, result, word, seen) {
    if (
      !seen[row][col] ||
      !inRange(-1, row, board.length) ||
      !inRange(-1, col, board[0].length)
    ) {
      return;
    }
    const currentChar = board[row][col];
    seen[row][col] = true;
    if (!node.keys[currentChar]) {
      return;
    }
    word += currentChar;
    if (node.keys[currentChar].isEnd) {
      result.push(word);
      word = "";
    }

    for (let [dirRow, dirCol] of this.directions) {
      this.dfs(
        row + dirRow,
        col + dirCol,
        board,
        node.keys[currentChar],
        result,
        word,
        seen
      );
    }
    seen[row][col] = false;
  }
  inRange(min, value, max){
    return min < value && value < max
  }
 
  findWords(board, words) {
    /*

                1. insert words into trie
                2. dfs search board with backtracking 
                    a. as we traverse check if word exist in the trie??
                    b. if the word exist then push into the result
                    c. if the char does not exist on the trie node at all then return back, we will backtrack

                4. trie for each and every cell in the board

        */
    for (let word of words) {
      this.Trie.insert(word);
    }
    const result = []
    const seen = new Array(board.length).fill(0).map(o => new Array(board[0].length).fill(false))
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[0].length; col++) {
        let currentChar = board[row][col]
         this.dfs(row, col, board, this.Trie.root.keys[currentChar], result, "", seen)
      }
    }
    return result
  }
}
