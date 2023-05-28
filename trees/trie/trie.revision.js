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
