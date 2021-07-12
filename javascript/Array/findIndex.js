const { isFunction } = require('../utils')

function customFindIndex () {
  let index = -1
  const l = this.length; const [callback] = arguments
  if (!isFunction(callback)) {
    throw TypeError(' The comparison function must be either a function')
  }
  for (let i = 0; i < l; i++) {
    const item = this[i]
    if (callback(item)) {
      index = i
      break
    }
  }
  return index
}

Array.prototype.findIndex = customFindIndex

const testArr = [1, 2, 3]
const res = testArr.findIndex((item, index) => item > 1)
console.log(res)
