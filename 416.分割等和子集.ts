/*
 * @lc app=leetcode.cn id=416 lang=typescript
 *
 * [416] 分割等和子集
 */

// @lc code=start
function canPartition(nums: number[]): boolean {

  let sum = nums.reduce((item, sum) => {
    return item + sum
  }, 0)
  if ((sum % 2)) return false
  // nums = nums.sort((a, b) => a - b)
  let len = nums.length
  let target = sum / 2
  // 生成一个数组长度为行，target+1 为列的dp表，
  let dp = new Array(len).fill(null)
    .map(item => new Array(target + 1).fill(false))
  // 设计dp[i][j]为在0和i之间，存在一些正整数，是的这些和为j
  // 处理边界值
  // if (target >= nums[0]) {
  //   dp[0][nums[0]] = true
  // }

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < target + 1; j++) {
      if (j === nums[i]) {
        dp[i][j] = true
        // continue;
      } else if (j > nums[i]) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]]
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  // console.log(dp)
  return dp[len - 1][target]
};
//  "[9,1,2,4,10]"
// @lc code=end

