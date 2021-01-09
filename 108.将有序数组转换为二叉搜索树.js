/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
// var sortedArrayToBST = function (nums) {
//   return dfs(nums, 0, nums.length - 1)
// };
// let dfs = (nums, start, end) => {
//   if(start> end){
//     return null
//   }
//   let mid = (start +end )>>1
//   console.log('mid is ',mid)
//   let root = new TreeNode(nums[mid])
//   root.left = dfs(nums, start, mid - 1)
//   root.right = dfs(nums, mid + 1, end)
//   return root
// }
// var sortedArrayToBST = function (nums, start=0, end=nums.length-1) {
//   if (nums.length === 0) {
//     return null
//   }
//   if (start > end) {
//     return null
//   }
//   let mid = (start + end) >> 1
//   console.log('mid is ', start, end, mid)
//   let root = new TreeNode(nums[mid])
//   root.left = sortedArrayToBST(nums, start, mid - 1)
//   root.right = sortedArrayToBST(nums, mid + 1, end)
//   return root
// };

var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null
  }
  let mid = nums.length-1 >> 1

  let root = new TreeNode(nums[mid])
  root.left = sortedArrayToBST(nums.slice(0,mid))
  // arr.slice(mid +1) === arr.slice(mid+1 ,arr.length)
  // arr.slice(start, end) start的开始下标，end是结束下标加1，[左闭右开）不包括end,省略代表全部
  root.right = sortedArrayToBST(nums.slice(mid+1,nums.length))
 

  return root
};
// @lc code=end

