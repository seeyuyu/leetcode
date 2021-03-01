/*
 * @lc app=leetcode.cn id=230 lang=typescript
 *
 * [230] 二叉搜索树中第K小的元素
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

// function kthSmallest(root: TreeNode | null, k: number): number {
//   let arr = []
//   inOrder(root)
//   // console.log(arr)
//   let length = arr.length
//   if (k > length) {
//     return null
//   }
//   return arr[k - 1]
//   function inOrder(root) {
//     if (!root) return null
//     inOrder(root.left)
//     arr.push(root.val)
//     inOrder(root.right)
//   }
// };
function kthSmallest(root: TreeNode | null, k: number): number {
  let flag = 0, res;
  inOrder(root)
  return res
  function inOrder(root) {
    if (!root) return null
    inOrder(root.left)
    flag++
    if (flag === k) {
      res = root.val
      return
    }
    inOrder(root.right)
  }
};

// "[3,1,4,null,2]"
// @lc code=end

