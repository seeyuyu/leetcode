/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function (nums) {
//   let result = []
//   if (!nums) {
//     return result
//   }
//   if (nums.length === 1) {
//     return [nums]
//   }
//   function dfs(resultArr, aimArr) {
//     let length = aimArr.length
//     if (length === 0) {
//       result.push(resultArr)
//       return
//     }
//     // console.log('aimArr: ', aimArr)
//     for (let i = 0; i < aimArr.length; i++) {
//       let cur = [].concat(aimArr) 
//       let curResult = [].concat(resultArr)
//       curResult.push(cur[i])
//       // console.log('cur[i]: ', (cur[i]))
//       cur.splice(i,1)
//       // console.log(' old aimArr,resultArr: ', cur, curResult)
//       dfs(curResult, cur)
//     }
//   }
//   dfs([], [].concat(nums))
//   return result
// };

/**
 * 上面的是dfs,本次叫回溯，回溯强调的是状态的回退，
 * 如下面的path.pop(),used[i] = false;等就是回退装填
 * 利用dfs策略
 */
// var permute = function (nums) {
//   let result = []
//   if (!nums) {
//     return result
//   }
//   if (nums.length === 1) {
//     return [nums]
//   }
//   let length = nums.length
//   function dfs(path, used, n) {
//     if (length === n) {
//       // console.log('push arr')
//       result.push([].concat(path))
//       path = []
//       return
//     }
//     // console.log('aimArr: ', aimArr)
//     for (let i = 0; i < length; i++) {
//       if (!used[i]) {
//       // console.log("i, path used[i] is ",i,path,used[i])
//         used[i] = true
//         path.push(nums[i])
//         dfs(path, used,n+1)
//         used[i] = false
//         path.pop()
//       }
//     }
//   }

//   let used = new Array(nums.length)
//   let path = []
//   dfs(path, used, 0)
//   return result
// };
// @lc code=end

