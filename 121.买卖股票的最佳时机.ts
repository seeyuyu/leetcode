/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
// Your runtime beats 25.6 % of typescript submissions
// Your memory usage beats 48.8 % of typescript submissions (48.2 MB)

function maxProfit(prices: number[]): number {
  let len = prices.length, max = 0, min = prices[0]
  // let dp = new Array(len).fill(0).map(( ) => new Array(len))
  for (let i = 0; i < len; i++) {
    min = Math.min(prices[i], min)
    max = Math.max(prices[i] - min, max)
    // for(let j =i; j<len; j++){
    //   max = Math.max(prices[j] - prices[i], max)
    //   // dp[i][j] = Math.max(dp[i][j])
    // 
  }
  return max
};
// @lc code=end

