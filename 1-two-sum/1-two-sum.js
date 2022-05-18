/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let seen = {};

  for (let i = 0; i < nums.length; i++) {
    remaining = target - nums[i];
    if (remaining in seen) return [i, seen[remaining]];
    seen[nums[i]] = i;
  }
};
