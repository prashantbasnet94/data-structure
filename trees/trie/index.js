/*

    Tries:

    A tree or a trie, just a variation of tree, in particular case it's a variation of an Nary tree

    This data structure particulary holds strings.

    This data strucutre is very useful when you need to quickly search up different words or characters as long as they are based on strings.


    The key to remember here is that they are a form of Nary tree, but very specific purpose of helping us quickly search up words.

    Here, core is actually implmenting our own trie and modify it additional method.

    interface Trie {
        void insert(String word)
        Boolean search(String word)
        Boolean startsWith(String prefix)
    }

*/



function recursive(name, nameLength, finalBranch) {
    if (nameLength === 0) {
        return finalBranch
    }
    let newResult = {}
    if (name.length - 1 === nameLength) {
        newResult[[name[nameLength]]] = { isEnd: true }
    } else {
        newResult[[name[nameLength]]] = finalBranch
    }
    return recursive(name, nameLength - 1, newResult)
}

class Trie {
    constructor() {
        this._root = {}
    }
    insert(word) {
        //apple
        let branch = this._root[word[0]]

        if (!branch) {
            this._root[word[0]] = recursive(word, word.length - 1, {})
        } else {
            for (let i = 1; i < word.length; i++) {
                let subBranch = branch[word[i]]
                if (!subBranch) {
                    branch[word[i]] = recursive(word, word.length - 1, {})
                } else {
                    branch = subBranch
                    if (i === word.length - 1) {
                        branch.isEnd = true
                    }
                }
            }
        }
        return true
    }

    search(word) {
        console.log('searching word', word)
        /*  
            search(zebra)
                tree
            a   b   c   d
         t   p
         e   p
             l
             e
            if not found in level 1, i.e this._root[char] === undefined, return false
            if a char is matched @ first level go down that level further
        */
        let branch = this._root[word[0]]
        if (!branch) return false

        for (let index = 0; index < word.length; index++) {

            if (index === 0) continue
            let subBranch = branch[word[index]]
            if (!subBranch) return false
            branch = subBranch
        }
        return branch && branch.isEnd || false
    }

    startsWith(prefix) {
        console.log('checking for prefix ', prefix)
        // check in th root for the path prefix and return true if all the prefix already exist

        let branch = this._root[prefix[0]]
        if (!branch) return false

        for (let i = 1; i < prefix.length; i++) {
            let subBranch = branch[prefix[i]]
            if (!subBranch) return false
            subBranch = branch
        }
        return true
    }
}

// let trie = new Trie()
// trie.insert('apple')
// console.log(trie._root)
// trie.insert('dog')
// trie.insert('dogs')

// console.log(trie.search('dog'))
// console.log(trie.search('apple'))
// console.log(trie.startsWith('app'))
// console.log(trie.search('app'))
// trie.insert('app')
// console.log(trie.search('app'))
// console.log(trie._root)



// {
//     a:{
//         p:{
//             p:{
//                 l:{
//                     e:{
//                         isEnd: true
//                     }
//                 }
//             }
//         }
//     }
// }




// *************** refactor *******************************

function Trie2() {
    return {
        end: false,
        keys: {}
    }
}

class Trie3 {
    constructor() {
        this.root = Trie2()
    }
    insert(word) {
        // if first word exist then go down that path
        // if not create a key 
        let currNode = this.root
        for (let i = 0; i < word.length; i++) {
            if (!currNode.keys[word[i]]) {
                currNode.keys[word[i]] = Trie2()
            }
            currNode = currNode.keys[word[i]]
            if (i === word.length - 1) {
                currNode.end = true
            }
        }
        return this.root.keys
    }

    insertRecursive(word, node = this.root) {
        if (word.length === 0) {
            node.end = true
            return
        }
        // think about different condition in whihc we are inserting characters into ta specific trie node
        // check if the key does not exist
        else if (!node.keys[word[0]]) {
            node.keys[word[0]] = Trie2()
            this.insertRecursive(word.substring(1), node.keys[word[0]])
        }
        // if key exist 
        else {
            this.insertRecursive(word.substring(1), node.keys[word[0]])
        }



    }

    search(word) {
        let currNode = this.root

        for (let i = 0; i < word.length; i++) {
            currNode = currNode.keys[word[i]]
            if (!currNode) return false
        }
        return currNode.end || false
    }

    searchRecursive(word, currNode = this.root) {
        if (word.length === 0) {
            return node.end
        } else if (!currNode.keys[word[0]]) {
            return false
        } else {
            return this.searchRecursive(word.substring(1), node.keys[word[0]])
        }
    }
    searchPrefix(prefix) {
        let currNode = this.root
        for (let i = 0; i < prefix.length; i++) {
            currNode = currNode.keys[prefix[i]]
            if (!currNode) return false
        }
        return true
    }
    searchPrefixRecursive(prefix, node = this.root) {
        if (prefix.length === 0) {
            return true
        } else if (!node.keys[prefix[0]]) {
            return false
        } else {
            return this.searchPrefixRecursive(prefix.substring(1), node.keys[prefix[0]])
        }
    }
}

let trie2 = new Trie3()
console.log(trie2.insertRecursive('apple'))
console.log(trie2.insertRecursive('ate'))
//  console.log(trie2.search('dog'))
//  console.log(trie2.search('ate'))
//  console.log(trie2.searchPrefix('app'))



 //https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22531892#overview
 //************************FROM LECTURE */




