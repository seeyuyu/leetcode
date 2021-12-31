/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
// 
// Your runtime beats 79.51 % of typescript submissions
// Your memory usage beats 45.58 % of typescript submissions (43.9 MB)
function lengthOfLongestSubstring(s: string): number {
  let left = 0, right = 0;
  let len = s.length
  let result = 0
  let hash = new Map()
  while (right < len) {
    // 如果没有重复元素
    if (!hash.has(s[right])) {
      hash.set(s[right], right)
      result = Math.max(result, right - left + 1)
      right++
    } else {
      // 遇到重复元素，就缩左边,直到没有重复元素
      while(hash.has(s[right])){
        hash.delete(s[left])
        left++
      }
    }
  }
  return result
};
// @lc code=end

