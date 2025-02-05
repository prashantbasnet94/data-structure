class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */

    constructor(){
        this.direction =  [
            [-1, 0]    // up
            [0, 1]  //right
            [1, 0]    //down
            [0, -1]    //left
            ]
        this.trie  =  new Trie()
    
    }
    findWords(board, words) {

        /*
            1. we will traveser the 2D array with bfs
            2. we are given words list, we will construct the trie out of this words list
            
            as we traverse , if we get the end, then we will push it into the result


            how do we check if this is forming a word?
            

        */
            for(let word of words){
                    this.trie.insert(word)
            }

            
    }
    inRange(min, value, max){
        return min < value && value < max
    }
   
    dfs(array, seen, row, col, word, node){
        if(seen[row][col] 
            || !this.inRange(-1, row, array.length) 
            || !this.inRange(-1, col, array[0].length)){
                return
            }

        const char = array[row][col]
        const node = node.keys[char]
        if(!node.keys[char]){
            return
        }

        word +=char
        seen[row][col] = true

        if(node.isEnd){
            result.push(word)
        }
        for(let [dirRow, dirCol] of this.direction){
            this.dfs(array, seen, row + dirRow, col + dirCol, word, node.keys[char], result)
        }
        seen[row][col] = false
    }
}


class Trie{
    constructor(){
        this.root = {
            keys: {},
            isEnd: false
        }
    }

    insert(word, node = this.root){
        if(word.length === 0){
            node.isEnd = true
            return
        }
        if(!node.keys[word[0]]){
            node.keys[word[0]] = {
                keys:{},
                isEnd: false
            }
        }
        this.insert(word.substring(1), node.keys[word[0]])
    }

    search(word, node = this.root){
        if(word.length === 0){
            return node.isEnd
        }
        if(!node.keys[word[0]] ){
            return false
        }
        return this.search(word.substring(1), node.keys[word[0]])
    }
}