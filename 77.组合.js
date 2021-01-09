/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = []
  function dfs(index, path) {
    if (path.length === k) {
      result.push([].concat(path))
      return
    }
    for (let i = index; i <= n; i++) {
      // console.log('i & path is ',i,path)
      path.push(i)
      dfs(i + 1, path)
      path.pop()
    }
  }
  dfs(1, [])
  // console.log('result is ', result)
  return result
};
// @lc code=end

