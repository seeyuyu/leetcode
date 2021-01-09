/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
/**
 * 12%,12% 广度优先，维护两个队列，当判断叶子节点，就进行判断，如果成功就return true
 * @param {} root 
 * @param {*} sum 
 */
var hasPathSum = function (root, sum) {
  if (!root) {
    return false
  }
  let queue = [root]
  let valQueue = [root.val]
  while (queue.length > 0) {
    let length = queue.length
    for (let i = 0; i < length; i++) {
      let current = queue.shift()
      let currentVal = valQueue.shift()
      if(!current.left&&!current.right){
        if(currentVal===sum){
          return true
        }
      }
      if(current.left){
        queue.push(current.left)
        valQueue.push(currentVal+current.left.val)
      }
      if(current.right){
        queue.push(current.right)
        valQueue.push(currentVal+current.right.val)
      }
    } 
  }
  return false
};

/**
 * 95%，12%
 * 深度优先，分解问题，当叶子节点，判断value===sum，不是叶子节点，
 * 就去遍历的询问自己的子节点，
 * 先判断自己，在左节点，在右节点，这是中序遍历
 */
// var hasPathSum = function (root, sum) {
//   if (!root) {
//     return false
//   }
//   let value = root.val
//   if (!root.left && !root.right) {
//     if (value === sum) {
//       return true
//     }
//   }
//   return hasPathSum(root.left, sum - value) || hasPathSum(root.right, sum - value)
// };
// @lc code=end

