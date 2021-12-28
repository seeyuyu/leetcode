/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
// 递增排序
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let fast = 0;
  // let len1 = , len2 = nums2.length
  let index1 = 0, index2 = 0;
  let sort = []
  while (index1 < m || index2 < n) {
    if (index1 == m) {
      sort.push(nums2[index2++])
    } else if (index2 === n) {
      sort.push(nums1[index1++])
    }else if (nums1[index1] < nums2[index2]) {
      sort.push(nums1[index1++])
    } else {
      sort.push(nums2[index2++])
    }
  }
  for(let i=0;i<m+n ; i++){
    nums1[i] = sort[i]
  }
  // nums1 = sort.slice(0)
  // console.log(sort.slice(0))
};
// @lc code=end

