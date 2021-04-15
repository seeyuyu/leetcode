/*
 * @lc app=leetcode.cn id=494 lang=typescript
 *
 * [494] 目标和
 */

// @lc code=start

/**
 * 回溯法处理
 * @param nums 
 * @param target 
 * @returns 
 */
function findTargetSumWays(nums: number[], target: number): number {
  let result = 0
  const n = nums.length
  function backTrack(i, value) {
    if (i === n) {
      if (value === 0) { result += 1 }
      return null
    }
    // 假设当前是+号，value像0靠拢
    value -= nums[i]
    backTrack(i + 1, value)
    value += nums[i]
    // 假设当前是-号码
    value += nums[i]
    backTrack(i + 1, value)
    value -= nums[i]
  }
  backTrack(0, target)
  return result
};

// function findTargetSumWays(nums: number[], target: number): number {
// }

// "[1,1,1,1,1] \n 3"
// @lc code=end

