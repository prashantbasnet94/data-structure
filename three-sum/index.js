/*

Questons:
    1. Can the array include -ve => yes
    2. Can the array be empty => yes
    3. What to return in case of no solution => []

-------------------Logic------------------------
   [-1,0,1,2,-1,-4]
    i j k
   -1 0 1 ===> okay
   -1 1 2
   -1 2 -1 ===> disqualifies => i === k
   -1 -1 4

    0 1 2
    0 2 -1
    0 -1 -4

    1 2 -1
    1 -1 -4

    2 -1 -4


var threeSum = function(nums) {
    if (nums.length < 3) return [];
    nums.sort((a, b) => a - b);
    const results = [];
    for (let i = 0; i < nums.length - 1; i++) {
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum < 0) l++;
            else if (sum > 0) r--;
            else {
                results.push([nums[i], nums[l], nums[r]]);
                while (nums[i] === nums[i + 1]) i++;
                while (nums[l] === nums[l + 1]) l++;
                while (nums[r] === nums[r - 1]) r--;
                l++; r--;
            }
        }
    }
    console.log(results);
    return results;
}

logic:

1. Sort the array in an ascending order to begin th calcul
2. start a loop iterating over the elements. Have 2 other pointer:
    a. Left pointer starting from index + 1 on the loop
    b. Right Pointer starting from lengthOfArray - 1
3. Loop while left Pointer is less than right pointer to cover all ground
    a. sum = array[index] + array[leftPoitner] + array[rightPointer]
    b. if(sum < 0)  {left ++}
    c. if(sum > 0) {right--}
    d. When sum === 0
    result.push([array[index], array[leftPoitner] , array[rightPointer]])
    while(array[index] === array[index + 1]){ index++}
    while(array[leftPointer] === array[leftPointer + 1]) {leftPointer ++}
    while(array[rightPointer] === array [rightPointer - 1]){ rightPOinter --}

    leftPinter ++
    rightPointer --
*/

const threeSum = input => {
const
    sortInput = input.sort((a,b) => a-b)
    let result = []
if(input.length < 3){
    return result
}


for( let i =0; i < input.length ; i++){
    let 
     leftPointer = i + 1,
     rightPointer = input.length - 1
     
     while(leftPointer < rightPointer){
       const sum = sortInput[i] + sortInput[leftPointer] + sortInput[rightPointer]

        if(sum < 0){
            leftPointer++
        }else if( sum > 0 ){
            rightPointer --
        }else{
            result.push([sortInput[i], sortInput[leftPointer], sortInput[rightPointer]])
            while(sortInput[i] === sortInput[i + 1]){i++}
            while(sortInput[leftPointer] === sortInput[leftPointer + 1]){leftPointer++}
            while(sortInput[rightPointer] === sortInput[rightPointer - 1]){rightPointer--}
            
            leftPointer++
            rightPointer--
        }
      
     }
}

return result

}
// console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,0,0]))
