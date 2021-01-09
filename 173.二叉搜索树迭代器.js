/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
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
 */

var BSTIterator = function (root) {
  if (!root) {
    return null
  }
  let arr = []
  inOrder(root, arr)
  this.arr = arr

  this.index = -1
};

function inOrder(root, arr) {
  if (!root) {
    return null
  }
  inOrder(root.left, arr)
  arr.push(root.val)
  inOrder(root.right, arr)
}
/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  // return this.arr.shift()
  return this.arr[++this.index]
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  // let length = this.arr.length
  // return length > 0
  console.log(this.index,this.arr.length)
  return this.index <this.arr.length -1
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

