/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
// function lengthOfLIS(nums: number[]): number {
//   let length = nums.length
//   let max = 1;
//   let dp = new Array(length).fill(1)
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//       // 每向后递增一个元素，都要拿之前的元素和其对比，如果递增的元素比之前元素大，
//       // 则启动max判断, max(dp[j]+1, dp[i])
//       if (nums[i] > nums[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1)
//       }
//     }
//     max = Math.max(max, dp[i])
//   }
//   return max
// };

function lengthOfLIS(nums: number[]): number {
  let length = nums.length

  
  return 

}
// @lc code=end

