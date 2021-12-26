/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
// Your runtime beats 14.6 % of typescript submissions
// Your memory usage beats 6.08 % of typescript submissions (42.8 MB)
// function removeDuplicates(nums: number[]): number {
//   let set = new Set()
//   // let start =0
//   for (let i = 0; i < nums.length; i++) {
//     if (set.has(nums[i])) {
//       nums.splice(i--, i)
//     } else {
//       set.add(nums[i])
//     }
//     // console.log()
//   }
//   return nums.length
// };

// 双指针法 ，一个向前，一个向后
// Your runtime beats 96.84 % of typescript submissions
// Your memory usage beats 55.72 % of typescript submissions (40.7 MB)
function removeDuplicates(nums: number[]): number {
  let slow = 0, len = nums.length

  for (let i = 0; i < len; i++) {
    if (nums[i] !== nums[slow]) {
      // 这里往前面移动，如果不一样，不能直接覆盖，得覆盖下一个，
      slow++;
      nums[slow] = nums[i]
    }
  }

  return slow + 1
}
// "[0,0,1,1,1,2,2,3,3,4]"
// @lc code=end

