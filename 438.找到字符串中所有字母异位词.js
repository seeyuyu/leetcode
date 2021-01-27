/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let left = 0, right = 0, valid = 0;
  let needs = {}, window = {}, result = [];
  [...p].forEach(i => needs[i] ? needs[i]++ : needs[i] = 1)
  let needLen = Object.keys(needs).length
  // console.log(needLen, needs)
  while (right < s.length) {
    let cur = s[right++]
  // 第一步：当移动right窗口时候，即加入字符，应该更新那些数据
    if (needs[cur]) {
      window[cur] ? window[cur]++ : window[cur] = 1
      if (window[cur] === needs[cur]) {
        valid++
      }
    }
    // 第二部：什么时候开始暂停扩大窗口，开始准备left
    // 此处也可以判断valid===needLen来判断是否开始移动left,此时判断逻辑比判断right - left >= p.length复杂
    while (right - left >= p.length) {
      // 第四步：我们要的结果是扩大窗口还是缩小窗口时候处理
      if(valid===needLen){
        result.push(left)
      }
      // 第三步：当left缩小窗口时候，即移出字符，应该更新那些数据
      let d = s[left++]
      if(needs[d]){
        if(window[d]--===needs[d]){
          valid--
        }
      }
    }
  }
  return result
};
// @lc code=end

