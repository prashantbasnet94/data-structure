/*
    1. DFS search
        a. If you find a word add it to the collection bucket
            i. Once you find the word change it's char to '.'



*/

function TrieNode() {
    return {
        children: new Map(),
        isWord: false
    }
}
class Trie {
    constructor() {
        this.root = TrieNode();
    }
    insert(word, node = this.root) {
        if (word.length === 0) {
            node.isWord = true
            return node
        } else if (!node.children[word[0]]) {
            node.children[word[0]] = TrieNode()
        }
        return this.insert(word.substring(1), node.children[word[0]])
    }
}



function findWords(board, words) {
    const trie = new Trie();
    for (let word of words) {
        trie.insert(word);
    }

    const result = [];

    function dfs(node, row, col, word, seen) {
        if (node.isWord) {
            result.push(word);
            node.isWord = false; // Mark the word as visited to avoid duplicates
        }

        if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) {
            return;
        }

        const c = board[row][col];
        if (!node.children.has(c) || seen[row][col]) {
            return;
        }

        seen[row][col] = true;
        const childNode = node.children.get(c);

        dfs(childNode, row + 1, col, word + c, seen);
        dfs(childNode, row - 1, col, word + c, seen);
        dfs(childNode, row, col + 1, word + c, seen);
        dfs(childNode, row, col - 1, word + c, seen);

        seen[row][col] = false;
    }

    const m = board.length;
    const n = board[0].length;
    const seen = Array(m).fill(0).map(() => Array(n).fill(false));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(trie.root, i, j, board[i][j], seen);
        }
    }

    return result;
}





function findWords2(board, words) {
    const
        trie = new Trie(),
        result = new Set(),
        seen = new Array(board.length).fill(0).map(o => new Array(board[0].length).fill(false))
    for (let word of words) {
        trie.insert(word)
    }
    function dfs(node, row, col, word) {
        console.log({ node })
        if (node.isEnd) {
            result.add(word)
        }
        if (!inBound(-1, seen.length, row) || !inBound(-1, seen[0].length, col) || seen[row][col]) {
            return
        }
        //  avoid revisiting them and going into an infinite loop.
        //  When the DFS function starts exploring a new cell, it sets seen[row][col] to true to mark it as visited.
        seen[row][col] = true
        const
            currentChar = board[row][col],
            childNode = node.keys[currentChar]
        console.log({ currentChar, keys: node.keys, childNode })

        for (let [rowDir, colDir] of directions) {
            dfs(childNode, row + rowDir, col + colDir, word + currentChar)
        }

        /*
        Once the DFS function has finished exploring all the neighbors of a cell,
        it sets seen[row][col] back to false before returning.
        This is because other paths may still need to visit this cell in order to form a different word,
         and marking it as unvisited again allows the other paths to explore it.
        */

        seen[row][col] = false
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const currentChar = board[i][j]
            console.log(currentChar, trie.root.keys[currentChar])
            dfs(trie.root.keys[currentChar], i, j, currentChar)
        }
    }
    console.log({ result })

}


console.log(
    findWords([["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]], ["oath", "pea", "eat", "rain"])
)