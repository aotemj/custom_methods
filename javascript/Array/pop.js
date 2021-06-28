// 自定义 Array pop 方法
// pop： 删除数组最后一位元素并返回 当前删除元素
function customPop () {
  const last = this[this.length - 1]
  this[this.length - 1] = null
  this.length = this.length - 1
  return last
}

Array.prototype.pop = customPop

const testArr = [1, 2, 3, 5]

console.log(testArr.pop())
console.log(testArr)
