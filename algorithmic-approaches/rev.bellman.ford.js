/*
1. We can to create distances array
2. 



*/

function networkDelay(times, N, k){
    const distances = new Array(N).fill(Infinity)
    //k -1 is our starting node, and the distance to itself is 0
    distances[k-1] = 0


    for(let i = 0; i < N -1; i++){
        // we also want to keep track if the value in our distances array has been updated
        // by 3rd cycle, we might have the result, but running the compution even if the values did not update is the waste

        let count = 0
        //iterating over the edges
        for(let j =0; j < times.length; j++ ){
            // (3, 4), 3 is source
            const source = times[j][0]
            const target = times[j][1]
            const weight = times[j][2]

            if(distances[source] + weight < distances[target]){
                distances[target] = distances[source] + weight
                count++
            }
        }
        if(count === 0) break
    }
    const ans = Math.max(...distances)
    return ans === Infinity? -1 : ans
}