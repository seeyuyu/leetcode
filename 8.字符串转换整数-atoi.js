/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trim()
  // console.log('before is ', s)
  if (!/[\d\-+]/.test(s[0])) {
    return 0
  }
  let str = s[0]
  // console.log('s,j is', s)
  for (let i = 1; i < s.length; i++) {
    if (/\d/.test(s[i])) {
      // console.log('str,s[i],i is', str, s[i], i)
      str += s[i]
    } else {
      break
    }
  }
  // console.log('str is', str)
  let num = Number(str)
  // 当str === '-' | str ==='+'的时候，需要通过isNaN,是的话直接退出
  
  if (isNaN(num)) { return 0 }
  if (num > 0) {
    return Math.min(num, 2147483647)
  } else {
    return Math.max(num, -2147483648)
  }
};
// @lc code=end

