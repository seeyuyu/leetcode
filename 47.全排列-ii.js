/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//  Time Limit Exceeded

var permuteUnique = function (nums) {
  let result = []
  if (!nums) {
    return result
  }
  if (nums.length === 1) {
    return [nums]
  }
  // 先排序
  nums = nums.sort((a, b) => a - b)
  console.log('nums is ', nums)
  function dfs(resultArr, aimArr) {
    let length = aimArr.length
    if (length === 0) {
      result.push(resultArr)
      return
    }
    // console.log('aimArr: ', aimArr)
    for (let i = 0; i < aimArr.length; i++) {
      if (aimArr[i] === aimArr[i - 1]) continue
      let cur = [].concat(aimArr)
      let curResult = [].concat(resultArr)
      curResult.push(cur[i])
      // console.log('cur[i]: ', (cur[i]))
      cur.splice(i, 1)
      // console.log(' old aimArr,resultArr: ', cur, curResult)
      dfs(curResult, cur)
    }
  }
  dfs([], [].concat(nums))
  return result
};

// var permuteUnique = function(nums) {
// }
// @lc code=end

