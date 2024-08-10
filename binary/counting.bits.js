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