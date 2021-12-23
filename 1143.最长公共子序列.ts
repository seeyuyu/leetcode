/*
 * @lc app=leetcode.cn id=1143 lang=typescript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start

// memo 数组暂存
// Your runtime beats 5.16 % of typescript submissions
// Your memory usage beats 20 % of typescript submissions (51.7 MB)
// function longestCommonSubsequence(text1: string, text2: string): number {
//   let memo = new Array(text1.length + 1).fill(0)
//     .map(() => new Array(text2.length + 1).fill(undefined))

//   for (let i = 0; i <= text1.length; i++) {
//     for (let j = 0; j <= text2.length; j++) {
//       if (i === 0 || j === 0) {
//         memo[i][j] = 0
//       }
//     }
//   }

//   // console.log(memo)

//   function dp(i, j) {
//     if (i === -1 || j === -1) return 0
//     if(memo[i][j]) return memo[i][j]

//     if (text1[i] === text2[j]) {
//       memo[i][j] = dp(i - 1, j - 1) + 1
//       return memo[i][j]

//     } else {
//       memo[i][j] = Math.max(dp(i - 1, j), dp(i, j - 1))
//       return memo[i][j]
//     }
//   }

//   return dp(text1.length - 1, text2.length - 1)
// };


// Your runtime beats 21.29 % of typescript submissions
// Your memory usage beats 20.64 % of typescript submissions (51.5 MB)
function longestCommonSubsequence(text1: string, text2: string): number {
  let dp = new Array(text1.length+1).fill(0).map(()=> new Array(text2.length+1).fill(undefined))
  // console.log(dp)

  for (let i = 0; i <= text1.length; i++) {
    for (let j = 0; j <= text2.length; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0
      }
    }
  }
  for(let i = 1;i<=text1.length; i++){
    for(let j = 1;j<=text2.length; j++){
      if(text1[i-1] === text2[j-1]){
        dp[i][j] = dp[i-1][j-1] +1
      }else{
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
      }
    }
  }

//  console.log(dp)
  return dp[text1.length][text2.length]
}
// ""abc" \n "def""
// @lc code=end

