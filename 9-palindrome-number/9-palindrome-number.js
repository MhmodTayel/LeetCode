/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x= x+''
    let reversed = x.split('').reverse().join('')
    return x === reversed
};