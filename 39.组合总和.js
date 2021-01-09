/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = []
  candidates = candidates.sort((a, b) => a - b)
  // console.log('candidates is ', candidates)
  let length = candidates.length
  function dfs(sum, arr, n) {
    if (sum > target) {
      return
    }
    if (sum === target) {
      result.push([].concat(arr))
      return
    }
    for (let i = n; i < length; i++) {
      if (arr.length === 0 || candidates[i] >= arr[arr.length - 1]) {
        arr.push(candidates[i])
        dfs(sum + candidates[i], arr, n)
        arr.pop()
      }
    }
  }
  dfs(0, [], 0)
  // console.log('result is', result)
  return result
};
// @lc code=end

