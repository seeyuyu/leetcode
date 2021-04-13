/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * 这样定义的dp有三个状态，倒是也没问题
 * @param nums 
 * @returns 
 */
// function rob(nums: number[]): number {
//   // 先选择状态和选择 状态就是可变的变量，为房子索引，选择就是取和不取两个
//   let n = nums.length
//   if (n === 1) return nums[0]
//   if (n === 2) return Math.max(nums[0], nums[1])
//   let dp = new Array(n)
//   dp[0] = nums[0]
//   dp[1] = nums[1]
//   dp[2] = Math.max(nums[0] + nums[2], nums[1])
//   for (let i = 3; i < n; i++) {
//     // 如果不取，继承上一个的结果，如果取了，当前值加上前两个的值
//     // 这样的定义有问题，上一个结果
//     dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2], nums[i] + dp[i - 3])
//   }
//   // 下面的式子，写了两个状态，没有考虑到前面两个都不选的情况，不可以用
//   // dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
//   // console.log(dp)
//   return dp[n - 1]
// };


// 将空间复杂度压缩至O(1)
function rob(nums: number[]): number {
  // 先选择状态和选择 状态就是可变的变量，为房子索引，选择就是取和不取两个
  let n = nums.length
  if (n === 1) return nums[0]
  if (n === 2) return Math.max(nums[0], nums[1])
  let before1 = Math.max(nums[0] + nums[2], nums[1]),
    before2 = Math.max(nums[0], nums[1]),
    before3 = nums[0],
    value = before1
  for (let i = 3; i < n; i++) {
    // 如果不取，继承上一个的结果，如果取了，当前值加上前两个的值
    // 这样的定义有问题，上一个结果
    value = Math.max(before1, nums[i] + before2, nums[i] + before3)
    before3 = before2
    before2 = before1
    before1 = value
  }
  // 下面的式子，写了两个状态，没有考虑到前面两个都不选的情况，不可以用
  // dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
  // console.log(dp)
  return value
};

// 100位的数据超时了
// let memo = []
// function rob(nums: number[]): number {
//   let n = nums.length
//   // dp定义为：从第start间屋子开始，可以得到的最大的钱
//   let dp = (start) => {
//     if (start >= n) return 0
//     if (memo[start]) return memo[start]
//     // 如果本次不取，结果可以拿前一家结果，如果本次取了，只能从前两家拿结果加本次的钱
//     let res = Math.max(dp(start + 1), dp(start + 2) + nums[start])
//     memo[start] = res
//     return res
//   }
//   return dp(0)
// }

// "[1,2,3,1]"
// "[1,3]"
// "[2,1]"
// "[2,1,1,2]"
// "[1,1,1]"
// "[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]"
// @lc code=end

