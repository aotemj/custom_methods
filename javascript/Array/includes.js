/**
 * 自定义 includes
 * @param searchElement 搜索元素
 * @param fromIndex 起始搜索位置
 * @returns {boolean}
 */
function customIncludes () {
  const [searchElement, fromIndex] = arguments
  const l = this.length
  let res = false
  for (let i = fromIndex; i < l; i++) {
    const item = this[i]
    if (item === searchElement) {
      res = true
      break
    }
  }

  return res
}

Array.prototype.includes = customIncludes

const testArr = [1, 2, 3]
// const b = testArr.includes(1, 1)
const b = testArr.includes(1, 0)
console.log(b)
