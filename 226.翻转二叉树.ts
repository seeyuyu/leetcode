/*
 * @lc app=leetcode.cn id=226 lang=typescript
 *
 * [226] 翻转二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// 这是递归,先序遍历
// function invertTree(root: TreeNode | null): TreeNode | null {
//   if(!root) return null
//   let temp =  root.left 
//   root.left = root.right 
//   root.right = temp
//   if(root.left){
//     invertTree(root.left)
//   }
//   if(root.right){
//     invertTree(root.right)
//   }
//   return root
// };


// BFS
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  let queue = [root]
  let current = null
  let temp = null
  while (queue.length) {
    let curL = queue.length
    for (let i = 0; i < curL; i++) {
      current = queue.shift()
      temp = current.left 
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
// @lc code=end

