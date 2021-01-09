/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
// 回溯算法，for循环的递归？本体类似dfs,可以用树来表示这个结构，先深度到最下面一层
// 然后将结果添加之后，停止，按照从左到右，类似先序遍历 
// var letterCombinations = function (digits) {
//   let result = []

//   if (digits.length === 0) {
//     return result
//   }
//   let map = {
//     2: 'abc',
//     3: 'def',
//     4: 'ghi',
//     5: 'jkl',
//     6: 'mno',
//     7: 'pqrs',
//     8: 'tuv',
//     9: 'wxyz',
//   }
//   function getElement(str, index) {
//     if (str.length === digits.length) {
//       // console.log('finally str is ',str)
//       return result.push(str)
//     }
//     let pos = digits[index]
//     let cur = map[pos]
//     console.log('str is', str)
//     for (let i = 0; i < cur.length; i++) {
//       getElement(str + cur[i], index + 1)
//     }
//   }
//   getElement('', 0)
//   return result
// };
/**
 * BFS 队列解法
 */
var letterCombinations = function (digits) {
  let result = []
  if (digits.length === 0) {
    return result
  }
  let map = {
    2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz',
  }
  let length = digits.length
  let index = 0
  result.push('')
  while (index < length) {
    let curArr = map[digits[index++]]
    // console.log('curArr is ', curArr)
    // curArr is abc
    let curLen = result.length //第一次为1，因为只有一个 ’‘
    while (curLen-- > 0) {
      let cur = result.shift() //第一次为 ’‘
      // console.log('cur is', cur)
      for (let i = 0; i < curArr.length; i++) {
        result.push(cur + curArr[i])
      }
    }

  }
  return result;
}
// @lc code=end

