
function test(promiseList, amount) {
  if (promiseList.length <= 0) {
    return
  }
  let current = 0
  while (promiseList.length >= 0) {
    if (current < amount) {
      let currentPromise = promiseList.shift()
      console.log('currentPromise is ', currentPromise)
      current++
      currentPromise().then(res => {
        console.log(res)
      }).finally(() => {
        console.log('current is', current)
        current--
      })
    }
  }
  console.log('current is', current)

}
function newPromise(time) {

  return ()=>new Promise((resolve, reject) => {
    console.log('newPromise is coming ')
    setTimeout(() => {
      resolve('newPromise is commed ')
    }, time)
  })
}
let promiseList = [
  newPromise(1000),
  newPromise(1000),
  newPromise(1000),
  newPromise(1000),
  newPromise(1000),
  newPromise(1000),
  newPromise(1000),
]

test(promiseList, 3)