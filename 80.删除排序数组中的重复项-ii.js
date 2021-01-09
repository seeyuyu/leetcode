/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//   let length = nums.length
//   let start = 0, end = 0
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1] || i === 0) {
//       end++;
//       // console.log('end is', end)
//     } else {
//       console.log('start end nums is ', start, end, nums)
//       if (end - start >= 2) {
//         nums.splice(start, end - start - 2)
//         console.log('splice nums is ', start, end - start - 2, nums)
//         i = i - (end - start)
//       }
//       start = i
//       end = i
//     }
//   }
// };
/**
 * 双指针法，循环不变量操作
 * @param {} nums 
 */
// let removeDuplicates = function (nums) {
//   if (nums.length <= 2) return
//   let index =  1;
//   for (let i = 2; i < nums.length; i++) {
//     if (nums[i] != nums[index - 1]) {
//       index++;
//       nums[index] = nums[i]
//       console.log('index, i is', index, i)
//     }
//   }
//   return index + 1
// }

// let removeDuplicates = (nums) => {
//   let i = 0, length = nums.length, count = 1;
//   while (i < length) {
//     if (nums[i] === nums[i - 1]) {
//       count++
//       if (count > 2) {
//         nums.splice(i, 1)
//         i--;
//         length--;
//       }
//     } else {
//       count = 1;
//     }
//     i++;
//   }
//   // console.log('nums is ', nums)
// }
let removeDuplicates = (nums) => {
  let j = 1, count = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++
    } else {
      count = 1
    }
    if (count <= 2) {
      nums[j] = nums[i]
      j++;
    }
  }
  return j
}
// @lc code=end

