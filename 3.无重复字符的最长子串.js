/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0, right = 0, res = 0;
  let window = {};

  while (right < s.length) {
    let cur = s[right++]
    window[cur] ? window[cur]++ : window[cur] = 1
    while (window[cur] > 1) {
      let d = s[left++]
      window[d] ? window[d]-- : window[d] = 0
    }
    res = Math.max(res, right - left)
  }
  return res
};
// @lc code=end

