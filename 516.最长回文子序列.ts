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

// 定义 dp[i][j] 为 s[i][j] 之间，最常回文子序列的值
// baseCase 当 i 和 j 相同的时候，必然是回文子串，i<=j; 所以 dp[i][j] = 1
// i 和 j 相等的情况，[i+1][j-1] 加2，
// 不相等的话，从[i+1][j] 或者[i][j-1] 最大值取

// Your runtime beats 42.35 % of typescript submissions
// Your memory usage beats 28.23 % of typescript submissions (85.8 MB)
function longestPalindromeSubseq(s: string): number {
  let len = s.length
  let dp = new Array(len ).fill(0).map(() => new Array(len ).fill(0))

  // console.log(dp)
  for (let i = 0; i < len; i++) {
    dp[i][i] = 1
  }
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i+1; j < len; j++ ) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
        // console.log('相等，dp[i][j] is ',i+1,j+1, '-----', dp[i][j])
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
        // console.log('不相等，dp[i][j] is ',i+1,j+1, '-----', dp[i][j])
      }
    }
  }
  // dp[i][j] = max()
  // console.log(dp)
  return dp[0][len-1]
}
// @lc code=end

