/*



const root = myNode()
function Trie(){

}
Trie.prototype.root = {

}

Trie.prototype.insert = (word, node = root) => {
    console.log(this.insert)
    console.log(this)
     if(word.length === 0){
        node.isEnd = true
        return
    }else if(!node.keys[word[0]]){
        node.keys[word[0]] = myNode()
        this.insert(word.substring(1), node.keys[word[0]])
    }else{
        // if node exist
        this.insert(word.substring(1), node.keys[word[0]])
    }
}

Trie.prototype.search = (word, node = root) => {
    if(word.length === 0){
        return node.isEnd
    }else if(!node.keys[word[0]]){
        return false
    } else{
        return search(word.substring(1), node.keys[word[0]])
    }
}

Trie.prototype.prefix = (word, node = root) => {
    if(word.length === 0){
        return true
    }else if(!word.keys[word[0]]) {
        return false
    }else{
        return prefix(word.substring(1), node.keys[word[0]])
    }
}

const trie = new Trie()

console.log(trie.insert('apple'))
console.log(trie.insert('ate'))
console.log(trie.root)


*/


function Animal(name) {
    this.name = name;
    this.sound = "Some generic animal sound";
}

Animal.prototype.makeSound = function (count) {
    count = count || 1;
    if (count <= 3) {
        console.log(this.sound);
        this.makeSound(count + 1);
    }
};

const animal = new Animal("Rufus");
animal.makeSound();

function myNode() {
    return {
        isEnd: false,
        keys: {}
    }
}


function Trie() {
    this.root = myNode()
}

Trie.prototype.insert = function (word, node = this.root) {

    if (word.length === 0) {
        node.isEnd = true
        return
    } else if (!node.keys[word[0]]) {
        node.keys[word[0]] = myNode()
        this.insert(word.substring(1), node.keys[word[0]])
    }else{
        this.insert(word.substring(1), node.keys[word[0]])
    }
}

Trie.prototype.searchRecursive = function (word, node = this.root) {
    if(word.length === 0){
        return node.isEnd
    }else if(!node.keys[word[0]]){
        return false
    }else{
        return this.searchRecursive(word.substring(1), node.keys[word[0]])
    }
}

Trie.prototype.searchPrefix = function (prefix, node  = this.root){
    if(prefix.length === 0){
        return true
    }else if(!node.keys[word[0]]){
        return false
    }else{
        return this.searchPrefix(prefix.substring(1), node.keys[word[0]])
    }
}

let trie = new Trie()
trie.insert('what')
console.log(trie.root)
console.log(trie.searchRecursive('what'))
console.log(trie.searchRecursive('whatt'))



function node() {
    return {
        isEnd: false,
        keys: {}
    }
}
class Revision{
    constructor() {
        this.root = node()
    }

    insert(word, node = this.root) {
        if (word.length === 0) {
            return true
        } else if (!node.keys[ word[ 0 ] ]) {
            node.keys[ word[ 0 ] ] = node
            this.insert(word.substring(1), node.keys[word[0]])
        }
        return this.insert(word.substring(1), node.keys[word[0]])
    }

    search(word, node = this.root) {
        if (word.length === 0) {
            return node.isEnd
        } else if (node.keys[word[0]]) {
            return true
        }
        return this.search(word.substring(1), node.keys[word[0]])
    }

    prefix(prefix, node = this.root) {
        if (prefix.length === 0) {
            return true
        } else if (!node.keys[prefix[0]]) {
            return false
        } else {
            return this.prefix(prefix.substring(1), node.keys[prefix[0]])
        }
    }


}



function myNode(value) {
    return {
        value,
        next: {}
    }
}

function trieAutoSuggestion() {
    let root = {}

    insert(word, node = this.root){
        /*
            1. initiate a node with current char
            2. check if currentNode exist in the trie
                a. if exist then check for the 2nd char in the word
                b. if it does not exist then trie[currentChar] = new Node
        */

        if (word.length === 0) {
            return true
        }

        if (!node.keys[ word[ 0 ] ]) {
            node.keys[ word[ 0 ] ] = node()
            insert(word.substring(1), node.keys[ word[ 0 ] ])
        }

        return this.insert(word.substring(1), node.keys[word[0]])
    }
    searchWord(word, node = this.root){
        /*
            1. pick a current char
            2. now from the root node on the keys search the first char of the word searched
                a. then search 2nd
                b. then search 3rd
                c. if anytime while searching the nodes doesn't exist return false else return true
        */

        if (word.length === 0) {
            return node.keys
        }
        if (!node.keys[ word[ 0 ] ]) {
            return false
        }
        return this.searchWord(word.substring(1), node.keys[word[0]])
    }
    searchPrefix(word, node){
        /*
            do the same flow as preifx word and at the last char of prefix see keys of that node exist
                1. return true if child keys exist
                2. return false if doesn't exist
        */
        if (word.length === 0) {
            return node.keys
        } else if (!node.keys[ word[ 0 ] ]) {
            return false
        }
        this.searchPrefix(word.substring(1), node.keys[word[0]])
    }
    remove(word){

    }
}