/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

/**
 * 动态规划
 * g(n)表示序列到n的二叉搜索树
 * f(i)表示i为根节点的二叉搜索树
 * g(n) = f(1)+ f(2) +f(3)+  …… +f(n)
 * f(i) = g(i-1) * g(n-i)
 * g(n) = g(0)*g(n) + g(1)*g(n-1) +g(n)*g(0)
 * @param {*} n 
 */
// var numTrees = function (n) {
//   let dp = new Array(n + 1).fill(0)
//   dp[0] = 1
//   dp[1] = 1
//   // 控制外层i,每循环一次持续修改dp里面一个元素
//   for (let i = 2; i < n + 1; i++) {
//     // 内部循环，相当于一个求和函数，收集 j-1 + i-j 也就是 i-1之间的和 j-1为0到j的区间，i-j为j+1 到i的区间，累加之后，得出dp[i]的值
//     for (let j = 1; j < i + 1; j++) {
//       dp[i] += +dp[j - 1] * +dp[i - j] 
//       // console.log('dp[i] is ',dp[i])
//     }
//   }
//   // console.log('dp is ', dp)
//   return dp[n]
// };


var numTrees = function (n){
  
}
// @lc code=end

