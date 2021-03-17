/*
 * @lc app=leetcode.cn id=354 lang=typescript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
// dp方法 
// function maxEnvelopes(envelopes: number[][]): number {
//   let sort = envelopes.sort((a, b) => { return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0] }).map(item => item[1])
//   // console.log(sort)
//   let length = sort.length
//   let max = 1
//   // dp[i] 表示，0-i个元素中，可以形成dp[i]个递增子序列
//   let dp = new Array(length).fill(1)
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (sort[i] > sort[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1)
//       }
//       max = Math.max(dp[i], max)
//     }
//   }
//   return max
// };

// 二分处理LIS，最长递增子序列，关键在于二分插入，得到的table，不是最长递增子序列的值，只是数量正确而已
function maxEnvelopes(envelopes: number[][]): number {
  let sort = envelopes.sort((a, b) => { return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0] }).map(item => item[1])
  // console.log(envelopes.length, sort.length)
  let length = envelopes.length
  // let max = 1 
  // dp[i] 表示，0-i个元素中，可以形成dp[i]个递增子序列
  let table = []
  table.push(sort[0])
  for (let i = 1; i < length; ++i) {
    let num = sort[i]

    if (num > table[table.length - 1]) {
      table.push(num)
    } else {
      let index = binarySearch(table,num)
      table[index] = num
    }
    // console.log('num table is', num, table)
  }
  // console.log('table is', table)
  return table.length

  function binarySearch(table,cur) {
    let left = 0, right = table.length - 1
    while (left < right) {
      const mid = Math.floor((right - left) / 2) + left
      // console.log('mid is ', mid)
      if (cur > table[mid]) {
        left = mid + 1
      } else {
        right = mid
      }
    }
    return left
  }
};


// "[[15,8],[2,20],[2,14],[4,17],[8,19],[8,9],[5,7],[11,19],[8,11],[13,11],[2,13],[11,19],[8,11],[13,11],[2,13],[11,19],[16,1],[18,13],[14,17],[18,19]]"
// @lc code=end

