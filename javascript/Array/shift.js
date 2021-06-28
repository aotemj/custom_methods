// 自定义 Array shift 方法
// 方法会删除首个数组元素，并把所有其他元素“位移”到更低的索引
const customShift = function () {
  const first = this[0]; const l = this.length
  for (let i = 0; i < l - 1; i++) {
    this[i] = this[i + 1]
  }
  this[l - 1] = null
  this.length = l - 1
  return first
}

Array.prototype.shift = customShift

const arr = [5, 1, 2, 3]
const res = arr.shift()
console.log(arr, res)
