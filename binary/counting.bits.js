function toBinary(num){
    return num.toString(2)
}
function countBits(n){
    let results = [0]
    for(let i = 0; i <= n; i++){
        console.log( toBinary(i).split('').filter(o => o ==='1').length)
        results[i] =  (toBinary(i).split()).filter(o => o ==='1').length
    }
    console.log(results)
}

countBits(2)

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const dp = new Array(n+1).fill(0)
    let offset = 1
    for(i = 1; i < n+1; i++){
        if(offset * 2 === i){
           offset = i
        }
        dp[i] = 1 + dp[i-offset]
    }
    return dp
};