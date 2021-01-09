/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = []
  candidates = candidates.sort((a, b) => a - b)
  // console.log('candidates is ', candidates)
  let length = candidates.length
  function dfs(target, path, n) {
    if (target === 0) {
      result.push([].concat(path))
      return
    }
    for (let i = n; i < length; i++) {
      if (target - candidates[i] < 0) break
      if (i > n && candidates[i] === candidates[i - 1]) continue
      // console.log('path, candidates[i] is ', path, candidates[i])
      path.push(candidates[i])
      dfs(target - candidates[i], path, i + 1)
      path.pop()
    }
  }
  dfs(target, [], 0)
  // console.log('result is',result)
  return result

};
// combinationSum2([1, 1, 2, 3], 8)
//   "[1,1,2,3]\n 4"
// @lc code=end

