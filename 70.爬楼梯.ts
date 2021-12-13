/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
// 第一步；建立初始值he db
// 第二部：建立循环关系
// 第三步：开始循环
// Your runtime beats 98.38 % of typescript submissions
// Your memory usage beats 15.07 % of typescript submissions (39.4 MB)
// function climbStairs(n: number): number {
//   let dp = [].fill(n)
//   dp[0] = 1
//   dp[1] = 1
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2]
//   }
//   return  dp[n]
// };


// Your runtime beats 49.11 % of typescript submissions
// Your memory usage beats 38.41 % of typescript submissions (39.4 MB)
function climbStairs(n: number): number {
  let pre  = 1
  let cur = 1
  let temp = null
  for (let i = 2; i <= n; i++) {
    temp = cur
    cur = cur + pre
    pre = temp 
  }
  return  cur
};
// @lc code=end

