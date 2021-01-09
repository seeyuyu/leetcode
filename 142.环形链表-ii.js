/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
// var detectCycle = function (head) {
//   if (!head || !head.next) {
//     return null
//   }
//   let obj = new Set()
//   while (head) {
//     if (obj.has(head)) {
//       return head
//     } else {
//       obj.add(head)
//       // console.log('obj is ', obj)
//     }
//     head = head.next
//   }
//   return null
// };

var detectCycle = function (head) {
  if (!head || !head.next) {
    return null
  }
  // let pre = new ListNode(-1)
  // pre.next = head
  let slow = head, fast = head;
  while (fast) {
    // 这里的判断必须位于指针移动之后，如果不这样，slow===fast===head一直是成立的
    slow = slow.next
    if(fast.next){
      fast = fast.next.next;
    }else{
      return null
    }
    if (slow === fast) {
      // console.log('slow ,fast is ',slow,fast)
      let pre = head
      while(slow!= pre){
        slow=slow.next
        pre=pre.next
      }
      return pre
    }

    // slow = slow.next
    // fast = fast.next.next;
  }
  return null
};
// @lc code=end

