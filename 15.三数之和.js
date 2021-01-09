/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // nums现在为升序数组
  nums = nums.sort((a, b) => {
    return a - b
  })
  let length = nums.length
  let result = []
  // console.log('new nums is', nums)
  for (let i = 0; i < length - 1; i++) {
    // 如果当前项，已经大于0了，后面的值只会更大
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let L = i + 1, R = length - 1
    while (L < R) {
      const sum = nums[L] + nums[i] + nums[R]
      if (sum === 0) {
        result.push([nums[i], nums[L], nums[R]])
        while (L < R && nums[L] === nums[L + 1]) L++
        while (L < R && nums[R] === nums[R - 1]) R--
        R--;
        L++;
      } else if (sum > 0) {
        R--
      } else {
        L++
      }
    }
  }
  // console.log('result is ', result)
  return result
};
// @lc code=end

