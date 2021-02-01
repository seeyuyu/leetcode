/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// 基本问题是反转链表，升级为反转前n个字符，需要加一个指针指向n之后的后继节点
// 问题简化为反转前n个字符，需要排除m因素的干扰，
// 利用相对论，head为1，则m为m,
// head.next=1,m=m-1; head.next.next =1,m=m-2 知道m===1
// 这时候m===1，相当于处理反转前n个字符；
// 递归要相信递归额结果绝对正确，不要考虑递归内做了什么，不要在大脑中入栈，
// 考虑好base条件，什么时候应该跳出递归是必须考虑的

// var reverseBetween = function (head, m, n) {
//   let temp = null   //临时指针，保存n个之后的结果，最后续上
//   function reverseN(head, n) {
//     if (n === 1) {
//       temp = head.next
//       return head
//     }
//     let last = reverseN(head.next, n - 1)
//     head.next.next = head
//     head.next = temp
//     return last
//   }
//   if (m === 1) {
//     return reverseN(head, n)
//   } else {
//     // 此处相对转移m的值，直到m===1,反转好的片段，直接挂载到head.next...上面，返回即可
//     // 相当于剥离了前m个元素，处理好后，再接上结果为前m的后继指针
//     head.next = reverseBetween(head.next, m - 1, n - 1)
//     return head
//   }
// };

// 先递归在迭代 
// var reverseBetween = function (head, m, n) {
//   let finish = null;
//   // 反转从0到n的节点，当n===1,到底了，不用操作了
//   function reverseN(head, n) {
//     let cur = null, pre = head;
//     // console.log('head ,n ', head, n)
//     while (n > 0 && pre) {
//       if (n === 1) {
//         finish = pre.next
//         // console.log('finish is ', finish)
//       }
//       let temp = pre.next
//       pre.next = cur
//       cur = pre
//       pre = temp
//       n--
//     }
//     head.next = finish
//     return cur
//   }
//   if (m === 1) {
//     return reverseN(head, n)
//   } else {
//     // 此处相对转移m的值，直到m===1,反转好的片段，直接挂载到head.next...上面，返回即可
//     // 相当于剥离了前m个元素，处理好后，再接上结果为前m的后继指针
//     head.next = reverseBetween(head.next, m - 1, n - 1)
//     return head
//   }
// }

// 全迭代写法  未完待续 to do
// 复杂问题拆分为简单问题，一个函数只做一个事情
// 链表分为了3段，前驱段，反转段，后继段
// 前驱段为0,m-1;反转段为m,n;后继段为n+1,length
// var reverseBetween = function (head, m, n) {
//   if (m === n) return head
//   let start = head;
//   for (let i = 1; i < m - 1; i++) {
//     start = start.next
//     n--
//   }
//   // let finish = null
//   // let cur = null, pre = start;
//   console.log('start.next , n is ', start.next, n)
//   // start为前驱节点的end, 它要接入后面的值，
//   if (m === 1) {
//     head = reverse(start, n)
//     console.log('m===1', head)
//     return head
//   } else {
//     // 这里之所以减一，是因为相对于start是n,那么相当于start.next,则是n-1
//     start.next = reverse(start.next, n - 1)
//     console.log('head is', head)
//     return head
//   }
// }
// /**
//  * 当前节点，反转前几位数字
//  * @param {*} head 
//  * @param {*} n 
//  */
// function reverse(head, n) {
//   let tail = null, cur = null, pre = head
//   while (n > 0 && pre) {
//     if (n === 1) {
//       tail = pre.next
//       console.log('tail is ', tail)
//     }
//     let temp = pre.next
//     pre.next = cur
//     cur = pre
//     pre = temp
//     n--
//   }
//   console.log('tail, cur, pre, head is ,', tail, cur, pre, head)
//   head.next = tail
//   return cur
// }

// 此处的前驱情况有两种，一种是有前驱，一种没前驱，如果用m===1来判断，有两种情况，如果给其
// 加一个虚拟节点，那么就成了一种情况，肯定都有前驱，至少是一个空节点，这样处理会少一种情况，便于调试
var reverseBetween = function (head, m, n) {
  if (m === n) return head
  let start = new ListNode(-1)
  start.next = head;
  let node = start
  for (let i = 1; i < m; i++) {
    node = node.next
    n--
  }
  console.log('start.next , n is ', node.next, n)
  node.next = reverse(node.next, n)
  return start.next
  // start为前驱节点的end, 它要接入后面的值，
  // if (m === 1) {
  //   head = reverse(start, n)
  //   console.log('m===1', head)
  //   return head
  // } else {
  //   // 这里之所以减一，是因为相对于start是n,那么相当于start.next,则是n-1
  //   start.next = reverse(start.next, n - 1)
  //   console.log('head is', head)
  //   return head
  // }
}
/**
 * 当前节点，反转前几位数字
 * @param {*} head 
 * @param {*} n 
 */
function reverse(head, n) {
  let tail = null, cur = null, pre = head
  while (n > 0 && pre) {
    if (n === 1) {
      tail = pre.next
      console.log('tail is ', tail)
    }
    let temp = pre.next
    pre.next = cur
    cur = pre
    pre = temp
    n--
  }
  console.log('tail, cur, pre, head is ,', tail, cur, pre, head)
  head.next = tail
  return cur
}

// @lc code=end

// "[3,5] \n 1 \n2"
