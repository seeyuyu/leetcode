/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * [112] 路径总和
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  return preOrder(root, targetSum)
};

function preOrder(root, targetSum) {
  if (!root) return false
  if (targetSum === root.val && !root.left && !root.right) return true
  let val = root.val
  return preOrder(root.left, targetSum - val) || preOrder(root.right, targetSum - val)
}


// 117/117 cases passed (120 ms)
// Your runtime beats 8.13 % of typescript submissions
// Your memory usage beats 27.64 % of typescript submissions (42.7 MB)
// function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
//   return BFS(root, targetSum)
// };
// function BFS(root, targetSum) {
//   if(!root) return false
//   let queue = [[root, targetSum]]
//   while (queue.length) {
//     let curL = queue.length
//     for (let i = 0; i < curL; i++) {
//       let [current, num] = queue.shift()

//       if ( !current.left && !current.right&&num === current.val){
//           return true
//       } 
//       if (current.left) {
//         queue.push([current.left, num - current.val])
//       }
//       if (current.right) {
//         queue.push([current.right, num - current.val])
//       }
//     }
//   }
//   return false
// }
// @lc code=end
// "[1,2] \n 1"
// "[] \n 0"
// "[5,4,8,11,null,13,4,7,2,null,null,null,1] \n 22"