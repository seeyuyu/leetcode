/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let left = 0, right = 0, valid = 0;
  let need = {}, window = {}
  for (let i of s1) {
    need[i] ? need[i]++ : need[i] = 1
  }
  let needLen = Object.keys(need).length
  console.log('need, needLen is ', need, needLen)
  while (right < s2.length) {
    let cur = s2[right++]
    // console.log('right is', right)

    if (need[cur]) {
      window[cur] ? window[cur]++ : window[cur] = 1
      if (window[cur] === need[cur])
        valid++
    }


    // 循环中的>=可以拆解为 > and = ，实际比较是否相同，是在 = 情况下。当> 不需要比较
    while (right - left == s1.length) {
      if (valid == needLen) {
        console.log('32 right, left is ', right, left)
        return true
      }
      let d = s2[left++]
      if (need[d]) {
        if (window[d] === need[d]) {
          valid--
        }
        window[d]--
      }
    }
    while (right - left > s1.length) {
      console.log('37 right, left is', right, left)
      // console.log('left is', left)
      let d = s2[left++]
      if (need[d]) {
        if (window[d] === need[d]) {
          valid--
        }
        window[d]--
      }
    }
    
  }
  return false
};
// @lc code=end

