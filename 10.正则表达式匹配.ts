/*
 * @lc app=leetcode.cn id=10 lang=typescript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
// s为测试字符， p为模板
// function isMatch(s: string, p: string): boolean {
//   // 如果模板不存在，s有的话，为false,s也没有了，则为true
//   if (!p) return !s
//   // 处理.的情况
//   let first = !!s && (s[0] === p[0] || p[0] === '.')
//   // 模板字符串有*的位置
//   if (p.length >= 2 && p[1] === '*') {
//     // *可以表示上一个元素存在或者不存在，两种情况
//     // 第一，p的第一个元素不存在，则删去p前两个，|| p的第一个元素匹配到了，s字符串位移一位，p继续不动，相当于*继续匹配下一个s的元素
//     return isMatch(s, p.slice(2)) || (first && isMatch(s.slice(1), p))
//   } else {
//     return first && isMatch(s.slice(1), p.slice(1))
//   }
// };

// 带缓存的遍历
function isMatch(s: string, p: string): boolean {
  let memo = {}
  let sLen = s.length, pLen = p.length
  function dp(i, j) {
    // 当模板清空的时候，判断test是否清空了
    let key = `${i},${j}`
    // console.log('key is ', key)
    if (memo[key]) return memo[key]
    if (j == pLen) return i === sLen
    let answer
    let first = (i < sLen) && (p[j] === s[i] || p[j] === '.')
    // 当模板长度大于等于2，且下一位是 *，
    if (j <= pLen - 2 && p[j + 1] == '*') {
      // 第一种情况匹配到了，继续走 第二种情况，匹配了0次，继续走
      answer = first && dp(i + 1, j) || dp(i, j + 2)
    } else {
      answer = first && dp(i + 1, j + 1)
    }
    // console.log('key,answer ', key, answer)
    memo[key] = answer
    // console.log('memo is',memo)
    return answer
  }
  return dp(0, 0)
}
// ""aa" \n "a*" "
// ""ab" \n ".*" "
// ""aab" \n "c*a*b" "
// ""mississippi" \n "mis*is*p*." "
// @lc code=end

