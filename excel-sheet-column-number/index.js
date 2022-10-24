
/*
AA => {
a. To convert string or char into number value we need  refer asci table
    1. Start from the right side i.e end
    2. 'A' => A.charCodeAt() => 65 - 64 => 1
    3. When the pointer travels next step, we do the same ('A'.charCodeAt() - 64 => 1), then we mulply with number of travel,  times 26 i.e 1 * 26 => 26
    4. We add those two values i.e 1 + 26 => 27

b. 'ABC' => {
        1. Pointer travels to C
        2. 'C'.charCodeAt() - 24 => 3
        3. 'B'.charCodeAt() - 24 => 2 * 26 => 52
        4. 'A'.charCodeAt() - 24 => 1 * 26 * 26 => 676

        Finally (3 + 52 + 676) => 731
    }    
}
*/

const excelColumnToNumber = input => {
    let
     answer = 0,
     power = 1,
     lengthOfInput = input.length

     for(let i = lengthOfInput-1;  i >= 0 ; i--){
         const asciCodeValue = input[i].charCodeAt() - 64
         answer = answer + asciCodeValue * power
         power = power * 26
     }
     return answer
}
/*

*/
console.log(excelColumnToNumber('AA'))