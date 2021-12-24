/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 */

// @lc code=start
// 为了方便判断 dp 有时候要加虚拟的两层辅助线，len+1，
function isSubsequence(s: string, t: string): boolean {
  let sLen = s.length
  let tLen = t.length
  if (!sLen) return true
  let dp = new Array(sLen + 1).fill(0).map(() =>
    new Array(tLen + 1).fill(0)
  )
  // 当长的序列为空的时候，全为 false
  for (let i = 0; i <= sLen; i++) {
    dp[i][0] = false
  }
  // 当短的序列为空的时候，全为 true
  for (let j = 0; j <= tLen; j++) {
    dp[0][j] = true

  }

  // if(s[0]===t[0]){
  //   dp[0][0] =  true
  // } 

  for (let i = 1; i <= sLen; i++) {
    for (let j = 1; j <= tLen; j++) {
      // 因为上面建立 dp 的时候，考虑了为空的情况，所以这里的索引需要 -1
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = dp[i][j - 1]
      }
    }
  }
  console.log(dp)
  return dp[sLen][tLen]
};
// @lc code=end

