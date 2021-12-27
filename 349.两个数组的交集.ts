/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start

// Your runtime beats 87.04 % of typescript submissions
// Your memory usage beats 11.11 % of typescript submissions (40.1 MB)
function intersection(nums1: number[], nums2: number[]): number[] {
  let arr1 = nums1.sort((a, b) => a - b), len1 = arr1.length
  let arr2 = nums2.sort((a, b) => a - b), len2 = arr2.length
  let index1 = 0, index2 = 0;
  let result = new Set()
  while (index1 < len1 && index2 < len2) {
    if(nums1[index1] ===nums2[index2]){
      result.add(nums1[index1])
      index1++
      index2++
    }else if(nums1[index1] > nums2[index2]){
      index2++
    }else{
      index1++
    }
  }
  let res  =  Array.from(result) as number[] 
  return res
};
// @lc code=end

