/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
// Your runtime beats 79.95 % of typescript submissions
// Your memory usage beats 82.31 % of typescript submissions (40.5 MB)
function permute(nums: number[]): number[][] {
  let result = []
  let len = nums.length
  let res = []
  tracval(res)

  function tracval(res) {
    if (res.length === len) {
      // console.log(res)
      result.push(res.slice(0))
      return
    }

    for (let i = 0; i < len; i++) {
      if (res.indexOf(nums[i]) > -1) {
        continue
      }
      res.push(nums[i])
      tracval(res)
      res.pop()
    }
  }
  
  // console.log(result)
  return result
};
// @lc code=end

