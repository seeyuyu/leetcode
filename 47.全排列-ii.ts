/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
// Your runtime beats 82.72 % of typescript submissions
// Your memory usage beats 72.84 % of typescript submissions (41.6 MB)

function permuteUnique(nums: number[]): number[][] {
  let result = []
  // 第一步排序，方便后续剪枝
  let newNums = nums.sort((a, b) => a - b)
  let len = nums.length
  let res = []
  // 标记某元素是否使用过
  let used = new Array(len - 1).fill(false)

  function tracval(res) {
    if (res.length === len) {
      // console.log(res)
      result.push(res.slice(0))
      return
    }

    for (let i = 0; i < len; i++) {
      // 如果当前索引 i 已经被添加过了，那么剪枝
      if (used[i]) {
        continue
      }
      // 如果当前项和前面一个一样，且，前面一个没有被使用，那么剪枝
      if (i > 0 && newNums[i] == newNums[i - 1] && used[i - 1]== false) {
        continue
      }

      res.push(newNums[i])
      used[i] = true
      tracval(res)
      res.pop()
      used[i] = false
    }
  }

  tracval(res)

  // console.log(result)
  return result
};
// @lc code=end

