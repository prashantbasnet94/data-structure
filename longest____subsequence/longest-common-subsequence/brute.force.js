function bruteForce(m, n) {
    /*

     go over the m and check for the sequece in n
     go over n and check over the sequence in m


    m = 'ABC'
    n= 'BC'


    thinking process:

    1. m and n is compared
        a. i check the first item on m i.e A is there on n
            x. Either it is there
            y. Or it is not, yes =====> , LCS so far is 0

        b. next, i check the 2nd item from m, which is B
            x. Either it is there, yes =====>, LCS = 1
            y. or not


        c. now compare the 3rd item from m, i.3 C
            x. Either it is there or not, yes =====>, LCS = 1 + 1 = 2
            y. or not

        d. since we don't have any thing to compare, we are done and return 2

     */


    let lcs = 0
    for (let i = 0; i < m.length; i++){
        for (let j = 0; j < n.length; j++){

            // comparing the first item of m with n
            if (m[ i ] === n[ j ]) {
                lcs+++
            }
        }
    }

}