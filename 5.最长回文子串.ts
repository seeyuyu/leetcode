/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
// function longestPalindrome(s: string): string {
//   let n = s.length
//   let dp = new Array(n).fill(null).map(() => new Array(n).fill(0))
//   for (let i = 0; i < n; i++) {
//     dp[i][i] = true
//   }
//   let max = n === 0 ? 0 : 1
//   let res = s[0]

//   // for (let j = 1; j < n; j++) {
//   //   for (let i = j - 1; i >= 0; i--) {
//   //     if (s[i] === s[j]) {
//   //       dp[i][j] = dp[i + 1][j - 1] 
//   //       console.log(`dp[${i}][${j}] +=2`, dp[i][j])
//   //     } else {
//   //       dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
//   //       console.log(`dp[${i}][${j}]`, dp[i][j])
//   //     }
//   //     if (dp[i][j] > max) {
//   //       max = dp[i][j]
//   //       // console.log(i, j)
//   //       res = s.slice(i, j)
//   //     }
//   //   }
//   // }

//   for (let j = 1; j < n; j++) {
//     for (let i = j - 1; i >= 0; i--) {
//       if (s[i] === s[j]) {
//         dp[i][j] = dp[i + 1][j - 1]

//         console.log(`dp[${i}][${j}] +=2`, dp[i][j])
//       } else {
//         dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
//         console.log(`dp[${i}][${j}]`, dp[i][j])
//       }
//       if (dp[i][j] > max) {
//         max = dp[i][j]
//         // console.log(i, j)
//         res = s.slice(i, j)
//       }
//     }
//   }
//   console.log(dp)
//   return res
// };

function longestPalindrome(s: string): string {
  let n = s.length
  if (n === 1 || (n === 2 && s[0] === s[1])) {
    return s
  }
  let dp = new Array(n).fill(null).map(() => new Array(n).fill(false))
  let max = 1;
  let res = s[0]
  // 初始化dp,
  // 当i==j时候，必为true
  for (let i = 0; i < n; i++) {
    dp[i][i] = true
    if (i < n - 1 && s[i] === s[i + 1]) {
      dp[i][i + 1] = true
      if (max === 1) {
        max = 2;
        res = s.substring(i, i + 2)
      }
    } 
  }
  // console.log(dp)
  for (let j = 2; j < n; j++) {
    for (let i = j - 2; i >= 0; i--) {
      // console.log('i, j is', i, j)
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        if (max < j - i + 1) {
          // console.log('i, j is', i, j)
          max = j - i + 1
          res = s.substring(i, j + 1)
        }
        dp[i][j] = true
      } 
    }
  }
  // console.log(dp)
  return res
}
//  ""aaaaa""
//  ""aaba""
//  ""aacabdkacaa""
//  ""cbbd""
// @lc code=end

