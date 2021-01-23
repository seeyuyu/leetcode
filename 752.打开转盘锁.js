/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
function getUp(cur, i) {
  let value = cur.split('')
  let curr = value[i]
  if (curr == 9) {
    value[i] = 0
  } else {
    value[i] = +curr +1
  }
  return value.join("")
}
function getDown(cur, i) {
  let value = cur.split('')
  let curr = value[i]
  if (curr == 0) {
    value[i] = 9
  } else {
    value[i] = +curr -1
  }
  return value.join("")
}
var openLock = function (deadends, target) {
  let s = '0000'
  let visited = new Set()
  let queue = [s]
  visited.add(s)
  let deads = new Set(deadends)
  let step = 0
  while (queue.length) {
    // console.log('cur is', cur)
    let length = queue.length
    for (let j = 0; j < length; j++) {
      let cur = queue.shift()
      // visited.add(cur)
      if (deads.has(cur)) {
        continue
      }  
      if (target == cur) {
        // console.log('target is' ,target)
        return step
      }
      for (let i = 0; i < 4; i++) {
        let up = getUp(cur, i)
        // console.log('up is', up)
        // console.log('down is', down)
        if (!visited.has(up)) {
          visited.add(up)
          queue.push(up)
        }
        let down = getDown(cur, i)
        if (!visited.has(down)) {
          visited.add(down)
          queue.push(down)
        }
      }
    }
    step++;
  }
  return -1
};

var plusOne = (s, index) => {
  let arr = s.split('')
  let curr = arr[index]
  if (curr === '9') {
      arr[index] = '0'
  } else {
      arr[index] = +arr[index] +1
  }
  return arr.join('')
}
var minusOne = (s, index) => {
  let arr = s.split('')
  let curr = arr[index]
  if (curr === '0') {
      arr[index] = '9'
  } else {
      arr[index] = +arr[index] - 1
  }
  return arr.join('')
}
// var openLock = function(deadends, target) {
//   let q=[]
//   let step = 0
//   let visited = new Set()
//   q.push('0000')
//   visited.add('0000')
//   while (q.length) {
//       let len = q.length
//       for(let i=0; i< len; i++) {
//           let currNode = q.shift()
//           if (deadends.includes(currNode)) continue    
//           if (currNode === target){
//               // console.log(visited)
//               return step
//           }
//           for(let j=0; j<currNode.length; j++) {
//               let plusNode = plusOne(currNode, j)
//               if (!visited.has(plusNode)) {
//                   q.push(plusNode)
//                   visited.add(plusNode)
//               }
//               let minusNode = minusOne(currNode, j)
//               if (!visited.has(minusNode)) {
//                   q.push(minusNode)
//                   visited.add(minusNode)
//               }
//           }
//       }
//       step ++
//   }
//   return -1
// };

// "["8887","8889","8878","8898","8788","8988","7888","9888"] \n "8888""
// @lc code=end

