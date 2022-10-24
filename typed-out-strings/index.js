/*

Questions:
    1.  What happens when 2 # value appears beside each other?
        ab## => ''

    2.  What happens to # when there is no char to remove?
    'a###b' => 'b'

    3. Are two empty strings equal to each other?
     yes

    4. Does case sensitivity matter ?
     Yes


Test cases:
    1. 'ab#z', 'az#z'  => true
    2. 'abc#d', 'acc#c' => false
    3. 'a#b#', 'a#' => true
    4. 'a####b', 'b' => true
    5. 'A#b', 'B#B' => false
*/

const buildArray = input => {
    let stack = []
    for( let i = 0; i < input.length; i++){
        if(input[i] === '#'){
            stack.pop()
        }else{
            stack.push(input[i])
        }
    }
    return stack
},
typeOutString = (s,t) => {
    le
    result1 = buildArray(s).join('')   
    result2 = buildArray(t).join('')
    return result1 === result2
},

//'ab#z', 'az#z' 
typeOutString2 =(s,t) => {
    let 
        pointerS = s.length - 1,
        pointerT = t.length - 1
        while(pointerS > -1){
            let 
                pointerSToSkip = 0,
                pointerTToSkip = 0,
                sPointingAtHash = s[pointerS] === '#',
                tPointingAtHash = t[pointerT] === '#'

            if(sPointingAtHash){
                pointerSToSkip += 2
            }

            if(tPointingAtHash){
                pointerTToSkip += 2
            }
            if(!sPointingAtHash && !tPointingAtHash){
                if(s[pointerS] !== t[pointerT]){
                    return false
                }
                pointerS--
                pointerT--
            }else{
                while(pointerSToSkip > 0){
                    pointerS --
                    if(s[pointerS] === '#'){
                        pointerSToSkip +=2
                    }else{
                        if(s[pointerS] !== t[pointerT]){
                            return false
                        }
                    }

                }
            }
        }
        return true
},
typeOutString3 =(s,t) => {
    let 
        p1 = s.length - 1,
        p2 = t.length - 1
        while(p1 >= 0 || p2 >= 0){
            if(s[p1] !== t[p2]){
                return false
            }

            if(s[p1] === '#' || t[p2] ==='#'){
                if(s[p1]==='#'){
                    let backcount = 2
                    while(backcount > 0){
                        p1--
                        backcount--
                        if(s[p1] === '#'){
                            backcount+=2
                        }
                    }
                }

                if(t[p2] === '#'){
                    let backcount = 2
                    while(backcount > 0){
                        p2--
                        backcount--
                        if(t[p2] === '#'){
                            backcount += 2
                        }
                    }
                }
            }else{
                //we have a char
                if(s[p1] !== t[p2]){
                    return false
                }else{
                    p1--
                    p2--
                }
            }
        }
        return true
},
typeOutString4 = function(S, T) {
    let p1 = S.length - 1, p2 = T.length - 1;
    
    while(p1 >= 0 || p2 >= 0) {
        if(S[p1] === "#" || T[p2] === "#") {
            if(S[p1] === "#") {
                let backCount = 2;
                
                while(backCount > 0) {
                    p1--;
                    backCount--;
                    
                    if(S[p1] === "#") {
                        backCount += 2;
                    }
                }
            }
            
            if(T[p2] === "#") {
                let backCount = 2;
                
                while(backCount > 0) {
                    p2--;
                    backCount--;
                    
                    if(T[p2] === "#") {
                        backCount += 2;
                    }
                }
            }
        } else {
            if(S[p1] !== T[p2]) {
                return false;
            } else {
                p1--;
                p2--;
            }
        }
    }
    
    return true;
};

console.log(typeOutString3("ab#c", "ad#c"))
console.log(typeOutString3('ab##','c#d#'))
console.log(typeOutString3("a#c",  "b"))
