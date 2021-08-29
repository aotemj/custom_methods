/**
 * 自定义 reduce, reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

 reduce() 可以作为一个高阶函数，用于函数的 compose。
 */
const { isFunction } = require('../utils')

function customReduce () {
  const l = this.length
  if (l === 0) {
    throw TypeError('Reduce of empty array with no initial value')
  }
  const [callback] = arguments
  if (!isFunction(callback)) {
    throw TypeError(' The comparison function must be either a function')
  }
  let res = this[0]
  for (let i = 1; i < l; i++) {
    res = callback(res, this[i], i, this)
  }
  return res
}

Array.prototype.reduce = customReduce

// const testArr = [1, 2, 3, 4]
const testArr = []
const number = testArr.reduce((prevValue, currentValue, currentIndex, arry) => {
  return prevValue / currentValue
})

console.log(number)
