/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
// var rotateRight = function (head, k) {
//   if (k === 0) {
//     return head
//   }
//   let pre = new ListNode(-1)
//   pre.next = head
//   let start = head, end = head
//   let count = head
//   let length = 0
//   while (count) {
//     count = count.next
//     length++
//   }

//   // console.log('length is ', length)
//   k = k % length
//   if (k === 0) {
//     return head
//   }
//   for (let i = 0; i < k; i++) {
//     if (!end) {
//       return head
//     }
//     end = end.next
//   }
//   if (!end) {
//     return head
//   }
//   while (end.next !== null) {
//     start = start.next
//     end = end.next
//   }
//   let cur = start.next
//   start.next = null
//   end.next = pre.next
//   return cur
// };

var rotateRight = function (head, k) {
  if (k === 0 || head === null || head.next === null) {
    return head
  }
  let length = 1
  let oldPre = head
  while (oldPre.next) {
    length++;
    oldPre = oldPre.next
  }
  // console.log('length is ', length)
  // 做成环
  oldPre.next = head
  // console.log('oldPre is', oldPre)

  let newTail = head
  for (let i = 0; i < length - k % length - 1; i++) {
    newTail = newTail.next
  }
  let newHead = newTail.next
  newTail.next = null
  // console.log('newHead is ', newHead)
  return newHead
};
// @lc code=end

