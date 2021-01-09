/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// 深度遍历，DFS,
var generateParenthesis = function (n) {
  let result = []
  if (n === 0) {
    return result
  } else if (n === 1) {
    return ['()']
  }
  // 括号方案，
  function dfs(str, left, right) {
    if (left > right) {
      return
    }
    if (left === 0 && right === 0) {
      result.push(str)
    }
    // 左边括号必须多余右边括号，也就是左边剩余的必须小于等于右边的
    if (left > 0) {
      dfs(str + '(', left - 1, right)
    }
    if (right > 0) {
      dfs(str + ')', left, right - 1)
    }
  }
  dfs('', n, n)
  return result
};
// @lc code=end

