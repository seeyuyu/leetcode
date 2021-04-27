/*
 * @lc app=leetcode.cn id=331 lang=typescript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
// function isValidSerialization(preorder: string): boolean {
//   let len = preorder.length
//   let i = 0
//   let stack = [1]
//   while (i < len) {
//     // console.log('stack i  is', i, stack)
//     if (stack.length === 0) return false

//     if (preorder[i] === ',') {
//       i++
//     } else if (preorder[i] === '#') {
//       // console.log('fuck i is', i)
//       i++;
//       stack[stack.length - 1] -= 1
//       if (stack[stack.length - 1] === 0) {
//         stack.pop()
//       }
//     } else {
//       // 存在两位数的情况，这时候需要测量数字的长度，并且将i指针后移
//       // console.log(`preorder[${i}] is`, preorder[i])
//       while (i < len && preorder[i] !== ',') {
//         i++
//       }
//       stack[stack.length - 1] -= 1
//       if (stack[stack.length - 1] === 0) {
//         stack.pop()
//       }
//       stack.push(2)
//     }
//   }
//   return stack.length === 0
// };

// 上面是参考答案，比较麻烦，遇到一个有值的节点，会消耗一个节点，
// 同时增加2个坑位，遇到一个空的节点，只会消耗一个节点；
function isValidSerialization(preorder: string): boolean {
  let arr = preorder.split(',')
  let len = arr.length
  // 因为完全二叉树，节点数量肯定为单数，如果节点数量为双数，那么肯定是错误的
  if (len % 2 === 0) return false
  let stack = [1]
  for (let i = 0; i < len; i++) {
    // 如果数据还没有罗列完，已经没有坑了，那说明提前结束了，后面的节点是错误的了
    // 比如这个情况 "1,#,#,#,#"
    if (stack.length === 0) return false
    let length = stack.length - 1
    stack[length]--
    if (stack[length] === 0) stack.pop()
    if (arr[i] !== '#') {
      stack.push(2)
    }
  }
  return stack.length === 0
};
// @lc code=end

// ""1,#,#,#,#""
// ""9,#,92,#,#""