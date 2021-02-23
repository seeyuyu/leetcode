/*
 * @lc app=leetcode.cn id=652 lang=typescript
 *
 * [652] 寻找重复的子树
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

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  let res = []
  let memo = new Map()
  function getResult(node) {
    if (!node) {
      return '#'
    }
    let left = getResult(node.left)
    let right = getResult(node.right)
    let result = left + ',' + right + ',' + node.val
    let flag = memo.get(result)
    if (!flag) {
      memo.set(result, 0)
    }
    flag = memo.get(result)
    // console.log('flag is', memo.get(result))
    if (flag == 1) {
      res.push(node)
    }
    memo.set(result, flag + 1)
    return result
  }
  getResult(root)
  return res
};
// "[10,2,22,1,12,1,1]"
// "[1,2,3,4,null,2,4,null,null,4]"

// @lc code=end

