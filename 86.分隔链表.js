/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head || !head.next) {
    return head
  }
  let beforePre = before = new ListNode(-1)
  let afterPre = after = new ListNode(-1)
  while (head) {
    if (head.val < x) {
      before.next = head
      before = before.next
    } else {
      after.next = head
      after = after.next
    }
    head = head.next
  }
  after.next = null
  before.next = afterPre.next
  return beforePre.next
};
// @lc code=end

