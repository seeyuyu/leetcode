/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
// 复杂任务拆分为简单任务
var reverseKGroup = function (head, k) {
  if (checkHead(head, k)) {
    // console.log('current head is', head)
    head = reverse(head, k)
  } else {
    return head
  }
  return head
};
// 反转k个数组
function reverse(head, k) {
  let cur = null, pre = head, tail = null, i = 1, temp = null;
  while (pre && i <= k) {
    if (i === k) {
      tail = pre.next
    }
    temp = pre.next
    pre.next = cur
    cur = pre
    pre = temp
    // console.log('inner pre cur is', pre, cur, i)
    i++
  }
  // console.log('pre, tail, cur, head is ', pre, tail, cur, head)
  head.next = reverseKGroup(tail, k)
  return cur
}
// 检测当前head,长度是否够k
function checkHead(head, k) {
  let checkHead = head
  let i = 1
  while (i <= k && checkHead) {
    if (i === k) {
      return true
    }
    checkHead = checkHead.next
    i++
  }
  return false
}
// @lc code=end

// "[1,2,3,4,5] \n 3"