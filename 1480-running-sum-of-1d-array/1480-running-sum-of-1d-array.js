/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let result = [];

 let c =  nums.reduce((a, b) => {
    result.push(a);
    
    return a + b;
  });
  result.push(c);
  return result;
};