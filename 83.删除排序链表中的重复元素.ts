/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// function deleteDuplicates(head: ListNode | null): ListNode | null {
//   if (!head) return null
//   // let preHead = new ListNode(-1, head)
//   let fast = head, low = head
//   while (fast) {
//     // 如果两个值不相等，fast称为low的下一个节点
//     // console.log('before low ,fast is',low, fast)
//     if (low.val != fast.val) {
//       low.next = fast
//       low = low.next
//     }
//     fast = fast.next
//   }
//   // 代码切换慢指针，靠的是fast值的突变，如果fast最后值都是【3，3，3】
//   // ,没有触发突变，那就最后手动赋值
//   low.next = fast
//   return head
// };

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null
  let fast = head
  while (fast.next) {
    if (fast.val == fast.next.val) {
      fast.next = fast.next.next
    }else{
      fast = fast.next
    }

  }
  return head
};
"[1,1,2,3,3]"
// @lc code=end

