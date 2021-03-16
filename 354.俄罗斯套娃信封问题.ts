/*
 * @lc app=leetcode.cn id=354 lang=typescript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
// dp方法 
// function maxEnvelopes(envelopes: number[][]): number {
//   let sort = envelopes.sort((a, b) => { return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0] }).map(item => item[1])
//   // console.log(sort)
//   let length = sort.length
//   let max = 1
//   // dp[i] 表示，0-i个元素中，可以形成dp[i]个递增子序列
//   let dp = new Array(length).fill(1)
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (sort[i] > sort[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1)
//       }
//       max = Math.max(dp[i], max)
//     }
//   }
//   return max
// };

function maxEnvelopes(envelopes: number[][]): number {
  let sort = envelopes.sort((a, b) => { return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0] }).map(item => item[1])
  // console.log(sort)
  let length = sort.length
  let max = 1
  // dp[i] 表示，0-i个元素中，可以形成dp[i]个递增子序列
  let dp = new Array(length).fill(1)
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (sort[i] > sort[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
      max = Math.max(dp[i], max)
    }
  }
  return max
};
// @lc code=end

