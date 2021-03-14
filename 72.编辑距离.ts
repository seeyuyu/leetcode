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
    // basecase解析： 当dp[i][j]某一个到达边界，那么word1[0,i]和word2[0,j]的编辑距离为剩下的长度，
    // 也就是i== -1时候，需要在增加j个单位，因为i== -1，需要，j补上一个单位,即j+1
    if (i === -1) return j + 1
    if (j === -1) return i + 1
    // 这种处理方式不行，因为此处的i,j表示的
    // 当i==0，和j==0的时候，依然没有对比完成，0是数组第一位的索引，所以不能用此来结束
    // 因为dp(i, j)  表示 返回 world1[0..i] 和 world2[0..j] 的最小编辑距离，所以0不能作为判断条件
    // if (i === 0) return j 
    // if (j === 0) return i 
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

/**
 * dp法  dp(i, j)  # 返回 world1[0..i] 和 world2[0..j] 的最小编辑距离，不关注具体为多少，只关注
 * if(word1[i]== word2[j] ) 两个值相同的时候，i，j同时移动，dp[i][j] = dp[i-1][j-1]
 * else dp[i][j] = 1+ min(
 *   dp[i][j-1],    insert情况，Word1中插入了一个新的元素，那word2的j移动一个元素，继续比较
 *   dp[i-1][j],    delete情况，word1中删除了一个元素，即i丢失了，i-1移动一个元素，继续和word2比较
 *  dp[i-1][j-1])   replace情况，将word1中i和i-1换位置，即新的i和之前的j匹配了，那么继续从j-1和新的i-1开始比价
 * 
 * 此处的base case为当word1为0时候,即i==0的时候，j直接为需要操作的步骤，同理：
 * 当word2为0的时候j==0，i为word1直接要删除的步骤
 */

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