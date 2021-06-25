// 自定义 数组 splice 方法
// splice 方法会改变原来的数组
// splice 方法可以用了删除、添加数组

function customSplice () {
  const l = this.length
  let [start, deleteCount, ...reminder] = arguments
  const beforeArr = []; const endArr = []
  for (let i = 0; i < start; i++) {
    beforeArr[i] = this[i]
  }
  const rl = reminder.length
  deleteCount = Number(deleteCount)

  if (deleteCount !== 0 && !isNaN(deleteCount)) {
    const dropLength = beforeArr.length + deleteCount
    for (let i = l - dropLength; i < l; i++) {
      if (i - dropLength >= 0) {
        endArr[i - dropLength] = this[i]
      }
    }
  } else {
    for (let i = start; i < l; i++) {
      endArr[i - start] = this[i]
    }
  }
  const el = endArr.length
  for (let i = 0; i < rl; i++) {
    this[i + start] = reminder[i]
  }
  for (let i = 0; i < el; i++) {
    this[this.length] = endArr[i]
  }
}

Array.prototype.splice = customSplice

const testArr = [1, 2, 3]
// 删除一个元素
testArr.splice(1, '-', 4, 5, 6)
console.log(testArr)

// 删除并添加多个元素
// testArr.splice(1, 1, 1, 2)
// console.log(testArr);
