// 手动实现 数组 slice 方法
// slice 不改变原来的数组，生成新的数组
function customSlice (start = 0, end = this.length - 1) {
  const res = []; const length = this.length
  if (start >= 0) {
    for (let i = 0; i < length; i++) {
      if (i <= end && i >= start) {
        res.push(this[i])
      }
    }
  } else {
    for (let i = length + start; i < length; i++) {
      if (this[i] !== undefined) {
        res.push(this[i])
      }
    }
  }

  return res
}

Array.prototype.slice = customSlice

const testArr = [1, 2, 3]

console.log(testArr.slice(6))
// console.log(testArr.slice(10));
// console.log(testArr.slice(0));
// console.log(testArr.slice(-5));
