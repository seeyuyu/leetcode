/*
 * @lc app=leetcode.cn id=647 lang=typescript
 *
 * [647] 回文子串
 */

// @lc code=start
// Your runtime beats 31.91 % of typescript submissions
// Your memory usage beats 15.96 % of typescript submissions (57.5 MB)
function countSubstrings(s: string): number {
  let len = s.length
  let dp = new Array(len).fill(true).map(() => new Array(len).fill(true))
  let num = 0

  for (let i = 0; i < len; i++) {
    dp[i][i] = true
    num++
  }
  for (let i = len; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1]
      // console.log('dp[i][j] is',i,j,'--------' ,  dp[i][j])
      if (dp[i][j]) {
        num++
      }
    }
  }
  // console.log(dp)
  return num
};
// @lc code=end

