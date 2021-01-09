/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function (height) {
//   // console.log('height is ', height)
//   let max = 0
//   for (let i = 0; i < height.length; i++) {
//     for (let j = i; j < height.length; j++) {
//       max = Math.max(max, Math.min(height[j], height[i]) * (j - i))
//     }
//   }
//   // console.log("max is", max)
//   return max
// };

var maxArea = function (height) {
  // console.log('height is ', height)
  let max = 0
  let start = 0
  let end = height.length - 1
  while (start < end) {
    if (height[start] > height[end]) {
      // console.log('start,end,height[end]', start, end, height[start])
      max = Math.max(max, (end - start) * height[end--])
    } else {
      // console.log('start,end,height[end]', start, end, height[end])
      max = Math.max(max, (end - start) * height[start++])
    }
  }
  // console.log("max is", max)
  return max
};
// @lc code=end

