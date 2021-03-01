/*
 * @lc app=leetcode.cn id=297 lang=typescript
 *
 * [297] 二叉树的序列化与反序列化
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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  let arr = []
  if (root) {
    preOrder(root, arr)
  }
  // console.log('arr is', arr.join())
  return arr.join()
};

function preOrder(root, res) {
  if (!root) {
    res.push('#')
    return
  }
  res.push(root.val)
  preOrder(root.left, res)
  preOrder(root.right, res)
}
/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  // console.log('deserialize data is', data, typeof(data))
  if (data == '') return null
  let arr = data.split(',');
  // console.log('deserialize arr is', arr)
  let root = dePreOrder(arr)
  return root
};

function dePreOrder(arr) {
  if (arr.length == 0) {
    return null
  }
  let data = arr.shift()
  // let root = new TreeNode(data)
  // console.log('data is', data)
  let root
  if (data == '#') {
    return null
  } else {
    root = new TreeNode(data)
  }
  root.left = dePreOrder(arr)
  root.right = dePreOrder(arr)
  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

