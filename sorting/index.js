/*

    Why lean about sorting?

    1. Sorting is not big deal on small input data. i.e array = ['a','d','b'] => array.sort() => ['a','b','d']
    2. Problem is when data gets larger and larger 
        a. Google sorts many websites based on date
        b. Amazon sorts products based on categroy, based on price and more
        c. Apple uses sorting in appstore and list there app in some form of sorted order, same for podcast and more
        d. Netflix sorts there moveies, tvshows in some sort of order
     3. Business needs custom sorted data 
     4. Random data that is not sorted are hard to access
     5. Most of the time we pre-process data or sort them
     
---------------------     What sorting algorithm you should use  based on problems ------------------
How to make good decision when it comes to sorting?


*/
const 
    letters = ['a','d','z','e','r','x'],
    basket = [2,67,65,7,90,3],
    words = ['banana','apple','zebbra','dog']

//[ 2, 3, 65, 67, 7, 90 ]
console.log(basket.sort())
//[ 2, 3, 7, 65, 67, 90 ]
console.log(basket.sort((a,b) => a-b))

/*
sort converts number to string Unicode and then uses that value to sort it
 2 => 50
 3 => 51
 6 => 54
 7 => 55
 9 => 57

 that's why result from sort only uses its first letter. as it uses 
 .charCodeAt(0)

 In js, time and space complexity cannot be guarentedd as it is implmmentation depenedent

 */
//  [ 'apple', 'banana', 'dog', 'zebbra' ]
console.log(words.sort())


/*

Bubble sort
Insertion sort
Selection sort
These are elementary sort, they are have nested for loop. They are slow

Can we do better?

O(n^2) => O(nlogn), can this be done?


Merge sort and Quick Sort, use divide and conquer and the idea of recursion

Usually divide and conquer technique gives you logN advantage


*/
