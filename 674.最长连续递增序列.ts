/*
 * @lc app=leetcode.cn id=674 lang=typescript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
// 这里的关键字，在连续两字（子串 ≠ 子序列），降低了难度，不像递增子序列一样，还要多一重循环
function findLengthOfLCIS(nums: number[]): number {
  let len = nums.length
  let dp = new Array(len), max = 1
  dp[0] = 1
  for (let i = 0; i < len; i++) {
    let res = 1
    // for (let j = 0; j <= i; j++) {
    if (nums[i] > nums[i - 1]) {
      res = Math.max(res, dp[i - 1] + 1)
    } 
    // }
    dp[i] = res
    max = Math.max(max, dp[i])
  }
  return max
};
// @lc code=end

