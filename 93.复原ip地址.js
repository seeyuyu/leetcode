/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s > 255255255255) {
    return []
  }
  // console.log('s[0] is ', s[0])
  // if (s[0] == 0) return []
  let result = []
  let length = s.length
  function dfs(arr, start) {
    // console.log('arr start is', arr, start)
    if (arr.length === 4 && start === length) {
      result.push(arr.join('.'))
      return
    }
    if (arr.length === 4 && start !== length) return //当arr ===4, start 必须为length长度

    // 只能有三个情况，‘x’,‘xx’,'xxx'
    for (let i = 1; i <= 3; i++) {
      if (start + i > length) return // start + i 超过了length,无效
      let temp = s.substring(start, start + i)
      if (temp > 255) return //temp 无效
      if (i != 1 && s[start] == 0) return //当i不为1的时候，0不能出现在首字母，不然会出现0x,0xx,如果非得用0，那么就只能是‘0’
      arr.push(temp)
      dfs(arr, start + i)
      arr.pop()
    }
  }
  dfs([], 0)
  return result
};

// ""010010""
// @lc code=end

