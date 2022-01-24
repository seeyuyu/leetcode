/*
 * @lc app=leetcode.cn id=93 lang=typescript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
// Your runtime beats 46.58 % of typescript submissions
// Your memory usage beats 59.63 % of typescript submissions (40 MB)
function restoreIpAddresses(s: string): string[] {
  let arr = []
  let len = s.length
  let result = []
  function backTracking(start) {
    // console.log(count++)
    // 当所有数据用完后，才退出回溯
    // 当 arr 满足了4段，且 用完所有的数字，就推入结果中
    // console.log(start, len)
    if (start === len && arr.length == 4) { 
      result.push(arr.join('.'))
      return
    }
    // 满足了4端，但是没有用完数字
    if (start != len && arr.length == 4) { 
      return 
    }

    // 什么情况可以直接砍掉？
    // 超出4位数，大于255，首字符是0，且只能是单个字符
    // 每次回溯比较前三位，看看可不可以
    for (let i = 1; i <= 3; i++) {
      // i 指的是 s 的索引，
      let temp = s.substring(start, start + i)
      // console.log('temp is', temp)

      if (+temp > 255) {
        return 
      }
      if( s[start] == '0' && temp.length != 1){
         return
      }
      // 且需要判断一下是否满足条件
      arr.push(temp)
      backTracking(start + i)
      arr.pop()
    }
  }
  backTracking(0)
  return result
};
// ""0000""
// @lc code=end

