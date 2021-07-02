// 自定义 Array find 方法
// find 方法返回通过测试（函数内判断）的数组的第一个元素的值
// 注意： 当数组中的元素在测试条件时返回 true 时， find() 返回符合条件的元素，之后的值不会再调用执行函数
//   如果没有符合条件的元素 则 返回 undefined
// find 对于空数组是不会执行的
// find 并没有改变数组的原始值
const { isFunction } = require('../utils')

function customFind () {
  const [callback] = arguments
  if (!isFunction(callback)) {
    throw TypeError(' The comparison function must be either a function')
  }
  const l = this.length
  for (let i = 0; i < l; i++) {
    const item = this[i]
    if (callback(item)) {
      return this[i]
    }
  }
  return undefined
}

Array.prototype.find = customFind

const testArr = [1, 2, 3]
const resArr = testArr.find((item, index) => {
  return item > 0
})
// const resArr = testArr.find(123) // TypeError
console.log(testArr)
console.log(resArr)
