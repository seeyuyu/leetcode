/*
 * @lc app=leetcode.cn id=516 lang=typescript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
// function longestPalindromeSubseq(s: string): number {
//   let len = s.length
//   let max = 1
//   let dp = new Array(len).fill(null).map(() => new Array(len).fill(0))
//   // 初始化过程，一定要注意，三种情况，都要考虑到
//   for (let i = 0; i <= len - 1; i++) {
//     dp[i][i] = 1
//     if (i + 1 <= len - 1 && s[i] === s[i + 1]) {
//       dp[i][i + 1] = 2
//       if (max === 1) {
//         max = 2
//       }
//     }else{
//       dp[i][i + 1] = 1
//     }
//   }
  // console.log('before dp', dp)

  
  // dp[i][j] 表示i到j之间，最长回文子串的长度
//   for (let i = len - 3; i >= 0; i--) {
//     for (let j = i + 2; j <= len - 1; j++) {
//       if (s[i] === s[j]) {
//         dp[i][j] = dp[i + 1][j - 1] + 2
//       } else {
//         dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
//       }
//       max = Math.max(max, dp[i][j])
//       // console.log(`dp[${i}][${j}] is`, dp[i][j])
//     }
//   }
//   // console.log('end dp', dp)
//   return max
// };
//  ""babbbbaabb""
//  ""aa""
//  ""abcabcabcabc""

function longestPalindromeSubseq(s: string): number {
}
// @lc code=end

