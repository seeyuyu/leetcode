/*
 * @lc app=leetcode.cn id=654 lang=typescript
 *
 * [654] 最大二叉树
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
interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
/**
 * 太糙了，nums重复copy了很多遍，只拿到索引会更方便
 * @param nums 
 */
// function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
//   let length = nums.length
//   if (!nums || length === 0) {
//     return null
//   }
//   let max = -Infinity
//   let maxIndex = -1
//   // console.log('nums is ', length, nums)
//   nums.forEach((item, index) => {
//     if (item > max) {
//       max = item;
//       maxIndex = index;
//     }
//   })
//   // console.log('maxIndex max is', maxIndex, max)
//   let newTreeNode = new TreeNode(nums[maxIndex])
//   let leftArr = nums.slice(0, maxIndex)
//   let rightArr = nums.slice(maxIndex + 1)
//   // console.log('leftArr, rightArr is', leftArr, rightArr)
//   newTreeNode.left = constructMaximumBinaryTree(leftArr)
//   newTreeNode.right = constructMaximumBinaryTree(rightArr)

//   return newTreeNode
// };
function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  return constructMaximumBinaryTreeByIndex( 0, nums.length)
  function constructMaximumBinaryTreeByIndex( start: number, end: number): TreeNode | null {
    if (start >= end) {
      return null
    }
    let max = -Infinity, index = -1
    for (let i = start; i < end; i++) {
      if (nums[i] > max) {
        max = nums[i]
        index = i
      }
    }
    let newTreeNode = new TreeNode(max)
    newTreeNode.left = constructMaximumBinaryTreeByIndex( start, index)
    newTreeNode.right = constructMaximumBinaryTreeByIndex( index + 1, end)
    return newTreeNode
  }
}



// " [3,2,1,6,0,5] "
// " [3,2,1] "

// @lc code=end

