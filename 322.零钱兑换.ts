/*
 * @lc app=leetcode.cn id=322 lang=typescript
 * dfs + 剪枝
 * [322] 零钱兑换
 */

// @lc code=start
// function coinChange(coins: number[], amount: number): number {
//   let memo = new Array(amount + 1)
//   memo[0] = 0
//   // console.log('memo is', memo)
//   function dp(n) {
//     if (memo[n]) return memo[n]
//     if (n === 0) return 0
//     if (n < 0) return -1
//     let res = Infinity;

//     for (let coin of coins) {
//       let sub = dp(n - coin)
//       if (sub == -1) {
//         continue
//       }
//       // console.log('sub is', sub)
//       res = Math.min(res, 1 + sub)
//     }
//     memo[n] = res != Infinity ? res : -1
//     return memo[n]
//   }
//   return dp(amount)
// };

// dp 解法
// function coinChange(coins: number[], amount: number): number {
//   let dp = new Array(amount + 1).fill(amount + 1)
//   // console.log('dp is', dp)
//   dp[0] = 0
//   for (let i = 0; i < amount + 1; i++) {
//     for (let coin of coins) {
//       if (i - coin < 0) continue
//       dp[i] = Math.min(dp[i], 1 + dp[i - coin])
//     }
//   }
//   console.log('dp is', dp)
//   // 如果amount的值和默认值一致，即没有覆盖任何地方，那就说明没有找不到合适的价位，
//   return (dp[amount] == amount + 1 ? -1 : dp[amount])
// }

// function coinChange(coins: number[], amount: number): number {
//   let queue = new Array()
//   let set = new Set()
//   queue.push([0, 0])
//   while (queue.length > 0) {
//     let cur = queue.shift()
//     // console.log('cur is', cur)
//     if (cur[0] == amount) {
//       return cur[1]
//     }
//     // queue = queue.sort((a, b) => { return b - a })
//     // console.log('queue is', queue)
//     for (let i = 0; i < coins.length; i++) {
//       let curVal = cur[0] + coins[i]
//       if (set.has(curVal)) {
//         continue
//       }
//       if (curVal <= amount && set.add(curVal)) {
//         queue.push([curVal, cur[1] + 1])
//       }
//     }
//     // console.log('set is', set)
//   }
//   return -1
// }

// "[1,2,5] \n 11"
// "[1] \n 0"
// "[2] \n 3"         -1
// "[1] \n 1"
// "[1,2,5] \n 100"
// "[186,419,83,408] \n 6249"

// @lc code=end

