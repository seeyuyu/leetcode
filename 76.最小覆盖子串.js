/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let need = {}, window = {}
  let left = 0, right = 0;
  let valid = 0
  let start = 0, len = Math.pow(10, 5)

  for (let i of t) {
    // need[i] = need[i] ? need[i]++ : need[i] = 1  //这种写法有问题，永远不正确
    need[i] = need[i] ? need[i] + 1 : need[i] = 1
    // need[i] ? need[i]++ : need[i] = 1
  }
  let needLength = Object.keys(need).length
  // console.log('need is ', need, needLength)
  const length = s.length
  while (right < length) {
    let cur = s[right++]
    if (need[cur]) {
    // window[cur] = window[cur] ? window[cur] + 1 : 1
    window[cur] ? window[cur]++ : window[cur] = 1

    // console.log('cur, window[cur] is ', cur, window.get(cur), need.get(cur))
    if (window[cur] === need[cur]) valid++
    // console.log('there is equal', window[cur], need[cur])
    // console.log('need.size is ',need.size)
    // 在伸缩左侧指针的时候，意味着次数窗口内的解都是可以的，此时对比len的长度
    while (valid === needLength) {
      if (right - left < len) {
        start = left
        len = right - left
      }

      let d = s[left++]
      if (need[d]) {
      if (window[d]-- === need[d]) {
        valid--
      }
      // window[d]--
      }
      }
    }
  }
  return len === Math.pow(10, 5) ? '' : s.substr(start, len)
};
// var minWindow = function(s, t) {
//   let windows = {}, needs = {}, l = 0, r = 0, count = 0, start = -1, minLen = Infinity;
//   [...t].forEach(c => needs[c] ? needs[c]++ : needs[c] = 1)
//   let keyLen = Object.keys(needs).length;
//   while (r < s.length) {
//       let c1 = s[r++];
//       windows[c1] ? windows[c1]++ : windows[c1] = 1;
//       if (windows[c1] === needs[c1]) count++;
//       while(count === keyLen) {
//           if (r - l < minLen) {
//               start = l;
//               minLen = r - l;
//           }
//           let c2 = s[l++];
//           if (windows[c2]-- === needs[c2]) count--;
//       }
//   }
//   return start === -1 ? "" : s.substr(start, minLen)
// };

// "'ADOBECODEBANC' \n'ABC'"
// "'a' \n 'aa'"
// @lc code=end

