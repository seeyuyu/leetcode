/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b)
  // console.log('nums is ', nums)
  let min = 10000000
  let result = 0
  let length = nums.length
  for (let i = 0; i < length - 1; i++) {
    let L = i + 1, R = length - 1
    if (nums[i] === nums[i - 1]) continue;
    while (1 && L < R) {
      // console.log('i am inner is ', i)
      // sum会不断别大
      let sum = nums[i] + nums[L] + nums[R]
      // console.log('i ,L ,R,Math.abs(sum - target),min ', i, L, R, Math.abs(sum - target), min)
      // console.log('sum - target, min ', sum, target, min)
      if (Math.abs(sum - target) <= min) {
        // console.log('Math.abs(sum - target) < min is ', sum, target, min)
        min = Math.abs(sum - target)
        result = sum
        // 如果sum大于target,那么sum继续变大，会扩大差值，没有必要继续遍历
      }
      if (sum > target) {
        R--;
      } else if(sum< target){
        L++;
      }else{
        return sum
      }
    }
  }
  return result
};
// @lc code=end

