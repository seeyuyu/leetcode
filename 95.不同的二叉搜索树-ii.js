/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
// var generateTrees = function (n) {
//   if (n === 0) {
//     return []
//   }
//   return generate(1, n)
// };
// function generate(start, end) {
//   let allTree = []
//   if (start > end) {
//     allTree.push(null)
//     return allTree
//   }
//   if(start===end){
//     let treeNode = new TreeNode(start)
//     allTree.push(treeNode)
//     return allTree
//   }
//   for (let i = start; i <= end; i++) {
//     // console.log('start,end is', start, end)
//     let leftTree = generate(start, i - 1)
//     let rightTree = generate(i + 1, end)
//     for (let j = 0; j < leftTree.length; j++) {
//       for (let k = 0; k < rightTree.length; k++) {
//         let rootNode = new TreeNode(i)
//         rootNode.left = leftTree[j]
//         rootNode.right = rightTree[k]
//         allTree.push(rootNode)
//         // console.log('rootNode is ', rootNode)
//       }
//     }
//   }
//   return allTree
// }

/**
 * DP
 * @param {} n 
 */
var generateTrees = function (n) {
  if (n === 0) {
    return []
  }
  // let pre = [null]
  let pre = [new TreeNode(1)]
  if (n == 1) {
    return pre
  }
  // 最外层大循环
  for (let i = 2; i <= n; i++) {
    let cur = []
    let length = pre.length
    // console.log('70 pre is', pre)
    for (let j = 0; j < length; j++) {
      let preNode = pre.shift()
      // console.log('73 preNode is', preNode)
      let a = new TreeNode(i)
      a.left = preNode
      // console.log('76 a is', a)
      cur.push(a)
      // 用来计算右子节点长度的，理论最长到n
      for (let k = 0; k <= n; k++) {
        let right = copyTree(preNode)
        let b = right
        // let b = preNode
        // console.log('84 b is', b)
        // let right = copyTree(b)
        // console.log('86 right is ', right)
        // 遍历f次，找右节点，k是递增的，f也会递增，导致right也会依次向下
        for (f = 0; f < k; f++) {
          if (right == null) {
            break
          }
          // console.log('92 执行了一次变换')
          right = right.right
          // console.log('94 b is', b)
        }
        // 如果为null，不用继续查找
        if (right == null) {
          // console.log('97 停止了')
          break;
        }
        let rightTree = right.right
        // console.log('101 rightTree is', rightTree)
        let insert = new TreeNode(i)
        right.right = insert
        // console.log('105 b is', b)
        insert.left = rightTree
        // 这里的b为啥和right不一回事
        // console.log('108 b is', b)
        // console.log('109 is right,',right)
        cur.push(b)
      }
      // console.log('112 cur is', cur)
    }
    // console.log()
    pre = cur
  }
  return pre
};
function copyTree(root) {
  if (!root) {
    return null
  }
  let newRoot = new TreeNode(root.val)
  newRoot.left = copyTree(root.left)
  newRoot.right = copyTree(root.right)
  return newRoot
}
// @lc code=end

