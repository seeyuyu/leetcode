/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if(preorder.length<1){
    return null
  }
  let root = new TreeNode(preorder[0])
  let index = inorder.indexOf(preorder[0])
  let leftInorder = inorder.slice(0,index)
  let leftPreorder = preorder.slice(1,index+1)
  let rightInorder = inorder.slice(index+1)
  let rightPreorder = preorder.slice(index+1)
  // console.log('leftInorder is ',leftInorder)
  // console.log('leftPreorder is ',leftPreorder)
  // console.log('rightInorder is ',rightInorder)
  // console.log('rightPreorder is ',rightPreorder)

  root.left = buildTree(leftPreorder,leftInorder)
  root.right = buildTree(rightPreorder,rightInorder)
  return root
};
// @lc code=end

