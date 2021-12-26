/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
//  Your runtime beats 10.11 % of typescript submissions
//  Your memory usage beats 5.06 % of typescript submissions (43.5 MB)
// function moveZeroes(nums: number[]): void {
//   let len = nums.length,count = 0
//   let temp = null
//   for (let i = 0; i < len; i++) {
//     if (nums[i] === 0) {
//       nums.splice(i, 1)
//       i--
//       count++
//     }
//   }
//   for(let i =0;i<count;i++){
//     nums.push(0)
//   }
//   // console.log(nums)
// };

// our runtime beats 6.97 % of typescript submissions
// Your memory usage beats 8.34 % of typescript submissions (43.2 MB)
// function moveZeroes(nums: number[]): void {
//   let len = nums.length,count = 0
//   for (let i = 0; i < len-count; ) {
//     if (nums[i] === 0) {
//       nums.splice(i, 1)
//       nums.push(0)
//       count++

//     }else{
//       i++
//     }
//   }
//   // console.log(nums)
// };
// Your memory usage beats 8.34 % of typescript submissions (43.2 MB)

// Your runtime beats 92.49 % of typescript submissions
// Your memory usage beats 22.41 % of typescript submissions (43 MB)
function moveZeroes(nums: number[]): void {
  let len = nums.length, slow = 0
  let temp = null
  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      temp = nums[i]
      nums[i] = 0
      nums[slow++] = temp
    }
  }
};
// @lc code=end

