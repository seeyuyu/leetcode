/*
 * @lc app=leetcode.cn id=1143 lang=typescript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
function longestCommonSubsequence(text1: string, text2: string): number {
  let memo = new Array(text1.length + 1).fill(0)
    .map(() => new Array(text2.length + 1).fill(undefined))
  // let arr = new Array(3).fill(0).map(_ => new Array(3).fill(0))
  for (let i = 0; i <= text1.length; i++) {
    for (let j = 0; j <= text2.length; j++) {
      if (i === 0 || j === 0) {
        memo[i][j] = 0
      }
    }
  }

  console.log(memo)

  function dp(i, j) {
    if (i === -1 || j === -1) return 0
    if (text1[i] === text2[j]) {
      // if(memo[i-1, j-1 ], )
      return dp(i - 1, j - 1) + 1
    } else {
      return Math.max(dp(i - 1, j), dp(i, j - 1))
    }
  }
  return dp(text1.length - 1, text2.length - 1)
};
// @lc code=end

