/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsetsWithDup = function (nums) {
//   let result = []
//   nums = nums.sort((a, b) =>
//     a - b
//   )
//   let length = nums.length
//   if (length === 0) {
//     result.push([])
//     return result
//   }
//   function dfs(i, res) {
//     result.push([].concat(res))
//     for (let j = i; j < length; j++) {
//       if (j > i && nums[j] === nums[j - 1]) continue
//       res.push(nums[j])
//       dfs(j + 1, res)
//       res.pop()
//     }
//   }
//   dfs(0, [])
//   // console.log('result is ',result)
//   return result
// };
/**
 * 迭代法
 * @param {} nums 
 */
var subsetsWithDup = function (nums) {
  
}
// "[1,4,4,4,4]"
// "[4,4,4,1,4]"

// @lc code=end

