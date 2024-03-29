/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
// function lengthOfLIS(nums: number[]): number {
//   let length = nums.length
//   let max = 1;
//   let dp = new Array(length).fill(1)
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//       // 每向后递增一个元素，都要拿之前的元素和其对比，如果递增的元素比之前元素大，
//       // 则启动max判断, max(dp[j]+1, dp[i])
//       if (nums[i] > nums[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1)
//       }
//     }
//     max = Math.max(max, dp[i])
//   }
//   return max
// };

// function lengthOfLIS(nums: number[]): number {
//   let length = nums.length
//   let table = []
//   table.push(nums[0])
//   for (let i = 1; i < length; i++) {
//     let cur = nums[i]
//     if (cur > table[table.length - 1]) {
//       table.push(cur)
//     } else {
//       const index = binarySearch(table, cur)
//       // console.log('index is', index)
//       table[index] = cur
//     }
//     // console.log('cur & table is', cur, table)
//   }
//   return table.length
// }

// const binarySearch = (table, num) => {
//   let min = 0, max = table.length - 1
//   while (min < max) {
//     const mid = min + Math.floor((max - min) / 2)
//     // console.log('mid is', mid)
//     if (num > table[mid]) {
//       min = mid + 1
//     } else {
//       max = mid
//     }
//   }
//   return min
// }

function lengthOfLIS(nums: number[]): number {  
  let dp = new Array(nums.length)
  // dp【n】定义为以nums[n] 结尾元素递增子序列的结果。
  // dp[n] 依赖于 之前所有元素的最大值，如果 nums【n】 大于 
  dp[0] = 1
  let max = 1
  for(let i = 1; i <= nums.length; i++){
    let res = 1
    for(let j = 0; j<i; j++){
      // 当前项大于 比较项，是个递增序列，dp[n] 
      if(nums[i] > nums[j] ){
        res = Math.max(res, dp[j] +1)
      }
    }

    dp[i] = res
    max = Math.max(dp[i], max)
  }
  // console.log(dp)
  return max
}


//    "[3,5,6,2,5,4,19,5,6,7,12]"
// @lc code=end

