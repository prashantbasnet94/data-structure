//["eat","tea","tan","ate","nat","bat"]
function groupAnagram(strs) {
  const result = [];
  const processed = new Set();

  for (let i = 0; i < strs.length; i++) {
    if(processed.has(strs[i])) continue
    const discovery = [strs[i]]
    processed.add(strs[i]);
    
    for (let j = i + 1; j < strs.length; j++) {
      if (!processed.has(strs[j]) && basicAnagramDetection(strs[i], strs[j])) {
       
        discovery.push(strs[j]);
        processed.add(strs[j])
      }
    }
    result.push(discovery);
  }
  return result
}

function isAnagram(s, t) {
  const newMap = new Map();

  for (let i = 0; i < s.length; i++) {
    let key = s[i];
    newMap.set(key, (newMap.get(key) || 0) + 1);
  }
  for (let i = 0; i < t.length; i++) {
    let key = t[i];
    if (!newMap.has(key)) return false;
    if (newMap.get(key) === 1) {
      newMap.delete(key);
    } else newMap.set(key, newMap.get(key) - 1);
  }
  return newMap.size === 0;
}

console.log(groupAnagram2(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(isAnagram("", ""));




function basicAnagramDetection(s, t){
    const myMap = new Map()
    // building map
    for(let i = 0; i < s.length; i++){
        let key = s[i]
        myMap.set(key, (myMap.get(key) || 0) + 1)
    }

    // decementing our map
    for(let i = 0; i < t.length; i++){
        let key = t[i]
        if(!myMap.has(key))return false
        if(myMap.get(key) ===1){
            myMap.delete(key)
        }else {
            myMap.set(key, (myMap.get(key) - 1))
        }
        
    }
    return myMap.size === 0 

}


function groupAnagram2(array){
    let result = []
    let processed = new Set()
    for(let i = 0; i < array.length; i++){
        if(processed.has(array[i])) continue
        const discovery = [array[i]]
        processed.add(array[i])
        for(let j = i+1; j< array.length;j++){
            if(!processed.has(array[j]) && basicAnagramDetection(array[i], array[j])){
                discovery.push(array[j])
                processed.add(array[j])
            }
        }
        result.push(discovery)
    }
    return result
}