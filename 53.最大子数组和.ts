/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start

// for循环，可以暴力算出，一个二维表格
// 优化这个暴力算法
// 定义一个 dp[n] 为 以nums[n] 结尾的最大子数组和

// Your runtime beats 92.39 % of typescript submissions
// Your memory usage beats 29.3 % of typescript submissions (48.8 MB)
// function maxSubArray(nums: number[]): number {
//   let dp = new Array(nums.length)
//   let max = nums[0]
//   dp[0] = nums[0]
//   for (let i = 1; i <nums.length; i++) {
//     dp[i] = Math.max(nums[i], (dp[i - 1] + nums[i]))
//     max = Math.max(dp[i], max)
//   }
//   // console.log(dp)
//   return max
// };

// Your runtime beats 70.7 % of typescript submissions/
// Your memory usage beats 33.81 % of typescript submissions (48 MB)

function maxSubArray(nums: number[]): number {
  // let dp = new Array(nums.length)
  let max = nums[0]
  let pre= nums[0], cur =nums[1]

  for (let i = 1; i <nums.length; i++) {
    cur = Math.max(nums[i], (pre + nums[i]))
    pre = cur
    max = Math.max(cur, max)
  }
  return max
};
// @lc code=end

