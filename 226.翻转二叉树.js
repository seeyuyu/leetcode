/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
/**
 * BFS，一层一层，反转
 * @param {*} root 
 */
var invertTree = function (root) {
  if (!root) {
    return null
  }
  let queue = []
  queue.push(root)
  while (queue.length > 0) {
    let length = queue.length
    for (let i = 0; i < length; i++) {
      let current = queue.shift()
      let temp = current.left
      current.left = current.right
      current.right = temp
      if (current.left) {
        queue.push(current.left)
      }
      if (current.right) {
        queue.push(current.right)
      }
    }
   
  }
  return root
};

/**
 * 自顶向下遍历，自叶子节点像root反转
 * @param {*} root 
 */
// var invertTree = function (root) {
//   if (!root) {
//     return null
//   }
//   let left = invertTree(root.left)
//   let right  =invertTree(root.right)
//   root.left = right
//   root.right = left
//   return root
// };


// 自顶向下遍历， 自顶向下的翻转，先root,再叶子
// var invertTree = function (root) {
//   if (!root) {
//     return null
//   }
//   let temp = root.left
//   root.left = root.right
//   root.right = temp
//   invertTree(root.left)
//   invertTree(root.right)
//   return root
// };
// @lc code=end

