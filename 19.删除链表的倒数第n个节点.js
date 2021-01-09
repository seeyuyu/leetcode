/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function (head, n) {
//   let pre = new ListNode(-1)
//   pre.next = head
//   let start = pre, end = pre;
//   for (let i = 0; i < n; i++) {
//     end = end.next
//   }
//   while (end.next !== null) {
//     start = start.next;
//     end = end.next
//   }
//   start.next = start.next.next
//   // console.log('pre is ', pre)
//   return pre.next
// };
var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }
  // 当快指针为null，说明n,的长度就是length，也就是第一个元素需要删除
  if (fast === null) {
    return head.next
  }
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  // console.log('head is', head)
  return head
};
// @lc code=end

