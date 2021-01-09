/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//  因为深拷贝，效率特别差

// Your runtime beats 5.13 % of javascript submissions
// Your memory usage beats 9.8 % of javascript submissions (40.1 MB)
var subsets = function (nums) {
  let result = [[]]
  if (nums.length === 0) {
    return result
  }
  let length = nums.length
  for (let i = 0; i < length; i++){
    let cur = nums[i]
    // let temp = result.slice(0)
    // let temp = [].concat(result)
    // let temp = [...result]
    let temp = JSON.parse(JSON.stringify(result))     //上面的都是实现浅拷贝
    // console.log('result before is', result,)
    for(let j = 0; j < temp.length; j++){
      temp[j].push(cur)
      // console.log(' temp[j] && temp ,result ',temp[j], temp, result)
      result.push((temp[j]))
    }
  }
  return result
};
// var subsets = function (nums) {
//   let result = [[]]
//   if (nums.length === 0) {
//     return result
//   }
//   let length = nums.length
//   for (let i = 0; i < length; i++){
//     let cur = nums[i]
//     let resultLen = result.length
//     for(let j = 0; j < resultLen; j++){
//       let temp = [].concat(result[j])
//       temp.push(cur)
//       // console.log(' temp[j] && temp ,result ',temp[j], temp, result)
//       result.push(temp)
//     }
//   }
//   return result
// };
// @lc code=end

