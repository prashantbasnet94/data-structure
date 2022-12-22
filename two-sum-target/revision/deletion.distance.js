
/*
def deletion_distance(str1, str2):
  m = [[0 for j in range(len(str2) +1)] for i in range(len(str1)+1)] 
  for i in range(len(str1)+1):
    for j in range(len(str2)+1):
      if i == 0:
         m[i][j] = j
      elif j == 0:
         m[i][j] = i
      elif str1[i-1] == str2[j-1]:
         m[i][j] = m[i-1][j-1]
      else:
         m[i][j] = 1 + min(m[i-1][j], m[i][j-1])
  
  
  return m[len(str1)][len(str2)]



print(deletion_distance("dog","frog"))

"""




"""
*/
function deletionDistance(){

}

function recursionRelation(word1, word2, deletion = 0 ){
    if(word1.length < 1) {
        console.log('word1',deletion, word2.length)
        return deletion + word2.length
    }

    if(word2.length < 1) {
        console.log('word2',deletion, word1.length)
        return deletion + word1.length
    }

    // word1 = heatt, word2 = hit

    // ate, eat


     
     // if this current char exist on word2, remove it from there


     if(word1[0] === word2[0]){
        return recursionRelation(word1.slice(1), word2.slice(1), deletion)
     }else{
        return  recursionRelation(word1.slice(1), word2.slice(1), deletion + 2)
     }
    

}   


console.log(recursionRelation('heat', 'hit'))