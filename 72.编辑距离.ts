/*
 * @lc app=leetcode.cn id=72 lang=typescript
 *
 * [72] 编辑距离
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
  let m = word1.length, n = word2.length
  let memo = Array(m + 1).fill(null).map(() => { return Array(n + 1).fill(null) })
  // let memo = new Array(word1.length).fill(new Array(word2.length))
  // console.log('memo is ', memo)
  function dp(i, j) {
    if (i === -1) return j + 1
    if (j === -1) return i + 1
    if (memo[i][j]) {
      // console.log(`1memo[${i}][${j}] is`, memo[i][j])
      return memo[i][j]
    }
    if (word1[i] == word2[j]) {
      memo[i][j] = dp(i - 1, j - 1)
    }
    else {
      memo[i][j] = Math.min(dp(i, j - 1) + 1, dp(i - 1, j) + 1, dp(i - 1, j - 1) + 1)
    }
    // console.log(`2memo[${i}][${j}] is`, memo[i][j])
    return memo[i][j]
  }
  let result = dp(word1.length - 1, word2.length - 1)
  // console.log(memo)
  return result
};

// dp法  dp(i, j)  # 返回 world1[0..i] 和 world2[0..j] 的最小编辑距离
// function minDistance(word1: string, word2: string): number {
//   let m = word1.length, n = word2.length
//   // 此处如果不fill，则无法触发map方法，当为empty时候，自动跳过map了
//   // let dp = Array(m + 1).fill(null).map(() => {return Array(n + 1).fill(null) })
//   let dp = Array.from(Array(m + 1), () => {return  new Array(n+1).fill(null) })
//   for (let i = 1; i <= m; i++) {
//     dp[i][0] = i
//     // console.log(`dp[${i}][0] is`, dp[i][0])
//     // console.log('before dp is ', dp)
//   }
//   // console.log('before dp is ', dp)
//   for (let j = 1; j <= n; j++) {
//     dp[0][j] = j
//   }
//   // console.log('before dp is ', dp)
//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (word1[i - 1] == word2[j - 1]) {
//         // console.log('word1[i - 1], word2[j - 1] is', word1[i - 1], word2[j - 1])
//         dp[i][j] = dp[i - 1][j - 1]
//       } else {
//         dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
//       }
//     }
//   }
//   // console.log(dp)
//   return dp[m][n]
// }
// @lc code=end

//   " "abcdefg" \n "zzz" "
//   ""dinitrophenylhydrazine" \n "benzalphenylhydrazone""