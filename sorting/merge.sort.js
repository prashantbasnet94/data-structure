/*

It's one of the most efficeint ways you can sort a list of things, and typically performs better than most other sorting algo

In terms of complexity:
nlogn, n    => we are still comparing everything atleast once
       logn => {
            unlike bublle although we have to compare everything atleast once, we don't have to compare everytthing to everything
            we divide the array and then compare the local list to each other
            }


Merge Sort:

Divide a given list into two list from middle

[99,3,2,200,0,1] => {
    left: [99, 3, 2] 
    right: [200,0,1]

    left = [99, 3, 2] => {
        left:[99]
        right:[2,1]

        right=[2,1] => {
            left:  [2],
            right: [1]
        }
    }
    right= [200,0,1] => {
        left : [200]
        right: [0, 1] => {
            left = [0]
            right =[1]
        }
    }
    when big array is broken down into each single element list
    then we run the compare algorithm

    [99,3,2,200,0,1] => [99] [3] [2] [200] [0] [1]
    [99] [3] [2] [200] [0] [1] => {

        left: [99]
        right: [3]
        99 > 3 => [3,99]

        left: [2]
        right: [200]
        200 > 2 => [2,200]

        left: [0]
        right: [1]
        1 > 0 => [0,1]

        left: [3,99]
        right: [2,200]
        3 > 2 =>  [2]
        200 > 3 => [2,3]
        200 > 99 => [2, 3, 99, 200]

        left: [2, 3, 99, 200]
        right: [0,1]
        2 > 0 => [0]
        2 > 1 => [0, 1, 2, 3, 99, 200]


    }
}
*/
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function merge(left, right) {
    console.log('$$$$', left, right)

    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++
        }
    }
    let 
    joinRemaining = [].concat(left.slice(i)).concat(right.slice(j)),
    finalresult = result.concat(joinRemaining)
    return finalresult;
}
function mergeSort(array) {
    if (array.length === 1) {
        return array
    }
    // Split Array in into right and left
    const length = array.length;
    const middle = Math.floor(length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)
    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}
mergeSort(numbers)

/*
merge(
    mergeSort([99, 44, 6, 2, 1]),
    mergeSort([5, 63, 87, 283, 4, 0])
)
merge(
    merge(
        mergeSort([99, 44]),
        mergeSort([6, 2, 1])
    ),
    mergeSort([5, 63, 87, 283, 4, 0])
)
merge(
    merge(
        merge(
            mergeSort([99]),
            mergeSort([44])
        ),
        merge(
            mergeSort([6]),
            mergeSort([2, 1])
        )
    ),
    mergeSort([5, 63, 87, 283, 4, 0])
)
merge(
    merge(
        [44, 99],
        merge(
            [6],
            merge(
                mergeSort([2]),
                mergeSort([1])
            )
        )
    ),
    mergeSort([5, 63, 87, 283, 4, 0])
)
merge(
    merge(
        [44, 99],
        merge(
            [6],
            [1, 2]
        )
    ),
    mergeSort([5, 63, 87, 283, 4, 0])
)

merge(
    merge(
        [44, 99],
        [1, 2, 6]
    ),
    mergeSort([5, 63, 87, 283, 4, 0])
)
merge(
    [1, 2, 6, 44, 99],
    mergeSort([5, 63, 87, 283, 4, 0])
)
merge(
    [1, 2, 6, 44, 99],
    merge(
        mergeSort[5, 63, 87],
        mergeSort[283, 4, 0]
    )
)
merge(
    [1, 2, 6, 44, 99],
    merge(
        merge(
            mergeSort[5],
            mergeSort[63, 87]
        ),
        mergeSort[283, 4, 0]
    )
)

merge(
    [1, 2, 6, 44, 99],
    merge(
        merge(
            [5],
            merge(
                mergeSort[63],
                mergeSort[87]
            )
        ),
        mergeSort[283, 4, 0]
    )
)
merge(
    [1, 2, 6, 44, 99],
    merge(
        merge(
            [5],
            merge(
                [63],
                [87]
            )
        ),
        mergeSort[283, 4, 0]
    )
)

merge(
    [1, 2, 6, 44, 99],
    merge(
        merge(
            [5],
            [63, 87]
        ),
        mergeSort[283, 4, 0]
    )
)
merge(
    [1, 2, 6, 44, 99],
    merge(
        [5, 63, 87],
        mergeSort[283, 4, 0]
    )
)
[5, 63, 87]

merge(
    mergeSort([6]),
    mergeSort([2, 1])
)
*/