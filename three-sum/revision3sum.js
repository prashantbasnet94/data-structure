/*
    given an array = [ 1, -2, 3, 2, 4, -3, 5]
    and a target 

    find return [i , j, k], where i !==j !== k
    and such that [i] + [j] + [k] = target
*/

function threeSum(input, target) {
    let result = []
    if (input.length === 0) {
        return result
    }

    // we also need to sort the given data
    let sortedInput = input.sort((a, b) => a - b)

    for (let i = 0; i < sortedInput.length; i++) {
        let
            leftPointer = i + 1,
            rightPointer = sortedInput.length - 1

        while (leftPointer < rightPointer) {
            let sum = sortedInput[i] + sortedInput[leftPointer] + sortedInput[rightPointer]

            if (sum < 0) {
                leftPointer++
            } else if (sum > 0) {
                rightPointer--
            } else {
                result.push([sortedInput[i], sortedInput[leftPointer], sortedInput[rightPointer]])

                while (sortedInput[i] === sortedInput[i + 1]) i++
                while (sortedInput[leftPointer] === sortedInput[leftPointer + 1]) leftPointer++
                while (sortedInput[rightPointer] === sortedInput[rightPointer - 1]) rightPointer--

                leftPointer++
                rightPointer--
            }

        }
    }
    return result
}
// 0 . 1 .2  3  4 . 5 . 6
console.log(threeSum([1, -2, 3, 2, 4, -3, 5], 3))