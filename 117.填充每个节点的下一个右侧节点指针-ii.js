/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

var connect = function (root) {
  if (!root) {
    return null
  }
  let cur = root
  while (cur != null) {
    // 建一个空间点，充当头指针
    let dummy = new Node(0)
    // pre表示下一层访问的第一个节点
    let pre = dummy
    // 内循环，循环当前的current链表
    while (cur != null) {
      if (cur.left) {
        pre.next = cur.left
        pre = pre.next
      }
      if (cur.right) {
        pre.next = cur.right
        pre = pre.next
      }
      // 判断完毕，指针指向current链表的下一个节点
      cur = cur.next
    }
    // 内循环完成，将下一层pre指针，传给cur,迭代下一次循环
    cur = dummy.next;
  }
  return root
};

// @lc code=end

