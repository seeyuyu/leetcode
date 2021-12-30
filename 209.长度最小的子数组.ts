/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start

// Your runtime beats 6.79 % of typescript submissions
// Your memory usage beats 8.64 % of typescript submissions (41.1 MB)
// 暴力法
// 注意事项：1、问的是>=
// 2、问的是连续子数组，不能去排序，破坏原来的数据结构
// function minSubArrayLen(target: number, nums: number[]): number {
//   let len = nums.length
//   // nums = nums.sort((a, b) => b - a)
//   // let start = 0, end = len -1
//   let result = len+1
//   // console.log(nums)
//   for (let i = 0; i < len; i++) {
//     let sum = 0
//     for (let j = i; j < len; j++) {
//       sum += nums[j]
//       if (sum >= target) {
//         // console.log('命中了')
//         result = Math.min(result, j - i + 1)
//         break
//       }
//     }
//   }
//   return result===len+1?0:result

// };
// Your runtime beats 52.47 % of typescript submissions
// Your memory usage beats 8.02 % of typescript submissions (41.5 MB)

// 滑动窗口法，
function minSubArrayLen(target: number, nums: number[]): number {
  let len = nums.length
  //   // nums = nums.sort((a, b) => b - a)
    let start = 0, end =0
  let result = len + 1
  let sum = 0
  while(end < len){
     sum +=nums[end]
     end++

     if(sum >= target){  
       while(sum >= target){
        sum -= nums[start]
        start++
       }

      //  console.log('命中了', start, end)
       result = Math.min(result, end - start+1)
     }
    //  当 sum > target ,说明还可以缩小左边，
  }
  return result === len + 1 ? 0 : result
};
// @lc code=end

