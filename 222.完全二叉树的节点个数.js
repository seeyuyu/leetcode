/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) {
    return null
  }
  let sum = 0
  let queue = [root]
  while (queue.length > 0) {
    let length = queue.length
    // while (length > 0) {
    for (let i = 0; i < length; i++) {
      let cur = queue.shift()
      // length--
      // console.log('遍历了一次')
      sum += 1;
      
      if (cur.left) {
        queue.push(cur.left)
        // console.log('左push遍历了一次')
      }
      if (cur.right) {
        queue.push(cur.right)
        // console.log('右push遍历了一次')
      }
    }
  }
  return sum
};
// @lc code=end

