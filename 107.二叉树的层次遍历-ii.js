/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) {
    return []
  }
  const result = []
  const queue = []
  queue.push(root)
  while (queue.length > 0) {
    const currentLength = queue.length
    const currentArr = []
    for (let i = 0; i < currentLength; i++) {
      const currentItem = queue.shift()


      currentArr.push(currentItem.val)
      if(currentItem.left){
        queue.push(currentItem.left)
      }
      if(currentItem.right){
        queue.push(currentItem.right)
      }
    }
    result.unshift(currentArr)
  }
  return result
};
// @lc code=end

