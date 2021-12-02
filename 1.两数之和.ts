/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let len = nums.length
  // let newNums = nums.sort((a,b)=>a-b)
  // console.log(newNums)
  let newMap = new Map()
  
  for (let i = 0; i < len; i++) {
    newMap.set(nums[i],i)
  }
  for (let i = 0; i < len; i++) {

    if(newMap.has(target-nums[i])){
      let value = newMap.get(target-nums[i])
      if(i !==value){
        return[i,value]
      }
    }
    // for(let j=i+1;j<len;j++){
      // if(newNums[i]===target-newNums[j])
      // return[i,j]
    //}
  }
  // return []
};

// @lc code=end

