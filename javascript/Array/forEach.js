// 自定义 forEach 方法
// 遍历数组,无return  即使有return，也不会返回任何值，并且会影响原来的数组

function customForEach () {
  const [callback] = arguments
  const l = this.length
  if (!(callback instanceof Function)) {
    throw TypeError(' The comparison function must be either a function')
  }

  for (let i = 0; i < l; i++) {
    callback(this[i], i, this)
  }
}

Array.prototype.forEach = customForEach

const testArr = [1, 2, 3]
testArr.forEach((item, index, testArr) => {
  console.log(item, index, testArr)
  item = item + 1
  return false
})
console.log(testArr)
// testArr.forEach(1)
